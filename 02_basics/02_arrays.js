const marvel_heros = ["thor", "ironamn","loki"]

const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   // not good way to write
// console.log(marvel_heros[1])
// console.log(marvel_heros[1][3]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_another_array = another_array.flat(2)
// console.log(new_another_array);

//isArray, from, of must used 

console.log(Array.isArray("saipal"))
console.log(Array.from("saipal"))   // convert into string
console.log(Array.from({name: "saipall"}));


let score1= 20
let score2 = 40
let score3 = 60 

console.log(Array.of(score1, score2, score3)); //  convert into array
