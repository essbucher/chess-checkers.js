function setup() {
  let side = 600;
  var cnv = createCanvas(side, side, P2D);
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  cnv.position(x, y);
}
var checkNum = 1;
var inst = -1;

var collum = [];
var rows = [];
var gridSquares = [];
var checkPos = [];
var checkPosName = [];
var tileBuild = function(){
  this.yGrid = [];
  this.xGrid = [];
  gridSquares += this.yGrid;
};






var gridDef = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0]
];
var gridPos = gridDef;
var checkArr = [];
checkArr += "ellephant";
checkArr += gridDef;



var sqr;






function draw() {
  //var click =   console.log('new Checker(1, 1, "red", false).onClick'); //Checker.onClick(mouseX, mouseY);
  

  //var redfill = color('rgb(200, 0, 0)');
  var fixForRead = function (col, row) {
    row ++;
  };
  
  var string = " ";

  let Square = function ( col, row ) {
    collum.push(col);
    rows.push(row);
    this.colString = " " + col + row + " ";
    rect( x + w*sqr, y+sqr*h , sqr, sqr );
    
    //document.body.append(col, row, string);
    
  };


    
    var x = 0;
    sqr = height / 8;

    var y = 0;
    var darkTileFill  = 'rgb(34,140,34)';
    var lightTileFill = 230;
    //background('rgb(34,139,34)');
    noStroke();
    for(var h = 0; h<8; h++){
      for(var w = 0; w<8; w++){
        if((w + h)%2 == 0){
          fill(lightTileFill);
          //rect( x + w*sqr, y+sqr*h , sqr, sqr);
          
          new Square(h, w);
         
        }else{
          fill(darkTileFill);
         // rect ( x + w*sqr, y+sqr*h, sqr, sqr);
          new Square(h, w);
          
        }        
      }
    }
  
    var xpos = 0;
    var row = 0;
    var ypos = sqr*row;
    var hpos = 0;
    
  //Checker default Settings
    var tTeam = "black";
    var sStatus = false;
    
    
    var checkRow;
    var checkCol;
    var checkArrPos = function(xxy, yyy){

    };
function checkNumr(checkC, checkR, color, ssStatus){
  colorN = function(color){
    if( color == "black"){
      return "B";
    } else if (color == "red"){
      return "R";
    }
  }
  //var  checKer[colorN][checkNum] = new Checker (checkCol, checkRow, "black", sStatus);
}
    var checkGrid = function(gridPosD){
      for( var checkGridC = 0; checkGridC < gridPosD.length; checkGridC++){
        for( var checkGridR = 0; checkGridR < gridPosD.length; checkGridR++){
          if(gridPosD[checkGridR][checkGridC] == 1){
            checkRow = checkGridR + 1;
            checkCol = checkGridC + 1;
            checkNumr(checkCol, checkRow, "black", sStatus);
            var checKerB = new Checker(checkCol, checkRow, "black", sStatus);
            checkArr += checKerB;
            checkNum++;
          } else if (gridPosD[checkGridR][checkGridC] == 2){            
            checkRow = checkGridR + 1 ;
            checkCol = checkGridC + 1 ;
            var checKerR = new Checker (checkCol, checkRow, "red", sStatus);
            checkArr += checKerR;
            checkNum++;
          }
        }
      }
      return checkArr;
    };
    checkGrid(gridPos);
    

  //  console.log(checkArr);
 //aLoopFunction();
  

}
var allTheCheckers = [];


function placeChecker(mousex, mousey, square) {
    

    let daMouseX = Math.ceil(mousex / square)-1;
   
    let daMouseY = Math.ceil(mousey / square)-1;
    console.log(daMouseX, daMouseY);


    let ccolor;
    var checkIfHasChecker = function (anotherGridPos) {
        if (anotherGridPos === 1 || anotherGridPos === 2) {
            return ccolor = anotherGridPos;
        } else {
            //console.log(anotherGridPos);
            return false;
        }
    };
    //checkerGobbler . . . 
    var checkerGobbler = function (gridPossy) {
        if (checkIfHasChecker(gridPossy)) {
            //alert("yes, a checker!");
            gridPos[daMouseY][daMouseX] = 0;
            console.log(ccolor);
        } else {
            alert('no, that is not a checker...');
        }
        
    }
    checkerGobbler(gridPos[daMouseY][daMouseX]);
        

}
    //mousex
    //one way = label the squares, give squares knowledge of dimension, check if in demensions, gridPos = Square pos

function mouseClicked(){
    placeChecker(mouseX, mouseY, sqr);
}
//



function aLoopFunction() {
  noLoop();
}
