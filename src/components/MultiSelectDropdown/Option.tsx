import cx from 'classnames'
import styles from './option.module.scss'

import type { IMultiSelectDropdownOptionProps } from "./types";

export default function MultiSelectDropdownOption({ value, onClick, selected }: IMultiSelectDropdownOptionProps) {
    return (
        <li className={cx(styles.option, {[styles.selected]: selected})}>
            <button type="button" onClick={onClick}> {value}</button>
        </li>
    )
}