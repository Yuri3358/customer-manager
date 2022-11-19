const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const [nome, setUser] = React.useState()
    const [idade, setAge] = React.useState()
    const [cidade, setCity] = React.useState()
    const [data, setData] = React.useState([])
    const [trigger, setTrigger] = React.useState(0)

    
    React.useEffect(() => {
        fetch(link)
        .then(req => req.json())
        .then(res => {
            setData(res)
        })
    }, [trigger])
    
    
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
                    onClick={() => setTrigger(trigger + 1)}>Consultar
                </button>
            </div>

            <div id="data_output">
                <h1>Dados</h1>
                <textarea 
                    defaultValue={Object.values(data).map(element => element.nome + "\r\n")} 
                    readOnly={true}
                    className="outputs"
                    id="names">
                </textarea>

                <textarea 
                    defaultValue={Object.values(data).map(element => element.idade + "\r\n")} 
                    readOnly={true}
                    className="outputs"
                    id="ages">
                </textarea>

                <textarea
                    defaultValue={Object.values(data).map(element => element.cidade + "\r\n")} 
                    readOnly={true}
                    className="outputs"
                    id="cities">
                </textarea>
            </div>
        </section>
    )
}

root.render(<App/>)