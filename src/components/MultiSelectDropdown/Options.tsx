import type { IMultiSelectDropdownOptionsProps } from "./types";
import styles from "./Options.module.scss";
import MultiSelectDropdownOption from "./Option";
export default function MultiSelectDropdownOptions({
  options,
  selections,
  onOptionClick,
}: IMultiSelectDropdownOptionsProps) {
  const optionsList = options.map(({ value, id }) => (
    <MultiSelectDropdownOption
      value={value}
      key={id}
      selected={selections.includes(id)}
      onClick={() => {
        onOptionClick(id);
      }}
    />
  ));

  return (
    <div className={styles.box}>
      <ul className={styles.list}>{optionsList}</ul>
    </div>
  );
}
