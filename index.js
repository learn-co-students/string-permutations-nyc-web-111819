const findAllPermutations = (str) => {
  // console.log(str);
  // str = str.split("");
  if (!str || typeof str !== "string"){
    return "Please enter a string"
  } else if (str.length < 2 ){
    return str
  }
  let hashSet = new Set()
  let resultArray = []

  // let bool = true;
  // let oldString = str;
  // return Math.pow(2 ,str.length)
  console.log(str)
  for(let i=0;i<str.length;i++){
    let char = str[i]
    let remainingChars = str.slice(0,i) + str.slice(i+1,str.length)
    for(let permutation of findAllPermutations(remainingChars)){
      console.log(char, permutation)
      resultArray.push(char + permutation)
      // hashSet.add(char + permutation)
      // hashSet.add(char + permutation)
    }
  }
  // return Object.keys(hashSet)
  debugger
  return resultArray
    


}
findAllPermutations("abcd")
// 'abc'
// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// 'abcc'
// ['abcc', 'acbc','accb', 'bacc', 'bcac', 'bcca', 'cabc', 'ccab', 'ccba', ]