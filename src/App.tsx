import "./App.scss";
import MultiSelectDropdown from "./components/MultiSelectDropdown/Dropdown";
import mockData from "./constants/mockData";

function App() {
  return (
    <>
      <MultiSelectDropdown
        items={mockData.items}
        selectedItems={mockData.selectedItems}
      />
    </>
  );
}

export default App;
