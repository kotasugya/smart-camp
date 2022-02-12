import React from 'react';

import { Meta, MetaProps } from '@/components/atoms/meta';
import { Navbar } from '@/components/molecules/navbar';
import { Footer } from '@/components/organisms/footer';

import styles from '@/components/templates/navbar-footer-layout/index.module.css';

export interface LayoutProps {
  children: React.ReactChild;
  meta: MetaProps;
}

export const NavbarFooterLayoutTemplate = (props: LayoutProps) => {
  const { children, meta } = props;
  return (
    <div className={styles.container}>
      <Meta {...meta} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
