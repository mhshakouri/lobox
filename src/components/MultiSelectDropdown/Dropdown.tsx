import styles from './Dropdown.module.scss'
import { useState, type KeyboardEvent } from "react"
import MultiSelectDropdownOption from './Option'
import type { IMultiSelectDropdownOption } from './types'
import MultiSelectDropdownInput from './Input'

export default function MultiSelectDropdown() {
    const [options, setOptions] = useState<IMultiSelectDropdownOption[]>([])
    const [selections, setSelections] = useState<string[]>([])

    const inputOnKeyDown = (event: KeyboardEvent) => { 
        if (event.key !== 'Enter')  return
        const value = (event.target as HTMLInputElement).value
        if (!value.length) return
        setOptions([...options, { value, id: crypto.randomUUID(), selected: false}])
    }

    const optionOnClick = (id: string) => {
        setSelections(selections.includes(id) ? selections.filter(sel => sel !== id) : [...selections, id])
    }

    const optionsList = options.map(({value, id}) => (
        <MultiSelectDropdownOption 
            value={value}
            key={id}
            selected={selections.includes(id)} 
            onClick={() => { optionOnClick(id) }} 
        />
    ))

    return (
        <>
            <div className={styles.dropdown}>
                <MultiSelectDropdownInput onKeyDown={inputOnKeyDown} />
                <ul>
                    {optionsList}
                </ul>
            </div>
        </>
    )
}