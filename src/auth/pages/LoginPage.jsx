import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Marcelo');
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button className="btn btn-primary" type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
