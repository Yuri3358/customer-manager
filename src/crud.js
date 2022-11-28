const link = "https://customersapi.netlify.app/.netlify/functions/api/customers"
function access(method, data) {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
}

async function register(data) { //object
    const {nome, idade, cidade} = data
    await fetch(link, access("POST", {nome, idade, cidade}))
}

async function remove(nome) { //name for find
    await fetch(link, access("DELETE", {nome:nome}))
}