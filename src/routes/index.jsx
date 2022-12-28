import { useRoutes } from "react-router-dom";

//routes
import AuthenticationRoutes from "./AuthicationRoutes";
import MainRoutes from "./MainRoutes";

const Routes = () => useRoutes([MainRoutes, AuthenticationRoutes]);

export default Routes;
