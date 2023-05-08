async function query(){
    let products = await fetch('http://localhost:3333/products')
    .then(response => {
        return response.json()
    })
    console.log(products)
}   