function mergeStrings(s1, s2) {
    let overlap = 0;
  
    for (let i = 1; i <= Math.min(s1.length, s2.length); i++) {
      if (s1.slice(-i) === s2.slice(0, i)) {
        overlap = i;
      }
    }
  
    return s1 + s2.slice(overlap);
}
console.log(mergeStrings("abcde", "cdefgh")); 
console.log(mergeStrings("abaab", "aabab")); 
console.log(mergeStrings("abc", "def")); 

