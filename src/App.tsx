import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Forms from "./pages/Forms";
import { useAuthStore } from "./store/auth.store";
import { useEffect } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => void fetchUser(), [fetchUser]);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="grow pt-10 container mx-auto  px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/forms"
            element={
              <ProtectedRoute>
                <Forms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
