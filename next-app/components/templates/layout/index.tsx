import React from 'react';

import { Meta } from '@/components/atoms/meta';
import { Navbar } from '@/components/molecules/navbar';
import { Footer } from '@/components/organisms/footer';

import styles from '@/components/templates/layout/layout.module.css';

export interface LayoutProps {
  children: React.ReactChild;
  title: string;
  description: string;
}

export const Layout = (props: LayoutProps) => {
  const { children, title, description } = props;
  return (
    <div className={styles.container}>
      <Meta title={title} description={description} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
