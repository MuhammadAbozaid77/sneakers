//
// Store Provider   -- Redux
// Routers -- React Router Dom  (Hash Link , Routers)
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppRouters from "./AppRouters";
import store from "../data/redux/ReduxStore";

export default function AppProviders() {
  return (
    <>
      <Provider store={store}>
        <HashRouter hashType="hashbang">
          <AppRouters />
        </HashRouter>
      </Provider>
    </>
  );
}
