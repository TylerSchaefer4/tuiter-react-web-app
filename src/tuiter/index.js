import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index";
import HomeScreen from "./navigation-sidebar/home-screen";
//import ExploreScreen from "./navigation-sidebar/explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
// import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-xl-2 col-lg-1 col-md-2 col-sm-2">
            <NavigationSidebar />
          </div>
          <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="*" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="col-xl-3 col-lg-3 d-none d-lg-block">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
