import styles from "./Dropdown.module.scss";
import { useState } from "react";
import MultiSelectDropdownOption from "./Option";
import type { IMultiSelectDropdownOption } from "./types";
import MultiSelectDropdownInput from "./Input";
import useClickOutside from "../../hooks/useClickOutside";

export default function MultiSelectDropdown() {
  const [options, setOptions] = useState<IMultiSelectDropdownOption[]>([]);
  const [selections, setSelections] = useState<string[]>([]);
  const [listOpen, setListOpen] = useState<boolean>(false);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setListOpen(false);
  });

  const addNewItem = (value: string) => {
    setOptions([
      ...options,
      {
        value,
        id: crypto.randomUUID(),
        selected: false,
      },
    ]);
    setListOpen(true);
  };

  const optionOnClick = (id: string) => {
    setSelections(
      selections.includes(id)
        ? selections.filter((sel) => sel !== id)
        : [...selections, id]
    );
  };

  const toggleListOpen = (value?: boolean) => {
    if (value !== undefined) {
      setListOpen(value);
      return;
    }
    setListOpen(!listOpen);
  };

  const optionsList = options.map(({ value, id }) => (
    <MultiSelectDropdownOption
      value={value}
      key={id}
      selected={selections.includes(id)}
      onClick={() => {
        optionOnClick(id);
      }}
    />
  ));

  return (
    <div className={styles.dropdown} ref={ref}>
      <MultiSelectDropdownInput
        onSubmitValue={addNewItem}
        canOpenList={Boolean(options.length)}
        toggleList={toggleListOpen}
        listOpen={listOpen}
      />
      {listOpen ? <ul className={styles.optionsList}>{optionsList}</ul> : <></>}
    </div>
  );
}
