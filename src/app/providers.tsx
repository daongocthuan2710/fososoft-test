"use client";

// Libraries
import React from "react";
import { App } from "antd";
import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";

// Utils
import { SEO } from "@/utils";

interface ProvidersProps {
  children: React.ReactNode;
}

const helmetContext = {};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider context={helmetContext}>
      <SEO title="Fososoft" description="Fososoft description" />
      <ConfigProvider>
        <App>{children}</App>
      </ConfigProvider>
    </HelmetProvider>
  );
};
