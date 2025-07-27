import MultiSelectDropdownOption from "./Option";
import type { IMultiSelectDropdownOptionsProps } from "./types";


export default function MultiSelectDropdownOptions({options}: IMultiSelectDropdownOptionsProps) {


    const optionsList = options.map(({value, id}) => (
        <MultiSelectDropdownOption value={value} key={id} />
    ))
    return (
        <div>
            {optionsList}
        </div>
    )
}