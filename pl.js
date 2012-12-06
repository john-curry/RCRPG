var GObj = {
  x: 4,
  y: 0,
  angle: 0, // in radian
  width: 0,
  hieght: 0
};
GObj.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

function player() {
  this.dtheta = degToRad( 10 );
  this.dx = 0; 
  this.dy = 0;
  this.ddx = 0;
  this.ddy = 0;
  this.maxspeed = 5;
  this.draw = function( image , gfx ) {
    gfx.save();
    tx = this.x + (this.width / 2);
    ty = this.y + (this.height / 2);
    gfx.translate( tx , ty  );
    gfx.rotate( this.angle );
    gfx.translate( -tx , -ty  );
    gfx.drawImage( 
    image , 
    this.x , this.y , 
    this.width , this.height );
    gfx.restore(); 
    };

  this.update = function( dt , kds ) {
    driving( this , kds );
    };
  
  this.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    return this; // why? because i can
    };     
  }

function driving( pl , kds ) {
  pl.angle = Math.atan2( pl.dy , pl. dx );
    if ( kds['right'] ) 
      pl.ddx = 1;
    if ( kds['left'] )
      pl.ddx = -1;

    if ( !kds['right'] && !kds['left'] )
      pl.ddx = 0;
    if ( !kds['up'] && !kds['down'] )
      pl.ddy = 0;

    if ( kds['up'] )
      pl.ddy = -1;
    if ( kds['down'] ) 
      pl.ddy = 1;

    if ( kds['brake'] ) { 
      pl.ddy = pl.ddx = pl.dx = pl.dy = 0 

      }
    pl.x += ( pl.dx += pl.ddx );
    pl.y += ( pl.dy += pl.ddy );
  


  }

player.prototype = GObj;




