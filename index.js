// Code your solution in this file!

function distanceFromHqInBlocks(street) {
if (street > 42 ) {return street - 42}
else if (street < 42) {return 42 - street}
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return distanceFromHqInFeet (street1) - distanceFromHqInFeet (street2)
}