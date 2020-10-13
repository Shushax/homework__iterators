export default class Team {

    constructor(char1, char2, char3) {
        this.char1 = char1,
        this.char2 = char2,
        this.char3 = char3
    }

    *[Symbol.iterator]() {
        yield this.char1,
        yield this.char2,
        yield this.char3
    }
}

// черновик первого задания

// export default class Team {

//     constructor(char1, char2, char3) {
//         this.char1 = char1,
//         this.char2 = char2,
//         this.char3 = char3
//     }

//     [Symbol.iterator]() {
//         let current = this.char1;
//         let last = this.char3;

//         return {
//             next() {
//                 if (current !== last) {
//                     return {
//                         done: false,
//                         value: ??????
//                     }

//                 }

//                 return {
//                     done: true
//                 }
//             }
//         } 
        

//     }
// }