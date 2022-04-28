'reach 0.1';

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        creationReady: Fun([], Null),
    });

    const Proposer = API('Proposer', {

    });

    const Voter = API('Voter', {

    });

    init()

});