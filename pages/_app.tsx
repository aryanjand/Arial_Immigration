import { AppProps } from 'next/app';
import '../styles/index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
