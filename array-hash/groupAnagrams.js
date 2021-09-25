function Anagrams(n, string_list) {
  // code here
  let hash = "a0b0c0d0e0f0g0h0i0j0k0l0m0n0o0p0q0r0s0t0u0v0w0x0y0z0";
  let obj = {};
  for (let i = 0; i < n; i++) {
    const word = string_list[i];
    let hashed = hashing(hash, word);
    if (obj[hashed]) {
      obj[hashed].push(word);
    } else {
      obj[hashed] = [word];
    }
  }
  ans = Object.values(obj);
  return ans;
}

function hashing(hash, str) {
  let newHash = hash.split("");
  for (let k = 0; k < str.length; k++) {
    const index = newHash.indexOf(str[k]);
    newHash[index + 1] = parseInt(newHash[index + 1]) + 1;
  }
  return newHash.join("");
}
let hash = "a0b0c0d0e0f0g0h0i0j0k0l0m0n0o0p0q0r0s0t0u0v0w0x0y0z0";
console.log(Anagrams(4, ["bfj", "tro", "ffa", "rph"]));
console.log(hashing(hash, "ffa"));
