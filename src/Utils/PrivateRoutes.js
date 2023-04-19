import { Navigate, Route } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...props }) => {
  const token = localStorage.getItem('token');

  return token ? (
    <Route {...props} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoutes;
