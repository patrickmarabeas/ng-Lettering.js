'use strict';

describe( 'Lettering directive', function() {

	var element, $scope;

	beforeEach( module( 'ngLettering' ));
	beforeEach( inject( function( $compile, $rootScope ) {
		element = document.createElement('div');
		document.body.appendChild(element);
	}));

	describe( 'innerHTML of "Test" using the letters value', function() {

		beforeEach( inject( function( $compile, $rootScope ) {
			element.setAttribute('data-lettering','letters');
			element.innerHTML = 'Test';
			element = $compile( element )($rootScope);
		}));

		it( 'should have an output of: <span class="char1">T</span><span class="char2">e</span><span class="char3">s</span><span class="char4">t</span>', function() {
			expect( element[0].innerHTML )
				.toEqual( '<span class="char1">T</span><span class="char2">e</span><span class="char3">s</span><span class="char4">t</span>' );
		});
	});

	describe( 'innerHTML of "Test this please" using the words value', function() {

		beforeEach( inject( function( $compile, $rootScope ) {
			element.setAttribute('data-lettering','words');
			element.innerHTML = 'Test this please';
			element = $compile( element )($rootScope);
		}));

		it( 'should have an output of: <span class="word1">Test</span> <span class="word2">this</span> <span class="word3">please</span>', function() {
			expect( element[0].innerHTML)
				.toEqual( '<span class="word1">Test</span> <span class="word2">this</span> <span class="word3">please</span>' );
		});

	});

	describe( 'innerHTML of "Test this please</br>Another line" using the lines value', function() {

		beforeEach( inject( function( $compile, $rootScope ) {
			element.setAttribute('data-lettering','lines');
			element.innerHTML = 'Test this please</br>Another line';
			element = $compile( element )($rootScope);
		}));

		it( 'should have an output of: <span class="line1">Test this please</span><span class="line2">Another line</span>', function() {
			expect( element[0].innerHTML )
				.toEqual( '<span class="line1">Test this please</span><span class="line2">Another line</span>' );
		});
	});
});
