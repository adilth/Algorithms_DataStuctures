/**  Description //find adjacent node
@function createGraph
@param {String[][]} edges
@returns {Map<String,String[]>}
 */

function createGraph(edges) {
  let graph = new Map();
  for (let [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);

    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  return graph;
}
/**
 * @param {String} node
 * @param {Map<String,String[]>} graph
 * @return {String[]}
 */
function findAdjacentNode(node, graph) {
  for (let [key, value] of graph) {
    if (key === node) {
      return value;
    }
  }
}
const routes = [
  ["PHE", "NYR"],
  ["MEX", "OKL"],
  ["HEL", "JFK"],
  ["LOS", "MEX"],
  ["PHE", "OKL"],
  ["LIM", "HEL"],
  ["LOS", "LIM"],
  ["LAX", "HEL"],
  ["PHE", "HEL"],
  ["MEX", "NYR"],
];

let graph = createGraph(routes);
let graph2 = createGraph(routes);

console.log(createGraph(routes));
console.log(findAdjacentNode("HEL", graph)); //[ 'JFK', 'LIM', 'LAX', 'PHE' ]
console.log(findAdjacentNode("PHE", graph2)); //[ 'NYR', 'OKL', 'HEL' ]
/*
Map(9) {
  'PHE' => [ 'NYR', 'OKL', 'HEL' ],
  'NYR' => [ 'PHE', 'MEX' ],
  'MEX' => [ 'OKL', 'LOS', 'NYR' ],
  'OKL' => [ 'MEX', 'PHE' ],
  'HEL' => [ 'JFK', 'LIM', 'LAX', 'PHE' ],
  'JFK' => [ 'HEL' ],
  'LOS' => [ 'MEX', 'LIM' ],
  'LIM' => [ 'HEL', 'LOS' ],
  'LAX' => [ 'HEL' ]
}
*/
