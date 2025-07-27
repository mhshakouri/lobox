import cx from "classnames";
import styles from "./option.module.scss";

import type { IMultiSelectDropdownOptionProps } from "./types";
import DynamicIcon from "../FaIcon/FaIcon";
import type { FaIconName } from "../FaIcon/types";

export default function MultiSelectDropdownOption({
  value,
  onClick,
  selected,
}: IMultiSelectDropdownOptionProps) {
  return (
    <li className={cx(styles.option, { [styles.selected]: selected })}>
      <button type="button" onClick={onClick}>
        <span>
          {selected ? `Yeeeah, ${value.toLowerCase()}!` : value}

          {selected ? (
            <DynamicIcon
              iconName={`Fa${value}` as FaIconName}
              className={styles.icon}
            />
          ) : (
            <></>
          )}
        </span>
        {selected ? (
          <DynamicIcon iconName={`FaCheck`} className={styles.icon} />
        ) : (
          <></>
        )}
      </button>
    </li>
  );
}
