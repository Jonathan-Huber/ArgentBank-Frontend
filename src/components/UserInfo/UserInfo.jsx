import { useState } from "react";
import Button from "../Button/Button";
import Field from "../Field/Field";
import "./userinfo.scss";

function UserInfo() {
  const [editing, setEditing] = useState(false);

  const [username, setUsername] = useState("Iron");
  const firstname = "Tony";
  const lastname = "Stark";

  return (
    <div className="user-info">
      <h1 className="sr-only">Accounts</h1>
      {editing ? (
        <p className="user-info__welcome">Edit user info</p>
      ) : (
        <p className="user-info__welcome">
          Welcome back
          <br />
          {firstname} {lastname}!
        </p>
      )}
      {editing && (
        <div className="user-info__edit-form">
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
        </div>
      )}
      <div className="user-info__buttons">
        {editing ? (
          <>
            <Button onClick={() => setEditing(false)}>Save</Button>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </>
        ) : (
          <Button onClick={() => setEditing(true)}>Edit Name</Button>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
