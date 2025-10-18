const iface = {
    m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
}
}

function sort(obj) {
    const res = [];
    for (const key of Object.keys(obj).sort()) {
        res.push([key, obj[key].length]);
    }
    return res;
    
}
console.log(sort(iface));