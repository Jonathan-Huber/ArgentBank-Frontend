import Account from "../Account/Account";

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
