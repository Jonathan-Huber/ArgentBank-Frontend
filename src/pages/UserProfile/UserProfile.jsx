import UserInfo from "../../components/UserProfile/UserInfo/UserInfo";
import accounts from "../../data/accounts";
import ItemList from "../../components/ItemList/ItemList";
import Account from "../../components/UserProfile/Account/Account";
import "./UserProfile.scss";

function UserProfile() {
  return (
    <div className="user-profile">
      <UserInfo />
      <ItemList items={accounts} Component={Account} />
    </div>
  );
}

export default UserProfile;
