import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Oops!</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
