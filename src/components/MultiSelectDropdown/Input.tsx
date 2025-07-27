import type { IMultiSelectDropdownInputProps } from "./types";

export default function MultiSelectDropdownInput({onKeyDown}: IMultiSelectDropdownInputProps) {
    return (
        <input type="text" onKeyDown={onKeyDown}/>
    )
}