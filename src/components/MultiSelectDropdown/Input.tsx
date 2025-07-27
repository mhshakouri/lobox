import styles from './Input.module.scss'
import type { IMultiSelectDropdownInputProps } from "./types";

export default function MultiSelectDropdownInput({onKeyDown}: IMultiSelectDropdownInputProps) {
    return (
        <input className={styles.input} type="text" onKeyDown={onKeyDown}/>
    )
}