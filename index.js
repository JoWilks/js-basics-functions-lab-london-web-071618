// Code your solution in this file!

function distanceFromHqInBlocks(street) {
if (street > 42 ) {return street - 42}
else if (street < 42) {return 42 - street}
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
}