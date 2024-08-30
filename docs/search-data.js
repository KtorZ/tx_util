window.Aiken.initSearch([{"doc":"tx_util/builder","title":"build_txn_context","content":"build_txn_context(validity_range: Interval&lt;Int&gt;) -&gt; ScriptContext\n The initial function that serves as the starting point to construct `ScriptContext`","url":"tx_util/builder.html#build_txn_context"},{"doc":"tx_util/builder","title":"set_id","content":"set_id(context: ScriptContext, id: TransactionId) -&gt; ScriptContext\n Set `ScriptContext.transaction.id`","url":"tx_util/builder.html#set_id"},{"doc":"tx_util/builder","title":"spend","content":"spend(context: ScriptContext, o_ref: OutputReference) -&gt; ScriptContext\n","url":"tx_util/builder.html#spend"},{"doc":"tx_util/builder","title":"mint_assets","content":"mint_assets(\n  context: ScriptContext,\n  policy_id: PolicyId,\n  assets: Value,\n) -&gt; ScriptContext\n Set `ScriptPurpose.Mint(PolicyId)` = `policy_id`\n and `Transaction.MintedValue` = `assets`","url":"tx_util/builder.html#mint_assets"},{"doc":"tx_util/builder","title":"add_signatory","content":"add_signatory(context: ScriptContext, signatory: PubKeyHash) -&gt; ScriptContext\n Push `signatory` to `ScriptContext.transaction.extra_signatories`","url":"tx_util/builder.html#add_signatory"},{"doc":"tx_util/builder","title":"add_tx_ref_input","content":"add_tx_ref_input(\n  context: ScriptContext,\n  tx_ref_in: transaction.Input,\n) -&gt; ScriptContext\n Push `tx_ref_in` to `ScriptContext.transaction.reference_inputs`","url":"tx_util/builder.html#add_tx_ref_input"},{"doc":"tx_util/builder","title":"add_tx_input","content":"add_tx_input(context: ScriptContext, tx_in: transaction.Input) -&gt; ScriptContext\n Push `tx_in` to `ScriptContext.transaction.inputs`","url":"tx_util/builder.html#add_tx_input"},{"doc":"tx_util/builder","title":"new_tx_input","content":"new_tx_input(\n  tx_hash: TxHash,\n  address: Address,\n  lovelace: Int,\n  datum: Datum,\n) -&gt; transaction.Input\n Construct a transaction input.","url":"tx_util/builder.html#new_tx_input"},{"doc":"tx_util/builder","title":"attach_ref_script_to_tx_input","content":"attach_ref_script_to_tx_input(\n  input: transaction.Input,\n  ref_script: ValidatorHash,\n) -&gt; transaction.Input\n","url":"tx_util/builder.html#attach_ref_script_to_tx_input"},{"doc":"tx_util/builder","title":"with_asset_of_tx_input","content":"with_asset_of_tx_input(\n  input: transaction.Input,\n  asset: Value,\n) -&gt; transaction.Input\n Add asset(s) to a transaction input.","url":"tx_util/builder.html#with_asset_of_tx_input"},{"doc":"tx_util/builder","title":"add_tx_output","content":"add_tx_output(\n  context: ScriptContext,\n  tx_out: transaction.Output,\n) -&gt; ScriptContext\n Push `tx_out` to `ScriptContext.transaction.outputs`","url":"tx_util/builder.html#add_tx_output"},{"doc":"tx_util/builder","title":"new_tx_output","content":"new_tx_output(\n  address: Address,\n  lovelace: Int,\n  datum: Datum,\n) -&gt; transaction.Output\n Construct a transaction output.","url":"tx_util/builder.html#new_tx_output"},{"doc":"tx_util/builder","title":"attach_ref_script_to_tx_output","content":"attach_ref_script_to_tx_output(\n  output: transaction.Output,\n  ref_script: ValidatorHash,\n) -&gt; transaction.Output\n","url":"tx_util/builder.html#attach_ref_script_to_tx_output"},{"doc":"tx_util/builder","title":"add_asset_to_tx_output","content":"add_asset_to_tx_output(\n  output: transaction.Output,\n  asset: Value,\n) -&gt; transaction.Output\n Add asset(s) to a transaction output.","url":"tx_util/builder.html#add_asset_to_tx_output"},{"doc":"tx_util/builder","title":"add_certificate","content":"add_certificate(\n  context: ScriptContext,\n  certificate: Certificate,\n) -&gt; ScriptContext\n Push `certificate` to `ScriptContext.transaction.certificates`","url":"tx_util/builder.html#add_certificate"},{"doc":"tx_util/builder","title":"set_withdrawals","content":"set_withdrawals(\n  context: ScriptContext,\n  withdrawals: Pairs&lt;Credential, Lovelace&gt;,\n) -&gt; ScriptContext\n Set `withdrawals` to `ScriptContext.transaction.withdrawals`","url":"tx_util/builder.html#set_withdrawals"},{"doc":"tx_util/builder","title":"set_redeemers","content":"set_redeemers(\n  context: ScriptContext,\n  redeemers: Pairs&lt;ScriptPurpose, Redeemer&gt;,\n) -&gt; ScriptContext\n Set `redeemers` to `ScriptContext.transaction.redeemers`","url":"tx_util/builder.html#set_redeemers"},{"doc":"tx_util/builder","title":"set_datums","content":"set_datums(\n  context: ScriptContext,\n  datums: Dict&lt;ByteArray, Data&gt;,\n) -&gt; ScriptContext\n Set `datums` from `ScriptContext.transaction.datums`","url":"tx_util/builder.html#set_datums"},{"doc":"tx_util/builder","title":"set_fee","content":"set_fee(context: ScriptContext, fee: Lovelace) -&gt; ScriptContext\n Set `ScriptContext.transaction.fee`","url":"tx_util/builder.html#set_fee"},{"doc":"tx_util/builder","title":"tx_util/builder","content":" Usage example,\n ```\n test validate_something() {\n   // Arrange:\n   let nft = from_asset(&quot;NftPolicy&quot;, &quot;NftName&quot;, 1)\n   let token = from_asset(&quot;TokenPolicy&quot;, &quot;TokenName&quot;, 10)\n   // use aiken/transaction/value.{from_asset}\n   let asset_1 = from_asset(&quot;AssetPolicy1&quot;, &quot;AssetName1&quot;, 1)\n   let asset_2 = from_asset(&quot;AssetPolicy2&quot;, &quot;AssetName2&quot;, 1000)\n   let asset_2_partial = from_asset(&quot;AssetPolicy2&quot;, &quot;AssetName2&quot;, 100)\n\n   // tx_util/builder:\n   let tx_ref_in = new_tx_input(\n       &quot;TxRefInHash&quot;,                       // tx_hash: Hash&lt;Blake2b_256, Transaction&gt;\n       from_verification_key(&quot;PubKeyHash&quot;), // address: use aiken/transaction/credential\n       user_ada,                            // lovelace: Int\n       NoDatum,                             // datum: use aiken/transaction.{NoDatum}\n     ) |&gt; with_asset_of_tx_input(token)\n\n   let tx_in = new_tx_input(\n       &quot;TxInHash&quot;,                          // tx_hash: Hash&lt;Blake2b_256, Transaction&gt;\n       from_script(&quot;ValidatorHash&quot;),        // address: use aiken/transaction/credential\n       input_ada,                           // lovelace: Int\n       InlineDatum(old_datum),              // datum: use aiken/transaction.{InlineDatum}\n     ) |&gt; with_asset_of_tx_input(nft)\n       |&gt; with_asset_of_tx_input(asset_1)\n       |&gt; with_asset_of_tx_input(asset_2)\n\n   let tx_out = new_tx_output(\n       from_script(&quot;ValidatorHash&quot;),        // address: use aiken/transaction/credential\n       output_ada,                          // lovelace: Int\n       InlineDatum(new_datum),              // datum: use aiken/transaction.{InlineDatum}\n     ) |&gt; add_asset_to_tx_output(nft)\n       |&gt; add_asset_to_tx_output(asset_1)\n       |&gt; add_asset_to_tx_output(asset_2_partial)\n\n   let ctx = empty\n       |&gt; build_txn_context()\n       |&gt; add_tx_ref_input(tx_ref_in)\n       |&gt; add_tx_input(tx_in)\n       |&gt; add_tx_output(tx_out)\n       |&gt; add_signatory(&quot;PubKeyHash&quot;)\n\n   // Assert:\n   !validator.validate(script_arg_1, script_arg_2, datum, redeemer, ctx)\n }\n ```","url":"tx_util/builder.html"}]);