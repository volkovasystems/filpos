
const assert = require( "assert" );
const filpos = require( "./filpos.js" );

let array = [ 1, 2 ];
assert.equal( filpos( array, 5, 0 ), array, "should be equal" );

assert.deepEqual( filpos( array, 5, 0 ), [ 1, 2, 0, 0, 0 ], "should be deeply equal" );

console.log( "ok" );
