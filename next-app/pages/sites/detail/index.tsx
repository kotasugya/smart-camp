import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { A3Template } from '@/components/templates/sites/detail';

const A3: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a3}>
      <A3Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default A3;
