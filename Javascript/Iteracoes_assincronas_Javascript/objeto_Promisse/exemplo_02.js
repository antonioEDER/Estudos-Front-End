//Promisse é um objeto para processamento assincrono
//4 estados da promisse
// 1º pending = esperando
// 2º fulfilled = sucesso promessa foi cumprida
// 3º reject = promessa rejeitada (erro)
// 4º settled = já rejeito ou realizado

let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => { resolve('Promisse 01 fulfilled')}, 2000);
}).then((sucesso)=>{ // aqui acontece o fulfilled
    console.log('Resultado = ', sucesso)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => { reject('Promisse 01 reject')}, 3000);
})
  .then((sucesso)=>{
    console.log('Resultado = ', sucesso)      
  })
  .catch((fracasso)=>{ // aqui acontece o reject
    console.error('Resultado = ', fracasso)
   })