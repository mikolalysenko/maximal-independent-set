"use strict"

function maximalIndependentSet(adjacencies, result) {
  var num_vertices = adjacencies.length
  if(!result) {
    result = new Uint8Array(num_vertices)
  } else {
    for(var i=0; i<num_vertices; ++i) {
      result[i] = 0
    }
  }
i_loop:
  for(var i=0; i<num_vertices; ++i) {
    var nbhd = adjacencies[i]
      , nn = nbhd.length
    for(var j=0; j<nn; ++j) {
      if(result[nbhd[j]]) {
        continue i_loop
      }
    }
    result[i] = 1
  }
  return result
}

module.exports = maximalIndependentSet
