// fetchers.ts
import { Readable } from 'stream';

import csvParser from 'csv-parser';

interface SourceConfig {
  category: string;
  url: string;
  skipRows?: number;
  sheetName?: string;
}

function normalizeHeader(header: string): string {
  return header.trim();
}

export async function fetchAndParse(
  source: SourceConfig
): Promise<Record<string, string>[]> {
  const response = await fetch(source.url);
  if (!response.ok) throw new Error(`Failed to fetch ${source.url}`);

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const contentType = (
    response.headers.get('content-type') ?? ''
  ).toLowerCase();
  const urlLower = source.url.toLowerCase();

  if (
    !contentType.includes('text/csv') &&
    !urlLower.includes('output=csv') &&
    !urlLower.endsWith('.csv')
  ) {
    throw new Error(`Unsupported file type for URL: ${source.url}`);
  }

  // Convert buffer to text and split lines
  const text = buffer.toString('utf8');
  const lines = text.split(/\r\n|\n/);

  // Remove initial skipRows (default 0)
  const skip = Math.max(0, source.skipRows ?? 0);
  const remainingLines = lines.slice(skip);

  // Remove leading/trailing blank lines that could confuse csv-parser
  while (remainingLines.length && remainingLines[0].trim() === '')
    remainingLines.shift();
  while (
    remainingLines.length &&
    remainingLines[remainingLines.length - 1].trim() === ''
  )
    remainingLines.pop();

  const cleanedCsv = remainingLines.join('\n');

  return new Promise((resolve, reject) => {
    const results: Record<string, string>[] = [];
    const s = new Readable();
    s.push(cleanedCsv);
    s.push(null);

    const parser: NodeJS.ReadWriteStream = csvParser();

    s.pipe(parser)
      .on('data', (row: Record<string, string>) => {
        const normalizedRow: Record<string, string> = {};
        Object.keys(row).forEach((key) => {
          // Trim both key and value
          normalizedRow[normalizeHeader(key)] =
            row[key]?.replace(/\s+/g, ' ').trim() ?? '';
        });
        results.push(normalizedRow);
      })
      .on('end', () => resolve(results))
      .on('error', (err: Error) => reject(err));
  });
}
