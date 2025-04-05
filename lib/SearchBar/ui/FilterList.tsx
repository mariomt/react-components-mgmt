import { CSSProperties, FC, ReactElement } from "react";
import { ISearchBarItemElement } from "./itemElement.Interface";
import { SearchBarColorType } from "./SearchBarColor.type";
import { getColor } from "./functions";

interface IFilterListProps {
    children?: ReactElement;
    onClose: () => void;
    onSelectElement: (item: ISearchBarItemElement) => void;
    data: ISearchBarItemElement[];
    color?: SearchBarColorType;
    customColor?: string;
}

export const FilterList: FC<IFilterListProps> = ({ children, onClose, onSelectElement, data, color, customColor }) => {
    let extraCSS = "w-full h-[40px] flex items-center justify-between p-2 text-white "
    const stylecss: CSSProperties  = {};

    if (customColor) {
        stylecss.backgroundColor = customColor;
    } else {
        extraCSS += getColor(color);
    }
    
    return (
        <div className="absolute inline-block border border-gray-300 shadow min-w-[180px] left-3 bg-white"
            style={{
                zIndex: 100,
            }}
        >
            {children || <div>
                <div className={extraCSS} style={stylecss}>
                    <p>Filtrar por:</p>
                    <p className="cursor-pointer" onClick={onClose}>X</p>
                </div>
                <div className="">
                    <ul>
                        {
                            data.map(el => (
                                <li 
                                    key={el.key} 
                                    className="cursor-pointer hover:bg-gray-200 px-3 py-1 text-gray-500 font-normal"
                                    onClick={() => onSelectElement(el)}
                                >{el.label}:</li>
                            ))
                        }
                    </ul>
                </div>
            </div>}
        </div>
    );
}
