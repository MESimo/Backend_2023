/*Problem #1
    2 == '2' -> true
    'he' == 'she' -> false
    'true' == true -> true
    true === true -> true
    'true' != true -> false
    'true' !== true -> true

Problem #2
    var -> Is globally scoped and able to be reassigned 
    const -> Locally scoped and can't be reassigned
    let -> Locally scoped and is able to be reassigned

Problem #3
    First-Class Function:*/
        const firstClass = () => {
            "This is a function"
        }
    //Higher-Order Function:
        const higherOrder = (anotherFunction) => {
            anotherFunction()
        }
    //Callback Function:
        const someFunction = (callback) => {
            callback()
        }

/*Problem #4
    "c" is not defined globally so it doesn't have a value.
    "a" will have the value of "hi"
    "b" will have the value of "bye"

Problem #5*/
    const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i])
    }

    for (const num of someArray) {
        console.log(num)
    }

//Problem #6
    //-concat() method -> Non-Mutative
        const someArray1 = [1, 2, 3];
        const someArray2 = [4, 5];
        const someArray3 = someArray1.concat(someArray2);

    //-length property -> Not a method (Non-Mutative)
        //const someArray = [1, 2, 3, 4, 5];

        const returnLength = (arr) => {
        return arr.length
        }
    
    //-filter() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const filterThree = someArray.filter(num => num !== 3)

    //-find() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const findFive = someArray.find(num => num == 5);
    
    //-slice() method -> Non-Mutative
       //const someArray = [1, 2, 3, 4, 5];
       const slicedArray = someArray.slice(2, 4);

    //-splice() method -> Mutative
        //const someArray = [1, 2, 3, 4, 5];
        someArray.splice(2, 2)
    
    //-includes() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        console.log(someArray.includes(4))

    //-indexOf() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        console.log(someArray.indexOf(2))

    //-isArray() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        console.log(Array.isArray(someArray))

    //-join() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        console.log(someArray.join())

    //-map() method -> Non-Mutataive
        //const someArray = [1, 2, 3, 4, 5];
        const mappedArray = someArray.map(num => num * 2);

    //-pop() method -> Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const popFunc = (arr) => {
            arr.pop();
            return arr
        }
        popFunc(someArray)

    //-push() method -> Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const pushFunc = (arr, num) => {
            arr.push(num);
            return arr
        }
        pushFunc(someArray, 6)

    //-shift() method -> Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const shiftFunc = (arr) => {
            arr.shift();
            return arr
        }
        shiftFunc(someArray)

    //-unshift() method -> Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const unshiftFunc = (arr, num) => {
            arr.unshift(num);
            return arr
        }
        console.log(unshiftFunc(someArray, 0))

    //-sort() method -> Mutative
        //someArray = [9, 1, 3, 5];
        someArray.sort()

    //-reduce() method -> Non-Mutative
        //const someArray = [1, 2, 3, 4, 5];
        const sum = someArray.reduce((total, element) => total + element, 0); 
       
//Problem #7
    const someObject = {
        color: 'black'
    }

    Object.assign(someObject, {name: 'John Doe'});
    someObject.age = 22;
    someObject['address'] = '123 test address';
    console.log(Object.keys(someObject))
    console.log(Object.values(someObject))
    for (const value in someObject) {
        console.log(someObject[value])
    }

//Problem #8
 const numbers = [
        {
            num: 1
        },
        {
            num: 2
        },
        {
            num: 3
        }
    ]
    for (const { num } of numbers) {
        console.log(num)
    }

//Problem #9
    const newSet = new Set();
        newSet.add('John Doe');
        console.log(newSet.has('John Doe'));
        newSet.delete('John Doe')

//Problem #10
    const newMap = new Map();
    newMap.set('name', 'John Doe');
    console.log(newMap.has('John Doe')) // returns false?
    newMap.delete('name')

//Problem #11
    //Asynchronous means that a certain task is able to run
    //without having to wait for other tasks to finish.
    //This way the program can run multiple codes at once.
    //Without it the program can encounter blocks.

//Problem #12
    //Callback hell is when multiple callbacks are 
    //nested within a function making the code difficult 
    //read and understand.

//Problem #13
    //A promise is an action returned when a fetch call is made.
    //It starts of as pending then it will either be fulfilled or rejected.

//Problem #14
    //async/await is a feature that makes it easier to use asynchronous functions.

//Problem #15
    const fetch = require('node-fetch')

    const fetchRickAndMorty = async () => {
        try {
            const result = await fetch('https://rickandmortyapi.com/api/character')
            const data = await result.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }  
    }


    const fetchMultipleAPIs = async () => {

        try {
            const [result1, result2] = await Promise.all([
                fetch('https://rickandmortyapi.com/api/character/2'),
                fetch('https://randomuser.me/api/?results=1')
            ])

            const [rickandmortyapi, randomuser] = await Promise.all([
                result1.json(),
                result2.json(),
            ])
            console.log(randomuser, rickandmortyapi)
        } catch (error) {
            console.log(error)
        }  
    }

//Problem #16
    class Shape {
        constructor(name, sides, sideLength) {
            this.name = name;
            this.sides = sides;
            this.sideLength = sideLength
        }

        calcPerimeter() {
            return this.sides * this.sideLength;
        }
    }

    const square = new Shape('square', 4, 5);
    console.log(square.calcPerimeter())
    const triangle = new Shape('triangle', 3, 3)
    console.log(triangle.calcPerimeter())

//Problem #17
    class Square {
        constructor(square, sides, sideLength) {
            this.name = square
            this.sides = 4
            this.sideLength = sideLength
        }

        calcPerimeter() {
            return this.sides * this.sideLength;
        }

        calcArea() {
            return this.sideLength * this.sideLength;
        }
    }

    const aSquare = new Square('square', 'sides', 5)
    console.log(aSquare.calcArea())
    console.log(aSquare.calcPerimeter())


   
        
        
            