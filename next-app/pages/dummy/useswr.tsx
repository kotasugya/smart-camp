import axios from 'axios';
import useSWR from 'swr';
import { useAppSelector } from '@/store';
import { NavbarFooterLayoutTemplate } from '@/components/templates/navbar-footer-layout';

const Useswr = () => {
  const title = 'Dummy Page - Open Camp';
  const description = 'dummy page of open camp';
  const { name } = useAppSelector((state) => state['ui/dummy']);
  const fetcher = (url: string): Promise<any> => axios(url).then((res) => res.data);
  const url = '/api/dummy';
  const { data, error } = useSWR(url, fetcher);
  if (!error) {
    console.log(data);
  }
  return (
    <NavbarFooterLayoutTemplate title={title} description={description}>
      <main>
        <h1>Welcome to Dummy Page!</h1>
        <h3>{name}</h3>
      </main>
    </NavbarFooterLayoutTemplate>
  );
};

export default Useswr;
