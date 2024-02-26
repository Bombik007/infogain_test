import { useCallback, useEffect, useMemo, useState } from "react";

import { useMockedFetch } from "../../hooks";
import { getBonusPoints } from "../../utils";
import { Checkout, ItemsList } from "./components";
import { LoadingPlaceholder } from "../../components";

export const Dashboard = () => {
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const { data = [], error, loading, fetchData } = useMockedFetch();

  const selectItem = useCallback(
    (id) => {
      const selectedItemIndex = selectedItemIds.indexOf(id);
      const temp = [...selectedItemIds];

      if (selectedItemIndex >= 0) {
        temp.splice(selectedItemIndex, 1);
      } else {
        temp.push(id);
      }

      setSelectedItemIds(temp);
    },
    [selectedItemIds]
  );

  const selectedItems = useMemo(
    () => data.filter((el) => !!selectedItemIds.includes(el.id)),
    [data, selectedItemIds]
  );

  const checkoutData = useMemo(() => {
    let bonus = 0;
    let total = 0;

    selectedItems.forEach((el) => {
      bonus += getBonusPoints(el.price);
      total += el.price;
    });

    return { bonus, total };
  }, [selectedItems]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <LoadingPlaceholder />;

  return (
    <main>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ItemsList list={data} onClick={selectItem} />
        <Checkout {...checkoutData} list={selectedItems} />
      </div>

      {!!error && <h2>{error}</h2>}
    </main>
  );
};
