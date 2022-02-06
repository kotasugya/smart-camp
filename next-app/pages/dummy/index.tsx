// import react or next
import { useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

// import store
import { useAppSelector } from '@/store';
import { init, clear, update } from '@/usecases/dummy';

// import components
import { Layout } from '@/components/templates/layout';
import { Template } from '@/components/templates/template';

export const getStaticProps: GetStaticProps = async () => {
  const developerNames = ['asamin', 'sugya'];
  return {
    props: {
      developerNames,
    },
  };
};

export interface Props {
  developerNames: string[];
}

const DummyPage: NextPage<Props> = (props: Props) => {
  const { developerNames } = props;
  const title = 'Dummy Page - Open Camp';
  const description = 'dummy page of open camp';

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

  useEffect(() => {
    async function handleInit() {
      await init();
    }
    handleInit();
  }, []);

  return (
    <Layout title={title} description={description}>
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
    </Layout>
  );
};

export default DummyPage;
