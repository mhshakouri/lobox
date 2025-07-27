interface IMultiSelectDropdownOption {
    value: string
    id: string
}
type IMultiSelectDropdownOptionProps = Pick<IMultiSelectDropdownOption, 'value'>
interface IMultiSelectDropdownOptionsProps {
    options: IMultiSelectDropdownOption[]
}

interface IMultiSelectDropdownInputProps {
    value: string
}

export type {
    IMultiSelectDropdownInputProps,
    IMultiSelectDropdownOption,
    IMultiSelectDropdownOptionProps,
    IMultiSelectDropdownOptionsProps
}