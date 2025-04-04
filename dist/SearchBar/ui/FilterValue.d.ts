import { FC, ReactElement } from 'react';
import { SearchBarColorType } from './SearchBarColor.type';
interface IFilterValueProps {
    children?: ReactElement;
    onClose: () => void;
    title?: string;
    color?: SearchBarColorType;
    customColor?: string;
    applyChanges: (value: string) => void;
}
export declare const FilterValue: FC<IFilterValueProps>;
export {};
