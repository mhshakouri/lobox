import styles from "./Dropdown.module.scss";
import { useState } from "react";
import type {
  IMultiSelectDropdownOption,
  IMultiSelectDropdownProps,
} from "./types";
import MultiSelectDropdownInput from "./Input";
import useClickOutside from "../../hooks/useClickOutside";
import MultiSelectDropdownOptions from "./Options";
import FadeComponent from "../FadeComponent/FadeComponent";

export default function MultiSelectDropdown({
  items,
  selectedItems,
  updateSelections,
  updateItems,
}: IMultiSelectDropdownProps) {
  const [options, setOptions] = useState<IMultiSelectDropdownOption[]>(
    items ?? []
  );
  const [selections, setSelections] = useState<string[]>(selectedItems ?? []);
  const [listOpen, setListOpen] = useState<boolean>(false);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setListOpen(false);
  });

  const addNewItem = (value: string) => {
    const newId = crypto.randomUUID();
    setOptions([
      ...options,
      {
        value,
        id: newId,
      },
    ]);
    setListOpen(true);
    toggleOptionSelection(newId);
    updateItems(options);
  };

  const toggleOptionSelection = (id: string) => {
    setSelections(
      selections.includes(id)
        ? selections.filter((sel) => sel !== id)
        : [...selections, id]
    );
    updateSelections(selections);
  };

  const toggleListOpen = (value?: boolean) => {
    if (value !== undefined) {
      setListOpen(value);
      return;
    }
    setListOpen(!listOpen);
  };

  const selectionsByText = options
    .filter((item) => selections.includes(item.id))
    .map((item) => item.value);

  return (
    <div className={styles.dropdown} ref={ref}>
      <MultiSelectDropdownInput
        onSubmitValue={addNewItem}
        canOpenList={Boolean(options.length)}
        toggleList={toggleListOpen}
        listOpen={listOpen}
        selections={selectionsByText}
      />
      <FadeComponent show={listOpen}>
        <MultiSelectDropdownOptions
          options={options}
          selections={selections}
          onOptionClick={toggleOptionSelection}
        />
      </FadeComponent>
    </div>
  );
}
