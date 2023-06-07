const nombre: string = "Manolo";
let n: number = 2;
let a = 'hola';

const persona = {
    nombre: "Pepe",
    edad: 20
}
persona.nombre;

// any
let obj: any = { x: 0 };
const b: any = 'hola';
obj.foo();

// unknown
const c: unknown = 'hola';

/* Funciones */
function saludar(name: string) {
    console.log(`Hola ${name}`);
}

saludar('pepe');
// saludar(2); Error

function saludar2(persona: { name: string, age: number}) {
    const { name, age } = persona;
    console.log(`Hola ${name}, tienes ${age} años`);
}

saludar2({ name: 'Pepe', age: 2});

/* Función con return */
function saludar3(persona: { name: string, age: number}): number {
    const { name, age } = persona;
    console.log(`Hola ${name}, tienes ${age} años`);
    return age;
}

const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel');
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`);
}

sayHiFromFunction(sayHi);

// Tipar las arrow functions
const sumar = (a: number, b: number): number => {
    return a + b;
}

const restar: (a: number, b: number) => number = (a, b) => {
    return a - b;
}

// never
function throwError(message: string): never {
    throw new Error(message);
}

function logMessage(message: string): void {
    console.log(message);
    // throw new Error(message);


    // return implícito <------- Da igual, void no devuelve nada
}

// inferencia funciones anónimas según el contexto
const avengers = ['spider', 'hulk', 'avengers'];
avengers.forEach(function (avengers) {
    console.log((avengers.toUpperCase()));
})

/* Objetos */
let hero1 = {
    name: 'thor',
    age: 1500
};

function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return {
        name,
        age
    }
}

// const thor = createHero('thor', 1500);

// type alias

type Hero = {
    name: string,
    age: number
};

let hero: Hero = {
    name: 'thor',
    age: 1500
};

// Optional properties
type Hero2 = {
    // no es posible reescribirlo, pero si inmutable
    readonly id?: number,
    name: string,
    age: number,
    isActive?: boolean
};


// template union types
type HexadecimalColor = `#${string}`

const color = '0033ff';
const color2: HexadecimalColor = '#0033ff';