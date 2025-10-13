'use strict'
const list = [ 1, 5, 'oreo', null, true, -2, "cake", 3, 6, 'pie', 'hello', 9, 'javascript'
]
let list2 = [ "kofe"]

 const count = { number: 0, string: 0, object: 0, boolean: 0 }
    for (const item of list) count[typeof item]++
    for (const item of list2) count[typeof item]++
    console.log(count) 
    