import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { createTransport, AnthropicChatAdapter } from '@smithery/sdk';
import Anthropic from '@anthropic-ai/sdk';
import WebSocket from 'ws';

global.WebSocket = WebSocket;

import { ChatForm } from '../components/chat-form';

export const Chat = () => {
  const sendMessage = async (message: string) => {
    'use server';

    try {
      const transport = createTransport('https://server.smithery.ai/neon', {
        neonApiKey: process.env.NEON_API_KEY,
      });

      const client = new Client({
        name: 'Test client',
        version: '1.0.0',
      });

      console.log('Connecting to transport...');
      await client.connect(transport);

      const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });

      const anthropicAdapter = new AnthropicChatAdapter(client);

      console.log('Calling Anthropic API...');
      const anthropicResponse = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 8192,
        messages: [{ role: 'user', content: message }],
        tools: await anthropicAdapter.listTools(),
      });

      const anthropicToolMessages = await anthropicAdapter.callTool(anthropicResponse);

      console.log('Anthropic response ok');

      return anthropicToolMessages?.[0]?.content?.[0]?.content?.[0]?.text;
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return <ChatForm sendMessage={sendMessage} />;
};
