import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DarkButton from "./components/DarkButton";
import Header from "./components/Header";
import DashboardLayout from "./components/layout/DashboardLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <DarkButton />
    </BrowserRouter>
  );
};

export default App;
