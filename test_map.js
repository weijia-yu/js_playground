function mapFunction(x){
   return x*2
}

function testMap(){
   var numbers = [1,2,3,4]
   numbers = numbers.map(mapFunction)
   return numbers
}
console.log(testMap())
