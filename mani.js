// Ozimiki


// const son1 = +prompt(`birinchi soni kiriting`)
// const son2 = +prompt(`ikkinchi soni kiriting`)

// let son3 = +prompt(`
// 1.qoshish
// 2.ayirish
// 3.kopaytirish
// 4.bolish
// tanlang (1,2,3,4.)`)

// const qoshish1 = son1 + son2
//    if  (son3 == 1 ) {
//     console.log(`${son1} + ${son2} = ${qoshish1}`);
//    } else {
//     console.log(`${son1} + ${son2} = ${qoshish1}`);
//    }

//    const ayirish1 = son1 - son2
//    if  (son3 == 2 ) {
//     console.log(`${son1} - ${son2} = ${ayirish1}`);
//    } else {
//     console.log(`${son1} - ${son2} = ${ayirish1}`);
//    }

//    const kopaytirish1 = son1 * son2
//    if  (son3 == 3 ) {
//     console.log(`${son1} * ${son2} = ${kopaytirish1}`);
//    } else {
//     console.log(`${son1} * ${son2} = ${kopaytirish1}`);
//    }

//    const bolish1 = son1 / son2
//    if  (son3 == 4 ) {
//     console.log(`${son1} / ${son2} = ${bolish1}`);
//    } else {
//     console.log(`${son1} / ${son2} = ${bolish1}`);
//    }



// Chat GPT



const son1 = +prompt(`Birinchi sonni kiriting`);
const son2 = +prompt(`Ikkinchi sonni kiriting`);

const amal = +prompt(`
1. Qo'shish
2. Ayirish
3. Kopaytirish
4. Bolish
Tanlang (1, 2, 3, 4)`);

let natija;

if (amal === 1) {
    natija = son1 + son2;
    console.log(`${son1} + ${son2} = ${natija}`);
} else if (amal === 2) {
    natija = son1 - son2;
    console.log(`${son1} - ${son2} = ${natija}`);
} else if (amal === 3) {
    natija = son1 * son2;
    console.log(`${son1} * ${son2} = ${natija}`);
} else if (amal === 4) {
    natija = son1 / son2;
    console.log(`${son1} / ${son2} = ${natija}`);
} else {
    console.log("Noto'g'ri tanlov!");
}
