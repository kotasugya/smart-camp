import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
