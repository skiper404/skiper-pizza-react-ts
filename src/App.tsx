import { Routes, Route } from "react-router-dom";
import AppHome from "./components/AppHome";
import NotFound from "./components/NotFound";
import Wrapper from "./components/AppWrapper";
import AppCart from "./components/Cart/AppCart";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<AppHome />}></Route>
        <Route path="/cart" element={<AppCart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
