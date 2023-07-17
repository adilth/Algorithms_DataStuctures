/**  Description //find adjacent node
@function createGraph
@param {String[][]} edges
@returns {Map<String,String[]>}
 */

export function createGraph(edges) {
  let graph = new Map();
  for (let [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, new Set());

    if (!graph.has(b)) graph.set(b, new Set());
    graph.get(a).add(b);
    graph.get(b).add(a);
  }
  return graph;
}
/**
 * @param {String} node
 * @param {Map<String,String[]>} graph
 * @return {String[]}
 */
export default function findAdjacentNode(node, graph) {
  for (let [key, value] of graph) {
    if (key.includes(node)) {
      return value;
    }
  }
}
const routes = [
  ["A", "B"],
  ["B", "A"],
  ["A", "C"],
  ["C", "A"],
];

let graph = createGraph(routes);
let graph2 = createGraph(routes);

console.log(createGraph(routes));
console.log(findAdjacentNode("A", graph)); //[ 'JFK', 'LIM', 'LAX', 'PHE' ]//[ 'NYR', 'OKL', 'HEL' ]
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
