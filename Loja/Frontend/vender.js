async function montarSelect(){
   const produtos =  await fetch('http://localhost:3333/products')
    .then(resposta => {
        console.log(resposta)
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

async function vender(){
    // recupera os dados do formulário
    const id = document.getElementById("produto").value
    const x = Number(document.getElementById("quantity").value)
    const objeto = {id, x}
   
    // consumir API
    await fetch("http://localhost:3333/product/sell", {
        method: 'PATCH', 
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type' : 'application/json;charset=UTF-8'
        }
    })
    .then(resp => {
        alert("Compra realizada com sucesso")
    })
    .catch(error => {
        alert("Problema na compra")
    })
}