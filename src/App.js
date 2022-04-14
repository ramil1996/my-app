import "./App.css";
import Menu from "./compotation/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./compotation/Detail";
import Details from "./compotation/Details";
import User from "./compotation/User";
import Users from "./compotation/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route exact path="detail/" element={<Detail />} />
        <Route path="detail/user" element={<User />} />
        <Route exact path="/adress" element={<Users />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
