import Link from 'next/link';
import { A3 } from '@/config/paths';

export const A2Template = () => {
  return (
    <main>
      <h1>Camping Site List Page</h1>
      <Link href={A3}>
        <a href="replace">Go A3 Page</a>
      </Link>
    </main>
  );
};
