const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to)
    },
    receive: function (message, from){
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; //list of users

    return { 
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const shaniya = new User('Shaniya');
const james = new User('James');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(shaniya);
chatroom.register(james);
chatroom.register(sara);

james.send('Hello Shaniya', shaniya);
sara.send('Hello James! Have a great day!', james);
shaniya.send('Hello everyone good morning!');
