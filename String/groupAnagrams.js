/** Description // group anagrams
 * group all anagrams in a group array
 *
 */

export default function groupAnagrams(strs) {
  if (!Array.isArray(strs) || !strs.length) return [];
  let map = new Map();

  for (const char of strs) {
    let sorted = char.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(char);
    } else {
      map.set(sorted, [sorted]);
    }
  }
  return map;
}

let group = ["eat", "ate", "tea", "elbow", "lowbe"];
console.log(groupAnagrams(group));
console.log(groupAnagrams());
