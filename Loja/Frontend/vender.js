async function montarSelect(){
   const produtos =  await fetch('http://localhost:3333/products')
    .then(resposta => {
        return resposta.json()
    })
    .catch(error => {
        alert( 'Não carregou os produtos')
    })

    let conteudoSelect = ''
    produtos.forEach(prod => {
        conteudoSelect += `<option value='${prod.id}'> ${prod.name} </option>`
    });
    document.getElementById("produto").innerHTML = conteudoSelect
}

async function consultaQted(){
    const idProduto = document.getElementById("produto").value
    const product = await fetch(`http://localhost:3333/productById/${idProduto}`)
    .then(resp => {
        return resp.json()
    })
    .catch(error => {
        alert("Problema ao recuperar quantidade, tente novamente")
    })
    document.getElementById("disponivel").innerHTML = product.quantity
}

async function vender(){
    // recupera os dados do formulário
    const id = document.getElementById("produto").value
    const x = Number(document.getElementById("quantity").value)
    const objeto = {id, x}
   
    // consumir API
    const product = await fetch("http://localhost:3333/product/sell", {
        method: 'PATCH', 
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type' : 'application/json;charset=UTF-8'
        }
    })
    .then(resp => {
        return resp.json()
    })
    .catch(error => {
        alert("Problema na compra")
    })
    alert(product.status)
    document.getElementById("produto").value = ''
    document.getElementById("disponivel").value = ''
    document.getElementById("quantity").value = ''
}