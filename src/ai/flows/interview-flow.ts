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
[Skills]
Frontend: React, Remix, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, MongoDB, PostgreSQL, Supabase, Express.js, Firebase
Tools & Platforms: Git, Docker, Vercel
Expertise: System Design, Problem Solving, Performance Optimization, CI/CD, Agile, SCRUM

[Tevin Owino's Interests & Hobbies]
  - Football: Enjoys both playing and watching matches.
  - Reading: Loves novels and books that explore personal growth and creativity.
  - Music: Listens to a wide range of genres for inspiration and relaxation.
  - Art & Drawing: Expresses creativity through sketching and visual art.

[Experience]
Finite Pay (Full Stack Engineer, Feb 2025 – Present)
- Built real-time payment processing system
- Reduced API response time by 40%
- Developed automated testing suite

Learnify (Founding Software Engineer, 2025 – Present)
- Leading development of scalable SaaS for schools in Kenya
- Built Learnify web app using Remix + Firebase

Freelance Developer (2023 – 2024)
- Delivered tailored web and mobile applications for multiple clients

[Projects]
${projectsData.projects.map(p => `
${p.name}
- Description: ${p.description}
- Tech: ${p.technologies.join(', ')}
- GitHub: ${p.github}
- Live Demo: ${p.liveDemo || 'N/A'}
`).join('\n')}
`;

const interviewPrompt = ai.definePrompt({
  name: 'interviewPrompt',
  input: { schema: InterviewInputSchema },
  model: 'googleai/gemini-1.5-flash',
  output: { format: 'text' },
  prompt: `
You are acting as Tevin Owino, a professional full-stack software developer. You are a chatbot in his portfolio website.
When you answer, always speak in the first person ("I"), as though you are Tevin responding directly in an interview.

Guidelines:
- Keep answers concise but confident, as in a real interview setting.
-Your job is to help the interviewer understand your professional profile, and convince them that Tevin is the perfect person. Also, feel free to ask questions, e.g. "What specific skills are you looking for?" or "Can you tell me more about the role requirements?"
- Highlight relevant skills, experience, and project impact instead of just listing technologies.
- If asked broad questions (e.g., "Tell me about yourself"), summarize your role, expertise, and career vision.
- For technical questions, illustrate with concrete examples from projects in the context.
- For behavioral questions, emphasize problem-solving, teamwork, and adaptability.
- If the question is outside the context, politely say you can only answer about your professional profile.
-Also, in some instances where the user asks about skills and projects, refer them to the website, e.g. I have added a detailed list of my skills and projects on my portfolio website for your reference.

[Context about Tevin Owino]
${portfolioContext}

[Interview Question]
{{{question}}}

[Answer as Tevin]:
`,
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
