// import react or next
import { useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { init } from '@/usecases/dummy';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { DummyTemplate } from '@/components/templates/dummy';

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

  useEffect(() => {
    async function handleInit() {
      await init();
    }
    handleInit();
  }, []);

  return (
    <NavbarFooterLayoutTemplate title={title} description={description}>
      <DummyTemplate developerNames={developerNames} />
    </NavbarFooterLayoutTemplate>
  );
};

export default DummyPage;
