import { FC, useEffect, useState } from "react";
import { FilterList } from "./ui/FilterList";
import { ISearchBarItemElement, ISerarchBarFilters } from "./ui/itemElement.Interface";
import { FilterValue } from "./ui/FilterValue";
import { SearchBarColorType } from "./ui/SearchBarColor.type";
import FilterElement from "./ui/FilterElement";

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

const SearchBar: FC<SearchBarProps> = ({ Label, size, rounded, placeholder, data, color, customColor, onChange }) => {
    const [status, setStatus] = useState<SearchBarStatus>('closed');
    const [availableFilters, setAvailableFilters] = useState<Array<ISearchBarItemElement>>(data);
    const [selectedFilter, setSelectedFilter] = useState<ISearchBarItemElement | null>(null);
    const [appliedFilters, setAppliedFilters] = useState<Array<ISerarchBarFilters>>([]);

    let containerCSS = "border border-gray-300 w-full cursor-text shadow-sm px-5 flex items-center ";
    switch (size) {
        case 'sm':
            containerCSS += 'h-[25px] ';
            break;

        case 'lg':
            containerCSS += 'h-[35px] ';
            break;

        default:
            containerCSS += 'h-[30px] ';
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
            Label && <p>{Label}</p>
        }
        <div className={containerCSS}
            onClick={() => {
                setStatus("filters");
            }}
        >
            { appliedFilters.length>0 
            ? appliedFilters.map(el => (
                <FilterElement key={el.key} element={el} onClose={deleteFilter}/>
            ))
            :<span className="text-gray-400 font-medium">{placeholder || 'Buscar:'}</span>
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
 
export default SearchBar;