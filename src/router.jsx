import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./components/layout";
import Register from "./pages/register";
import Update from "./pages/update";

function Routers() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/update/:id" Component={Update} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routers;
