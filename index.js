function findAllPermutations(string){
let permutationsArray = []
var fixedStringArray = string.split('')
let stringArray = string.split('')

var fixedStringArrayLength = fixedStringArray.length
var numOfPermutations = factorialize(fixedStringArrayLength)


while(permutationsArray.length < numOfPermutations){
    let newString = "";
    let letter;
    while(stringArray.length > 0){
         letter = stringArray.splice(Math.floor(Math.random() * stringArray.length), 1)
        newString = newString.concat(letter)
    }
    
    if(!permutationsArray.includes(newString)){
    permutationsArray.push(newString)
    }
    newString = ""
    stringArray = string.split('')
}

return permutationsArray
}


function factorialize(num){


   let newNum = 1

  while(num > 1){
 newNum *= num 
num--
  }

  return newNum

}