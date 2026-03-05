// Mapping of academic sessions to their PDF files
// Key format: "YYYY-YY" (e.g., "2024-25")
// This allows for multiple PDFs per session

import { getS3Url } from '~/server/s3';

const pdfBase = `${getS3Url()}/training-and-placement/placement-stats/`;

export const placementStatsPdfMap: Record<
  string,
  { name: string; url: string }[]
> = {
  '2024-25': [
    {
      name: 'Academic Session 2024-25',
      url: `${pdfBase}Academic-Session-2024-25.pdf`,
    },
  ],
  '2023-24': [
    {
      name: 'Academic Session 2023-24',
      url: `${pdfBase}Academic-Session-2023-24.pdf`,
    },
  ],
  '2022-23': [
    {
      name: 'Academic Session 2022-23',
      url: `${pdfBase}Academic-Session-2022-23.pdf`,
    },
  ],
  '2021-22': [
    {
      name: 'Academic Session 2021-22',
      url: `${pdfBase}Academic-Session-2021-22.pdf`,
    },
  ],
  '2020-21': [
    {
      name: 'Academic Session 2020-21 FN',
      url: `${pdfBase}Academic-Session-2020-21-FN.pdf`,
    },
  ],
  '2019-20': [
    {
      name: 'Academic Session 2019-20 FN',
      url: `${pdfBase}Academic-Session-2019-20-FN.pdf`,
    },
  ],
  '2018-19': [
    {
      name: 'Academic Session 2018-19',
      url: `${pdfBase}Academic-Session-2018-19.pdf`,
    },
    {
      name: 'Academic Session 2018-19 FN',
      url: `${pdfBase}Academic-Session-2018-19-FN.pdf`,
    },
  ],
  '2017-18': [
    {
      name: 'Academic Session 2017-18',
      url: `${pdfBase}Academic-Session-2017-18.pdf`,
    },
    {
      name: 'Academic Session 2017-18 FN',
      url: `${pdfBase}Academic-Session-2017-18-FN.pdf`,
    },
  ],
  '2016-17': [
    {
      name: 'Academic Session 2016-17',
      url: `${pdfBase}Academic-Session-2016-17.pdf`,
    },
  ],
};

// Get unique academic sessions sorted in descending order
export function getUniquePlacementSessions(): string[] {
  return Object.keys(placementStatsPdfMap).sort().reverse();
}

// Get PDFs for a specific academic session
export function getPlacementStatsPdfs(
  session: string
): { name: string; url: string }[] | null {
  return placementStatsPdfMap[session] ?? null;
}
