/** Description // group anagrams
 * group all anagrams in a group array
 *
 */

export default function groupAnagrams(strs) {
  if (!Array.isArray(strs) || strs.length === 0) return [];
  let map = new Map();
  strs = strs.filter((str) => typeof str === "string");
  let order = strs.map((str) => String(str).split("").sort().join(""));
  for (let i = 0; i < strs.length; i++) {
    const char = strs[i];
    if (!map.has(order[i])) {
      map.set(order[i], [char]);
    } else {
      map.get(order[i]).push(char);
    }
  }

  return map;
}

function groupAnagrams2(strs) {
  if (!Array.isArray(strs) || !strs.length) return [];
  let map = new Map();

  for (const char of strs) {
    let sorted = char.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(char);
    } else {
      map.set(sorted, [char]);
    }
  }
  return map;
}

let group = ["eat", "ate", "tea", "elbow", "lowbe"];
console.log(groupAnagrams(group));
console.log(groupAnagrams2(group));
