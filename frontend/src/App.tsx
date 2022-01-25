import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  let auth = true;
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/auth" element={auth ? <Navigate to="/" /> : <Auth />} />
        <Route path="/" element={auth ? <Home /> : <Navigate to="/auth" />} />
      </Routes>
    </Provider>
  );
};

export default App;
