//Função para Somar +1
function Somar(params) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {resolve(params+params)}, 3000);
    })
}
//Função para Subtrair -1
function Subtrair(params) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {resolve(params-params)}, 1000);
    })
}

async function Acao() {
    await Somar(4) //await Aguarda resolver o Somar primeiro para depois proseguir
     .then((resultado)=>{
         console.log("Resultado Somar = ", resultado)
     })
     await Subtrair(4) //await Aguarda resolver o Subtrair primeiro para depois proseguir
     .then((resultado)=>{
         console.log("Resultado Subtrair = ", resultado)
     })
}

Acao()