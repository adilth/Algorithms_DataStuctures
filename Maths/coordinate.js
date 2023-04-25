/*Description // coordinate
In mathematics, the Euclidean distance between two points in Euclidean space is the length of a line segment between the two points.
//
Manhattan distance is a distance measure that is calculated by taking the sum of distances between the x and y coordinates. The Manhattan distance is also known as Manhattan length. In other words, it is the distance between two points measured along axes at right angles.
*/

function euclideanDistance(long1, lati1, long2, lati2) {
  const width = long1 - long2;
  const height = lati1 - lati2;
  return Math.sqrt(width * width + height * height);
}

function manhattanDistance(long1, lati1, long2, lati2) {
  const width = Math.abs(long1 - long2);
  const height = Math.abs(lati1 - lati2);
  return width + height;
}

console.log(euclideanDistance(2, 2, -10, -7)); //15
console.log(manhattanDistance(2, 2, -10, -7)); //21
