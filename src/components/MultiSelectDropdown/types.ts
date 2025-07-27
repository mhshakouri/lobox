import type { ReactEventHandler } from "react"

interface IMultiSelectDropdownOption {
    value: string
    id: string
    selected: boolean
}

interface IMultiSelectDropdownOptionProps extends Omit<IMultiSelectDropdownOption, 'id'> {
    onClick: ReactEventHandler
}

interface IMultiSelectDropdownOptionsProps {
    options: IMultiSelectDropdownOption[]
}

interface IMultiSelectDropdownInputProps {
    onKeyDown: ReactEventHandler
}

export type {
    IMultiSelectDropdownInputProps,
    IMultiSelectDropdownOption,
    IMultiSelectDropdownOptionProps,
    IMultiSelectDropdownOptionsProps
}