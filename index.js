// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
    let x
if(somevalue<42)
return x =  42 - somevalue
else return x = somevalue - 42

}

function distanceFromHqInFeet(somevalue) {
   let x =  distanceFromHqInBlocks(somevalue);

  return x * 264
    
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start)
    return (destination - start) * 264
    else return (start - destination) * 264
  }

  function calculatesFarePrice(start, destination) {
   let c = distanceTravelledInFeet(start, destination)
   if(c < 400){
    return 0
   }
   else if (c>400 && c<2000){
    return ((c-400) *2) * 0.01
   }

   else if(c>2000 && c<2500){
    return 25
   }
 
   else return 'cannot travel that far'
  }
