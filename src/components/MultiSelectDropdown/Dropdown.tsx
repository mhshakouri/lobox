import styles from './Dropdown.module.scss'
import { useState, type ChangeEvent, type KeyboardEvent } from "react"
import MultiSelectDropdownOptions from './Options'
import type { IMultiSelectDropdownOption } from './types'

export default function MultiSelectDropdown() {
    const [options, setOptions] = useState<IMultiSelectDropdownOption[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const inputOnChange = (event: ChangeEvent) => { setInputValue((event.target as HTMLInputElement).value) }
    
    const inputOnKeyDown = (event: KeyboardEvent) => { 
        if (event.key !== 'Enter')  return
        setOptions([...options, { value: (event.target as HTMLInputElement).value, id: crypto.randomUUID()}])
    }

    return (
        <>
            <div className={styles.multiSelectDropdown}>
                <input value={inputValue} onChange={inputOnChange} onKeyDown={inputOnKeyDown} />
                <MultiSelectDropdownOptions options={options} />
            </div>
        </>
    )
}