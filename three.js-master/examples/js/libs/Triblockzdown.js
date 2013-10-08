/**
 * @author David Hardee dhardee@gmail.com
 * @author mr.doob / http://mrdoob.com/
 */

var Triblockzdown = function (side) {

	THREE.Geometry.call(this);

	var scope = this,
	side_half = side / 2,
	center = 0
	depth = (Math.sqrt(3) / 2) * side;

	v( 0,0,0 );
	v(  side, 0, 0);
	v(  side_half,   0, -depth);
	v( 0,side,0 );
	v(  side, side, 0);
	v(  side_half, side, -depth);

	f3( 0, 1, 2 );
	f3( 3, 5, 4 );
	f4( 0, 1, 4, 3 );
	f4( 2, 0, 3, 5 );
	f4( 1, 2, 5, 4 );
	

	function v(x, y, z) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );
	}

	function f4(a, b, c, d) {

		scope.faces.push( new THREE.Face4( a, b, c, d ) );
	}
	
	function f3(a, b, c,) {

		scope.faces.push( new THREE.Face3( a, b, c ) );
	}

	this.computeCentroids();
	this.computeNormals();

}

Triblockzup.prototype = new THREE.Geometry();
Triblockzup.prototype.constructor = Triblockzup;
