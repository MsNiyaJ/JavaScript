const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Brad'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// You can't have more than one instance, 
// it will get the same instance
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);