'use server';
/**
 * @fileOverview An AI agent for conducting mini-interviews about Tevin Owino.
 *
 * - askAI - A function that handles interview questions.
 * - InterviewInput - The input type for the askAI function.
 * - InterviewOutput - The return type for the askAI function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import projectsData from '@/app/data.json';

const InterviewInputSchema = z.object({
  question: z.string().describe('The question being asked by the interviewer.'),
});
export type InterviewInput = z.infer<typeof InterviewInputSchema>;

export type InterviewOutput = string;

export async function askAI(input: InterviewInput): Promise<InterviewOutput> {
  return interviewFlow(input);
}

const portfolioContext = `
  Tevin Owino's Skills & Expertise:
  - Frontend Development: React, Remix, Next.js, TypeScript, Tailwind CSS
  - Backend Development: Node.js, MongoDB, PostgreSQL, Supabase, Express.js, Firebase
  - Tools & Platforms: Git, Docker, Vercel
  - Areas of Expertise: System Design, Problem Solving, Performance Optimization, CI/CD, Agile, SCRUM

  Tevin Owino's Professional Experience:
  - Full Stack Software Engineer at Finite Pay (February 2025 – Present): Building and maintaining fintech solutions. Contributed to building the first version, implemented a real-time payment processing system, reduced API response time by 40%, and developed an automated testing suite.
  - Founding Software Engineer at Learnify (2025 – Present): Leading the development of scalable web platforms for schools in Kenya. Designed and developed the Learnify web application using Remix and Firebase.
  - Full Stack Developer (Freelance, 2023 – 2024): Delivered tailored web and mobile applications for various clients.

  Tevin Owino's Projects:
  ${projectsData.projects.map(p => `
    - Project: ${p.name}
      - Description: ${p.description}
      - Technologies: ${p.technologies.join(', ')}
      - GitHub: ${p.github}
      - Live Demo: ${p.liveDemo || 'Not available'}
  `).join('')}
`;

const interviewPrompt = ai.definePrompt({
  name: 'interviewPrompt',
  input: { schema: InterviewInputSchema },
  output: { format: 'text' },
  prompt: `You are an expert AI assistant representing Tevin Owino, a skilled full-stack developer. Your name is 'Tevin's AI'. 
  Your goal is to answer questions from potential recruiters or collaborators based on the provided context about Tevin's skills, experience, and projects.
  Be friendly, professional, and concise in your answers. Always answer from Tevin's perspective as his assistant. 
  If a question is outside the scope of the provided context, politely state that you can only answer questions related to Tevin Owino's professional profile.

  Context about Tevin Owino:
  ${portfolioContext}

  Interviewer's Question: {{{question}}}
  
  Your Answer:`,
});

const interviewFlow = ai.defineFlow(
  {
    name: 'interviewFlow',
    inputSchema: InterviewInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await interviewPrompt(input);
    return output!;
  }
);
