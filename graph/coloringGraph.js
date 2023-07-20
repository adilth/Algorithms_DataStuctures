/**Description // bipartite Graph

You are tasked with splitting the 7th-grade class into two teams for a soccer game. Given a list of students and their “enemies” aka “the kids they can’t be on the same team as”, determine whether it is possible to split the class in two in such a way that no child is on the same team as any of their enemies. If possible, return the two team
@param {{string: string[]}} graph
@return {String[][]|Array}
*/

export default function isBipartite(graph) {
  if (graph === null || typeof graph !== "object") return [];
  let colored = {};
  let par = [[], []];
  let visited = new Set();
  function dfs(node, curr) {
    //  if (visited.has(node)) return;
    visited.add(node);
    colored[node] = curr;
    par[curr].push(node);
    for (let enemy of graph[node]) {
      if (!(enemy in colored)) {
        if (!dfs(enemy, 1 - curr)) return false;
      } else if (colored[enemy] === curr) {
        return false;
      }
    }
    return true;
  }
  for (let node of Object.keys(graph)) {
    if (!visited.has(node)) {
      if (!dfs(node, 0)) return [];
    }
  }
  return par;
}
