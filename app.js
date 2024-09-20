const distance = (addressLat, addressLong, positionLat, positionLong) => Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log(distance(10, 20, 15, 25));