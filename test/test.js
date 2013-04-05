var mis = require("../mis.js")

require("tap").test("maximal independent set", function(t) {

console.log(mis(
  [[1, 3],
   [0, 2],
   [3, 1],
   [0, 2]]))

  t.end()
})