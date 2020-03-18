(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{239:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("h3",{attrs:{id:"data-structures-in-punishment-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structures-in-punishment-module"}},[t._v("#")]),t._v(" Data structures in Punishment module")]),t._v(" "),a("h4",{attrs:{id:"punishmentconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#punishmentconfig"}},[t._v("#")]),t._v(" "),a("code",[t._v("PunishmentConfig")])]),t._v(" "),a("p",[a("code",[t._v("PunishmentConfig")]),t._v(" holds the values for all the network parameters related to punishment. "),a("code",[t._v("PunishmentConfig")]),t._v(" can be\ninitialized from "),a("code",[t._v("genesis.json")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Configuration for computing and executing validator punishments")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" PunishmentConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Number of blocks for which the liveness is calculated for uptime tracking.")]),t._v("\n    block_signing_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" u16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Maximum number of blocks with faulty/missed validations allowed for an account in last `block_signing_window`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// blocks before it gets jailed.")]),t._v("\n    missed_block_threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" u16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Percentage of funds (bonded + unbonded) slashed when a validator is non-live.")]),t._v("\n    liveness_slash_percent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Milli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Percentage of funds (bonded + unbonded) slashed when validator makes a byzantine fault.")]),t._v("\n    byzantine_slash_percent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Milli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note:")]),t._v(" "),a("p",[a("code",[t._v("UNBONDING_PERIOD")]),t._v(" is a "),a("em",[t._v("global")]),t._v(" network parameter and is not stored in "),a("code",[t._v("PunishmentConfig")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"livenesstracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#livenesstracker"}},[t._v("#")]),t._v(" "),a("code",[t._v("LivenessTracker")])]),t._v(" "),a("p",[a("code",[t._v("LivenessTracker")]),t._v(" is used to track liveness of all the current active validators. A the beginning of each block,\nliveness of each active validator is updated using "),a("code",[t._v("update_liveness")]),t._v(" function. Besides this, "),a("code",[t._v("LivenessTracker")]),t._v(" also\nexposes function to "),a("code",[t._v("add")]),t._v(" and "),a("code",[t._v("remove")]),t._v(" a validator from liveness tracking. Finally, "),a("code",[t._v("is_live")]),t._v(" function can be used to\ncheck if a given validator is live or not.")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Liveness tracker for validators")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" LivenessTracker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Number of blocks to use for calculating validator liveness (jailing parameter in genesis)")]),t._v("\n    block_signing_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" u16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Number of blocks a validator can miss signing from last `block_signing_window` blocks")]),t._v("\n    missed_block_threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" u16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Holds data to measure liveness of a validator")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// # Note")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Size of this `BitVec` should be equal to `block_signing_window`.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Stores `true` at `index = height % block_signing_window`, if validator has signed that block, `false`")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   otherwise.")]),t._v("\n    liveness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BTreeMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TendermintValidatorAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BitVec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" LivenessTracker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Adds a validator to liveness tracking")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// # Note")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Returns `Err` when a validator with `tendermint_validator_address` already exists")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tendermint_validator_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TendermintValidatorAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Removes validator from liveness tracking")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// # Note")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Returns `Err` when validator with given address does not exist")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove_validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        tendermint_validator_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("TendermintValidatorAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Updates liveness of a validator with new block data")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// # Note")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Returns `Err` when validator with given address does not exist")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_liveness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        tendermint_validator_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("TendermintValidatorAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        block_height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BlockHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        signed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Checks if a validator is live or not")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// # Note")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// - Returns `Err` when validator with given address does not exist")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_live")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tendermint_validator_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("TendermintValidatorAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("bool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"working-of-punishment-module-interactions-with-abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-of-punishment-module-interactions-with-abci"}},[t._v("#")]),t._v(" Working of Punishment module (interactions with ABCI)")]),t._v(" "),a("h4",{attrs:{id:"initchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initchain"}},[t._v("#")]),t._v(" "),a("code",[t._v("InitChain")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("PunishmentConfig")]),t._v(" is initialized with values in "),a("code",[t._v("genesis.json")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("LivenessTracker")]),t._v(" is initialized with all the council nodes in "),a("code",[t._v("genesis.json")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"beginblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[t._v("#")]),t._v(" "),a("code",[t._v("BeginBlock")])]),t._v(" "),a("ul",[a("li",[t._v("Update "),a("code",[t._v("LivenessTracker")]),t._v(" with all the signers/non-signers of last block (data can be obtained from\n"),a("code",[t._v("request.last_commit_info")]),t._v("). Note that the "),a("code",[t._v("request.last_commit_info")]),t._v(" is not present for "),a("code",[t._v("block_height = 1")]),t._v(", so,\n"),a("code",[t._v("LivenessTracker")]),t._v(" starts getting updated from "),a("code",[t._v("block_height = 2")]),t._v(". Also, "),a("code",[t._v("last_commit_info")]),t._v(" may contain data for\nnon-validators (validators which were recently removed from validator set), it is safe to ignore this data with a\n"),a("code",[t._v("warn")]),t._v(" log.")]),t._v(" "),a("li",[t._v("Obtain all the evidences of detected byzantine faults from "),a("code",[t._v("request.byzantine_validators")]),t._v(". For each evidence:\n"),a("ul",[a("li",[t._v("Check if the evidence is valid, i.e., "),a("code",[t._v("evidence.height + UNBONDING_PERIOD >= current_block_height")]),t._v(".")]),t._v(" "),a("li",[t._v("Get address of faulty validator from "),a("code",[t._v("evidence.validator.address")]),t._v(" (if present). Ignore the evidence if faulty\nvalidator's information is not present in the evidence. Raw address bytes can be converted to\n"),a("code",[t._v("TendermintValidatorAddress")]),t._v(" using "),a("code",[t._v("TendermintValidatorAddress::try_from(validator.address.as_slice())")]),t._v(".")]),t._v(" "),a("li",[t._v("If the validator is not already jailed (ignore if the validator is already jailed):\n"),a("ul",[a("li",[t._v("Jail and slash the validator (set "),a("code",[t._v("jailed_until = current_block_time + UNBONDIND_PERIOD")]),t._v(" and slash by\n"),a("code",[t._v("BYZANTINE_SLASH_PERCENT")]),t._v("). Note that, both, slashing and jailing should happen as one command, i.e., validator\naccount's "),a("code",[t._v("nonce")]),t._v(" will only increase by one.")]),t._v(" "),a("li",[t._v("Remove the validator from current validator set, i.e., set their voting power to zero. Validator will get removed\nfrom "),a("code",[t._v("LivenessTracker")]),t._v(" in "),a("code",[t._v("EndBlock")]),t._v(".")]),t._v(" "),a("li",[t._v("Add validator address to a list of permanently banned validators.")]),t._v(" "),a("li",[t._v("Generate slashing and jailing events for validator.")])])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note:")]),t._v(" "),a("p",[t._v("An additional validation for "),a("code",[t._v("NodeJoinTx")]),t._v(" will be to verify if the validator address is not present in the list of\npermanently banned validators.")])]),t._v(" "),a("h4",{attrs:{id:"endblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[t._v("#")]),t._v(" "),a("code",[t._v("EndBlock")])]),t._v(" "),a("ul",[a("li",[t._v("Update "),a("code",[t._v("LivenessTracker")]),t._v(", i.e., add all the validators who joined in current block and remove all the validator who,\nleft/got jailed in current block.")]),t._v(" "),a("li",[t._v("Set "),a("code",[t._v("response.validator_updates")]),t._v(" for all the validators whose voting power was changed. Tendermint will remove all the\nvalidators whose voting power is set to zero, so, all the jailed validators should have zero voting power.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);