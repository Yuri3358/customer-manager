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
    await fetch(link, access("PUT", {nome, idade, cidade}))
}

async function list() {  //get method
    const request = await fetch(link)
    const response = await request.json()
}

async function update(nome, nova_cidade) { //name for find
    let data = {nome:nome, nova_cidade:nova_cidade} 
    await fetch(link, access("PATCH", data)) //create, retrieve, , delete
}

async function remove(nome) { //name for find
    await fetch(link, access("DELETE", {nome:nome}))
}

