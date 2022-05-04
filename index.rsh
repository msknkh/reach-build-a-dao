'reach 0.1';

export const main = Reach.App(() => {
    const Deployer = Participant('Admin', {
        signedMoney: UInt,
        deadline: UInt,
        deployReady: Fun([], Null),
    });

    //Proposer Address, description 
    //UInt
    const Proposer = API('Proposer', {
        propose: Fun([Address], Bool),
    });

    //proposalId, vote, reason, Address
    //UInt, UInt, 
    const Voter = API('Voter', {
        //0 -> yes
        //1 -> no 
        //2 -> abstain
        vote: Fun([Address], Bool),
        timesUp: Fun([], Bool),
    });

    init()

    Deployer.only(() => {
        const signedMoney = declassify(interact.signedMoney);
        const deadline = declassify(interact.deadline);
    })
    Deployer.publish(signedMoney, deadline);
    commit();
    Deployer.publish();
    Deployer.interact.deployReady();

    const deadlineBlock = relativeTime(deadline);
    //const proposals = new Set();
    const Votes = new Set(); 


    const [ keepGoing, howMany ] = 
        parallelReduce([true, 0])
        .define(() => {
            const checkVoted = (actor, who) => {
                check( actor == Deployer, "you are the boss");
                check( ! Votes.member(who), "not yet" );
                return () => {
                  Votes.insert(who);
                  return [ keepGoing, howMany + 1 ];
                };
            };
        })
        .invariant(
            balance() == howMany * signedMoney
            && Votes.Map.size() == howMany
        )
        .while( keepGoing )
        .api(Proposer.propose,
            (who) => {},
            (_) => 0,
            (who, k) => {
                k(true);
                return [true, howMany];
            }
        ) 
        .api(Voter.vote,
            (who) => {const _ = checkVoted(this, who); },
            (_) => signedMoney,
            (who, k) => {
                k(true);
                return checkVoted(this, who)();
        }) 
        .timeout( deadlineBlock, () => {
            const [ [], k ] = call(Voter.timesUp);
            k(true);
            return [ false, howMany ]
        });

    const leftovers = howMany;
    transfer(leftovers * signedMoney).to(Deployer);

    commit();
    exit();

});