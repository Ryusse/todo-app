import { useRouteError } from 'react-router-dom';

const NotFound404 = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound404;
