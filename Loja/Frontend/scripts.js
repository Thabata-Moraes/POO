
async function query(){
    let products = await fetch('http://localhost:3333/products')
    .then(response => {
        return response.json()
    })
    let content =''
    products.forEach(product => {
        content += `<tr> <td> ${product.name} </td> <td> ${product.description} </td> <td> ${product.quantity} </td> <td> ${product.created_at} </td> </tr>`
    });
    document.getElementById("table").innerHTML = content

}   

async function register(){
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let quantity = Number(document.getElementById("quantity").value)
    let product = {name, description, quantity}
    await fetch('http://localhost:3333/product', {
        method: 'POST',
        body: JSON.stringify(product), //converte obj JSON em string
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then(response => alert('Inserção realizada com sucesso'))
    .catch(error => alert('Problema na inserção'))
    // chama a função consulta
    query()


}   