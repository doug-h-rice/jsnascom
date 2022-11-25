


function key(){
    if (! document.getElementById){
      return
    }

    var ip =document.getElementById("ip_key")

     //alert(F1.ip.value);
     var button = ("0x"+ip.value )*1 
     var button1 = ip.value 
     replay_kbd( ip.value )
     ip.value="";
}


function bigSize(){
  scale = 2	
  var screen = document.getElementById("screen");
  if ( screen ){
    screen.width  = 768
    screen.height = 480
  }
  grabKeys();
  paintScreen();
}

function smallSize(){
  scale = 1
  var screen = document.getElementById("screen");
  if ( screen ){
    screen.width  = 384
    screen.height = 240
  }
  grabKeys();
  paintScreen();
}

function toggleSize(){

  if ( scale == 1 ) { 
    bigSize() 
  } else {
    smallSize()
  }	
}

function toggleCrib0(){
    if ( !document.getElementById("crib") ){
      return
    }
	
    if ( !document.getElementById("cribButton") ){
      return
    }
	document.getElementById("cribButton").value = "toggle"

    var crib =document.getElementById("crib")
	if ( crib.rows < 3 ){
     crib.rows  = 10;
	 crib.cols = 50;

	} else {
     crib.rows  = 1;
	 crib.cols = 5;
    }	
}


/**********************************
* Keypresses into screen on PC or input box for tablets 
**********************************/

function grabKeys() {
	document.onkeydown  = keyDown;
	document.onkeyup    = keyUp;
	document.onkeypress = keyPress;
}

function nu(){
}

function ungrabKeys(){
        document.onkeydown  = nu;
        document.onkeyup    = nu;
        document.onkeypress = nu;
}


function port10_LED( octet ){ 
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  
  var colour

  for ( var x = 0 ; x < 8  ; x++  ){
    if ( octet & ( 1 << (7-x) ) ) { 
      colour = "#F33";
    } else {
      colour = "#ddd";
    }
    ctx.fillStyle = colour 
    ctx.fillRect(20*x+5, 5, 15,15);
  }
}

port10_LED( 0 )

