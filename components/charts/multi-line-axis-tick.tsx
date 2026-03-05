/**
 * Custom XAxis tick renderer that wraps long programme/discipline names
 * into multiple horizontal lines instead of using diagonal text.
 *
 * Splits on spaces, limits each line to ~14 characters, max 4 lines.
 */
export function MultiLineAxisTick({
  x,
  y,
  payload,
}: {
  x?: number;
  y?: number;
  payload?: { value: string };
}) {
  if (!payload) return null;

  const MAX_LINE_WIDTH = 14;
  const MAX_LINES = 4;
  const words = payload.value.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (current && (current + ' ' + word).length > MAX_LINE_WIDTH) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + ' ' + word : word;
    }
  }
  if (current) lines.push(current);

  // Truncate if too many lines
  const displayLines = lines.slice(0, MAX_LINES);
  if (lines.length > MAX_LINES) {
    displayLines[MAX_LINES - 1] =
      displayLines[MAX_LINES - 1].slice(0, -1) + '…';
  }

  return (
    <g transform={`translate(${x},${y})`}>
      {displayLines.map((line, i) => (
        <text
          key={i}
          x={0}
          y={0}
          dy={16 + i * 14}
          textAnchor="middle"
          fill="#666"
          fontSize={11}
        >
          {line}
        </text>
      ))}
    </g>
  );
}
