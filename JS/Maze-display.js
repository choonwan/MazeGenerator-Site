var mazeCount = 0;
var colCount = 0;
var rowCount = 0;

function generateMaze(size){
    var measurements = 100/size;
    var parent = document.createElement("div");
    parent.className = "Maze container";
    parent.id = "Maze-" + size + "-" + (mazeCount+1);
    document.body.appendChild(parent)
    for(let i = 0; i<size; i++){
        rowCount++
        var child_row = document.createElement("div");
        child_row.className = "row Maze-row g-0";
        child_row.id = "Maze-row-"+ rowCount;
        child_row.style = "height:"+measurements+"%;"
        parent.appendChild(child_row)
        for(let u = 0; u<size; u++){
            colCount++
            var child_col = document.createElement("div");
            child_col.className = "col Maze-col border border-black border-1";
            child_col.id = "Maze-col-"+ colCount;
            child_col.style = "width:" + measurements + "%;height: 100%;"
            child_row.appendChild(child_col);
        }
    }
    mazeCount++
    formatMaze(rowCount,mazeCount)
}
