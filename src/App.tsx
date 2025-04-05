import { FC } from "react";
import { SearchBar } from "../lib/SearchBar/SearchBar";


 
const App: FC = () => {
    return (
    <div>
        <SearchBar
            data={[
                {key: "asd", label: "Nombre", value: "name"},
                {key: "asd1", label: "Apellido", value: "apellido"},
                {key: "asd3", label: "matricula", value: "matricula"},
                {key: "asd4", label: "otro", value: "otro"},
            ]}
        />
    </div>
    );
}
 
export default App;