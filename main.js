// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magiacians) {
    magiacians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magicians_names = ["Anum", "Umer", "Anni"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
