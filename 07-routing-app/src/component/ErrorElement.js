import React from 'react';

import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorElement = () => {
  const { statusText, message } = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}>
        Go Back
      </button>

      <div>
        Opps ! Something went wrong !<p>{statusText || message}</p>
      </div>
    </div>
  );
};
export default ErrorElement;
