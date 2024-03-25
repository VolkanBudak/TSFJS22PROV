// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// 2. Ge ett exempel på en funktion med två generiska typer.

function pairValues<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
}

const pair = pairValues("hello", 42);
console.log(pair);

// 3. Ge ett exempel på ett interface med en generisk typ.

interface ArrayHolder<T> {
    data: T[];
}

class IntArrayHolder implements ArrayHolder<number> {
    constructor(public data: number[]) {}
}

const intArrayHolder = new IntArrayHolder([1, 2, 3]);
console.log(intArrayHolder.data); 
