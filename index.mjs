// import { loadStdlib } from '@reach-sh/stdlib';
// import * as backend from './build/index.main.mjs';

// const stdlib = loadStdlib();
// const startingBalance = stdlib.parseCurrency(100);
// const accD = await stdlib.newTestAccount(startingBalance);

// //const deadline = stdlib.connector === 'CFX' ? 500 : 250;

// const ctcD = accD.contract(backend);

// try {

//     await ctcD.p.Admin({
//         //deadline,
//         price: stdlib.parseCurrency(25),
//         ready: () => {
//             console.log('The contract is ready');
//             throw 42;
//         }
//     });

// } catch (e) {
//     if (e != 42) {
//         throw e;
//     }
// }

// const users = await stdlib.newTestAccount(5, sbal);

// const willError = async (f) => {
//     let e;
//     try {
//         await f();
//         e = false;
//     } catch (te) {
//         e = te;
//     }

//     if (e === false) {
//         throw Error('Expected to error, but didnt');
//     }

//     console.log(`That last call errored and that's okay`);

// };

// const ctcWho = (whoi) => 
//     users[whoi].contract(backend, ctcD.getInfo());

// const rsvp = async (whoi) => {
//     const who = users[whoi];
//     const ctc = ctcWho(whoi);
//     console.log('RSVP of', stdlib.formatAddress(who));
//     await ctc.apis.Proposer.propose();
// }

// const do_checkin = async (ctc, whoi) => {
//     const who = users[whoi];
//     console.log('Check in of', stdlib.formatAddress(who));
//     await ctc.apis.Voter.vote(who);
// };

// const checkin = (whoi) => do_checkin(ctcD, whoi);
// const bad_checkin = (whoi) => do_checkin(ctcWho(whoi), whoi);
// const timesup = async () => {
//     console.log('I think time is up');
//     await ctcD.apis.Voter.timesup();
// }

// await rsvp(0);
// await rsvp(1);
// await willError(() => rsvp(1));
// await checkin(4);

// console.log('we are gonna wait for the deadline');
// await stdlib.wait(deadline);

// await timesup();

// for (const who of [accD, ...users]) {
//     console.warn(stdlib.formatAddress(who), 'has', 
//         stdlib.formatCurrency(await stdlib.balanceof(who)));
// }