const desglosarString = (str, type) => {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return Object.values(str).filter((item, index, array) => {
    if (type == "vocales") return vocales.includes(item);
    if (type == "consonantes") return !vocales.includes(item);
  }).length;
};

const twoSum = (numbers, number) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == number && i != j) return [i, j];
    }
  }
};

const conversionRomana = (cifras) => {
  const rbasic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
   const newcifras = Object.values(cifras).map((c)=>{
    return rbasic[c]
  })

  for(let i = 0; i < newcifras.length-1; i++){
    if(newcifras[i] < newcifras[i+1]){
        newcifras[i] = newcifras[i+1] - newcifras[i]
        newcifras[i+1] = 0
    }
  }

  return newcifras.reduce((acumulado,actual)=>{return acumulado + actual})
}

