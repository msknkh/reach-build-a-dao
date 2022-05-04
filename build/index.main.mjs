// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    Proposer_propose0_81: ctc4,
    Voter_vote0_81: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v265 = stdlib.protect(ctc2, interact.deadline, 'for Admin\'s interact field deadline');
  const v266 = stdlib.protect(ctc2, interact.signedMoney, 'for Admin\'s interact field signedMoney');
  
  const txn1 = await (ctc.sendrecv({
    args: [v266, v265],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v270, v271], secs: v273, time: v272, didSend: v29, from: v269 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v270, v271], secs: v273, time: v272, didSend: v29, from: v269 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v269, v270, v271, v272],
    evt_cnt: 0,
    funcNum: 1,
    lct: v272,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v276, time: v275, didSend: v34, from: v274 } = txn2;
      
      ;
      const v277 = stdlib.addressEq(v269, v274);
      ;
      
      const v285 = stdlib.add(v272, v271);
      const v287 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
      const v288 = true;
      const v289 = v275;
      
      if (await (async () => {
        
        return v288;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v437 = stdlib.mul(v287, v270);
        sim_r.txns.push({
          amt: v437,
          kind: 'from',
          to: v269,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v276, time: v275, didSend: v34, from: v274 } = txn2;
  ;
  const v277 = stdlib.addressEq(v269, v274);
  stdlib.assert(v277, {
    at: './index.rsh:34:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.deployReady(), {
    at: './index.rsh:35:34:application',
    fs: ['at ./index.rsh:35:34:application call to [unknown function] (defined at: ./index.rsh:35:34:function exp)', 'at ./index.rsh:35:34:application call to "liftedInteract" (defined at: ./index.rsh:35:34:application)'],
    msg: 'deployReady',
    who: 'Admin'
    });
  
  const v285 = stdlib.add(v272, v271);
  let v287 = stdlib.checkedBigNumberify('./index.rsh:43:31:decimal', stdlib.UInt_max, '0');
  let v288 = true;
  let v289 = v275;
  
  while (await (async () => {
    
    return v288;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', v285],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v427], secs: v429, time: v428, didSend: v233, from: v426 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v430 = true;
      await txn4.getOutput('Voter_timesUp', 'v430', ctc6, v430);
      const cv287 = v287;
      const cv288 = false;
      const cv289 = v428;
      
      v287 = cv287;
      v288 = cv288;
      v289 = cv289;
      
      continue;
      }
    else {
      const {data: [v342], secs: v344, time: v343, didSend: v182, from: v341 } = txn3;
      switch (v342[0]) {
        case 'Proposer_propose0_81': {
          const v345 = v342[1];
          undefined /* setApiDetails */;
          ;
          const v357 = true;
          await txn3.getOutput('Proposer_propose', 'v357', ctc6, v357);
          const cv287 = v287;
          const cv288 = true;
          const cv289 = v343;
          
          v287 = cv287;
          v288 = cv288;
          v289 = cv289;
          
          continue;
          break;
          }
        case 'Voter_vote0_81': {
          const v384 = v342[1];
          undefined /* setApiDetails */;
          ;
          const v405 = v384[stdlib.checkedBigNumberify('./index.rsh:67:13:spread', stdlib.UInt_max, '0')];
          const v406 = true;
          await txn3.getOutput('Voter_vote', 'v406', ctc6, v406);
          const v413 = stdlib.addressEq(v341, v269);
          stdlib.assert(v413, {
            at: './index.rsh:46:22:application',
            fs: ['at ./index.rsh:72:34:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
            msg: 'you are the boss',
            who: 'Admin'
            });
          const v414 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v405), null);
          let v415;
          switch (v414[0]) {
            case 'None': {
              const v416 = v414[1];
              v415 = false;
              
              break;
              }
            case 'Some': {
              const v417 = v414[1];
              v415 = true;
              
              break;
              }
            }
          const v418 = v415 ? false : true;
          stdlib.assert(v418, {
            at: './index.rsh:47:22:application',
            fs: ['at ./index.rsh:72:34:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
            msg: 'not yet',
            who: 'Admin'
            });
          await stdlib.mapSet(map0, v405, null);
          const v420 = stdlib.add(v287, stdlib.checkedBigNumberify('./index.rsh:50:49:decimal', stdlib.UInt_max, '1'));
          const cv287 = v420;
          const cv288 = true;
          const cv289 = v343;
          
          v287 = cv287;
          v288 = cv288;
          v289 = cv289;
          
          continue;
          break;
          }
        }}
    
    }
  const v437 = stdlib.mul(v287, v270);
  ;
  return;
  
  
  
  
  };
export async function Proposer_propose(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Proposer_propose expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Proposer_propose expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Data({
    Proposer_propose0_81: ctc4,
    Voter_vote0_81: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v269, v270, v285, v287] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v311 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:19:application call to [unknown function] (defined at: ./index.rsh:60:19:function exp)', 'at ./index.rsh:43:23:application call to "runProposer_propose0_81" (defined at: ./index.rsh:59:13:function exp)', 'at ./index.rsh:43:23:application call to [unknown function] (defined at: ./index.rsh:43:23:function exp)'],
    msg: 'in',
    who: 'Proposer_propose'
    });
  const v318 = ['Proposer_propose0_81', v311];
  
  const txn1 = await (ctc.sendrecv({
    args: [v269, v270, v285, v287, v318],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v342], secs: v344, time: v343, didSend: v182, from: v341 } = txn1;
      
      switch (v342[0]) {
        case 'Proposer_propose0_81': {
          const v345 = v342[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Proposer_propose"
            });
          ;
          const v357 = true;
          const v358 = await txn1.getOutput('Proposer_propose', 'v357', ctc6, v357);
          
          const v819 = v287;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voter_vote0_81': {
          const v384 = v342[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v342], secs: v344, time: v343, didSend: v182, from: v341 } = txn1;
  switch (v342[0]) {
    case 'Proposer_propose0_81': {
      const v345 = v342[1];
      undefined /* setApiDetails */;
      ;
      const v357 = true;
      const v358 = await txn1.getOutput('Proposer_propose', 'v357', ctc6, v357);
      if (v182) {
        stdlib.protect(ctc0, await interact.out(v345, v358), {
          at: './index.rsh:59:14:application',
          fs: ['at ./index.rsh:59:14:application call to [unknown function] (defined at: ./index.rsh:59:14:function exp)', 'at ./index.rsh:63:18:application call to "k" (defined at: ./index.rsh:62:22:function exp)', 'at ./index.rsh:62:22:application call to [unknown function] (defined at: ./index.rsh:62:22:function exp)'],
          msg: 'out',
          who: 'Proposer_propose'
          });
        }
      else {
        }
      
      const v819 = v287;
      return;
      
      break;
      }
    case 'Voter_vote0_81': {
      const v384 = v342[1];
      return;
      break;
      }
    }
  
  
  };
export async function Voter_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v269, v270, v285, v287] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v425 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:75:13:application',
    fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)', 'at ./index.rsh:74:37:application call to [unknown function] (defined at: ./index.rsh:74:37:function exp)'],
    msg: 'in',
    who: 'Voter_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v269, v270, v285, v287, v425],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v427], secs: v429, time: v428, didSend: v233, from: v426 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voter_timesUp"
        });
      ;
      const v430 = true;
      const v431 = await txn1.getOutput('Voter_timesUp', 'v430', ctc5, v430);
      
      const v830 = stdlib.mul(v287, v270);
      sim_r.txns.push({
        amt: v830,
        kind: 'from',
        to: v269,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v427], secs: v429, time: v428, didSend: v233, from: v426 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v430 = true;
  const v431 = await txn1.getOutput('Voter_timesUp', 'v430', ctc5, v430);
  stdlib.protect(ctc0, await interact.out(v427, v431), {
    at: './index.rsh:75:13:application',
    fs: ['at ./index.rsh:75:13:application call to [unknown function] (defined at: ./index.rsh:75:13:function exp)', 'at ./index.rsh:76:14:application call to "k" (defined at: ./index.rsh:75:13:function exp)', 'at ./index.rsh:74:37:application call to [unknown function] (defined at: ./index.rsh:74:37:function exp)'],
    msg: 'out',
    who: 'Voter_timesUp'
    });
  
  const v830 = stdlib.mul(v287, v270);
  ;
  return;
  
  
  
  };
