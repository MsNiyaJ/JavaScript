// Basic structure

// (function () {
//     // Declare private vars and functions

//     return {
//         // Declare public var and functions

//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function (){
    
//     // Private variables and functions
//     let text = 'Hello World';
//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         // public variables and functions
//         // can access the private functions
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (function() {
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item Added...');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        // Make the private functions public
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Smith'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));