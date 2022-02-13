import type { NextPage } from 'next';

// import meta info
import { metaConfig } from '@/config/meta';

// import components
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';
import { B2Template } from '@/components/templates/users/show';

const B2: NextPage = () => {
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.b2}>
      <B2Template />
    </NavbarFooterLayoutTemplate>
  );
};

export default B2;
