import Link from 'next/link';
import { B1 } from '@/config/paths';

export const B2Template = () => {
  return (
    <main>
      <h1>User Profile Page</h1>
      <Link href={B1}>
        <a href="replace">Go B1 Page</a>
      </Link>
    </main>
  );
};
