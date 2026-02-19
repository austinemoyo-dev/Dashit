import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF7A00]"></div>
      </div>
    );
  }

  // If user is logged in, redirect to home
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;