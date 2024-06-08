// Define the function receivesAFunction
function receivesAFunction(callback) {
    // Check if the argument is a function
    if (typeof callback === 'function') {
        // Call the callback function
        callback();
    } else {
        console.log('Argument is not a function');
    }
}

// Define a sample callback function
function myCallback() {
    console.log('Callback function called');
}

// Call receivesAFunction with the callback
receivesAFunction(myCallback);

// Define the function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log('Named function called');
    }
    return namedFunction;
}
// Define the function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous function called');
    };
}

module.exports = returnsAnAnonymousFunction;
