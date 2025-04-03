import SearchBar from "./SearchBar/SearchBar"

function App() {

  return (
    <>
      <p>Proyecto de componentes en react</p>
      <div className="flex justify-center ">
        <div className="w-[800px]">
          <SearchBar
            data={[
                {key: 1, label: "Nombre", value: 'name' },
                {key: 2, label: "Apellido Paterno", value: 'middlename' },
                {key: 3, label: "Apellido Materno", value: 'lastname' },
                {key: 4, label: "Matrícula", value: 'name' },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
