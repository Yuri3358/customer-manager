const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const [nome, setUser] = React.useState()
    const [idade, setAge] = React.useState()
    const [cidade, setCity] = React.useState()
    const [data, setData] = React.useState()
    
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
                    onClick={() => register({nome, idade, cidade})}>Registrar
                </button>

                <button 
                    className="buttons" 
                    onClick={() => remove(nome)}>Remover
                </button> <br/>
                
                <button
                    className="buttons"
                    onClick={() => update({nome, idade, cidade})}>Atualizar
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