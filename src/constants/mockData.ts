import type { IMultiSelectDropdownOption } from "../components/MultiSelectDropdown/types";

const items: IMultiSelectDropdownOption[] = [
  {
    value: "JS",
    id: crypto.randomUUID(),
  },
  {
    value: "React",
    id: crypto.randomUUID(),
  },
  {
    value: "Code",
    id: crypto.randomUUID(),
  },
  {
    value: "Fire",
    id: crypto.randomUUID(),
  },
];

const selectedItems: string[] = [items[1].id];

export default { items, selectedItems };
