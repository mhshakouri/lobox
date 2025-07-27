import cx from "classnames";
import styles from "./option.module.scss";

import type { IMultiSelectDropdownOptionProps } from "./types";
import DynamicIcon from "../FaIcon/FaIcon";
import type { FaIconName } from "../FaIcon/types";
import { useEffect, useState } from "react";
import FadeComponent from "../FadeComponent/FadeComponent";

export default function MultiSelectDropdownOption({
  value,
  onClick,
  selected,
}: IMultiSelectDropdownOptionProps) {
  const [renderedSelectiontext, setRenderedSelectionText] =
    useState<string>("");
  useEffect(() => {
    setRenderedSelectionText(
      selected ? `Yeeeah, ${value.toLowerCase()}!` : value
    );
  }, [selected]);
  return (
    <li className={cx(styles.option, { [styles.selected]: selected })}>
      <button type="button" onClick={onClick}>
        <span>
          {renderedSelectiontext}
          <FadeComponent show={selected}>
            <span>
              <DynamicIcon
                iconName={`Fa${value}` as FaIconName}
                className={styles.icon}
              />
            </span>
          </FadeComponent>
        </span>
        <FadeComponent show={selected}>
          <span>
            <DynamicIcon iconName={`FaCheck`} className={styles.icon} />
          </span>
        </FadeComponent>
      </button>
    </li>
  );
}
