import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { A1Template } from '@/components/templates/index';

const A1Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a1}>
      <A1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A1Page;
