import Link from 'next/link';
import { A2, C1, C2 } from '@/config/paths';

export const IndexTemplate = () => {
  return (
    <main>
      <h1>Open Camp</h1>
      <div>
        <Link href={A2}>
          <a href="replace">Go A2 Page</a>
        </Link>
      </div>
      <div>
        <Link href={C1}>
          <a href="replace">Go C1 Page</a>
        </Link>
      </div>
      <div>
        <Link href={C2}>
          <a href="replace">Go C2 Page</a>
        </Link>
      </div>
    </main>
  );
};
