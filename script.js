var username=prompt("Enter your username:");
var password=prompt("Enter your password:");


var database={
    user:"ali",
    pass:"haha"
};
var newsfeed = [{
    user: "moeed",
    content: "how you doing people"

}, {
    user: "usama",
    content: "i am going to paris"
}];
if (username == database.user && password==database.pass) {
    console.log(newsfeed);
}