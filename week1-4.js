const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
  console.log( 'in enoughSeats' );
  //check if seatsInCar >= number of passengers
  if ( seatsInCar >= passengers.length ){
    return true;
  } //end enough seats
  else{
    return false;
  }// end not enough seats
} //end enoughSeats

function getInCar( nameOfPassenger ){
  console.log( 'in getInCar', nameOfPassenger );
  // push this new passenger into our passengers arrays
  passengers.push( nameOfPassenger );
  return passengers;
} //end of getInCar

function readyForRoadtrip(){
  console.log( 'in readyForRoadtrip' );
  if( enoughSeats() && tankFull ){
    return true;
  }// end all good
  else{
    return false;
  } //not ready
} //end of readyForRoadtrip

getInCar( 'you' );
getInCar( 'Dev' );
getInCar( 'Commander Wisdom' );
getInCar( 'Anjie' );

console.log( ' enough seats? ', enoughSeats() );
console.log( 'are we ready for the trip?', readyForRoadtrip() );
