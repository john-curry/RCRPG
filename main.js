var canvas;
var graphics;
var para;
var images = []; 
var timeinterval = 100;
var game = [];
var keysdown = [];
init();

function init() {
  canvas   = document.getElementById('canvas');
  graphics = canvas.getContext('2d');
  para     = document.getElementById('p');
  loadContent();
  $(document).keydown( onkeydown ); 
  $(document).keyup( onkeyup );
  $(document).keypress ( onkeypress );  
  window.setInterval( loop , timeinterval ); 
  }  

function onkeypress( e ) {
  game['player'].onkeypress( e );
  }

function onkeyup( e ) {
  if ( e.which == 119 ) { 
    if ( -1 != $.inArray( 'up' , keysdown ) ) {
      keysdown.pop( 'up' );
      }
    }
  if ( e.which == 115 ) {
    if ( -1 != $.inArray( 'down' , keysdown ) ) {
      keysdown.pop( 'down' );
      }
    }
  if ( e.which == 100 ) {
    if ( -1 != $.inArray( 'right' , keysdown ) ) {
      keysdown.pop( 'right' );
      }
    }
  if ( e.which == 97 ) {
    if ( -1 != $.inArray( 'left', keysdown ) ) {
      keysdown.pop( 'left' );
      }
    }
  }
function onkeydown( e ) {
   if ( e.which == 119 ) { 
    if ( -1 == $.inArray( 'up' , keysdown ) ) {
      keysdown.push( 'up' );
      }
    }
  if ( e.which == 115 ) {
    if ( -1 == $.inArray( 'down' , keysdown ) ) {
      keysdown.push( 'down' );
      }
    }
  if ( e.which == 100 ) {
    if ( -1 == $.inArray( 'right' , keysdown ) ) {
      keysdown.push( 'right' );
      }
    }
  if ( e.which == 97 ) {
    if ( -1 == $.inArray( 'left', keysdown ) ) {
      keysdown.push( 'left' );
      }
    }
  }

function loop() {
  update( timeinterval );
  draw( game , graphics );
  }


function loadContent() {
  loadImage( 'player' , 'player.jpg' );
  loadGObj( 'player' , ( new player() ).init( canvas.width / 2 , canvas.height / 2 , 100 , 50 ) ); 
   
  
  }

function draw( game ,  gfx ) {
  gfx.clearRect( 0 , 0 , canvas.width , canvas.height );  
  game['player'] .draw( images['player'] , gfx ); 
  
  }

function update( ti ) {
  for ( var os in game ) {
    game[os].update( ti , keysdown );
    }
  }

function loadImage( indexname , path ) {
  images[indexname] = new Image();
  images[indexname].src = path;
  }
function loadGObj( indexname , obj ) {
  game[indexname] = obj;
  }


