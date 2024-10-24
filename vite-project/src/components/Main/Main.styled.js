import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Main = styled.main`
  width: 100%;
  background-color: ${({theme}) => theme.body};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    height: 1024px;
    background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${breakpoints.xl}px) {
    display: block;
  }
`;