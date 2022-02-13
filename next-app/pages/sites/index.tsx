import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { A2Template } from '@/components/templates/sites';

const A2Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a2}>
      <A2Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A2Page;
