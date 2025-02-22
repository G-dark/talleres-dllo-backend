const findMax = (numeros) => {
  let mayor = numeros[0];

  for (let i = 0; i < numeros.length; ++i) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

const includes = (numeros, numero) => {
  let include = false;
  for (let i = 0; i < numeros.length; ++i) {
    if (numeros[i] == numero) {
      include = true;
      break;
    }
  }
  return include;
}

const sum = (numeros) => {
  let result = 0;
  for (let i = 0; i < numeros.length; ++i) {
    result += numeros[i];
  }

  return result;
}

const missingNumbers = (numeros) => {
  let menor = numeros[0];

  for (let i = 0; i < numeros.length; ++i) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  let mayor = findMax(numeros);

  let numerosSearched = [];
  let numerosSOnly = [];

  for (let i = menor; i <= mayor; ++i) {
    numerosSearched.push({num: i, searched: false});
    numerosSOnly.push(i)
  }
  for (let i = 0; i < numeros.length; ++i) {
    for (let j = 0; j < numeros.length; ++j) {
        if(numeros[i]>numeros[j]){
            let tmp = numeros[i]
            numeros[i] = numeros[j]
            numeros[j] = tmp
        }
    }
  }

  for(let i = 0; i < numeros.length; ++i){
    if(includes(numerosSOnly,numeros[i])){
        for(let j = 0; j < numerosSearched.length; ++j){
            if(numerosSearched[j].num == numeros[i]){
                numerosSearched[j].searched = true
                break
            }
        }
    }
  }

  let missingNumb = []
  for(let i = 0;i < numerosSearched.length; ++i){
    if(!numerosSearched[i].searched){
        missingNumb.push(numerosSearched[i].num)
    }
  }

  return missingNumb
}

