import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { LoginPage } from "./pages/login-page";
import { FilmsApp } from "./pages/movie-filter-page";
import { MoviesDetailsPage } from "./pages/movie-details-page";
import { ErrorPageIfTokenNotValid } from "./pages/error-page";

import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPageIfTokenNotValid />,
  },
  {
    path: "/home",
    element: <FilmsApp />,
  },
  {
    path: "/films/:id/:title",
    element: <MoviesDetailsPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </Provider>
  );
}

export default App;
