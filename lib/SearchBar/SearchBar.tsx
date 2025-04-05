import { FC, useEffect, MouseEvent, useState } from "react";
import { FilterList } from "./ui/FilterList";
import { ISearchBarItemElement, ISerarchBarFilters } from "./ui/itemElement.Interface";
import { FilterValue } from "./ui/FilterValue";
import { SearchBarColorType } from "./ui/SearchBarColor.type";
import FilterElement from "./ui/FilterElement";
    import '../styles.css';

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
 
type SearchBarStatus = 'filters' | 'value' | 'closed';

export const SearchBar: FC<SearchBarProps> = ({ Label, size, rounded, placeholder, data, color, customColor, onChange }) => {
    const [status, setStatus] = useState<SearchBarStatus>('closed');
    const [availableFilters, setAvailableFilters] = useState<Array<ISearchBarItemElement>>(data);
    const [selectedFilter, setSelectedFilter] = useState<ISearchBarItemElement | null>(null);
    const [appliedFilters, setAppliedFilters] = useState<Array<ISerarchBarFilters>>([]);

    let containerCSS = "border border-gray-300 w-full cursor-text shadow-sm px-5 py-1 flex items-center justify-between ";
    switch (size) {
        case 'sm':
            containerCSS += 'min-h-[25px] ';
            break;

        case 'lg':
            containerCSS += 'min-h-[35px] ';
            break;

        default:
            containerCSS += 'min-h-[30px] ';
            break;
    }

    switch (rounded) {
        case 'sm':
            containerCSS += 'rounded ';
            break;
    
        case 'md':
            containerCSS += 'rounded-md ';
            break;
        default:
            containerCSS += 'rounded-full ';
            break;
    }

    const onSelectedElement = (item: ISearchBarItemElement) => {
        setSelectedFilter(item);
        setStatus("value");
    }

    const onClose = () => {
        setStatus("closed");
        setSelectedFilter(null);
    }

    const deleteFilter = (filterKey: string | number) => {
        setAppliedFilters(prev => {
            return prev.filter(el => el.key != filterKey)
        })
    }

    const vaciarFiltros = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setAppliedFilters([]);
    }

    useEffect(() => {
        setAvailableFilters(data.filter(el => !appliedFilters.some(el2 => el2.key === el.key)));
        if (onChange) {
            onChange(appliedFilters);
        }
    }, [appliedFilters]);

    const onApplyChanges = (value: string) => {
        if (selectedFilter) {
            const newElement: ISerarchBarFilters = {
                inputValue: value,
                ...selectedFilter,
            } 

            setAppliedFilters(prev => [
                ...prev,
                newElement
            ]);
            setSelectedFilter(null);
        }
    }

    return (<div className="relative">
        {
            Label && <p className="text-gray-500 pl-3">{Label}</p>
        }
        <div className={containerCSS}
            onClick={() => {
                if (availableFilters.length > 0) {
                    setStatus("filters");
                }
            }}
        >
            { appliedFilters.length > 0 
            ? <><div className="flex items-center flex-wrap overflow-hidden gap-1">{ appliedFilters.map(el => (
                    <FilterElement key={el.key} element={el} onClose={deleteFilter}/>
                ))}
            </div><div className="px-2 border border-dashed rounded-full text-nowrap text-gray-500 cursor-pointer ml-2 " onClick={vaciarFiltros}>X Borrar</div></>
            :<span className="text-gray-500 pl-2 pr-3 font-normal rounded-full inline-block border border-dashed">{placeholder || '+ Agregar Filtro:'}</span>
            }
        </div>
        {
            (status == 'filters') && <FilterList
                onClose={onClose}
                onSelectElement={onSelectedElement}
                color={color}
                data={availableFilters}
                customColor={customColor}
            />
        }
        {
            (status == 'value') && <FilterValue
                onClose={onClose}
                title={selectedFilter?.label}
                color={color}
                customColor={customColor}
                applyChanges={onApplyChanges}
            />
        }
    </div>);
}