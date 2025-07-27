import { useState } from "react";
import "./App.scss";
import MultiSelectDropdown from "./components/MultiSelectDropdown/Dropdown";
import mockData from "./constants/mockData";
import type { IMultiSelectDropdownOption } from "./components/MultiSelectDropdown/types";

function App() {
  const [items, setItems] = useState<IMultiSelectDropdownOption[]>(
    mockData.items
  );
  const [selectedItems, setSelectedItems] = useState<string[]>(
    mockData.selectedItems
  );
  const updateItems = (items: IMultiSelectDropdownOption[]) => {
    setItems(items);
  };
  const updateSelections = (selections: string[]) => {
    setSelectedItems(selections);
  };
  return (
    <>
      <MultiSelectDropdown
        items={items}
        selectedItems={selectedItems}
        updateItems={updateItems}
        updateSelections={updateSelections}
      />
    </>
  );
}

export default App;
