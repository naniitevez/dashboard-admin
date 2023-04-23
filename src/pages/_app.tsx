import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
