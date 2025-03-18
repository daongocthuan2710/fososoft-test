import styled from "styled-components";
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderWrapper = styled(Header)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 24px;
  height: fit-content;
  z-index: 10;
  /* background-image: url("/images/background/background-header.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  svg {
    color: white;
  }
`;
