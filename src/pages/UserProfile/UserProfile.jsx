import UserInfo from "../../components/UserProfile/UserInfo/UserInfo";
import accounts from "../../data/accounts";
import AccountList from "../../components/UserProfile/AccountList/AccountList";
import "./_userprofile.scss";

function UserProfile() {
  return (
    <div className="user-profile">
      <UserInfo />
      <AccountList accounts={accounts} />
    </div>
  );
}

export default UserProfile;
