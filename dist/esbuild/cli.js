#!/usr/bin/env node
"use strict";(()=>{var V=Object.create;var O=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var T=(r=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(r,{get:(e,t)=>(typeof require!="undefined"?require:e)[t]}):r)(function(r){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var D=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of L(e))!U.call(r,a)&&a!==t&&O(r,a,{get:()=>e[a],enumerable:!(n=_(e,a))||n.enumerable});return r};var h=(r,e,t)=>(t=r!=null?V(q(r)):{},D(e||!r||!r.__esModule?O(t,"default",{value:r,enumerable:!0}):t,r));var l=(r,e,t)=>new Promise((n,a)=>{var i=u=>{try{o(t.next(u))}catch(y){a(y)}},s=u=>{try{o(t.throw(u))}catch(y){a(y)}},o=u=>u.done?n(u.value):Promise.resolve(u.value).then(i,s);o((t=t.apply(r,e)).next())});var E=h(T("figlet"));var k={name:"ssv-scanner",version:"0.0.1",description:"Library to retrieve cluster snapshots and owner nonce from the ssv.network contract.",author:"SSV.Network",repository:"https://github.com/bloxapp/cluster-scanner",license:"MIT",keywords:["ssv","ssv.network","cluster","nonce","scanner"],main:"./dist/tsc/src/main.js",types:"./dist/tsc/src/main.d.ts",bin:{"ssv-keys":"./dist/tsc/src/cli.js"},engines:{node:">=12"},scripts:{"dev:cli":"ts-node src/cli.ts",cli:"node ./dist/tsc/src/cli.js",lint:"eslint src/ --ext .js,.jsx,.ts,.tsx",clean:"rm -rf dist build package","ts-node":"ts-node",build:"tsc -p tsconfig.json","build-all":"yarn clean && yarn build && yarn esbuild",esbuild:"node ./esbuild.js","pre-commit":"yarn test && yarn lint && yarn build-all"},devDependencies:{"@types/argparse":"^2.0.10","@types/cli-progress":"^3.11.0","@types/node":"^15.14.9",esbuild:"^0.14.38","esbuild-node-externals":"^1.4.1",eslint:"^7.32.0","ts-node":"^10.9.1",typescript:"^4.6.4"},dependencies:{"@types/figlet":"^1.5.4",argparse:"^2.0.1","cli-progress":"^3.11.2",figlet:"^1.5.2",web3:"^1.8.1"},licenses:[{MIT:"SEE LICENSE IN LICENCE FILE"}]};var F=T("argparse");var N=T("argparse"),b=class{constructor(e,t){this.name=e;this.description=t;this.parser=new N.ArgumentParser({description:this.description}),this.setArguments(this.parser)}parse(e){return this.parser.parse_args(e)}};var C=h(T("cli-progress"));var B=h(T("web3"));var M=[{inputs:[{internalType:"address",name:"_registerAuth",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalNotWithinTimeframe",type:"error"},{inputs:[],name:"CallerNotOwner",type:"error"},{inputs:[],name:"CallerNotWhitelisted",type:"error"},{inputs:[],name:"ClusterAlreadyEnabled",type:"error"},{inputs:[],name:"ClusterDoesNotExists",type:"error"},{inputs:[],name:"ClusterIsLiquidated",type:"error"},{inputs:[],name:"ClusterNotLiquidatable",type:"error"},{inputs:[],name:"ExceedValidatorLimit",type:"error"},{inputs:[],name:"FeeExceedsIncreaseLimit",type:"error"},{inputs:[],name:"FeeIncreaseNotAllowed",type:"error"},{inputs:[],name:"FeeTooLow",type:"error"},{inputs:[],name:"IncorrectClusterState",type:"error"},{inputs:[],name:"InsufficientBalance",type:"error"},{inputs:[],name:"InvalidOperatorIdsLength",type:"error"},{inputs:[],name:"InvalidPublicKeyLength",type:"error"},{inputs:[],name:"NewBlockPeriodIsBelowMinimum",type:"error"},{inputs:[],name:"NoFeeDeclared",type:"error"},{inputs:[],name:"NotAuthorized",type:"error"},{inputs:[],name:"OperatorAlreadyExists",type:"error"},{inputs:[],name:"OperatorDoesNotExist",type:"error"},{inputs:[],name:"OperatorsListNotUnique",type:"error"},{inputs:[],name:"SameFeeChangeNotAllowed",type:"error"},{inputs:[],name:"TokenTransferFailed",type:"error"},{inputs:[],name:"UnsortedOperatorsList",type:"error"},{inputs:[],name:"ValidatorAlreadyExists",type:"error"},{inputs:[],name:"ValidatorDoesNotExist",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterLiquidated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterReactivated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"DeclareOperatorFeePeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"ExecuteOperatorFeePeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"address",name:"recipientAddress",type:"address"}],name:"FeeRecipientAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"LiquidationThresholdPeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"MinimumLiquidationCollateralUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"address",name:"recipient",type:"address"}],name:"NetworkEarningsWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"oldFee",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newFee",type:"uint256"}],name:"NetworkFeeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"}],name:"OperatorFeeCancellationDeclared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"blockNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorFeeDeclared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"blockNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorFeeExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"OperatorFeeIncreaseLimitUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"}],name:"OperatorRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"address",name:"whitelisted",type:"address"}],name:"OperatorWhitelistUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"OperatorWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"shares",type:"bytes"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ValidatorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ValidatorRemoved",type:"event"},{inputs:[],name:"acceptOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"cancelDeclaredOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"clusters",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"dao",outputs:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"balance",type:"uint64"},{internalType:"uint64",name:"block",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"declareOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"executeOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"initialVersion_",type:"string"},{internalType:"contract IERC20",name:"token_",type:"address"},{internalType:"uint64",name:"operatorMaxFeeIncrease_",type:"uint64"},{internalType:"uint64",name:"declareOperatorFeePeriod_",type:"uint64"},{internalType:"uint64",name:"executeOperatorFeePeriod_",type:"uint64"},{internalType:"uint64",name:"minimumBlocksBeforeLiquidation_",type:"uint64"},{internalType:"uint256",name:"minimumLiquidationCollateral_",type:"uint256"},{internalType:"uint32",name:"validatorsPerOperatorLimit_",type:"uint32"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"liquidate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"minimumBlocksBeforeLiquidation",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"minimumLiquidationCollateral",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"network",outputs:[{internalType:"uint64",name:"networkFee",type:"uint64"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"networkFeeIndexBlockNumber",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operatorFeeChangeRequests",outputs:[{internalType:"uint64",name:"fee",type:"uint64"},{internalType:"uint64",name:"approvalBeginTime",type:"uint64"},{internalType:"uint64",name:"approvalEndTime",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"operatorFeeConfig",outputs:[{internalType:"uint64",name:"declareOperatorFeePeriod",type:"uint64"},{internalType:"uint64",name:"executeOperatorFeePeriod",type:"uint64"},{internalType:"uint64",name:"operatorMaxFeeIncrease",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operators",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64",name:"fee",type:"uint64"},{internalType:"uint32",name:"validatorCount",type:"uint32"},{components:[{internalType:"uint64",name:"block",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint64",name:"balance",type:"uint64"}],internalType:"struct ISSVNetworkCore.Snapshot",name:"snapshot",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"operatorsPKs",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operatorsWhitelist",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"proxiableUUID",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"reactivate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"reduceOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"registerOperator",outputs:[{internalType:"uint64",name:"id",type:"uint64"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"bytes",name:"shares",type:"bytes"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"registerValidator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"removeOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"removeValidator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipientAddress",type:"address"}],name:"setFeeRecipientAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"address",name:"whitelisted",type:"address"}],name:"setOperatorWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"timeInSeconds",type:"uint64"}],name:"updateDeclareOperatorFeePeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"timeInSeconds",type:"uint64"}],name:"updateExecuteOperatorFeePeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"blocks",type:"uint64"}],name:"updateLiquidationThresholdPeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"updateMinimumLiquidationCollateral",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"updateNetworkFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"percentage",type:"uint64"}],name:"updateOperatorFeeIncreaseLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"validatorPKs",outputs:[{internalType:"bytes32",name:"hashedOperatorIds",type:"bytes32"},{internalType:"bool",name:"active",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"validatorsPerOperatorLimit",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"balance",type:"uint256"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawNetworkEarnings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawOperatorEarnings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"withdrawOperatorEarnings",outputs:[],stateMutability:"nonpayable",type:"function"}];var w=class{static web3(e=""){return new B.default(e)}static get abi(){return M}static contract(e,t){return new(w.web3(e)).eth.Contract(w.abi,t)}static getGenesisBlock(e,t){return l(this,null,function*(){let[n]=yield w.contract(e,t).getPastEvents("Initialized",{fromBlock:0});return(n==null?void 0:n.blockNumber)||0})}},p=w;p.BLOCK_RANGE_500K=5e5;var f=class{constructor(e){this.DAY=5400;this.WEEK=this.DAY*7;this.MONTH=this.DAY*30;if(!e.contractAddress)throw Error("Contract address is required");if(!e.nodeUrl)throw Error("ETH1 node is required");if(!e.ownerAddress)throw Error("Cluster owner address is required");if(e.contractAddress.length!==42)throw Error("Invalid contract address length.");if(!e.contractAddress.startsWith("0x"))throw Error("Invalid contract address.");if(e.ownerAddress.length!==42)throw Error("Invalid owner address length.");if(!e.ownerAddress.startsWith("0x"))throw Error("Invalid owner address.");this.params=e,this.params.contractAddress=p.web3().utils.toChecksumAddress(this.params.contractAddress),this.params.ownerAddress=p.web3().utils.toChecksumAddress(this.params.ownerAddress)}};var v=class extends f{run(e){return l(this,null,function*(){e&&(console.log(`
Scanning blockchain...`),this.progressBar=new C.default.SingleBar({},C.default.Presets.shades_classic));let t=yield this._getLatestNonce(e);return e&&this.progressBar.stop(),t})}_getLatestNonce(e){return l(this,null,function*(){let t;try{t=yield p.web3(this.params.nodeUrl).eth.getBlockNumber()}catch(u){throw new Error("Could not access the provided node endpoint.")}try{yield p.contract(this.params.nodeUrl,this.params.contractAddress).methods.owner().call()}catch(u){throw new Error("Could not find any cluster snapshot from the provided contract address.")}let n=this.MONTH,a=0,i=yield p.getGenesisBlock(this.params.nodeUrl,this.params.contractAddress),s=p.web3().eth.abi.encodeParameter("address",this.params.ownerAddress),o={fromBlock:i,toBlock:t,topics:[null,s]};e&&this.progressBar.start(t,0);do{let u;try{u=yield p.contract(this.params.nodeUrl,this.params.contractAddress).getPastEvents("ValidatorAdded",o),a+=u.length,o.fromBlock=o.toBlock+1}catch(y){console.error(y),n===this.MONTH?n=this.WEEK:n===this.WEEK&&(n=this.DAY)}o.toBlock=o.fromBlock+n<t?o.fromBlock+n:t,e&&this.progressBar.update(o.toBlock)}while(o.toBlock-o.fromBlock>0);return e&&this.progressBar.update(t,t),a})}};var g=class extends b{constructor(){super("nonce","Handles nonce operations")}setArguments(e){e.add_argument("-n","--node-url",{help:"The ETH1 node url.",required:!0,dest:"nodeUrl"}),e.add_argument("-ca","--ssv-contract-address",{help:"The SSV Contract address, used to find the latest cluster data snapshot. Refer to https://docs.ssv.network/developers/smart-contracts",required:!0,dest:"contractAddress"}),e.add_argument("-oa","--owner-address",{help:"The owner address regarding the cluster that you want to query",required:!0,dest:"ownerAddress"})}run(e){return l(this,null,function*(){try{let n=yield new v(e).run(!0);console.log("Owner nonce:",n)}catch(t){console.error("\x1B[31m",t.message)}})}};var A=h(T("cli-progress"));var x=class extends f{constructor(){super(...arguments);this.eventsList=["ClusterDeposited","ClusterWithdrawn","ValidatorRemoved","ValidatorAdded","ClusterLiquidated","ClusterReactivated"]}run(t,n){return l(this,null,function*(){if(!(Array.isArray(t)&&this._isValidOperatorIds(t.length)))throw Error("Comma-separated list of operator IDs. The amount must be 3f+1 compatible.");t=[...t].sort((s,o)=>s-o),n&&(console.log(`
Scanning blockchain...`),this.progressBar=new A.default.SingleBar({},A.default.Presets.shades_classic));let i=yield this._getClusterSnapshot(t,n);return n&&this.progressBar.stop(),i})}_getClusterSnapshot(t,n){return l(this,null,function*(){let a;try{a=yield p.web3(this.params.nodeUrl).eth.getBlockNumber()}catch(c){throw new Error("Could not access the provided node endpoint.")}try{yield p.contract(this.params.nodeUrl,this.params.contractAddress).methods.owner().call()}catch(c){throw console.log("eee",c),new Error("Could not find any cluster snapshot from the provided contract address.")}let i=this.MONTH,s,o=0,u=yield p.getGenesisBlock(this.params.nodeUrl,this.params.contractAddress),y=p.web3().eth.abi.encodeParameter("address",this.params.ownerAddress),m={fromBlock:a-i>u?a-i:u,toBlock:a,topics:[null,y]};for(n&&this.progressBar.start(a,0);!s&&m.fromBlock>=u;){let c;try{c=yield p.contract(this.params.nodeUrl,this.params.contractAddress).getPastEvents("allEvents",m),c.filter(d=>this.eventsList.includes(d.event)).filter(d=>JSON.stringify(d.returnValues.operatorIds.map(P=>+P))===JSON.stringify(t)).forEach(d=>{d.blockNumber>o&&(o=d.blockNumber,s=d.returnValues.cluster)}),m.toBlock=m.fromBlock}catch(d){console.error(d),i===this.MONTH?i=this.WEEK:i===this.WEEK&&(i=this.DAY)}m.fromBlock=m.toBlock-i,n&&this.progressBar.update(a-(m.toBlock-i))}return n&&this.progressBar.update(a,a),s=s||["0","0","0",!0,"0"],{payload:{Owner:this.params.ownerAddress,Operators:t.sort((c,d)=>c-d).join(","),Block:o||a,Data:s.join(",")},cluster:{validatorCount:s[0],networkFeeIndex:s[1],index:s[2],active:s[3],balance:s[4]}}})}_isValidOperatorIds(t){return!(t<4||t>13||t%3!=1)}};var I=class extends b{constructor(){super("cluster","Handles cluster operations")}setArguments(e){e.add_argument("-n","--node-url",{help:"The ETH1 node url.",required:!0,dest:"nodeUrl"}),e.add_argument("-ca","--ssv-contract-address",{help:"The SSV Contract address, used to find the latest cluster data snapshot. Refer to https://docs.ssv.network/developers/smart-contracts",required:!0,dest:"contractAddress"}),e.add_argument("-oa","--owner-address",{help:"The owner address regarding the cluster that you want to query",required:!0,dest:"ownerAddress"}),e.add_argument("-oids","--operator-ids",{help:"Comma-separated list of operators IDs regarding the cluster that you want to query",required:!0,dest:"operatorIds"})}run(e){return l(this,null,function*(){try{let t=e.operatorIds.split(",").map(i=>{if(Number.isNaN(+i))throw new Error("Operator Id should be the number");return+i}).sort((i,s)=>i-s),a=yield new x(e).run(t,!0);console.table(a.payload),console.log("Cluster snapshot:"),console.table(a.cluster),console.log(JSON.stringify({block:a.payload.Block,"cluster snapshot":a.cluster,cluster:Object.values(a.cluster)},null,"  "))}catch(t){console.error("\x1B[31m",t.message)}})}};var R=r=>l(void 0,null,function*(){return new Promise(e=>{(0,E.default)(r,(t,n)=>{if(t)return e("");e(n)})})});function S(){return l(this,null,function*(){let r=new F.ArgumentParser,e=r.add_subparsers({title:"commands",dest:"command"}),t=new I,n=new g;t.setArguments(e.add_parser(t.name,{add_help:!0})),n.setArguments(e.add_parser(n.name,{add_help:!0}));let a=`SSV Scanner v${k.version}`,i=yield R(a);if(i){console.log(" -----------------------------------------------------------------------------------"),console.log(`${i||a}`),console.log(" -----------------------------------------------------------------------------------");for(let o of String(k.description).match(/.{1,75}/g)||[])console.log(` ${o}`);console.log(` -----------------------------------------------------------------------------------
`)}let s=r.parse_args();switch(s.command){case t.name:yield t.run(s);break;case n.name:yield n.run(s);break;default:console.error("Command not found"),process.exit(1)}})}S();})();