export async function Voter_vote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter_vote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter_vote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Data({
    Proposer_propose0_81: ctc4,
    Voter_vote0_81: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v269, v270, v285, v287] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3]);
  const v320 = ctc.selfAddress();
  const v322 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)', 'at ./index.rsh:43:23:application call to "runVoter_vote0_81" (defined at: ./index.rsh:67:13:function exp)', 'at ./index.rsh:43:23:application call to [unknown function] (defined at: ./index.rsh:43:23:function exp)'],
    msg: 'in',
    who: 'Voter_vote'
    });
  const v323 = v322[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v326 = stdlib.addressEq(v320, v269);
  stdlib.assert(v326, {
    at: './index.rsh:46:22:application',
    fs: ['at ./index.rsh:68:43:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)', 'at ./index.rsh:43:23:application call to "runVoter_vote0_81" (defined at: ./index.rsh:67:13:function exp)', 'at ./index.rsh:43:23:application call to [unknown function] (defined at: ./index.rsh:43:23:function exp)'],
    msg: 'you are the boss',
    who: 'Voter_vote'
    });
  const v327 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v323), null);
  let v328;
  switch (v327[0]) {
    case 'None': {
      const v329 = v327[1];
      v328 = false;
      
      break;
      }
    case 'Some': {
      const v330 = v327[1];
      v328 = true;
      
      break;
      }
    }
  const v331 = v328 ? false : true;
  stdlib.assert(v331, {
    at: './index.rsh:47:22:application',
    fs: ['at ./index.rsh:68:43:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)', 'at ./index.rsh:68:19:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)', 'at ./index.rsh:43:23:application call to "runVoter_vote0_81" (defined at: ./index.rsh:67:13:function exp)', 'at ./index.rsh:43:23:application call to [unknown function] (defined at: ./index.rsh:43:23:function exp)'],
    msg: 'not yet',
    who: 'Voter_vote'
    });
  const v335 = ['Voter_vote0_81', v322];
  
  const txn1 = await (ctc.sendrecv({
    args: [v269, v270, v285, v287, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v270, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v342], secs: v344, time: v343, didSend: v182, from: v341 } = txn1;
      
      switch (v342[0]) {
        case 'Proposer_propose0_81': {
          const v345 = v342[1];
          
          break;
          }
        case 'Voter_vote0_81': {
          const v384 = v342[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voter_vote"
            });
          sim_r.txns.push({
            amt: v270,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v405 = v384[stdlib.checkedBigNumberify('./index.rsh:67:13:spread', stdlib.UInt_max, '0')];
          const v406 = true;
          const v407 = await txn1.getOutput('Voter_vote', 'v406', ctc6, v406);
          
          const v413 = stdlib.addressEq(v341, v269);
          ;
          const v414 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v405), null);
          let v415;
          switch (v414[0]) {
            case 'None': {
              const v416 = v414[1];
              v415 = false;
              
              break;
              }
            case 'Some': {
              const v417 = v414[1];
              v415 = true;
              
              break;
              }
            }
          const v418 = v415 ? false : true;
          ;
          await stdlib.simMapSet(sim_r, 0, v405, null);
          const v420 = stdlib.add(v287, stdlib.checkedBigNumberify('./index.rsh:50:49:decimal', stdlib.UInt_max, '1'));
          const v835 = v420;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v342], secs: v344, time: v343, didSend: v182, from: v341 } = txn1;
  switch (v342[0]) {
    case 'Proposer_propose0_81': {
      const v345 = v342[1];
      return;
      break;
      }
    case 'Voter_vote0_81': {
      const v384 = v342[1];
      undefined /* setApiDetails */;
      ;
      const v405 = v384[stdlib.checkedBigNumberify('./index.rsh:67:13:spread', stdlib.UInt_max, '0')];
      const v406 = true;
      const v407 = await txn1.getOutput('Voter_vote', 'v406', ctc6, v406);
      if (v182) {
        stdlib.protect(ctc0, await interact.out(v384, v407), {
          at: './index.rsh:67:14:application',
          fs: ['at ./index.rsh:67:14:application call to [unknown function] (defined at: ./index.rsh:67:14:function exp)', 'at ./index.rsh:71:18:application call to "k" (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
          msg: 'out',
          who: 'Voter_vote'
          });
        }
      else {
        }
      
      const v413 = stdlib.addressEq(v341, v269);
      stdlib.assert(v413, {
        at: './index.rsh:46:22:application',
        fs: ['at ./index.rsh:72:34:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
        msg: 'you are the boss',
        who: 'Voter_vote'
        });
      const v414 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v405), null);
      let v415;
      switch (v414[0]) {
        case 'None': {
          const v416 = v414[1];
          v415 = false;
          
          break;
          }
        case 'Some': {
          const v417 = v414[1];
          v415 = true;
          
          break;
          }
        }
      const v418 = v415 ? false : true;
      stdlib.assert(v418, {
        at: './index.rsh:47:22:application',
        fs: ['at ./index.rsh:72:34:application call to "checkVoted" (defined at: ./index.rsh:45:45:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
        msg: 'not yet',
        who: 'Voter_vote'
        });
      await stdlib.mapSet(map0, v405, null);
      const v420 = stdlib.add(v287, stdlib.checkedBigNumberify('./index.rsh:50:49:decimal', stdlib.UInt_max, '1'));
      const v835 = v420;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Proposer_propose(address)byte`, `Voter_timesUp()byte`, `Voter_vote(address)byte`],
    pure: [],
    sigs: [`Proposer_propose(address)byte`, `Voter_timesUp()byte`, `Voter_vote(address)byte`]
    },
  appApproval: `BiAJAAEEKCAwCJTXp7QFmonwxg4mAwEAAQEAIjUAMRhBAsIqZEkiWzUBIQZbNQIxGSMSQQAIMQAoKGZCApA2GgAXSUEAQCI1BCM1BkkhBwxAAB9JIQgMQAAQIQgSRDYaATX/KDT/UEIAjiEHEkQqQgAxgZPz0eACEkQ2GgE1/yk0/1BCAHI2GgIXNQQ2GgM2GgEXSYEDDEABGEkkDEAAVyQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACQAAAAAAAAGuAbApNQc0A1cAIDQDIQRbNP80AyEFWyIyBkIBV0gkNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf4lWzX9IQVbNfxJNQU1+4AEFJFA1DT7ULAyBjT9DEQ0+yJVQAAdgAkAAAAAAAABZQGwKTUHNP80/jT9NPwjMgZCAPM0+1cBIDX6NP6IAZQ0+jX5gAkAAAAAAAABlgGwKTUHMQA0/xJENPmIAWlJNfciVUAABiI1+EIABiM1+EIAADT4FEQ0+SgpZjT/NP40/TT8IwgjMgZCAJxJIwxAAEIjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/zQDIQRbNAMhBVs0AyVbCCIjMgZCAFRIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQZbNf6ABKzRH8M0/xZQNP4WULCBoI0GiADNMQA0/xZQNP4WUDIGFlAoSwFXADhnSCM1ATIGNQJCAGM1/zX+Nf01/DX7Nfo0/kEAIDT6NPsWUDT8FlA0/RZQKEsBVwA4Z0gkNQEyBjUCQgAysSKyATT9NPsLsggjshA0+rIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 56,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v270",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v271",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Proposer_propose0_81",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Voter_vote0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v427",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v357",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v406",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v430",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Proposer_propose",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voter_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Voter_vote",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Proposer_propose0_81",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Voter_vote0_81",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v427",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620017643803806200176483398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61146d80620002f76000396000f3fe60806040526004361061008f5760003560e01c806370aabeba1161005657806370aabeba146101325780638323075714610145578063a98bf2231461015a578063ab53f2c61461016d578063bedf51ec1461019057005b806302a01c53146100985780631e93b0f1146100c057806325060a07146100df5780632c10a159146100f25780633bc5b7bf1461010557005b3661009657005b005b6100ab6100a6366004610f4a565b610198565b60405190151581526020015b60405180910390f35b3480156100cc57600080fd5b506003545b6040519081526020016100b7565b6100ab6100ed366004610f4a565b610207565b610096610100366004610f86565b610279565b34801561011157600080fd5b50610125610120366004610f4a565b6102b2565b6040516100b79190610fd6565b610096610140366004611008565b6102de565b34801561015157600080fd5b506001546100d1565b610096610168366004610f86565b610313565b34801561017957600080fd5b50610182610348565b6040516100b792919061101a565b6100ab6103e5565b604080516060810182526000808252602082018190529181018290526101bc610d84565b6101c4610da3565b60408051602080820183526001600160a01b0388168252838101919091526000835281518082019092528282528301526101fe8284610431565b50505192915050565b6040805160608101825260008082526020820181905291810182905261022b610d84565b610233610da3565b60408051602080820183526001600160a01b03881682528383019190915260018352815180820190925282825283015261026d8284610431565b50506040015192915050565b60408051606081018252600080825260208201819052918101919091526102ae6102a836849003840184611120565b826107e0565b5050565b60408051606081018252600080825260208201819052918101919091526102d882610984565b92915050565b60408051606081018252600080825260208201819052918101919091526102ae61030d368490038401846111b2565b82610431565b60408051606081018252600080825260208201819052918101919091526102ae6103423684900384018461126a565b82610a5d565b60006060600054600280805461035d906112c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610389906112c2565b80156103d65780601f106103ab576101008083540402835291602001916103d6565b820191906000526020600020905b8154815290600101906020018083116103b957829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101829052610409610dde565b60408051602080820190925260008152908201526104278183610a5d565b5060200151919050565b6104416004600054146010610c24565b815161045c90158061045557508251600154145b6011610c24565b60008080556002805461046e906112c2565b80601f016020809104026020016040519081016040528092919081815260200182805461049a906112c2565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b50505050508060200190518101906104ff9190611376565b90506105236040805160608101825260009181018281528152602081019190915290565b610534826040015143106012610c24565b7f9bd1e74624a1e588c371f73e9f734b742e4141ff89cd45e75fbcda3f5834b8793385604051610565929190611392565b60405180910390a1600060208501515151600181111561058757610587610fa2565b141561062d576105993415600c610c24565b604051600181527f716074afdd2ab5a935ee9f70ad818814b4d1fd08a0f1900aff3c6269d3c74dd49060200160405180910390a1600183526105d9610e08565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608501518284018051919091528051600193019290925290514391015261062781610c49565b506107da565b600160208501515151600181111561064757610647610fa2565b14156107da576020808501515160400151825282015161066a903414600d610c24565b604051600181527fc8faafcf54f014ebfcdae9a661c5b1de8a1056ae579b99da5296c8feb484cefe9060200160405180910390a16001604084015281516106bd906001600160a01b03163314600e610c24565b60008151516106cb90610984565b5160018111156106dd576106dd610fa2565b14156106ef576000602082015261071d565b60018151516106fd90610984565b51600181111561070f5761070f610fa2565b141561071d57600160208201525b61073a8160200151610730576001610733565b60005b600f610c24565b8051516001600160a01b03908116600090815260046020526040808220805460ff19166001179055835151909216815220805462ff00001916905561077d610e08565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608301516107b790600190611400565b602080830180519290925281516001910152514360409091015261062781610c49565b50505050565b6107f0600160005414600a610c24565b815161080b90158061080457508251600154145b600b610c24565b60008080556002805461081d906112c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906112c2565b80156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b50505050508060200190518101906108ae9190611376565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161090534156008610c24565b805161091d906001600160a01b031633146009610c24565b610925610e08565b815181516001600160a01b039091169052602080830151825190910152604082015160608301516109569190611400565b815160409081019190915260208083018051600090528051600192019190915251439101526107da81610c49565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156109d0576109d0610fa2565b1415610a4d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a1157610a11610fa2565b6001811115610a2257610a22610fa2565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610a6d6004600054146014610c24565b8151610a88901580610a8157508251600154145b6015610c24565b600080805560028054610a9a906112c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac6906112c2565b8015610b135780601f10610ae857610100808354040283529160200191610b13565b820191906000526020600020905b815481529060010190602001808311610af657829003601f168201915b5050505050806020019051810190610b2b9190611376565b9050610b3f81604001514310156016610c24565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610b9334156013610c24565b604051600181527feeac4eae36ec4e04123a226fe1715b7e591000445cc629fbea872f67cd758d269060200160405180910390a160016020830152610bd6610e08565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060840151828401805191909152805160009301929092529051439101526107da81610c49565b816102ae5760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516020015115610d1957610c8b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815284516040908101518186019081528387015151606080880191825260046000554360015583519586019690965292519184019190915251928201929092529051608082015260a00160405160208183030381529060405260029080519060200190610d14929190610e4f565b505050565b8051805160209182015191830151516001600160a01b03909116916108fc91610d429190611418565b6040518115909202916000818181858888f19350505050158015610d6a573d6000803e3d6000fd5b5060008080556001819055610d8190600290610ed3565b50565b604051806040016040528060008152602001610d9e610f0d565b905290565b604080516060810190915280600081526040805160208181019092526000815291019081526040805160208181019092526000815291015290565b604051806040016040528060008152602001610d9e60405180602001604052806000151581525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054610e5b906112c2565b90600052602060002090601f016020900481019282610e7d5760008555610ec3565b82601f10610e9657805160ff1916838001178555610ec3565b82800160010185558215610ec3579182015b82811115610ec3578251825591602001919060010190610ea8565b50610ecf929150610f20565b5090565b508054610edf906112c2565b6000825580601f10610eef575050565b601f016020900490600052602060002090810190610d819190610f20565b6040518060200160405280610d9e610da3565b5b80821115610ecf5760008155600101610f21565b6001600160a01b0381168114610d8157600080fd5b600060208284031215610f5c57600080fd5b8135610f6781610f35565b9392505050565b600060408284031215610f8057600080fd5b50919050565b600060408284031215610f9857600080fd5b610f678383610f6e565b634e487b7160e01b600052602160045260246000fd5b60028110610d8157634e487b7160e01b600052602160045260246000fd5b81516060820190610fe681610fb8565b8083525060208301511515602083015260408301511515604083015292915050565b600060808284031215610f8057600080fd5b82815260006020604081840152835180604085015260005b8181101561104e57858101830151858201606001528201611032565b81811115611060576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156110a857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156110a857634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156110a857634e487b7160e01b600052604160045260246000fd5b80358015158114610a5857600080fd5b60006040828403121561113257600080fd5b61113a611077565b8235815261114a60208401611110565b60208201529392505050565b60006020828403121561116857600080fd5b6040516020810181811067ffffffffffffffff8211171561119957634e487b7160e01b600052604160045260246000fd5b60405290508082356111aa81610f35565b905292915050565b600081830360808112156111c557600080fd5b6040516040810181811067ffffffffffffffff821117156111f657634e487b7160e01b600052604160045260246000fd5b604052833581526060601f198301121561120f57600080fd5b6112176110ae565b91506112216110df565b60208501356002811061123357600080fd5b81526112428660408701611156565b60208201526112548660608701611156565b6040820152825260208101919091529392505050565b6000818303604081121561127d57600080fd5b611285611077565b833581526020601f198301121561129b57600080fd5b6112a36110ae565b91506112b160208501611110565b825260208101919091529392505050565b600181811c908216806112d657607f821691505b60208210811415610f8057634e487b7160e01b600052602260045260246000fd5b60006080828403121561130957600080fd5b6040516080810181811067ffffffffffffffff8211171561133a57634e487b7160e01b600052604160045260246000fd5b8060405250809150825161134d81610f35565b808252506020830151602082015260408301516040820152606083015160608201525092915050565b60006080828403121561138857600080fd5b610f6783836112f7565b6001600160a01b038381168252825160208084019190915283015151805160a084019291906113c081610fb8565b80604086015250816020820151511660608501528160408201515116608085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611413576114136113ea565b500190565b6000816000190483118215151615611432576114326113ea565b50029056fea2646970667358221220e78693a7740144ada84ce14639c0d409fea411084e3c47026d118d4f36682ca064736f6c634300080c0033`,
  BytecodeLen: 5988,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:43:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Proposer_propose": Proposer_propose,
  "Voter_timesUp": Voter_timesUp,
  "Voter_vote": Voter_vote
  };
export const _APIs = {
  Proposer: {
    propose: Proposer_propose
    },
  Voter: {
    timesUp: Voter_timesUp,
    vote: Voter_vote
    }
  };
