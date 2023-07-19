import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "globalStyles";
import { CreateAccount } from "pages/CreateAccount";
import { HomeLayout } from "pages/HomeLayout";
import { Login } from "pages/Login";

const AppBody = styled.div`
  align-items: center;
  background-color: var(--background-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 101vh;  
  position: relative;
  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<CreateAccount />} path="/signup" />
    </>,
  ),
);

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppBody>
        <RouterProvider router={router} />
      </AppBody>
    </>
  );
};

export default App;
