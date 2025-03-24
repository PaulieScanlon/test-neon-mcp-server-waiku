'use client';

import { useState } from 'react';

interface Props {
  sendMessage: (message: string) => Promise<string>;
}

export const ChatForm: React.FC<Props> = ({ sendMessage }) => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSend');

    setResponse('');
    setStatus('sending');
    if (!message.trim()) return;
    const reply = await sendMessage(message);

    setResponse(reply);
    setMessage('');
    setStatus('complete');
  };

  return (
    <div className='flex-grow flex flex-col gap-8 justify-between'>
      <div className='flex-grow border border-gray-300 bg-gray-100 rounded p-4'>
        {response && (
          <pre className='text-gray-700 overflow-auto' style={{ maxHeight: 'calc(100vh - 420px)' }}>
            {response}
          </pre>
        )}
      </div>

      <form onSubmit={handleSend} className='flex flex-col gap-4 mt-auto'>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          className='block border border-gray-300 rounded p-4'
          placeholder='Type your message...'
        />
        <button
          type='submit'
          className='flex justify-center gap-2 px-4 py-2 bg-gray-500 text-white rounded self-end min-w-24'
        >
          {status === 'sending' ? (
            <svg
              className='size-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            <span>Send</span>
          )}
        </button>
      </form>
    </div>
  );
};
