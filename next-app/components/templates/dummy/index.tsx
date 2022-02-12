import React from 'react';
import { useRouter } from 'next/router';

// import page model
import { A1 } from '@/domain/ui/a-1';

// import usecases
import { clear, update } from '@/usecases/dummy';

export const DummyTemplate = (props: A1) => {
  const { a1, name, developerNames } = props;

  const router = useRouter();

  const handleUpdate = async () => {
    await update(`DummyState updated by ${developerNames.join('&')}`);
  };
  const handleClearButton = async () => {
    await clear();
  };
  const goBackPage = () => {
    router.back();
  };

  return (
    <div>
      <main>
        <h1>{a1.pageTitle}</h1>
        <h2>{`Developer Name: ${developerNames.join('&')}`}</h2>
        <h3>{name}</h3>
        <button
          type="button"
          onClick={async () => {
            handleUpdate();
          }}
        >
          update state name
        </button>
        <button
          type="button"
          onClick={async () => {
            handleClearButton();
          }}
        >
          clear state name
        </button>
        <button type="button" onClick={goBackPage}>
          back home
        </button>
      </main>
    </div>
  );
};
