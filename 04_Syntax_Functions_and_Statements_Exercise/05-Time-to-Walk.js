function calcWalkTime(steps, footprints, speedKm) {
    // const walkedMeters = steps * footprints;
    // const minutesOfBreak = Math.floor(walkedMeters / 500);
    // const speedInMs = (speedKm * (5/18));

    // const walkingTimeSeconds = walkedMeters / speedInMs;
    // const seconds = walkingTimeSeconds % 60;
    // const minutes = Math.floor(walkingTimeSeconds / 60) + minutesOfBreak;
    // const hours = Math.floor(walkingTimeSeconds / 3600);
    // console.log(`${hours}-${minutes}-${seconds}`);

    const distanceInMeters = steps * footprints;
    const speedInMs = speedKm / 3.6;
    const rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMs + rest;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);
    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

calcWalkTime(4000, 0.60, 5);
calcWalkTime(2564, 0.70, 5.5);