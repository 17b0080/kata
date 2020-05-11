/**
 * permutations('a'); // ['a']
 * permutations('ab'); // ['ab', 'ba']
 * permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 */
export const permutations = (string) => {
  if (string.length === 1) return [string];
  return [...new Set(string.split('').map((char, i) => {
    return permutations(string.slice(0, i) + string.slice(i + 1)).map(permutation => char + permutation);
  }).reduce((pv, cv) => [...pv, ...cv], []))];
};