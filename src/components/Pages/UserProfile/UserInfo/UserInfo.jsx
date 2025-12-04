import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../ui/Button/Button";

import "./UserInfo.scss";
import { updateUsername } from "../../../../store/userSlice";
import Collapse from "../../../ui/Collapse/Collapse";
import { Field } from "../../../ui/Field/Fields";
import Loading from "../../../ui/Loading/Loading";

function UserInfo() {
  const dispatch = useDispatch();

  const { info, statusUpdate, errorUpdate } = useSelector(
    (state) => state.user
  );

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");

  const firstname = info?.firstName;
  const lastname = info?.lastName;

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const isSaveDisabled =
    !username || username === info.userName || statusUpdate === "loading";

  const handleSave = (e) => {
    e.preventDefault();

    if (isSaveDisabled) return;

    dispatch(updateUsername({ token, username: username.trim() }));
    // setEditing(false);
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
            <span className="btn-content">
              {statusUpdate === "loading" ? <Loading size="small" /> : "Save"}
            </span>
          </Button>
          <Button
            type="button"
            className={editing ? "btn--visible" : ""}
            onClick={() => setEditing(false)}
            disabled={statusUpdate === "loading"}
          >
            Cancel
          </Button>
        </div>
        {statusUpdate === "failed" && (
          <p className="user-info__error">{errorUpdate}</p>
        )}
      </form>
    </div>
  );
}

export default UserInfo;
