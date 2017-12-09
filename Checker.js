var Checker = function ( checkCol, checkRow, team, status){
  this.checkRowLetter = function(letter){ switch(letter){
    case 1: 
    return "a";
    break;
    case 2:
    return "b";
    break;
    case 3:
    return "c";
    break;
    case 4:
    return "d";
    break;
    case 5:
    return "e";
    break;
    case 6:
    return "f";
    break;
    case 7:
    return "g";
    break;
    case 8:
    return "h";
    break;
  }
  };
  this.darkPieceColor  = 0;
  this.lightPieceColor = color('rgb(200, 0, 0)');
  this.slightlyLighterColor = color('rgb(200, 50, 50)');
  //this.checkPos = this.checkRowLetter(checkRow,checkRow)  + checkCol + " ";
  //this.help = [];
  //this.mouseClicked(){
   //checkPos(mouseX, MouseY);
  //}
  this.x = checkCol;
  this.y = checkRow;
  this.r = this.sqr/2;
  this.onClick = function(){
    //px,py
  //  let d = dist(px, py, this.x, this.y);
  //  if (d < this.r){
      console.log("hello?");
  //  }
  }
  this.name = "Checker number " + this.checkRowLetter + checkCol + " ";
  checkPosName += this.name;
  this.sqr = height/8;
  this.team = team;
  this.sSize = this.sqr/1.15
  this.dead = "alive";
  if(status){
    return this.dead = "dead";
  }
  if(team == "black"){  
    fill(this.darkPieceColor+40);    
    
  }else{
    //var redfill = color('rgb(200, 0, 0)');
    fill(this.slightlyLighterColor);
 
  }
  this.drawCircle = ellipse(checkCol*this.sqr-this.sqr/2, checkRow*this.sqr-this.sqr/2, this.sSize, this.sSize);
  if(status){
    return this.dead = "dead";
  }
  if(team == "black"){  
    fill(this.darkPieceColor);    
    
  }else{
    //var redfill = color('rgb(200, 0, 0)');
    fill(this.lightPieceColor);
 
  }
  this.drawOtherCircle = ellipse(checkCol*this.sqr-this.sqr/2, checkRow*this.sqr-this.sqr/2, this.sSize*.8, this.sSize*.8);
  this.drawChecker = this.drawCircle + this.drawOtherCircle;

};
