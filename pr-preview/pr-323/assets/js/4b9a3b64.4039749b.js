"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_label:"Setup Network Environment"},i="Setting Up Your Environment for CosmWasm on Celestia",l={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"Setting Up Your Environment for CosmWasm on Celestia",description:"Now the wasmd binary is built, we need to setup a local network",source:"@site/docs/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/pr-preview/pr-323/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup Network Environment"},sidebar:"developers",previous:{title:"CosmWasm Dependencies",permalink:"/pr-preview/pr-323/developers/cosmwasm-dependency"},next:{title:"Contract Deployment",permalink:"/pr-preview/pr-323/developers/cosmwasm-contract-deployment"}},s={},c=[{value:"Building the Wasmd Network",id:"building-the-wasmd-network",level:2},{value:"Starting the Wasmd Network",id:"starting-the-wasmd-network",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-your-environment-for-cosmwasm-on-celestia"},"Setting Up Your Environment for CosmWasm on Celestia"),(0,a.kt)("p",null,"Now the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," binary is built, we need to setup a local network\nthat communicates between ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," and Rollmint."),(0,a.kt)("h2",{id:"building-the-wasmd-network"},"Building the Wasmd Network"),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,a.kt)("p",null,"This initializes a chain called ",(0,a.kt)("inlineCode",{parentName:"p"},"celeswasm")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," binary."),(0,a.kt)("p",null,"The following command helps us setup accounts for genesis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=celeswasm-key\nwasmd keys add $KEY_NAME --keyring-backend test\n")),(0,a.kt)("p",null,"Make sure you store the output of the wallet generated\nfor later reference if needed."),(0,a.kt)("p",null,"Now, let's add a genesis account and use it to update our genesis file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'TOKEN_AMOUNT="10000000000000000000000000uwasm"\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nSTAKING_AMOUNT=1000000000uwasm\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\n')),(0,a.kt)("p",null,"With that, we created a local network genesis file."),(0,a.kt)("p",null,"Some more useful commands we can setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'export NODE="--chain-id ${CHAIN_ID}"\nexport TXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\n')),(0,a.kt)("h2",{id:"starting-the-wasmd-network"},"Starting the Wasmd Network"),(0,a.kt)("p",null,"We can run the following to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'wasmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://XXX.XXX.XXX.XXX:26659","timeout":60000000000,"gas_limit":6000000}\' --rollmint.namespace_id 000000000000FFFF --rollmint.da_start_height XXXXX\n')),(0,a.kt)("p",null,"Please consider:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: In the above command, you need to pass a Celestia Node IP address\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"base_url")," that has an account with Arabica Devnet tokens. Follow\nthe tutorial for setting up a Celestia Light Node and creating a wallet\nwith testnet faucet money ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-323/developers/node-tutorial"},"here")," in the Celestia Node section.")),(0,a.kt)("p",null,"Also please consider:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IMPORTANT: Furthermore, in the above command, you need to specify the latest\nBlock Height in Arabica Devnet for ",(0,a.kt)("inlineCode",{parentName:"p"},"da_height"),". You can find the latest block number\nin the explorer ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.celestia.observer/arabica"},"here"),". Also,\nfor the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--rollmint.namespace_id"),", you can generate a random Namespace\nID using the playground ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"here"))),(0,a.kt)("p",null,"With that, we have kickstarted our ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," network!"))}u.isMDXComponent=!0}}]);