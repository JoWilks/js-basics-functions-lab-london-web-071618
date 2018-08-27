// Code your solution in this file!

function distanceFromHqInBlocks(street) {
if (street > 42 ) {return street - 42}
else if (street < 42) {return 42 - street}
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs((street1 - street2) * 264)
}

function calculatesFarePrice(start, destination) {
 let feet = Math.abs(start - destination) * 264
 if (feet <= 400) {return 0}
 else if (feet >= 400 && feet <= 2000) {return 0.02*(feet-400)}
 else if (feet >=2000 && feet <=2500) {return 25}
 else if (feet >=2500) {return 'cannot travel that far'}
}