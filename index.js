const Calculate = {
  factorial(number){
    if(number === 0){
      return 1
    }
    let sum = number
    for(let i = number - 1; i > 0; i--){
      sum *= i
    }
    return sum
  }
}

module.exports = Calculate;


