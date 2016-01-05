'use strict';

var mnames = require( 'datasets-male-first-names-en' );
var fnames = require( 'datasets-female-first-names-en' );
var randc = require( 'rand-color-hexadecimal' );
var urls = require( './../lib' );

// Badges for everyone! Create random personalized greeting badges...
var badge;
var len;
var idx;
var n;
var i;

len = mnames.length + fnames.length;
for ( i = 0; i < len; i++ ) {
	if ( len%2 === 0 ) {
		idx = Math.floor( Math.random()*fnames.length );
		n = fnames[ idx ];
	} else {
		idx = Math.floor( Math.random()*mnames.length );
		n = mnames[ idx ];
	}
	badge = urls({
		'label': 'Hello,',
		'status': n + '!',
		'color': randc()
	});
	console.log( badge );
}

