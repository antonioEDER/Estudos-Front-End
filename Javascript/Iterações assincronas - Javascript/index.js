var teste = true
 var promise = new Promise((resolve, reject)=>{
    if(teste){
        resolve('É verdadeiro')
    }
    else{
        reject('É false')
    }
 })

 promise.then((result)=>{
     console.log('result = ', result)
 })

 var promise2 = new Promise(function(resolve, reject) {
    resolve(1);
  });
  
  promise2.then(function(val) {
    console.log(val); // 1
    return val + 2;
  }).then(function(val) {
    console.log(val); // 3
  })