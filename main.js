const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const [user, setUser] = React.useState()
    const [age, setAge] = React.useState()
    const [city, setCity] = React.useState()

    return (
        <section id="content">

            <header> Gerenciador de Clientes</header>

            <label htmlFor="userinput">Nome</label>

            <input 
                className="entries" 
                id="userinput" 
                onChange={e => setUser(e.target.value)}>
            </input>

            <label htmlFor="ageinput">Idade</label>

            <input 
                className="entries" 
                id="ageinput"
                onChange={e => setAge(e.target.value)}>
            </input>

            <label htmlFor="cityinput">Cidade</label>

            <input 
                className="entries" 
                id="cityinput"
                onChange={e => setCity(e.target.value)}>
            </input>
            <div id="buttonsplace">

                <button 
                    className="buttons" 
                    onClick={() => register({user, age, city})}>Registrar
                </button>
                <button 
                    className="buttons" 
                    onClick={() => remove(user)}>Remover
                </button> <br/> 
                <button
                    className="buttons"
                    onClick={() => update({user, age, city})}>Atualizar
                </button>
                <button
                    className="buttons"
                    onClick={() => list()}>Consultar
                </button>
            </div>
        </section>
    )
}

root.render(<App/>)