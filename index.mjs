import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

const ctc = acc.contract(backend);

const proposers = [];
const startProposers = async () => {

    const runProposers = async (who) => {
        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        proposers.push([who, acc]);

        console.log(`${who} decides to propose`);
    }

    await runProposers('Alice');
    await runProposers('Bob');

}

await ctc.participants.Creator({
    creationReady: () => {
        startProposers();
    },

});