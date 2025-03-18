"use-client";

// Libraries
import React from "react";
import { Flex } from "antd";

// Components
import { Header } from "./components";

// Styled
import { LayoutWrapper } from "./styled";

interface LayoutProps {
  children?: React.ReactNode;
  header?: {
    title?: string;
  };
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, header } = props;
  const { title } = header || {};

  return (
    <LayoutWrapper className="!min-h-screen layout-container" hasSider>
      <Flex vertical className="h-screen w-screen">
        <Header title={title} className="shrink-0 !pl-0" />
        <Flex className="flex-1 overflow-hidden">{children}</Flex>
      </Flex>
    </LayoutWrapper>
  );
};
