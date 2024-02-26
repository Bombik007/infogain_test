export const Checkout = ({ total, bonus, list }) => (
  <section>
    <h2>CHECKOUT</h2>
    <p>
      Total: ${total} Bonus: ${bonus}
    </p>

    {list.map((el, index) => (
      <li key={`selected-${index}-${el.id}`}>{el.name}</li>
    ))}
  </section>
);
