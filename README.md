# Test Neon MCP Server in React Server Components

This repository uses [waku](https://waku.gg/) and React Server Components to demonstrate how to use Neon's MCP Server with the Anthropic API and a custom chat interface.

You can read more about this experiment on my blog: [How to use Neon's MCP Server with React Server Components](https://www.paulie.dev/posts/2025/03/how-to-use-neons-mcp-server-with-react-server-components/)

## Getting Started

This repo requires a Neon API key and an Anthropic API key. Rename `.env.example` to `.env` and update with your API keys

### Install Dependencies

```shell
npm install
```

### Run Development Server

```shell
npm run dev
```

## 💬 Chat

There are two components required to test Neon's MCP server with the Anthropic API. They are detailed below.

### Chat Component (server only)

The `<Chat />` Component located in `src/components/chat.tsx` is responsible for handling the server-side requests.

### ChatForm Component (client only)

The `<ChatForm />` Component located in `src/components/chat-form.txt` is responsible for handling the `textarea` input, and sending the message to the server.

## Helpful Links

- [Neon MCP Server (Docs)](https://neon.tech/guides/neon-mcp-server)
- [Neon MCP Server (GitHub)](https://github.com/neondatabase-labs/mcp-server-neon)
- [Smithery - Neon Database (Quick Start)](https://smithery.ai/server/neon/api)
- [Smithery Typescript SDK (GitHub)](https://github.com/smithery-ai/typescript-sdk)
