import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { LoadingScreenComponent } from "./components/LoadingScreen";

const HomePageComponet = React.lazy(() => import("./container/Home"));

export default function App() {
  return (
    <React.Suspense fallback={<LoadingScreenComponent />}>
      <ChakraProvider>
        <HomePageComponet />
      </ChakraProvider>
    </React.Suspense>
  );
}
