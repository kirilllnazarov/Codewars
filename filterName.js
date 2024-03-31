const namesArray = [
	["John", "Mary", "David", "Sarah", "Michael"],
	["Emma", "Robert", "Sophia", "James", "Olivia"],
	["William", "Emily", "Joseph", "Isabella", "Daniel"],
	["Grace", "Benjamin", "Mia", "Henry", "Abigail"],
	["Alexander", "Ava", "Matthew", "Charlotte", "Ethan"],
	["Harper", "Jack", "Amelia", "Samuel", "Lily"],
	["Owen", "Ella", "David", "Victoria", "Leo"],
	["Chloe", "Andrew", "Nora", "Thomas", "Sofia"],
];

const filteredNames = namesArray.flatMap(el => el.filter(el => el[0] === "S")).join(", ");

console.log(filteredNames);