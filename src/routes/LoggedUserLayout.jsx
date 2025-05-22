import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

export default function LoggedUserLayout() {
  return (
    <div className="min-h-screen w-full">
      <Menu />
      <Outlet />
    </div>
  );
}