import axios from 'axios';
import useSWR from 'swr';
import { useAppSelector } from '@/store';
import { Layout } from '@/components/templates/layout';

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
    <Layout title={title} description={description}>
      <main>
        <h1>Welcome to Dummy Page!</h1>
        <h3>{name}</h3>
      </main>
    </Layout>
  );
};

export default Useswr;
