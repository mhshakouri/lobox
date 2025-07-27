import type { IMultiSelectDropdownOption } from "../components/MultiSelectDropdown/types";

const items: IMultiSelectDropdownOption[] = [
  {
    value: "Education",
    id: crypto.randomUUID(),
  },
  {
    value: "Science",
    id: crypto.randomUUID(),
  },
  {
    value: "Art",
    id: crypto.randomUUID(),
  },
];

const selectedItems: string[] = [items[1].id];

export default { items, selectedItems };
