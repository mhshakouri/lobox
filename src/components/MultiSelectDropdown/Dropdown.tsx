import styles from './Dropdown.module.scss'
import { useState, type KeyboardEvent } from "react"
import MultiSelectDropdownOptions from './Options'
import type { IMultiSelectDropdownOption } from './types'

export default function MultiSelectDropdown() {
    const [options, setOptions] = useState<IMultiSelectDropdownOption[]>([])

    const inputOnKeyDown = (event: KeyboardEvent) => { 
        if (event.key !== 'Enter')  return
        const value = (event.target as HTMLInputElement).value
        if (!value.length) return
        setOptions([...options, { value, id: crypto.randomUUID()}])
    }

    return (
        <>
            <div className={styles.multiSelectDropdown}>
                <input onKeyDown={inputOnKeyDown} />
                <MultiSelectDropdownOptions options={options} />
            </div>
        </>
    )
}