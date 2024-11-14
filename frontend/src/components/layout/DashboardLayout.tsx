import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex items-center">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
