import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { C1Template } from '@/components/templates/signup';

const C1: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.c1}>
      <C1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default C1;
