import Link from 'next/link';
import { C2 } from '@/config/paths';

export const C1Template = () => {
  return (
    <main>
      <h1>Signup Page</h1>
      <Link href={C2}>
        <button type="button">Go C2 Page</button>
      </Link>
    </main>
  );
};
