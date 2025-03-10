---
sidebar_label: Run The Wordle Chain
---

# Run the Wordle Chain
<!-- markdownlint-disable MD013 -->

## Building and Running Wordle Chain

We have a handy `init.sh` found in this repo
[here](https://github.com/celestiaorg/devrel-tools).

We can copy it over to our directory with the following commands:

```sh
# From inside the `wordle` directory
cd ..
git clone https://github.com/celestiaorg/devrel-tools
cp devrel-tools/wordle/init.sh wordle/
cd wordle/
```

This copies over our `init.sh` script to initialize our
Wordle Rollup.

You can view the contents of the script to see how we
initialize the Wordle Rollup.

:::danger caution

If you are on macOS, you will need to install md5sha1sum before starting your
rollup:

```sh
brew install md5sha1sum
```

:::

You can initialize the script with the following command:

```sh
bash init.sh
```

With that, we have kickstarted our `wordled` network!

In another window, run the following to submit a Wordle:

```sh
wordled tx wordle submit-wordle giant --from recipes-key --keyring-backend test --chain-id wordle -b async -y
```

> NOTE: We are submitting a transaction asynchronously due to avoiding
  any timeout errors. With Rollmint as a replacement to Tendermint, we
  need to wait for Celestia's Data-Availability network to ensure a block
  was included from Wordle, before proceeding to the next block. Currently,
  in Rollmint, the single aggregator is not moving forward with the next block
  production as long as it is trying to submit the current block to the DA network.
  In the future, with leader selection, block production and sync logic improves
  dramatically.

This will ask you to confirm the transaction with the following message:

```json
{
  "body":{
    "messages":[
       {
          "@type":"/YazzyYaz.wordle.wordle.MsgSubmitWordle",
          "creator":"cosmos17lk3fgutf00pd5s8zwz5fmefjsdv4wvzyg7d74",
          "word":"giant"
       }
    ],
    "memo":"",
    "timeout_height":"0",
    "extension_options":[
    ],
    "non_critical_extension_options":[
    ]
  },
  "auth_info":{
    "signer_infos":[
    ],
    "fee":{
       "amount":[
       ],
       "gas_limit":"200000",
       "payer":"",
       "granter":""
    }
  },
  "signatures":[
  ]
}
```

Cosmos-SDK will ask you to confirm the transaction here:

```sh
confirm transaction before signing and broadcasting [y/N]:
```

Confirm with a Y.

You will then get a response with a transaction hash as shown here:

```sh
code: 19
codespace: sdk
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: ""
timestamp: ""
tx: null
txhash: F70C04CE5E1EEC5B7C0E5050B3BEDA39F74C33D73ED504E42A9E317E7D7FE128
```

Note, this does not mean the transaction was included in the block yet.
Let's query the transaction hash to check whether it has been included in
the block yet or if there are any errors.

```sh
wordled query tx --type=hash F70C04CE5E1EEC5B7C0E5050B3BEDA39F74C33D73ED504E42A9E317E7D7FE128 --chain-id wordle --output json | jq -r '.raw_log'
```

This should display an output like the following:

```json
[{"events":[{"type":"message","attributes":[{"key":"action","value":"submit_wordle"
}]}]}]
```

Test out a few things for fun:

```sh
wordled tx wordle submit-guess 12345 --from recipes-key --keyring-backend test --chain-id wordle -b async -y
```

After confirming the transaction, query the `txhash`
given the same way you did above. You will see the response shows
an Invalid Error because you submitted integers.

Now try:

```sh
wordled tx wordle submit-guess ABCDEFG --from recipes-key --keyring-backend test --chain-id wordle -b async -y
```

After confirming the transaction, query the `txhash` given the same
way you did above. You will see the response shows
an Invalid Error because you submitted a word larger than 5 characters.

Now try to submit another wordle even though one was already submitted

```sh
wordled tx wordle submit-wordle meter --from recipes-key --keyring-backend test --chain-id wordle -b async -y
```

After submitting the transactions and confirming, query the `txhash`
given the same way you did above. You will get an error that a wordle
has already been submitted for the day.

Now let’s try to guess a five letter word:

```sh
wordled tx wordle submit-guess least --from recipes-key --keyring-backend test --chain-id wordle -b async -y
```

After submitting the transactions and confirming, query the `txhash`
given the same way you did above. Given you didn’t guess the correct
word, it will increment the guess count for recipes-key's account.

We can verify this by querying the list:

```sh
wordled q wordle list-guess --output json
```

This outputs all Guess objects submitted so far, with the index
being today’s date and the address of the submitter.

With that, we implemented a basic example of Wordle using
Cosmos-SDK and Ignite and Rollmint. Read on to how you can
extend the code base.

## Extending in the Future

You can extend the codebase and improve this tutorial by checking
out the repository [here](https://github.com/celestiaorg/wordle).

There are many ways this codebase can be extended:

1. You can improve messaging around when you guess the correct word.
2. You can hash the word prior to submitting it to the chain,
  ensuring the hashing is local so that it’s not revealed via
  front-running by others monitoring the plaintext string when
  it’s submitted on-chain.
3. You can improve the UI in terminal using a nice interface for
  Wordle. Some examples are [here](https://github.com/nimblebun/wordle-cli).
4. You can improve current date to stick to a specific timezone.
5. You can create a bot that submits a wordle every day at a specific time.
6. You can create a vue.js front-end with Ignite using example open-source
    repositories [here](https://github.com/yyx990803/vue-wordle) and [here](https://github.com/xudafeng/wordle).
