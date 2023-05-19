
async function query(){
    let products = await fetch('http://localhost:3333/products')
    .then(response => {
        return response.json()
    })
    let content =''
    products.forEach(product => {
        content += `<tr> <td> ${product.name} </td> <td> ${product.description} </td> <td> ${product.quantity} </td> <td> ${product.created_at} </td> <td> <i onclick="exclude('${product.id}')" class="bi bi-trash"/> </td> <td> <i onclick="edit('${product.id}','${product.name}', '${product.description}', ${product.quantity})" class="bi bi-pencil"/> </td> </tr>`
    });
    document.getElementById("table").innerHTML = content

}   

async function confirm(){
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let quantity = Number(document.getElementById("quantity").value)

    if (!name || !description || !quantity ){
        alert("Informe todos os campos ")
        return
    }

    let method 
    let product
    if (!id){
        method = 'POST'
        product = {name, description, quantity}

    } else {
        method = 'PUT'
        product = {id, name, description, quantity}

    }


    await fetch('http://localhost:3333/product', {
        method: method,
        body: JSON.stringify(product), //converte obj JSON em string
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then(response => alert('Operação realizada com sucesso'))
    .catch(error => alert('Problema na inserção'))
    
    // chama a função consulta
    query()
    document.getElementById("name").value = ''
    document.getElementById("description").value = ''
    document.getElementById("quantity").value = ''
}   

async function exclude(id){
    const approve = confirm('Deseja realmente remover o produto?')
    if(approve){ //quer remover
        await fetch(`http://localhost:3333/product/${id}`,{
            method: 'DELETE'
        })
        .then( response => {
            alert(`Produto removido com sucesso`)
            query()
        })
        .catch(error => {
            alert(`Algo deu errado, tente novamente`)
        })
    }
}

function edit(id, name, description, quantity){
    document.getElementById('id').value = id
    document.getElementById('name').value = name
    document.getElementById('description').value = description
    document.getElementById('quantity').value = quantity
}

async function purchase(){
    let id = document.getElementById("id").value
    let quantity = Number(document.getElementById("quantity").value)
    let product = {id, quantity}
    await fetch('http://localhost:3333/product/purchase', {
        method: 'PATCH',
        body: JSON.stringify(product), //converte obj JSON em string
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then(response => alert('Operação realizada com sucesso'))
    .catch(error => alert('Problema na operação'))
}

async function sell(){
    let id = document.getElementById("id").value
    let quantity = Number(document.getElementById("quantity").value)
    let product = {id, quantity}
    await fetch('http://localhost:3333/product/sell', {
        method: 'PATCH',
        body: JSON.stringify(product), //converte obj JSON em string
        headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
    })
    .then(response => alert('Operação realizada com sucesso'))
    .catch(error => alert('Problema na operação'))
}
