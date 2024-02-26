import { ListItem } from "./components";

export const ItemsList = ({ list, onClick }) => (
  <section>
    <h2>MENU</h2>

    <ul>
      {list.map((el, index) => (
        <ListItem
          key={`el-${index}-${el.id}`}
          name={el.name}
          price={el.price}
          onClick={() => onClick(el.id)}
        />
      ))}
    </ul>
  </section>
);
