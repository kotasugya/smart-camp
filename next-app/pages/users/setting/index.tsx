import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { B1Template } from '@/components/templates/users/setting';

const B1Page: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.b1}>
      <B1Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default B1Page;
