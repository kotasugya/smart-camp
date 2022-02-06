import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/store';
import { init, clear, update } from '@/usecases/dummy';

import { Template } from '@/components/templates/template';

const DummyPage: NextPage = () => {
  const router = useRouter();
  const { name } = useAppSelector((state) => state['ui/dummy']);

  const handleUpdate = async () => {
    await update('updatedDummyState');
  };
  const handleClearButton = async () => {
    await clear();
  };
  const goBackPage = () => {
    router.back();
  };

  useEffect(() => {
    async function handleInit() {
      await init();
    }
    handleInit();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Template />
        <h1>Welcome to Dummy Page!</h1>
        <h3>{name}</h3>
        <button
          type="button"
          onClick={async () => {
            handleUpdate();
          }}
        >
          init state name
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

      <footer>Powered by asamin</footer>
    </div>
  );
};

export default DummyPage;
