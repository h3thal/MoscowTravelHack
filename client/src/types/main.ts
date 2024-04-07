import {DOMAttributes, FormEventHandler, InputHTMLAttributes, JSX} from "react";

export type TitleProps = {
  title: string
};

export type ButtonProps = {
  title: string;
  caption?: string;
  type: 'Caption' | 'Primary' | 'Secondary' | 'Secondary-Caption' | 'Secondary 2' | 'Thetriary' | 'Outline' | 'Outline-Caption' | 'Outline-Yellow' | 'White';
  size: 'S' | 'M' | 'L';
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}

export type NotIncludedProps = {
  residence?: boolean;
  transfer?: boolean;
}

export type HeartButtonProps = {
  isActive: boolean;
  onClick: () => void;
  size: 'M' | 'L';
  onImage?: boolean;
}

export type CardProps = {
  title: string;
  bonus?: boolean;
  discount?: number;
  rating?: number;
  onOpen: () => void;
}

export type ReviewItemProps = {
  msg: string;
}

export type InputProps = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  value: HTMLInputElement['value'];
  onChange: InputHTMLAttributes<HTMLInputElement>['onInput'];
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  leftIcon?: JSX.Element;
}

export type CheckboxProps = {
  title: string;
  onInput: FormEventHandler<HTMLInputElement>;
}

export type CardHotelsProps = {
  title: string;
  rating: number;
  star: number;
  onOpen: () => void;
  parking?: boolean;
  wifi?: boolean;
  cafe?: boolean;
}
