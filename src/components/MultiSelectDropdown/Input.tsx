import {
  useEffect,
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
  selections,
}: IMultiSelectDropdownInputProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    setPlaceholder(
      !selections.length
        ? "Add or select your fields of interest"
        : selections.join(", ")
    );
  }, [selections]);

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

  const openList = () => {
    if (canOpenList) toggleList(true);
  };

  const onInputFocus: ReactEventHandler<HTMLInputElement> = () => {
    openList();
  };

  const onChevronClick: ReactEventHandler<HTMLButtonElement> = () => {
    toggleList();
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        name="field-of-interest"
        className={styles.input}
        type="text"
        onKeyDown={submitValue}
        onChange={updateInput}
        onInput={updateInput}
        onFocus={onInputFocus}
        placeholder={placeholder}
        defaultValue={inputValue}
      />
      {canOpenList ? (
        <button
          type="button"
          onClick={onChevronClick}
          className={clx(styles.button, { [styles.open]: listOpen })}
        >
          <FaIcon iconName="FaChevronDown" className={styles.icon} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
