// function to performs BFS

 bfs(startingNode) {
    var visited = {}
    var q= new queue()

    visited(startingNode) = true;
    q.enqueue(startingNode);

    while(!q.isEmpty()){
        var getQueueElement = q.dequeue();
        console.log(getQueueElement);

        var get_List = this.AdjList.get(getQueueElement);
        for(var i in get_List){
            var neigh = get_List[i]

            if(!visited[neigh]){
                visited[neigh]= true;
                q.enqueue(neigh);
            }
        }
    }
}