import Link from 'next/link';
import { A2, C1, C2 } from '@/config/paths';

export const A1Template = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center">
        <img
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          className="max-w-full h-auto"
          alt="..."
        />
      </div>
      <div>
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
      </div>
    </main>
  );
};
