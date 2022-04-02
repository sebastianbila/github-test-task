import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import RootNavigator from "@/common/navigation";

type AppProps = {};

function App(_: AppProps) {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <RecoilNexus />
        <RootNavigator />
      </SafeAreaProvider>
    </RecoilRoot>
  );
}

export default App;
