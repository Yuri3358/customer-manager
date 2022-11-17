const link = "https://customersapi.netlify.app/.netlify/functions/api/customers"
function access(method) {
    return {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
}
function register(data) { //object
    const {nome, idade, cidade} = data
}

function list() {  //get method
    
}

function update(name, nova_cidade) { //name for find 
}

function remove(name) { //name for find
}