import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DarkButton from "./components/DarkButton";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <DarkButton />
    </BrowserRouter>
  );
};

export default App;
