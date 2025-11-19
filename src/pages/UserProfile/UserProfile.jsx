import accounts from "../../data/accounts";
import AccountList from "../../components/AccountList/AccountList";
import Button from "../../components/Button/Button";
import "./_userprofile.scss";

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <h1 className="sr-only">Accounts</h1>
        <p className="user-profile__welcome">
          Welcome back
          <br />
          Tony Jarvis!
        </p>
        <Button className="btn-compact">Edit Name</Button>
      </div>
      <AccountList accounts={accounts} />
    </div>
  );
}

export default UserProfile;
