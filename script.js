
var stage
var square
console.log(stage+"")


window.addEventListener("load", () => {
    init()
})


/* adjust_canvas depending on screensize */
function canvasFunction(){

    console.log("here")
    let canvasElement = document.getElementById("splashCanvas")
    if(window.screen.width <= 787 ){
        canvasElement.width = "500"
        canvasElement.height = "600"
        canvasElement.style.margin = "auto"
    }
    /*else if( window.screen.width > 787){
        canvasElement.width = "850"
        canvasElement.height = "700"
        canvasElement.style.margin = "auto"
    }*/
    stage = new createjs.Stage("splashCanvas")
    createjs.Ticker.timingMode = createjs.Ticker.RAF
    createjs.Ticker.addEventListener("tick", handleTick)
    shapeTest()
}

function shapeTest(){
    console.log("reached function")
    for(let i = 0; i < 30; i++){

        if(i > 1 && i < 30) setTimeout( () => {}, 1000)

        square = new createjs.Shape().graphics.beginFill("white").drawRect(0,0,100,100)

        if(square.x < 500){  

            square.x += 100

        }
        if(square.x > 500)
        {
            square.x = 0
            square.y += 100
        }

        console.log("square:"+square.x+","+square.y)

        stage.addChild(square)  
    }
}

/*function shapeTest(){
    console.log("reached function")

        square = new createjs.Shape()
        square.graphics.beginFill("white").drawRect(0,0,100,100)

        square.x = 0
        square.y = 0

        console.log("square:"+square.x+","+square.y)

        stage.addChild(square)
}*/

/*function moveCircle(){
    console.log("reached circle movement function")
    square.x+=1
    square.y+=2
    if(square.x === stage_canvas.width){
        square.x-=1
        square.y+=2
    }
    if(square.y === stage_canvas.height){
        square.x-=1
        square.y+=2
    }
   
}*/

function handleTick(tick){
    stage.update(tick)
}

function init(){
    canvasFunction()
}
