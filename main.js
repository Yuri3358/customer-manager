const root = ReactDOM.createRoot(document.getElementById("root"))

function App(){
    const [user, setUser] = React.useState()
    const [age, setAge] = React.useState()
    const [city, setCity] = React.useState()

    return (
        <section id="content">
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
            <button onClick={() => save()}>Registrar</button>
        </section>
    )
}

root.render(<App/>)