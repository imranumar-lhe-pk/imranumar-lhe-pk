import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/HomeNew";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 animate-pulse"></div>
            <BarLoader color="#3b82f6" height={4} width={200} />
          </div>
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 animate-pulse"></div>
            <BarLoader color="#3b82f6" height={4} width={200} />
          </div>
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
