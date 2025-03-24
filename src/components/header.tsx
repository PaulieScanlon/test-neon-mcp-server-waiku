import { Link } from 'waku';

export const Header = () => {
  return (
    <header className='flex items-center gap-4 p-4'>
      <h2 className='text-lg font-bold tracking-tight'>
        <Link to='/'>Waku starter + Neon MCP Server</Link>
      </h2>
    </header>
  );
};
