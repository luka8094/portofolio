let squares = document.getElementsByClassName('square')

let squaresArray = Array.from(squares).forEach( e => console.log(e))

console.log(squaresArray)


console.log(squares)

/*let squaresArray = Array.from(squares.entries())

for(let i = 0; i < squares.length; i++){
    squaresArray.push(squares[i])
}

console.log(squaresArray)*/


function changeBorder(element){
    console.log(element)
    element.border[radius] = '100px'
    element.mozBorderRadius = '100px'
    element.webkitBorderRadius = '100px'
}