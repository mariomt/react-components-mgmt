import { FC } from "react";
import { ISerarchBarFilters } from "./itemElement.Interface";

interface FilterElementProps {
    element: ISerarchBarFilters;
    onClose: (key: string | number) => void
}
 
const FilterElement: FC<FilterElementProps> = ({ element, onClose }) => {
    return (
        <div className="bg-gray-200 rounded-full px-3 flex items-center mr-1">
            {element.label}: {element.inputValue}
            <p
                className="inline-block cursor-pointer bg-gray-100 rounded-full w-[20px] h-[20px] leading-[1] text-center ml-2"
                onClick={() => onClose(element.key)}
            >x</p>
        </div>
    );
}
 
export default FilterElement;