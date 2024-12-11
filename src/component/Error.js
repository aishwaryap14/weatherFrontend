import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);
  
  return (
    <div>
      {error ? (
        <div>
          <h1>Opps!!!!</h1>
          <h1>Something went wrong!!</h1>
          <h2>
            {error.status} {error.statusText}
          </h2>
          <h3>{error.data}</h3>
        </div>
      ) : (
        <div>
          <h2>Unexpected error occured !!</h2>
        </div>
      )}
    </div>
  );
};

export default Error;
