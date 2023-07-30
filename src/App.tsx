import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "globalStyles";
import { CreateAccount } from "pages/CreateAccount";
import { HomeLayout } from "pages/HomeLayout";
import { Login } from "pages/Login";
import { ProfileDetails } from "components/ProfileDetails";

const AppBody = styled.div`
  align-items: center;
  background-color: var(--background-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 101vh;
  position: relative;
  @media (min-width: 480px) {
    justify-content: center;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route element={<ProfileDetails />} path="/" />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route element={<CreateAccount />} path="/signup" />
    </>,
  ),
);

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppBody className="AppBody">
        <RouterProvider router={router} />
      </AppBody>
    </>
  );
};

export default App;
