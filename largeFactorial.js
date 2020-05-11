const add = (addend1, addend2, offset) => {
  const res = [];
  
  addend2 = "0".repeat(offset) + addend2;
   
  if(addend2.length > addend1.length) {
    addend1 = addend1 + "0".repeat(addend2.length - addend1.length);
  }
  
 
  
  let additive = 0;
  for (let i = 0; i < addend2.length; i += 1) {
    const sub_res = Number(addend2[i]) + Number(addend1[i]) + additive;
    additive = Math.floor(sub_res/10);
    res.push(sub_res % 10)
    
    if(i === addend2.length - 1 && additive !== 0) {
      res.push(additive);
      additive = 0;
    }
  }

  return res.join("");
}

const multiple = (multiplicand, factor) => {
  let result = "0";
  
  const addends = []
  
  for (let i = factor.length - 1; i > -1; i -= 1) {
    const currentFD = factor[i];
    
    let additive = 0;
    const res = [];
    
    for (let j = multiplicand.length - 1; j > -1; j -= 1) {
      const currentMD = multiplicand[j];
      
      const sub_res = Number(currentMD) * Number(currentFD) + additive;
      res.push(sub_res % 10);
      additive = Math.floor(sub_res / 10);
      
      if(j===0 && additive !== 0) {
        res.push(additive);
        additive = 0;
      }
    }
    
    addends.push(res)
  }
  
  
  for (let i = 0; i < addends.length; i += 1) {
    result = add(result, addends[i].join(""), i);
  }

  return result.split("").reverse().join("");
}


export function factorial(n){
  let result = "1";
  for (let i = 1; i <= n; i += 1) {
    result = multiple(result, String(i))
  }
  return result;
}