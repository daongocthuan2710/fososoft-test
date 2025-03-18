"use client";

// Libraries
import React, { memo } from "react";

// Context
import { HeaderWrapper } from "./styled";

interface HeaderProps {
  title?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = memo(({ className }) => {
  return <HeaderWrapper className={className}></HeaderWrapper>;
});

Header.displayName = "Header";
