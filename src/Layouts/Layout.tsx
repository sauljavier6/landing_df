import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";

const Layout = () => {

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <TopNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
