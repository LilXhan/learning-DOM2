const myFunction = (array) => {
  const newArray = []
  const arrayRepe = []
  const min = Math.min(...array);

  for(let num of array){
    if(num == min){
      arrayRepe.push(num)
    } else if(num != min){
      newArray.push(num)
    } else if(array.length == 0){
      const newArray =  [];
    }
  }
  return newArray.concat(arrayRepe)
}

console.log(myFunction([2,1,3]))
