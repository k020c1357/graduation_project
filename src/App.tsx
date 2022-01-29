import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LoadingScreen } from './components/LoadingScreen';

const HomePage = React.lazy(() => import('./pages/home'));

export default function App() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </React.Suspense>
  );
}
