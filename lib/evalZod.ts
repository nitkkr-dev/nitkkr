import * as z from 'zod';
import { jsonSchemaToZod } from 'json-schema-to-zod';
export default function createZString(sk: {
  type: string;
  properties: { [key: string]: object };
  required: string[];
  additionalProperties: boolean;
}) {
  const zodSchema = `return ${jsonSchemaToZod(sk)};`;
  const hi = new Function('z', zodSchema);
  return hi(z);
}
