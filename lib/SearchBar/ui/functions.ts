import { SearchBarColorType } from "./SearchBarColor.type";

export const getColor = (color: SearchBarColorType | undefined) => {
    switch (color) {
        case 'secondary':
            return 'bg-gray-300 ';
        case 'danger':
            return 'bg-red-700 ';
        case 'success':
            return 'bg-green-600 ';
        case 'warning':
            return 'bg-yellow-600 ';
        default:
            return 'bg-gray-900 ';
    }
}