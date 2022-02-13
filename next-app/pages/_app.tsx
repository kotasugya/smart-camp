import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';

import '@/styles/globals.css';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
