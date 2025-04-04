import { FC } from 'react';
import { ISearchBarItemElement, ISerarchBarFilters } from './ui/itemElement.Interface';
import { SearchBarColorType } from './ui/SearchBarColor.type';
interface SearchBarProps {
    Label?: string;
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    data: ISearchBarItemElement[];
    color?: SearchBarColorType;
    customColor?: string;
    onChange?: (filters: ISerarchBarFilters[]) => void;
}
export declare const SearchBar: FC<SearchBarProps>;
export {};
