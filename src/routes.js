import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "~/pages/Login";
import Store from "~/pages/Store";

const routes = createAppContainer(
  createSwitchNavigator({
    Store,
    Login
  })
);

export default routes;
