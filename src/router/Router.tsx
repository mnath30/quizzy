import { Route, Routes } from "react-router-dom";
import { Home, LandingPage, PageNotFound, Result, Rules } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { Router };
