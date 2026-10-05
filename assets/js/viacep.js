export async function buscarcep(cep) {

    let ceplimpo = cep.replace(/\D/g, '')
    
    if (ceplimpo.length !== 8){
        throw new Error ("O cep deve ter 8 dígitos")
    }

    let resposta = await fetch (`https://viacep.com.br/ws/${ceplimpo}/json/`)
    let dados = await resposta.json()

    if (dados.erro){
        throw new Error("CEP não encontrado")
    }

    return dados
}