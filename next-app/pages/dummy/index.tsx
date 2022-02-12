// import react or next
import { useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';

// import store
import { useAppSelector } from '@/store';

// import usecases
import { init } from '@/usecases/dummy';

// import page model
import { A1 } from '@/domain/ui/a-1';
import { MetaProps } from '@/components/atoms/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { DummyTemplate } from '@/components/templates/dummy';

// Next.js will pre-render this page at build time using the props returned by getStaticProps.
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
  const { name } = useAppSelector((state) => state['ui/dummy']);

  const meta: MetaProps = {
    title: 'Dummy Page - Open Camp',
    description: 'dummy page of open camp',
  };

  const a1: A1 = {
    a1: {
      pageTitle: 'Dummy Page',
    },
    name,
    developerNames,
  };

  useEffect(() => {
    async function handleInit() {
      await init();
    }
    handleInit();
  }, []);

  return (
    <NavbarFooterLayoutTemplate meta={meta}>
      <DummyTemplate {...a1} />
    </NavbarFooterLayoutTemplate>
  );
};

export default DummyPage;
