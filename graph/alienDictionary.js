/*Description // alien Dictionary 
In an alien language, surprisingly they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
*/

export function buildGraph(words) {
  const graph = new Map(); // <char, set of characters following it>
  const inboundCountMap = new Map(); // <char, count of characters pointing to it>
  const letters = new Set();

  // Collect all unique characters
  for (const word of words) {
    for (const char of word) {
      letters.add(char);
    }
  }
  for (let i = 1; i < words.length; i++) {
    const prevWord = words[i - 1];
    const currWord = words[i];
    const minLength = Math.min(prevWord.length, currWord.length);
    let j = 0;

    for (; j < minLength; j++) {
      const from = prevWord[j];
      const to = currWord[j];

      if (from !== to) {
        if (!graph.has(from)) {
          graph.set(from, new Set());
        }

        if (!graph.get(from).has(to)) {
          graph.get(from).add(to);
          inboundCountMap.set(to, (inboundCountMap.get(to) || 0) + 1);
        }
        break;
      }
    }

    // Handle invalid case
    if (j === minLength && prevWord.length > currWord.length) {
      return null; // Invalid case
    }
  }

  return { graph, letters, inboundCountMap };
}
export function topologicalSort(graph, letters, inboundCountMap) {
  const result = [];
  while (letters.size > 0) {
    let isHeadFound = false;

    for (const char of letters) {
      if (!inboundCountMap.has(char)) {
        result.push(char);
        letters.delete(char);
        isHeadFound = true;

        if (graph.has(char)) {
          const tos = graph.get(char);

          for (const to of tos) {
            inboundCountMap.set(to, inboundCountMap.get(to) - 1);
            if (inboundCountMap.get(to) === 0) {
              inboundCountMap.delete(to);
            }
          }

          graph.delete(char);
        }
      }
    }
    // Handle invalid case
    if (!isHeadFound && letters.size > 0) {
      return ""; // Invalid case
    }
  }
  return result;
}
export default function alienDictionary(words) {
  const { graph, letters, inboundCountMap } = buildGraph(words);
  if (graph === null) return ""; // Invalid case
  console.log(inboundCountMap);
  // Collect the result
  let result = topologicalSort(graph, letters, inboundCountMap);
  console.log(result);
  return !result.length ? "" : result.join("");
}

const words1 = ["baa", "abcd", "abca", "cab", "cad"];
console.log(alienDictionary(words1)); // Output: 'bdac'
