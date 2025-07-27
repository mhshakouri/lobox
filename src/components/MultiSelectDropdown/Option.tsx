import type { IMultiSelectDropdownOptionProps } from "./types";


export default function MultiSelectDropdownOption({ value }: IMultiSelectDropdownOptionProps) {
    return (
        <>
            <span>{value}</span>
        </>
    )
}