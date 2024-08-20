import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../home/home";
import BouncingBallLoader from "./loader";
import NextDates from "../../next-dates/next-dates";
import Inspiration from "../../inspiration/inspiration"

const AppRouter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BouncingBallLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next-dates" element={<NextDates />} />
      <Route path="/photo-register" element={<Home />} />
      <Route path="/inspiration" element={<Inspiration />} />
      <Route path="/faqs" element={<Home />} />

      {/* other routes here */}
    </Routes>
  );
};

export default AppRouter;
