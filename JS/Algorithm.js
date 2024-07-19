function randomNumber(max){
    return Math.floor(Math.random() * max)
}

function formatMaze(size, number){
    console.log("begin")
    algorithm(size, number, [], [], 1);
    console.log("done")
}

function algorithm(size, number, visited, intersections, position){
    visited.push(position)
    
    var nextPlace;
    var possibilities = []

    //right
    if (!(visited.filter((place) => place == (position+1)).length) && ((position%size) != 0)){
        possibilities.push(position+1)
    }
    //left
    if (!(visited.filter((place) => place == (position-1)).length) && (((position-1)%size) != 0)){
        possibilities.push(position-1)
    }
    //bottom
    if (!(visited.filter((place) => place == (position+size)).length) && ((position+size) <= (size*size))){
        possibilities.push(position+size)
    }
    //top
    if (!(visited.filter((place) => place == (position-size)).length) && ((position-size) > 0)){
        possibilities.push(position-size)
    }


    if (possibilities.length > 1){
        intersections.push(position)
    }
    else if (possibilities.length == 0){
        if (intersections.length == 0){
            return
        }
        else{
            let index = randomNumber(intersections.length)
            nextPlace = intersections[index]
            intersections.splice(index, 1)
            algorithm(size,number,visited, intersections,nextPlace)
            return
        }
    }

    let index = randomNumber(possibilities.length)
    nextPlace = possibilities[index]
    removeBarrier(size,number,position,nextPlace)
    algorithm(size,number,visited,intersections,nextPlace)
    return
}

function removeBarrier(size,number,position, nextPosition){
    var diference = position - nextPosition
    var pos = document.getElementById("Maze-col-"+((size*size)*(number-1) + position))
    var newPos = document.getElementById("Maze-col-"+((size*size)*(number-1) + nextPosition))
    // left
    if (diference == 1){
        pos.classList.add("border-start-0");
        newPos.classList.add("border-end-0");
        pos.style.paddingLeft = "1px"
        newPos.style.paddingRight = "1px"
    }
    // right
    else if (diference == -1){
        pos.classList.add("border-end-0");
        newPos.classList.add("border-start-0");
        pos.style.paddingRight = "1px"
        newPos.style.paddingLeft = "1px"
    }
    // top
    else if (diference == size){
        pos.classList.add("border-top-0");
        newPos.classList.add("border-bottom-0");
        pos.style.paddingTop = "1px"
        newPos.style.paddingBottom = "1px"
    }
    // bottom
    else if (diference == -size){
        pos.classList.add("border-bottom-0");
        newPos.classList.add("border-top-0");
        pos.style.paddingBottom = "1px"
        newPos.style.paddingTop = "1px"
    }
}
