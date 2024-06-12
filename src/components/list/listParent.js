export const ListParentOrdered = () => {
  return (
    <ol>
      <ListItems />
    </ol>
  );
};

export const ListParentUnordered = () => {
  return (
    <ul>
      <ListItems />
    </ul>
  );
};

const ListItems = () => {
  return (
    <div>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
      <li>Watermelon</li>
      <li>grapes</li>
    </div>
  );
};
