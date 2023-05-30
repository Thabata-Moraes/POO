
async function entrar(){
    // recupera dados do form 
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const body = {username, password}
    const resposta = await fetch('http://localhost:3333/user/verifica', {
        method: 'POST',
        body: JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json;charset=UTF-8"
        }
    })
    .then(resp => {
        resp.json()
        console.log(resp)
    })
    .catch(error => {
        alert('Erro na execução', error)
        return
    })
    if(resposta === null){
        alert("Usuário e senha não conferem")
        return
    } else {
        alert('OK')
    }

}