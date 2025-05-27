import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router";

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN;

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <div>HEADER</div>}
      <Outlet />
    </div>
  );
}

export default App;
