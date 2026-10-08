const duplicados = [1, 2, 2, 3, 3, 4,4];
const semDuplicados = [...new Set(duplicados)];

console.log(semDuplicados); // [1, 2, 3]