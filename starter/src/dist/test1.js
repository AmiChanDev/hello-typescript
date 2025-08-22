// Union, Intersection
var input;
input = "Hello";
input = 25;
console.log(input);
var userId = 123;
console.log(userId);
// Enums
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var role = Role.Admin;
console.log(role); //prints the index number
// Generics !#
function identity(value) {
    return value;
}
var num = identity(10);
var stringVal = identity("String");
console.log(num, stringVal);
