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

  keysdown['right'] = false;
  keysdown['left']  = false;
  keysdown['up']    = false;
  keysdown['brake'] = false;
  keysdown['down']  = false;
  $(document).keydown( onkeydown ); 
  $(document).keyup( onkeyup );
  
  window.setInterval( loop , timeinterval ); 
  }  
  

function loop() {
  update( timeinterval );
  draw( game , graphics );
  }


function loadContent() {
  loadImage( 'player' , 'player.jpg' );
  loadGObj( 'player' , 
  ( new player() )
    .init( canvas.width / 2 , canvas.height / 2 ,
      100 , 50 ) ); 
   
  
  }

function draw( game ,  gfx ) {
  gfx.clearRect( 0 , 0 , canvas.width , canvas.height );  
  game['player'] .draw( images['player'] , gfx ); 
  
  }

function update( ti ) {
    game['player'].update( ti , keysdown ); 
  }

function loadImage( indexname , path ) {
  images[indexname] = new Image();
  images[indexname].src = path;
  }
function loadGObj( indexname , obj ) {
  game[indexname] = obj;
  }

function onkeyup( e ) {
  if ( keysdown['right'] == true ) 
    if ( e.which == 68  ) keysdown['right'] = false;
  if ( keysdown['left'] == true ) 
    if ( e.which == 65  ) keysdown['left']  = false;
  if ( keysdown['up'] == true ) 
    if ( e.which == 87  ) keysdown['up']    = false;
  if ( keysdown['down'] == true ) 
    if ( e.which == 83  ) keysdown['down']  = false;
  if ( keysdown['brake'] == true ) 
    if ( e.which == 81  ) keysdown['brake']  = false;
  } 
function onkeydown( e ) {
  if ( keysdown['right'] == false )
    if ( e.which == 68  ) keysdown['right'] = true;
  if ( keysdown['left'] == false )
    if ( e.which == 65  ) keysdown['left']  = true;
  if ( keysdown['up'] == false ) 
    if ( e.which == 87  ) keysdown['up']    = true;
  if ( keysdown['down'] == false )
    if ( e.which == 83  ) keysdown['down']  = true;
  if ( keysdown['brake'] == false )
    if ( e.which == 81  ) keysdown['brake']  = true;
 
  } 


