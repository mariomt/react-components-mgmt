import { CSSProperties, FC, ReactElement, useRef } from "react";
import { SearchBarColorType } from "./SearchBarColor.type";
import { getColor } from "./functions";

interface IFilterValueProps {
    children?: ReactElement;
    onClose: () => void;
    title?: string;
    color?: SearchBarColorType;
    customColor?: string;
    applyChanges: (value: string) => void
}

export const FilterValue: FC<IFilterValueProps> = ({ children, onClose, title, color, customColor, applyChanges }) => {
    let extraCSS = "w-full h-[40px] flex items-center justify-between p-2 text-white ";
    const inputRef = useRef<HTMLInputElement>(null);
    const stylecss: CSSProperties  = {};

    if (customColor) {
        stylecss.backgroundColor = customColor;
    } else {
        extraCSS += getColor(color);
    }

    const handleClick = () => {
        if (inputRef && inputRef.current) {
            applyChanges(inputRef.current.value);
            inputRef.current.value = "";
            onClose();
        }
    }

    return (
        <div className="absolute border border-gray-300 shadow min-w-[180px] left-3">
            {children || <div>
                <div className={extraCSS} style={stylecss}>
                    <p>{title || "Filtro"}</p>
                    <p className="cursor-pointer" onClick={onClose}>X</p>
                </div>
                <div className="py-5 px-2 min-h-[80px] flex items-end">
                    <input
                        ref={inputRef}
                        type="text" 
                        placeholder="Inicia con"
                        className="border-b border-b-gray-300 py-1 px-2 text-gray-500 focus:outline-0"
                    />
                </div>
                <div className="flex justify-end px-4">
                    <button onClick={handleClick} className="text-gray-400 py-3 hover:underline cursor-pointer">APLICAR</button>
                </div>
            </div>}
        </div>
    );
}
