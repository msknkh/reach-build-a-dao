import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const accD = await stdlib.newTestAccount(startingBalance);

const deadline = stdlib.connector === 'CFX' ? 500 : 250;

const ctcD = accD.contract(backend);

try {

    await ctcD.p.Admin({
        deadline,
        signedMoney: stdlib.parseCurrency(25),
        deployReady: () => {
            console.log('The contract is ready');
            throw 42;
        }
    });

} catch (e) {
    if (e != 42) {
        throw e;
    }
}

const users = await stdlib.newTestAccount(5, startingBalance);


const willError = async (f) => {
    let e;
    try {
        await f();
        e = false;
    } catch (te) {
        e = te;
    }

    if (e === false) {
        throw Error('Expected to error, but didnt');
    }

    console.log(`That last call errored and that's okay`);

};

const ctcWho = (whoi) => 
    users[whoi].contract(backend, ctcD.getInfo());

const propose = async (whoi) => {
    const who = users[whoi];
    const ctc = ctcWho(whoi);
    console.log('RSVP of', stdlib.formatAddress(who));
    await ctc.apis.Proposer.propose();
}

const do_voting = async (ctc, whoi) => {
    const who = users[whoi];
    console.log('voting in of', stdlib.formatAddress(who));
    await ctc.apis.Voter.vote(who);
};

const voting = (whoi) => do_voting(ctcD, whoi);
//const bad_voting = (whoi) => do_voting(ctcWho(whoi), whoi);
const timesup = async () => {
    console.log('I think time for voting is up');
    await ctcD.apis.Voter.timesup();
}

// await propose(0);
// await propose(1);
// await willError(() => propose(1));
//await voting(1);
//await voting(0);

console.log('we are gonna wait for the deadline');
await stdlib.wait(deadline);

await timesup();

for (const who of [accD, ...users]) {
    console.warn(stdlib.formatAddress(who), 'has', 
        stdlib.formatCurrency(await stdlib.balanceof(who)));
}