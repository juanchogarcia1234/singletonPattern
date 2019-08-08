var singletonModule = (function myModule(){
    var _name = "Juan";
    var instance;

    function name() {
       console.log(_name);
    }

    function createInstance() {
        return {
            name: name
        }
    }

    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    }
})();

var oneInstance = singletonModule.getInstance();
var anotherInstance = singletonModule.getInstance();

// Check that the two instances are actually the same 

console.log(_.isEqual(oneInstance, anotherInstance));
