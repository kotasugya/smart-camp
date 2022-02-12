import React from 'react';
import { useRouter } from 'next/router';

// import store
import { useAppSelector } from '@/store';

import { clear, update } from '@/usecases/dummy';

export interface DummyTemplateProps {
  developerNames: string[];
}

export const DummyTemplate = (props: DummyTemplateProps) => {
  const { developerNames } = props;

  const router = useRouter();
  const { name } = useAppSelector((state) => state['ui/dummy']);

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
        <h1>Hey! This is Dummy Template</h1>
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
