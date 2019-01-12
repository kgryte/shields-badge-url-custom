'use strict';

// MODULES //

var test = require( 'tape' );
var escape = require( './../lib/escape.js' );


// TESTS //

test( 'file exports a function', function test( t ) {
	t.ok( typeof escape === 'function', 'file exports a function' );
	t.end();
});

test( 'function replaces every dash with two dashes', function test( t ) {
	var out;

	out = escape( 'beep-boop' );
	t.equal( out, 'beep--boop' );

	out = escape( 'beep-boop-bop--bip' );
	t.equal( out, 'beep--boop--bop----bip' );

	t.end();
});

test( 'function replaces every underscore with two underscores', function test( t ) {
	var out;

	out = escape( 'beep_boop' );
	t.equal( out, 'beep__boop' );

	out = escape( 'beep_boop_bop__bip' );
	t.equal( out, 'beep__boop__bop____bip' );

	t.end();
});

test( 'function replaces every dash and every underscore with two equivalent characters', function test( t ) {
	var out;

	out = escape( '_b-e_e-p_b-o_o-p-' );
	t.equal( out, '__b--e__e--p__b--o__o--p--' );

	t.end();
});

test( 'function performs URL encoding', function test( t ) {
	var out;
	
	out = escape( 'boop%' );
	t.equal( out, 'boop%25' );

	t.end();
});
