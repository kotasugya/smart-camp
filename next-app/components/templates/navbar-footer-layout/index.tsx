import React from 'react';

import { Meta, MetaProps } from '@/components/atoms/meta';
import { Navbar } from '@/components/organisms/navbar';
import { Footer } from '@/components/organisms/footer';

export interface LayoutProps {
  children: React.ReactChild;
  meta: MetaProps;
}

export const NavbarFooterLayoutTemplate = (props: LayoutProps) => {
  const { children, meta } = props;
  return (
    <div>
      <Meta {...meta} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
