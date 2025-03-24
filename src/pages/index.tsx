import { Chat } from '../components/chat';

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <title>{data.title}</title>
      <Chat />
    </>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
