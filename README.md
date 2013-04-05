# maximal-independent-set

Finds a [maximal independent vertex set](http://en.wikipedia.org/wiki/Maximal_independent_set).  No guarantees that it is [maximum](http://en.wikipedia.org/wiki/Independent_set).

## Install

    npm install maximal-independent-set

## Example

```javascript
var independetSet = require("maximal-independent-set")

//Generate a graph
console.log(independentSet(
  [[1, 3],
   [0, 2],
   [3, 1],
   [0, 2]]))
```

## `require("maximal-independent-set")(adjacency_list[, result])`
Given a graph encoded as an adjacency list, compute a maximal independent vertex set (aka vertex packing).

* `adjacency_list` is an array with length = number of vertices, where each ith entry is an array representing the neighbors of vertex i.  If your graph is encoded as an edge list instead of an adjacency list, you can use the [`stars`](https://npmjs.org/package/stars) npm module to make the necessary conversion.
* `result` is an optional array that gets the result of the independent set.  If not specified, a new Uint8Array is created.

**Returns** A vector whose ith entry determines whether the vertex is contained in the independent set or not

# Credits
(c) 2013 Mikola Lysenko. MIT License

