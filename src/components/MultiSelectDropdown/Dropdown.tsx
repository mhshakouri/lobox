import styles from "./Dropdown.module.scss";
import { useEffect, useState } from "react";
import MultiSelectDropdownOption from "./Option";
import type {
  IMultiSelectDropdownOption,
  IMultiSelectDropdownProps,
} from "./types";
import MultiSelectDropdownInput from "./Input";
import useClickOutside from "../../hooks/useClickOutside";

export default function MultiSelectDropdown({
  items,
  selectedItems,
}: IMultiSelectDropdownProps) {
  const [options, setOptions] = useState<IMultiSelectDropdownOption[]>([]);
  const [selections, setSelections] = useState<string[]>([]);
  const [listOpen, setListOpen] = useState<boolean>(false);

  useEffect(() => {
    if (items?.length) setOptions(items);
  }, [items ?? []]);

  useEffect(() => {
    if (selectedItems?.length) setSelections(selectedItems);
  }, [selectedItems ?? []]);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setListOpen(false);
  });

  const addNewItem = (value: string) => {
    setOptions([
      ...options,
      {
        value,
        id: crypto.randomUUID(),
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

  const selectionsByText = options
    .filter((item) => selections.includes(item.id))
    .map((item) => item.value);

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
        selections={selectionsByText}
      />
      {listOpen ? (
        <div className={styles.box}>
          <ul className={styles.list}>{optionsList}</ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
