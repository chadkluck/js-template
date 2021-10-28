/*! [your js name] */
/*  ============================================================================================
    ********************************************************************************************
    [your js name]
    ********************************************************************************************

	[your name]
	Version: 0.0.1-[date]
	[your website]

	Released under Creative Commons Attribution 4.0 International license (CC BY)
	https://creativecommons.org/licenses/by/4.0/

	The code, with it's heavy use of comments, is provided as an educational resource in hopes
	that it can be useful in function and disection.
	Minifying and obvuscating for production environments is OK and, in fact, strongly encouraged
	even if it removes attribution comments.

	Created from template:
		Chad Leigh Kluck - 10/27/2021
		Version: 0.0.2-20211027-01
		chadkluck.net
		github.com/chadkluck/js-template

    ********************************************************************************************

	USAGE:



    ********************************************************************************************
*/

// thistemplate - change to a name for your script, also change at very end inside the ()
if (typeof thistemplate === 'undefined') { thistemplate = false; } // let init take care of setting true
if (typeof thistemplate_config === 'undefined') { thistemplate_config = {}; } // let init take care of setting true


/*  ============================================================================================
    ********************************************************************************************
    SELF-INVOKING FUNCTION
	********************************************************************************************
*/

(function( myInit , pConfig ) {

	"use strict";

/* *** Local variables *** */

	/* Just version and credits that will show in console log */
	const info = {
		version: "0.0.1-20211027-01", // just a manual version number for debugging: "Is it loading the code I *thought* I uploaded?" Recommend 0.0.0-YYYYMMDD-00 format
		handle:  "[YOURSCRIPT]", // the uppercase short handle that shows in console log
		name: 	 "[Your Script Name]", // the name of the script
		author:  "[Your Name]", // author or organization credited with writing it
		code:    "github.com/[where you can get it]" // github or other link for code - optional, leave "" if no public repository
	};

	/**
	 * Configuration settings default. These will be merged and overridden by
	 * keys (first level) passed in from pConfig.
	 * 
	 * Define your own config structure though silence and 
	 * allowMultipleExecutions is required
	 */
	const configDefault = {
		silence: { allowToggle: true, default: false },
		allowMultipleExecutions: false, // no reason to ever set this as true
		apiURL: "https://api.chadkluck.net/games/", // set this to the location of the api
	};

	/** Script Config - contains values from configDefault, with any overrides passed in from pConfig */
	const CONFIG = Object.assign(configDefault, pConfig);

	/* Runtime Settings (Read/Write) */
	var settings = {
		silent: false, // does debug() output to console.log?
	};


/* *** Local Functions *** */


	/* ===================================================================== */

	/**
	 * Inital function called at runtime which initializes the function stating
	 * that the function has loaded in the console (provided not silenced) and
	 * then calls the execute function
	 * 
	 * No need to modify
	 */
	const init = function(){
		const getGlobalInit = function() { return myInit; };
		const setGlobalInit = function(b) { myInit = b === true ? true : false; /* don't blindly accept what is passed */ return getGlobalInit(); };
		const setSilence = function(silence){
			if ( silence !== settings.silent ) {
				if (CONFIG.silence.allowToggle ) {
					if( silence ) { debug("Silenced"); settings.silent = true; /* we do it last so that there was one final peep */ } else { settings.silent = false; debug("Unsilenced"); }
				} else {
					settings.silent = CONFIG.silence.default;
				}
			}
		};
		const attribution = function(){ debug("Loading " + info.name + " by " + info.author); debug("Version " + info.version); if(info.code !== "") { debug("Get Code: " + info.code); } };
		// check to see if it has already initialized or if another copy of the code has already ran
		if( !getGlobalInit() || (getGlobalInit() && CONFIG.allowMultipleExecutions ) ) {
			setGlobalInit(true); attribution(); setSilence(CONFIG.silence.default); execute();
		}
	};

	/* ===================================================================== */

	/**
	 * If not silenced, outputs text passed to it to console.log
	 * Need a line number? In your code use debug(yourmessage + " - Line:"+ (new Error()).lineNumber );
	 * This function has a companion variable: silent
	 * 
	 * No need to modify 
	 * 
	 * @param {string} text 
	 */
	const debug = function( text ) {
		const pad = function (num, size = 2) { num = num.toString(); while (num.length < size) num = "0" + num; return num; }
		// as long as we aren't silenced (silent === false)...
		if( !settings.silent ) { let d = new Date(); let ts = pad(d.getHours()) +":"+ pad(d.getMinutes()) +":"+ pad(d.getSeconds()) +"."+ pad(d.getMilliseconds(),3); console.log(info.handle+" ["+ts+"] : " + text); }
	};

	/* ****************************************************************************
	 * API FUNCTIONS
	 * ****************************************************************************

		Can be removed if no API is called
		No need to modify the functions

		Usage:

		getAPI(apiEndpointURL, callbackFunction);

	 * ************************************************************************** */

	const xhrSuccess = function() { this.callback.apply(this, this.arguments); };
	const xhrError = function() { console.error(this.statusText); };
	const loadFile = function(sURL, fCallback) { let  oReq = new XMLHttpRequest(); oReq.callback = fCallback; oReq.arguments = Array.prototype.slice.call(arguments, 2); oReq.onload = xhrSuccess; oReq.onerror = xhrError; oReq.open("get", sURL, true); oReq.send(null); };

	/**
	 * Connect to an api and then have a callback function do something with it
	 * @param {string} url The endpoint to contact
	 * @param {*} callBackFunction The function to pass API data to and execute after API data is recieved.
	 */
	const getAPI = function(url, callBackFunction) { const process = function(callback) { let data = JSON.parse(this.responseText); callback(data); }; loadFile (url, process, callBackFunction); };

	/* ****************************************************************************
	 * EXECUTION FUNCTIONS
	 * ****************************************************************************

		Function that runs at execution time, invoked by init()
		All code goes in here

	 * ************************************************************************** */

	const execute = function() {

		// This is where you add all your functions. If using APIs don't forget to declare a function that will be excuted after the api data is returned
		// showData() is provided as an example

		/* local variables */
		var vars = {
			foo: 1,
			bar: 2
		};

		const showData = function(data) {
			// display any data returned from an API

			// Code example to get you started

			// ----- BEGIN API CODE EXAMPLE USING DATA RETURNED FROM api.chadkluck.net/games
			// ----- This example code will create an unordered list element and display a list of games retreived from an api

			// create an unordered list to put the list in
			let ul = document.createElement("ul");

			/* In this example we are expecting data = { gamechoices: [] }
			so we will treat data.gamechoices[] as an array and do a foreach
			*/

			data.gamechoices.forEach(function(game) {
  				let li = document.createElement("li");
  				li.innerHTML = game;
  				ul.appendChild(li); // add the list item to the list
			});

			// append to end of body
			document.getElementsByTagName("body")[0].appendChild(ul);
			// or append it to any element you specify an id for:
			//document.getElementById("someid").appendChild(div);

			// ----- END API CODE EXAMPLE
		}

		// call API and after data is returned, show it
		getAPI(CONFIG.apiURL, showData);

	};


	/* ****************************************************************************
	 * RUN-TIME
	 * ****************************************************************************

		Code that runs on load, typically just an init which in turn calls execute()
		after some initial initialization is perfomed

	 * ************************************************************************** */

	/* Initializes then executes */
	init();

})(thistemplate, thistemplate_config);