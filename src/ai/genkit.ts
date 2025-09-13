import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI(
      {
        apiVersion: 'v1beta',
        apiKey: process.env.GOOGLE_API_KEY || '',
      }
    ),
  ],
  logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  enableTracing: true,
});
