function SetUserName(username){
    // complex Db calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password) {
    // SetUserName(username); ////here bascically we try to call the username from another function 
    // but we don't get and value of usename bcz this function not call
    
    SetUserName.call(this,username)

    this.email = email;
    this.password = password
}

const chai  = new createUser("chai","chai@fb.com","123");
console.log(chai);


// call jo hai vo function the current execution context ko kisi or function ko dedeta hai 


// mean in above example .call set the current context of setusername function to createuser name 
//but there is problem that after complete of setusername func the content is vainesed so for holding the reference of and values of setusername we use this as first argument in call so that it use createuser function current context 
