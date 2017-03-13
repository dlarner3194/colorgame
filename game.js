var numberOfSquares = 6;
var colorList = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0;i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for (var i = 0;i < squares.length;i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;

            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colorList = generateRandomColor(numberOfSquares);

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    for(var i = 0;i < squares.length;i++){
        if(colorList[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colorList[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(var i = 0;i < squares.length;i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var randomNum = Math.floor(Math.random() * colorList.length);
    return colorList[randomNum];
}

function generateRandomColor(num){
    var arr = [];

    for (var i = 0;i < num;i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}










