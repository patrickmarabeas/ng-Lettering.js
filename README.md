# ng-Lettering.js

### ng-Lettering.js is an AngularJS &lt;span&gt; injector for radical Web Typography.

This is a rework of the original jQuery plugin which can be found here: https://github.com/davatron5000/Lettering.js.

Include it in your AngularJS application

	var myApp = angular.module( 'myApp', [ 'ngLettering' ] );

Apply it to your text

	<span data-lettering="letters">This is a sentence</span>
	
	<span data-lettering="words">This is a sentence</span>
	
	<div data-lettering="lines">
		This<br/> 
		is<br/> 
		a<br/> 
		sentence
	</div>