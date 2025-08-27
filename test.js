// console.log('test')

const testVar = ['1a', '2b', '3c', '4d', '5e'];
// const testVar2 = [1, 2, 3, 4, 5];
const testObj = { name: 'Ken', age: '20' }

// for (let i = 1; i <= 5; i++) {
//     console.log('count: ', i);
// }

// for (let i = 0; i < testVar.length; i++) {
//     // console.log('Value', i, ': ', testVar[i]);
//     console.log(`Value ${i}: ${testVar[i]}`)
// }

for (let i = 0; i < testVar.length; i++) {
    // console.log(`Value ${i}: ${testVar[i]}`)
    switch(testVar[i]) {
        case '2b':
            console.log('what:', testVar[i])
            console.log('keken buang')
            break;
        case '4d':
            console.log('what:', testVar[i])
            console.log('epoy gwapo')
            break;
        case '1a':
            console.log('what:', testVar[i])
            console.log('flor gwapa')
            break;
        default:
            console.log('ken gwapo')
            break;
    }
    if (testVar[i] === '2b') {
        console.log('taas1')
    } else if (testVar[i] === '1a') {
        console.log('taas2')
    } else if (testVar[i] === '3c') {
        console.log('taas3')
    } else if (testVar[i] === '4d') {
        console.log('taas4')
    } else if (testVar[i] === '5e') {
        console.log('taas5')
    }
}


// map method = 2 argument or parameter (index, value)
// testVar.map((index, item) => {
//     console.log('Index: ', index);
//     console.log('Array: ', item);
// })


// console.log('log: ', testObj)
// console.log('log: ', testObj.name)
// console.log('log: ', typeof testObj)

// console.log('log: ', testVar)
// console.log('log: ', testVar[0])
// console.log('log: ', typeof testVar)

// console.log('log: ', testVar2)
// console.log('log: ', typeof testVar2)