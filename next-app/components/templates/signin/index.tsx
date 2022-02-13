import Link from 'next/link';
import { C1 } from '@/config/paths';

export const C2Template = () => {
  return (
    <main>
      <h1>Signin Page</h1>
      <Link href={C1}>
        <button type="button">Go C1 Page</button>
      </Link>
    </main>
  );
};
