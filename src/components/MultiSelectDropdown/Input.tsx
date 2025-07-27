import {
  useState,
  type KeyboardEventHandler,
  type ReactEventHandler,
} from "react";
import styles from "./Input.module.scss";
import clx from "classnames";
import type { IMultiSelectDropdownInputProps } from "./types";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import FaIcon from "../FaIcon/FaIcon";

export default function MultiSelectDropdownInput({
  onSubmitValue,
  canOpenList,
  toggleList,
  listOpen,
}: IMultiSelectDropdownInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const updateInput: ReactEventHandler<HTMLInputElement> = (event) => {
    const value = (event.target as HTMLInputElement).value;
    if (!value.length) return;
    setInputValue(value);
  };

  const submitValue: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter" || !inputValue.length) return;
    onSubmitValue(capitalizeFirstLetter(inputValue));
    (event.target as HTMLInputElement).value = "";
  };

  const onInputFocus: ReactEventHandler<HTMLInputElement> = () => {
    toggleList(true);
  };

  const onChevronClick: ReactEventHandler<HTMLButtonElement> = () => {
    toggleList();
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        onKeyDown={submitValue}
        onChange={updateInput}
        onInput={updateInput}
        onFocus={onInputFocus}
        placeholder="Add and select your fields of interests"
        defaultValue={inputValue}
      />
      {canOpenList ? (
        <button type="button" onClick={onChevronClick}>
          <FaIcon
            iconName="FaChevronDown"
            className={clx(styles.icon, { [styles.open]: listOpen })}
          />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
