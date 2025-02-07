convertidorTemp = (c) => {
    return c * (9 / 5) + 32
}
resolvedor = (a, b, c, positivo) => {
    if (positivo) { return (-b + (b ** 2 - 4 * a * c) ** (1 / 2)) / 2 * a 

    }else {
        return (-b - (b ** 2 - 4 * a * c) ** (1 / 2)) / 2 * a 
    }
}
mejorParidad = (num) =>{
    return num % 2 == 0
}
peorParidad = (num) =>{
    let numtmp = num 
   while(numtmp > 0){
    numtmp -=2
   }
   if(numtmp == 0 ){
    return true
   } else {
    return false
   }
    
}

console.log(convertidorTemp(60))
console.log(resolvedor(1,5,4,true))
console.log(resolvedor(1,5,4,false))
console.log(mejorParidad(10))
console.log(peorParidad(10))
