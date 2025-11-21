import Account from "../../UserProfile/Account/Account";

function AccountList({ accounts }) {
  return (
    <>
      {accounts.map((account) => (
        <Account key={account.id} {...account} />
      ))}
    </>
  );
}

export default AccountList;
