import { useRoutes } from 'react-router-dom';

//routes
import AuthenticationRoutes from './AutheticationRoute';
import MainRoutes from './MainRoutes';

const Routes = () => useRoutes([MainRoutes, AuthenticationRoutes]);

export default Routes;
