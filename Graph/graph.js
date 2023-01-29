//  create a graph class 

class Graph {
    // defining vertex array and
    // adjacent List
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // add vertex to the graph
    addVertex(v){
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, [])
    }


    // add edge to the graph
    addEdge( v,w){
        // get the list for vertex v and put the
        // vertex w depending edge between v and w

        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    // prints the vertex and adjacency list
    printGraph(){
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices 
        for(var i of get_keys){
            var get_values = this.AdjList.get(i);
            var conc = "";

            for(var j of get_values)
            conc += j + " ";

            console.log(i + " -> " + conc);
        }
    }
}

var g = new Graph(6);
var vertices = ['A' ,'B','C','D','E', 'F']

for(var i=0; i<vertices.length; i++){
    g.addVertex(vertices[i])
}
g.addEdge['A','B'];
g.addEdge['A','D'];
g.addEdge['A','E'];
g.addEdge['B','C'];
g.addEdge['D','E'];
g.addEdge['E','F'];
g.addEdge['E','C'];
g.addEdge['C','F'];
g.printGraph();