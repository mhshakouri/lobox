import type { ReactEventHandler } from "react";

interface IMultiSelectDropdownOption {
  value: string;
  id: string;
}

interface IMultiSelectDropdownOptionItemInProps
  extends IMultiSelectDropdownOption {
  selected: boolean;
}

interface IMultiSelectDropdownProps {
  items: IMultiSelectDropdownOption[];
  selectedItems: string[];
  updateSelections: (selections: string[]) => void;
  updateItems: (items: IMultiSelectDropdownOption[]) => void;
}

interface IMultiSelectDropdownOptionProps
  extends Omit<IMultiSelectDropdownOptionItemInProps, "id"> {
  onClick: ReactEventHandler;
}

interface IMultiSelectDropdownOptionsProps {
  options: IMultiSelectDropdownOption[];
  selections: string[];
  onOptionClick: (id: string) => void;
}

interface IMultiSelectDropdownInputProps {
  canOpenList: boolean;
  listOpen: boolean;
  onSubmitValue: (val: string) => void;
  toggleList: (val?: boolean) => void;
  selections: string[];
}

export type {
  IMultiSelectDropdownProps,
  IMultiSelectDropdownInputProps,
  IMultiSelectDropdownOption,
  IMultiSelectDropdownOptionProps,
  IMultiSelectDropdownOptionsProps,
};
