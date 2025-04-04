export interface ISearchBarItemElement {
    key: string | number;
    label: string;
    value: string;
}
export interface ISerarchBarFilters extends ISearchBarItemElement {
    inputValue: string;
}
