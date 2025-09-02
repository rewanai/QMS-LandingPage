// In src/app/api/chat/route.ts
import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

// This is a placeholder model configuration.
// Replace with your actual model provider and credentials.
// For example, if using the Vercel AI SDK, you can install a provider:
// npm install @ai-sdk/openai
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    messages,
  });

  return result.to
}