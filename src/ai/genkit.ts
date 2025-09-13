'use server';

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { dev } from '$app/environment';

export const ai = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: dev ? 'debug' : 'info',
  enableTracing: true,
});
