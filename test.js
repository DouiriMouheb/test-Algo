function calculateTime(signalTimes, speed) {
  
  let totalTime = 0;

  
  for (let i = 0; i < signalTimes.length; i++) {
   
    let distance = 300;

    
    if (i % 2 === 0) {
      let waitingTime = signalTimes[i] - distance / speed;
      totalTime += waitingTime;

      console.log("Temps d'attente : ${waitingTime} secondes");
    }

    
    let time = distance / speed;
    totalTime += time;

    console.log("Distance : ${distance} mètres - Temps : ${time} secondes");

    
    totalTime = Math.round(totalTime * 100) / 100;
  }


  return totalTime;
}

let signalTimes = [10, 10, 10];
let speed = 30;

console.log(calculateTime(signalTimes, speed)); 