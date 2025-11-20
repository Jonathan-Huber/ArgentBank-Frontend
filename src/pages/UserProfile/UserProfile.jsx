import UserInfo from "../../components/UserInfo/UserInfo";
import accounts from "../../data/accounts";
import AccountList from "../../components/AccountList/AccountList";
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
