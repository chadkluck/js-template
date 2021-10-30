# js-template

JavaScript anonymous self-invoking function template with the ability to call an API built in.

It is primed and ready to go with an example api request to api.chadkluck.net/games/ which will display at the bottom of the main index.html page.

There is an example of customizing variables on the main index.html page but all of the code is in js/main.js where you will find tools to help you debug through console log outputs as you code. The main block of code you will want to update and play with is in the execute() function.

If you would like to play with the Games API, it is in my repository at github.com/chadkluck/demo-api-games

## Usage

Update `info` and `configDefaut` values near the start of the function. The `settings` variable is available to store settings that may change during execution.

You will place all your code in the `execute()` function. There is no need to modify the function outside of `info`, `configDefault`, `settings`, and `execute`.

You can pass configuration settings using `thistemplate_config` (which you can refactor with a better name).

Utilize the provided `debug()` and `getAPI()` functions. Those are the only two provided functions you'll need. If you are not calling an API then you can remove the API section along with the call to `getAPI()`

Also in the code is an example of passing in a callback function using the `thistemplate_config` variable from index.html. This callback can be executed at any point in your code depending on where you put `CONFIG.callback()`. You can include additional functions this way as well.

## Alternate to config variable

Instead of using a script tag that sets `thistemplate_config` you can modify the function in main.js to accept the object directly which is more secure. 

At the very end of the script, modify 

```javascript
(function( myInit , pConfig ) {
	// all the normal function code is here
	// code
	// code
	// code
})(thistemplate, thistemplate_config);
```

To something like:

```javascript
(function( myInit , pConfig ) {
	// all the normal function code is here
	// code
	// code
	// code
})(thistemplate, {
			silence: { allowToggle: true, default: false },
			allowMultipleExecutions: false, // no reason to ever set this as true
			apiURL: "https://api.chadkluck.net/games/", // set this to the location of the api
			callback: (function(param1, param2) { console.log("Example callback: " + param1 + " " + param2); })
		}
	);
```

## Usage as non-self invoking, non-anonymous

Another option is to remove the self invoking, give the function a name, and call the function somehwere in your code:

```javascript
// main.js
const myTemplateFunction = function( myInit , pConfig ) {
	// all the normal function code is here
	// code
	// code
	// code
};

```

```html
<!-- index.js -->
<script>
	// do something
	// now execute script
	myTemplateFunction(false, {
			silence: { allowToggle: true, default: false },
			allowMultipleExecutions: false, // no reason to ever set this as true
			apiURL: "https://api.chadkluck.net/games/", // set this to the location of the api
			callback: (function(param1, param2) { console.log("Example callback: " + param1 + " " + param2); })
		}
	);
</script>
```

## Data attributes in elements

You could keep the self-invoking nature and have the javascript scan the page for elements to modify, each with their own settings.

```html
<!-- index.html -->

<div class="myElementTemplate" data-mytext="Hello, World"></div>
<div class="myElementTemplate" data-mytext="Hello, Earth"></div>
```

```javascript
// main.js
(function( myInit , pConfig ) {
	// all the normal function code is here
	// code
	// code
	// code
	/* 	code in execute() that searches the document 
		for div.myElementTemplate elements and does 
		something with them using data from data-mytext 
		attribute in a foreach loop. (You'll also want to
		utilize async to keep the script moving)
	*/
})(thistemplate, thistemplate_config);
```

Note that in this usage you can still pass `thistemplate_config` with any standard configurations such as an api, but you can have multiple elements each with their own settings and values to use. Perhaps parameters to pass to the API.