import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
    server: {
        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),
        NEXTAUTH_SECRET: z.string(),
      },
      experimental__runtimeEnv: process.env,
});