import LoginPage from "./auth/login/page";
import NavBar from "./dashboard/NavBar";
import SideDrawer from "./dashboard/SideDrawer";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <SideDrawer>
      <Dashboard />
    </SideDrawer>
  );
}
