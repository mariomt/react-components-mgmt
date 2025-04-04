import { FC } from 'react';
import { ISerarchBarFilters } from './itemElement.Interface';
interface FilterElementProps {
    element: ISerarchBarFilters;
    onClose: (key: string | number) => void;
}
declare const FilterElement: FC<FilterElementProps>;
export default FilterElement;
