import * as React from "react";
import { ITEMS_DATA } from "./data";
import CatItem from "./Components/CatItem";
import { toast } from "react-toastify";

export default function App() {
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    if (lsTest()) {
      if (JSON.parse(localStorage.getItem("productData"))) {
        setProduct(JSON.parse(localStorage.getItem("productData")));
      } else {
        setProduct(ITEMS_DATA);
      }
    } else {
      toast.warn("We can not access local storage in Incognito Mode");
    }
  }, []);

  function lsTest() {
    var test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  const countChange = (
    itemIndex,
    count,
    isUnlimeted,
    subCatCount,
    catCount
  ) => {
    if (!lsTest()) {
      return toast.error("We can not access local storage in Incognito Mode");
    }
    let copyProduct = [...product];
    if (copyProduct[catCount]?.subCat[subCatCount]?.items[itemIndex]) {
      copyProduct[catCount].subCat[subCatCount].items[itemIndex][
        "count"
      ] = count;
      copyProduct[catCount].subCat[subCatCount].items[itemIndex][
        "unlimited"
      ] = isUnlimeted;
      toast.success("Item Saved");
    } else {
      toast.error("Error while saving item in Storage.");
    }
    if (copyProduct) {
      localStorage.setItem("productData", JSON.stringify(copyProduct));
    }
  };

  const clearAll = () => {
    localStorage.clear();
    toast.success("All Product Item Cleared.");
  };

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}
      >
        <FormetedColumn width="20%" text="Name" />
        <FormetedColumn width="10%" text="Colors" />
        <FormetedColumn width="10%" text="Options" />
        <FormetedColumn width="10%" text="ID" />
        <FormetedColumn width="25%" text="Count" />
        <FormetedColumn width="25%" text="Action" />
      </div>
      {product.map((e, catCount) => (
        <CatItem
          data={e}
          countChange={(itemIndex, count, isUnlimeted, subCatCount) =>
            countChange(itemIndex, count, isUnlimeted, subCatCount, catCount)
          }
        />
      ))}
      <div style={{ marginTop: 150 }}>
        <button onClick={() => clearAll()}>Clear All Saved Data</button>
        <div style={{ marginTop: 15 }}>
          * Used Browser Local Storage for Saving Updated Data.
        </div>
        <div>* Task Done By: Saransh Gupta</div>
      </div>
    </div>
  );
}

const FormetedColumn = (props) => {
  const { width: colWidth = "20%", text = "" } = props;
  return <div style={{ width: colWidth }}>{text}</div>;
};
