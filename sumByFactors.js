// I = [12, 15]; // result = [[2, 12], [3, 27], [5, 15]]
export function subByFactors(lst) {
  if(lst.length === 0) return []
  const result = [];

  const primeList = Array
  .from(Array(Math.max(...lst.map(item => Math.abs(item)))+1).keys())
  .slice(2)
  .filter(item => Array.from(Array(Math.round(Math.sqrt(item))+1).keys())
    .slice(2)
    .filter(sub_item => item % sub_item === 0).reduce((t, c) => t+c, 0) === 0
  );
  
  primeList.forEach(item => {
    const l = lst
    .filter(lst_item => lst_item % item === 0);
    const s = l
    .reduce((t, c) => t + c, 0);
    
    if (l.length !== 0) result.push([item, s])
  })

  return result
}