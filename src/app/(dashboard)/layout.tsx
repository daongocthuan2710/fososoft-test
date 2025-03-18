// "use client";

// Libraries
import React from "react";

// Components
import { Layout } from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      header={{
        title: "headerTitle",
      }}
    >
      {children}
    </Layout>
  );
}
