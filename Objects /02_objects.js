// const tinderUser = new Object() // singleton object 
const tinderUser = {}  // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Prajapati"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
