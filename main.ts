// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magiacians: string[]){
    magiacians.forEach(name => console.log(name)
);
}
function make_great(magicians:string[]){
    return magicians.map(name => `the great ${name}`)
}
    let magicians_names = ["Anum","Umer","Anni"]
    
    let great_magicians = make_great(magicians_names)
    console.log(great_magicians);
    