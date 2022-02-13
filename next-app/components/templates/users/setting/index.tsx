import Link from 'next/link';
import { B2 } from '@/config/paths';

export const B1Template = () => {
  return (
    <main>
      <h1>User Setting Page</h1>
      <Link href={B2}>
        <a href="replace">Go B2 Page</a>
      </Link>
    </main>
  );
};
