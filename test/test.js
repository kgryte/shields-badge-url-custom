'use strict';

// MODULES //

var test = require( 'tape' );
var urls = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof urls === 'function', 'main export is a function' );
	t.end();
});

test( 'an `options` argument is required', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls();
	}
});

test( 'a `label` must be specified', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls({
			'status': 'boop',
			'color': 'red'
		});
	}
});

test( 'a `status` must be specified', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls({
			'label': 'beep',
			'color': 'red'
		});
	}
});

test( 'a `color` must be specified', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();

	function foo() {
		urls({
			'label': 'beep',
			'status': 'boop'
		});
	}
});

test( 'the function returns an object containing an `image` fields', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red'
	});

	t.equal( typeof out.image, 'string', 'image field is a string' );
	t.end();
});

test( 'the `image` field corresponds to a shields.io badge url', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=#&link=#', 'image url' );
	t.end();
});

test( 'a badge logo can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'logo': 'data:image/png;base64,AAA'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&logo=data:image/png;base64,AAA&link=#&link=#', 'image url' );
	t.end();
});

test( 'a badge logo width can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'logo': 'data:image/png;base64,AAA',
		'width': 100
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&logo=data:image/png;base64,AAA&logoWidth=100&link=#&link=#', 'image url' );
	t.end();
});

test( 'a left-side link can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'llink': 'https://github.com/dstructs/matrix'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=https://github.com/dstructs/matrix&link=#', 'image url' );
	t.end();
});

test( 'a right-side link can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'rlink': 'https://github.com/dstructs/matrix/issues'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=#&link=https://github.com/dstructs/matrix/issues', 'image url' );
	t.end();
});

test( 'right- and left-side links can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'llink': 'https://github.com/dstructs/matrix',
		'rlink': 'https://github.com/dstructs/matrix/issues'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=https://github.com/dstructs/matrix&link=https://github.com/dstructs/matrix/issues', 'image url' );
	t.end();
});

test( 'the default badge style is `flat`', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=#&link=#', 'image url' );
	t.end();
});

test( 'the badge style can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'style': 'flat-square'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat-square&link=#&link=#', 'image url' );
	t.end();
});

test( 'the default badge format is `svg`', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.svg?style=flat&link=#&link=#', 'image url' );
	t.end();
});

test( 'the badge format can be specified', function test( t ) {
	var out = urls({
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'format': 'png'
	});
	t.equal( out.image, 'https://img.shields.io/badge/beep-boop-red.png?style=flat&link=#&link=#', 'image url' );
	t.end();
});

test( 'badge parameters (label, status, color) are checked for dashes and underscores and escaped', function test( t ) {
	var out = urls({
		'label': 'be_ep',
		'status': 'b-oo-p',
		'color': 're_d'
	});
	t.equal( out.image, 'https://img.shields.io/badge/be__ep-b--oo--p-re__d.svg?style=flat&link=#&link=#', 'image url' );
	t.end();
});
