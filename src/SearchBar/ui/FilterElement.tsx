import { FC } from "react";
import { ISerarchBarFilters } from "./itemElement.Interface";

interface FilterElementProps {
    element: ISerarchBarFilters;
    onClose: (key: string | number) => void
}
 
const FilterElement: FC<FilterElementProps> = ({ element, onClose }) => {
    return (
        <div className="bg-gray-200 text-gray-600 rounded-full px-3 flex flex-nowrap items-center">
            <span className="text-nowrap text-sm py-1">
                <span className="font-medium">{element.label}:</span> {element.inputValue}
            </span>
            <span
                className="inline-block cursor-pointer bg-gray-100 rounded-full w-[20px] h-[20px] leading-[1] text-center ml-2"
                onClick={(ev) => {
                    ev.stopPropagation();
                    onClose(element.key)
                }}
            >x</span>
        </div>
    );
}
 
export default FilterElement;