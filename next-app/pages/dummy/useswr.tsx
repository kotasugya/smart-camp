import axios from 'axios';
import useSWR from 'swr';

// import meta info
import { metaConfig } from '@/config/meta';

import { useAppSelector } from '@/store';
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';

const Useswr = () => {
  const { name } = useAppSelector((state) => state['ui/dummy']);
  const fetcher = (url: string): Promise<any> => axios(url).then((res) => res.data);
  const url = '/api/dummy';
  const { data, error } = useSWR(url, fetcher);
  if (!error) {
    console.log(data);
  }
  return (
    <NavbarFooterLayoutTemplate meta={metaConfig.a1}>
      <main>
        <h1>Welcome to Dummy Page!</h1>
        <h3>{name}</h3>
      </main>
    </NavbarFooterLayoutTemplate>
  );
};

export default Useswr;
