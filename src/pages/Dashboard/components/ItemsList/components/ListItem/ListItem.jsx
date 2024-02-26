export const ListItem = ({ name, price, onClick }) => (
  <li onClick={onClick} style={{ cursor: "pointer" }}>
    <p>Name: {name}</p>
    <br />
    <p>Price: {price}</p>
  </li>
);
