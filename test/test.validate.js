'use strict';

// MODULES //

var test = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

test( 'file exports a function', function test( t ) {
	t.ok( typeof validate === 'function', 'export is a function' );
	t.end();
});

test( 'if provided an `options` argument which is not an object, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `label` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': values[ i ],
			'status': 'boop',
			'color': 'red'
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `status` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': values[ i ],
			'color': 'red'
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `color` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `logo` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'logo': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `width` option which is not a positive number, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		0,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'width': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `llink` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'llink': values[ i ],
			'rlink': 'https://github.com/dstructs/matrix/issues'
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `rlink` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'llink': 'https://github.com/dstructs/matrix',
			'rlink': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if a left side link is provided, a right side link must be provided', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'llink': 'https://github.com/dstructs/matrix'
	});
	t.ok( err instanceof Error, 'return an Error' );
	t.end();
});

test( 'if a right side link is provided, a left side link must be provided', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'rlink': 'https://github.com/dstructs/matrix/issues'
	});
	t.ok( err instanceof Error, 'return an Error' );
	t.end();
});

test( 'if provided a `style` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'style': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( 'if provided a `format` option which is not a string, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		null,
		NaN,
		undefined,
		true,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': 'beep',
			'status': 'boop',
			'color': 'red',
			'format': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a TypeError when provided ' + values[ i ] );
	}
	t.end();
});

test( '`label` option is required', function test( t ) {
	var err = validate( {}, {
		'status': 'boop',
		'color': 'red'
	});
	t.ok( err instanceof TypeError, 'returns a type error when not provided option' );
	t.end();
});

test( '`status` option is required', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'color': 'red'
	});
	t.ok( err instanceof TypeError, 'returns a type error when not provided option' );
	t.end();
});

test( '`color` option is required', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'status': 'boop'
	});
	t.ok( err instanceof TypeError, 'returns a type error when not provided option' );
	t.end();
});

test( 'if all options are valid, the function returns `null`', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'logo': 'data:image/png;base64,AAAAakdjkd',
		'width': 40,
		'llink': 'https://github.com/dstructs/matrix',
		'rlink': 'https://github.com/dstructs/matrix/issues',
		'style': 'flat',
		'format': 'png'
	});
	t.equal( err, null, 'returns null' );
	t.end();
});

test( 'the function ignores unrecognized options', function test( t ) {
	var err = validate( {}, {
		'label': 'beep',
		'status': 'boop',
		'color': 'red',
		'bip': 'bop',
		'foo': null,
		'bar': [1,2,3]
	});
	t.equal( err, null, 'returns null' );
	t.end();
});
