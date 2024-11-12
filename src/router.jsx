import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./components/layout";
import Register from "./pages/register";
import Update from "./pages/update";
import { Provider } from "react-redux";
import { store } from "./store";

function Routers() {
  return (
     <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/update/:id" Component={Update} />
        </Routes>
      </Layout>
    </BrowserRouter>
     </Provider>
  );
}

export default Routers;
