import "./Account.scss";

import Button from "../../../ui/Button/Button";

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account__wrapper">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__description">{description}</p>
      </div>
      <div className="account__wrapper cta">
        <Button className="btn-block btn-block--720">View transactions</Button>
      </div>
    </section>
  );
}

export default Account;
