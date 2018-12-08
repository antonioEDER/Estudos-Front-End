let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => { resolve('Promisse 01 fulfilled')}, 2000);
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => { resolve('Promisse 02 reject')}, 3000);
})

Promise.all([p1, p2])
  .then(([sucesso_p1, sucesso_p2])=>{
    console.log('Sucesso p1 =', sucesso_p1)
    console.log('Sucesso p2 =', sucesso_p2)
  })
  .catch((erro)=>{
    console.log('Erro =', erro)
  })

Promise.race()/// Estudar

  ////