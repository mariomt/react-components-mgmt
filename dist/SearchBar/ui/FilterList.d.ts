import { FC, ReactElement } from 'react';
import { ISearchBarItemElement } from './itemElement.Interface';
import { SearchBarColorType } from './SearchBarColor.type';
interface IFilterListProps {
    children?: ReactElement;
    onClose: () => void;
    onSelectElement: (item: ISearchBarItemElement) => void;
    data: ISearchBarItemElement[];
    color?: SearchBarColorType;
    customColor?: string;
}
export declare const FilterList: FC<IFilterListProps>;
export {};
