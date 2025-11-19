import Feature from "../Feature/Feature";

function FeatureList({ items }) {
  return (
    <>
      {items.map((item) => (
        <Feature key={item.id} {...item} />
      ))}
    </>
  );
}

export default FeatureList;
