import { useRouteError } from "react-router-dom";

interface IError {
  statusText: string;
  message: string;
}

function ErrorPage() {
  const error = useRouteError() as IError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
function ErrorPageIfTokenNotValid() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Токен не валиден или просто нажмите F5</i>
      </p>
    </div>
  );
}

export { ErrorPage, ErrorPageIfTokenNotValid };
