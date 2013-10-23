var module = angular.module('lettering', []);

module.directive( 'lettering', [ function() {
	return {
		restrict: 'A',
		scope: true,
		link: function( $scope, $element, $attrs ) {

			var methods = {
				letters: function() {
					injector( $element, '', 'char', '' );
				},
				words: function() {
					injector( $element, ' ', 'word', ' ' );
				},
				lines: function() {
					var r = 'eefec303079ad17405c889e092e105b0';
					angular.element( $element ).children('br').replaceWith(r);
					injector( $element, r, 'line', '');
				}
			};

			function injector(element, splitter, klass, after) {
				var a = element[0].innerHTML.split( splitter );
				var inject = '';

				if ( a.length ) {
					angular.forEach(a, function(item, i) {
						inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
					});
					while ( element[0].hasChildNodes() ) {
						element[0].removeChild(element[0].firstChild);
					}
					element.append(inject);
				}
			}

			$scope.method = $attrs.lettering || 'letters';
			methods[$scope.method]();

		}
	}
}]);