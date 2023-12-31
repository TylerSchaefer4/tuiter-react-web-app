import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";
import { findTuitsThunk } from "../services/tuits-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => {
    await dispatch(updateUserThunk(profile));
  };
  useEffect(() => {
    dispatch(findTuitsThunk());

    const loadProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };

    if (!profile) {
      loadProfile();
    }
  }, []);
  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div>
            <label className="mr-2">First Name</label>
            <input
              type="text"
              className="ml-2"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div className="mb-2 mt-2">
            <label className="mr-2">Last Name</label>
            <input
              type="text"
              className="ml-2"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <button
        className="mr-2"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/tuiter/login");
        }}
      >
        {" "}
        Logout
      </button>
      <button onClick={save}>Save </button>
    </div>
  );
}
export default ProfileScreen;
