class User {
    constructor (username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    
    encrptPassword(){
        return `${this.password}aman`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("aman","aman@fb.com","123");
console.log(chai.encrptPassword());
console.log(chai.changeusername());

//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());