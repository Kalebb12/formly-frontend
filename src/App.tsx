import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Forms from "./pages/Forms";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RedirectIfAuthenticated from "./utils/RedirectIfAuthenticated";
import { useEffect } from "react";
import { getMe } from "./store/authActions";
import { useAppDispatch } from "./store/hooks";
import EditForm from "./pages/EditForm";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="grow pt-10 flex items-start *:grow container mx-auto  px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/auth/login"
            element={
              <RedirectIfAuthenticated>
                <Login />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/auth/register"
            element={
              <RedirectIfAuthenticated>
                <Register />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/forms"
            element={
              <ProtectedRoute>
                <Forms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/form/:id"
            element={
              <ProtectedRoute>
                <EditForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
