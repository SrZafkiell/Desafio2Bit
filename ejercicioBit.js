const miArray = [8,4,12,7,9,134,12,67,36];
const miArrayVacio = [];
const miArraySolitario = [5]

function mayorArray(array){
    let numeroMayor = 0;
    let j = 0;
    let k = 0;
    let contadorImpares = 0;
    if (array.length == 1){
        return array[0];
    }
    if (array.length > 1){
        for(let i=0; i<array.length;i++){
            if (numeroMayor < array[i]){
                numeroMayor = array[i];
            }
        }
        while (j<array.length) {
            console.log("Elemento "+j+" = "+array[j]);
            j++
        }
        do{
            if (array[k]%2){
                contadorImpares++;
            }
            k++;
        } while (k<array.length);
        console.log("Hay: "+contadorImpares+ " números impares");
        return numeroMayor;
    }else{
        return null;
    }
}

console.log("El número mayor es: "+mayorArray(miArray));
console.log("El número mayor es: "+mayorArray(miArrayVacio));
console.log("El número mayor es: "+mayorArray(miArraySolitario))