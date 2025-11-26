function ItemList({ items, Component }) {
  return (
    <>
      {items.map((item) => (
        <Component key={item.id} {...item} />
      ))}
    </>
  );
}

export default ItemList;
