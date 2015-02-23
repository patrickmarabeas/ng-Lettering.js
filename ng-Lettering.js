/* ng-Lettering.js v1.0.2
 * https://github.com/patrickmarabeas/ng-Lettering.js
 *
 * Original jQuery project: https://github.com/davatron5000/Lettering.js
 *
 * Copyright 2013, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 18/11/2013
 */

'use strict';

angular.module( 'ngLettering', [] )
.directive( 'lettering', [ function () {
	return {
		priority: 1,
		restrict: 'A',
		link: function( scope, element, attrs ) {

			var methods = {
				letters: function() {
					injector( element, '', 'char', '' );
				},
				words: function() {
					injector( element, ' ', 'word', ' ' );
				},
				lines: function() {
					var r = 'eefec303079ad17405c889e092e105b0';
					angular.element( element ).children( 'br' ).replaceWith( r );
					injector( element, r, 'line', '' );
				}
			};

			function injector( element, splitter, klass, after ) {
				var a = element[0].innerHTML.split( splitter );
				var inject = '';

				if( a.length ) {
					angular.forEach( a, function( item, i ) {
						inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
					});
					while( element[0].hasChildNodes() ) {
						element[0].removeChild( element[0].firstChild );
					}
					element.append( inject );
				}
			}
			scope.method = attrs.lettering || 'letters';
			if (attrs.ngBind) {
	      scope.$watch(attrs.ngBind, function(newvalue) {
					methods[scope.method]();
	      }); 
			} else {
				methods[scope.method]();
			}
		}
	}
}]);