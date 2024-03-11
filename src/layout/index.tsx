import React, { ReactNode } from "react";
import MainLayout from "./MainLayout";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <MainLayout selectEmailCheck={() => {}}>{children}</MainLayout>;
};

export default Layout;
