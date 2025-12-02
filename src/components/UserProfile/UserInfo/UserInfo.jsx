import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../Button/Button";

import "./userinfo.scss";
import { updateUsername } from "../../../store/userSlice";
import Collapse from "../../Collapse/Collapse";
import { Field } from "../../Field/Fields";

function UserInfo() {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.user);

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");

  const firstname = info?.firstName;
  const lastname = info?.lastName;

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const isSaveDisabled = !username || username === info.userName;

  const handleSave = (e) => {
    e.preventDefault();

    if (isSaveDisabled) return;

    dispatch(updateUsername({ token, username: username.trim() }));
    setEditing(false);
  };

  return (
    <div className="user-info">
      <h1 className="sr-only">Accounts</h1>
      <div className="user-info__welcome-container">
        <p
          className={`user-info__welcome ${
            !editing ? "user-info__welcome--visible" : ""
          }`}
        >
          Welcome back
          <br />
          {firstname} {lastname}!
        </p>
        <p
          className={`user-info__welcome ${
            editing ? "user-info__welcome--visible" : ""
          }`}
        >
          Edit user info
        </p>
      </div>

      <form className="user-info__edit-form" onSubmit={handleSave}>
        <Collapse isOpen={editing}>
          <Field
            id="username"
            label="User name:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Field
            id="firstname"
            label="First name:"
            value={firstname}
            disabled
          />
          <Field id="lastname" label="Last name:" value={lastname} disabled />
        </Collapse>

        <div className="user-info__buttons">
          <Button
            className={!editing ? "btn--visible" : ""}
            onClick={() => {
              setUsername(info?.userName);
              setEditing(true);
            }}
          >
            Edit Name
          </Button>
          <Button
            type="submit"
            className={editing ? "btn--visible" : ""}
            disabled={isSaveDisabled}
          >
            Save
          </Button>
          <Button
            type="button"
            className={editing ? "btn--visible" : ""}
            onClick={() => setEditing(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
