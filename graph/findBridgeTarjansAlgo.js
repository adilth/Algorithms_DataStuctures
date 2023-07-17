/*Description // Find Bridge (Tarjan's Algorithms)

There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network in any order.
*/
const buildAdjList = (n, connection) => {
  const r = Array(n)
    .fill()
    .map(() => []);
  for (const [a, b] of connection) {
    r[a].push(b);
    r[b].push(a);
  }
  return r;
};

function findBridge(n, connection) {
  const adjList = buildAdjList(n, connection);
  const orderList = Array(n).fill();
  const lowLinkList = Array(n).fill();
  let order = 0;
  let ans = [];
  const dfs = (curr, prev) => {
    orderList[curr] = lowLinkList[curr] = order++;
    for (const next of adjList[curr]) {
      if (!orderList[next]) {
        dfs(next, curr);
        lowLinkList[curr] = Math.min(lowLinkList[curr], lowLinkList[next]);
      } else if (next !== prev)
        lowLinkList[curr] = Math.min(lowLinkList[curr], lowLinkList[next]);
      if (lowLinkList[next] > orderList[curr]) {
        ans.push([curr, next]);
      }
    }
  };
  dfs(0, -1);
  return ans;
}

console.log(
  findBridge(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ])
); //[ [ 1, 3 ] ]
