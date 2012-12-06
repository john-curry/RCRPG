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
  this.dtheta = 10; 
  this.dx = 0; 
  this.dy = 0;
  this.ddx = 0;
  this.ddy = 0;
  this.speed = 0;
  
  this.draw = function( image , gfx ) {
    gfx.save();
    tx = this.x + (this.width / 2);
    ty = this.y + (this.height / 2);
    gfx.translate( tx , ty  );
    gfx.rotate( degToRad( this.angle ) );
    gfx.translate( -tx , -ty  );
    gfx.drawImage( 
    image , 
    this.x , this.y , 
    this.width , this.height );
    gfx.restore(); 
    };

  this.update = function( dt , kds ) {
    angledriving( this , kds );
    };
  
  this.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    return this; // why? because i can
    };     
  }

function angledriving ( pl  , kds ) {
    if ( pl.angle < 0 ) {
      pl.angle = 360 + pl.angle;
      }
    if ( kds['left'] ) {
      if ( pl.angle % 360 > 180 )   
        pl.angle -= pl.dtheta;
      if ( pl.angle % 360 < 180 )
        pl.angle += pl.dtheta;
      }
     if ( kds['right'] ) {
      if ( pl.angle % 360 > 180 && pl.angle > 0 )   
        pl.angle += pl.dtheta;
      if ( pl.angle % 360 < 180 && pl.angle > 0 )
        pl.angle -= pl.dtheta;
      }
     if ( kds['down'] ) {
      if ( pl.angle % 360 > 90 && pl.angle % 360 <= 270 )   
        pl.angle -= pl.dtheta;
      if ( pl.angle % 360 < 90 || pl.angle % 360 >= 270 )
        pl.angle += pl.dtheta;
      }

    if ( kds['up'] ) {
      if ( pl.angle % 360 < 90 || pl.angle % 360 >= 270 )
        pl.angle -= pl.dtheta;
      if ( pl.angle % 360 > 90 && pl.angle % 360 <= 270 )
        pl.angle += pl.dtheta;
      }
     if ( kds['brake'] )
       pl.speed += 1;
     else 
       pl.speed -= 1;

     if ( pl.speed < 0 ) pl.speed = 0;
     pl.dx = pl.speed * Math.cos( degToRad( pl.angle ) );
     pl.dy = pl.speed * Math.sin( degToRad( pl.angle ) );
     pl.x += pl.dx;
     pl.y += pl.dy;

	    //       dx = speed cos angle
	    // ------------
	    // |angle    /
	    // |        /
	    // |       /
//dy= speed|sin angle / speed ;
	    // |     /
	    // |    /
	    // |   /
	    // |  /
	    // | /
	    // |/
    // find out which way to rotate by the distance from the current angle to the key
    // 0 or 360  right
    // 270       up 
    // 180       left
    // 90        down

  }
function driving( pl , kds ) {
  pl.angle = Math.atan2( pl.dy , pl. dx );
    if ( kds['right'] ) 
      pl.ddx = 1;
    if ( kds['left'] )
      pl.ddx = -1;


    if ( kds['up'] )
      pl.ddy = -1;
    if ( kds['down'] ) 
      pl.ddy = 1;

    if ( !kds['right'] && !kds['left'] )
      pl.ddx = 0;
    if ( !kds['up'] && !kds['down'] )
      pl.ddy = 0;


    if ( kds['brake'] ) { 
      pl.ddy = pl.ddx = pl.dx = pl.dy = 0 

      }
    pl.x += ( pl.dx += pl.ddx );
    pl.y += ( pl.dy += pl.ddy );
  


  }

player.prototype = GObj;




