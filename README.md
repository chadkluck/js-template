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