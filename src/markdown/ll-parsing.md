
	
# Introduction: What is LL Parsing?

Before continuing, just note that a lot of the information here was after I read the [wikipedia
post](https://en.wikipedia.org/wiki/LL_parser) on LL parsing.

The whole point of me writing this is just for me to digest the content that will lead up to my QE and is in no way
original work.

LL parsing is a parsing algorithm. LL stands for Left-to-Right Leftmost Derivation.

The left-to-right portion means that it parses the input from left to right, and notably, does it in a deterministic way
in one pass.  In other words, there is no backtracking involved.

A derivation of a string for a grammar is a sequence of grammar rule applications that transform the start symbol into
the string.  If I am able to form a derivation for a given grammar into a given string, then I have successfully shown
that that string is part of that grammar.

This begs the question if I were to apply grammar rules deterministically, what strategy should I use to determine which
rule to apply?

This is where the leftmost derivation comes in. It means that when I am choosing my nonterminal to rewrite (or expand),
I always choose the leftmost nonterminal.

So in essence, LL parsing starts out with the start symbol, and systematically expands the leftmost nonterminal to see
if it can eventually form the string.

Since we start off with the start symbol and recursively expand nonterminals, LL is a top-down parsing strategy.

By the way, these derivations also nicely represent the AST of a program. Since production rules nicely map a node in
the AST to its children nodes.

## What about LL(k) parsers?

For LL(k), the k is basically the number of tokens I am able to lookahead when parsing.

A lookahead essentially means I can "cheat" and look at the tokens ahead without consuming them.  This allows the parser
to make a more informed decision as to which rule application can be applied.

In the context of creating parsers for programming languages, LL(1) is of the most interest. This is because parsers for
this grammars class are easy to construct. For this reason, many computer languages are designed to be LL(1) for this
reason.

> For the rest of this blog, I will not talk too much about lookaheads and just focus on the core idea of the parsing
algorithm.  Let's just pretend the parser knows which rules are "applicable" without lookaheads.

---

## Some limitations with LL parsers

Since LL grammars are easy to construct, then they sound like the perfect algorithm for parsing.  While many modern day
parsers are infact LL, there are still a few limitations when it comes to LL grammars.

As an example, let's use this simple grammar. We assume E is the start symbol.

```txt
	1. E → E + T
	2. E → T
	3. T → id
```

This is valid context-free grammar, but is not an LL grammar. Let's say I want to parse the string "id + id + id"

A derivation can look something like this:

```txt
	(S) E 
	(1) E + T
	(3) E + id 
	(1) E + T + id
	(3) E + id + id
	(2) T + id + id 
	(3) id + id + id
```

However this is definitely not a leftmost derivation. The leftmost derivation would look something like this.

```
	(S) E
	(1) E + T
	(1) E + T + T
	(2) T + T + T
	(3) id + T + T
	(3) id + id + T
	(3) id + id + id
```
This looks like I managed to derive a leftmost derivation,
doesn't that mean that this is in LL?

Remember, LL is deterministic. This means at any given point of time, it has to know exactly which rule to apply. In
fact, every context-free grammar has a leftmost derivation.  It is just that LL has to arrive to that derivation in a
deterministic way.

Let's take a look at the starting symbol *E*. It has 2 rules in which it can apply, *E -> E + T* and *E -> T*.  Both are
possible, since at *id* is a terminal that *E + T* and *T* could start with.  This is a first-first conflict (more on
that later). The parser at this point, cannot know with certainty which of the 2 rules to apply as both begin with *id*.

Even worse, rule 1. is left-recursive. 

Why is this an issue?

Imagine how a parser would be implemented, it basically would attempt to expand out the rules, and then recurse.  So if
it had expended *E -> E + T*, it would now need to process *E* again, which would lead to another expantion of the same
rule. This is an infinite recursion! The parser repeatedly applies expansions without ever consuming a token.

To illustrate the other limitation of LL grammar, we will need another grammar.

```txt
	S → AB
	A → ε | id
	B → id
```

Just by eyeballing this grammar we can see it should accept "id id" and "id".  But let's see how the parser would work
again. It would see that it has an incoming "id", it will correctly expand *S* into *AB*.

However, this is where the issue comes in. the parser must now decide what is *A* going to expand into.  does it expand
into *ε*? or into *id*? It can expand into *ε* because the *id* could then be consumed by *B*.

This is a first-follow conflict. The parser does not know whether it should consume a token now, or leave it for the
next symbol to consume it. This only happens when rules contain *ε* (so that the consumption can be "passed on" to the
next symbol)

---

## LL parsing algorithm intuition

Here I will show how LL parsing can be done intuitively.

Given the following grammar

```txt
	1. S → T E
	2. E → + T E
	3. E → ε
	4. T → id
```

This is a valid LL grammar, and coincidentally also has the language which corresponds to the grammar above.  This shows
that even though a grammar may be non-LL, it does not mean that the language of that grammar does not have an LL grammar
whose language.

Now, on to the parsing, LL grammar is part of context-free grammar. In other words, it can be parsed by a Pushdown
automata. This means we get to use a stack in our parsing.

In this example I will be showing you the stack state. The top of the stack would be on the left (just so that we don't
have to reverse things).

```txt
	[S]                    "id + id + id"        Only can expand (1)
	[T, E]                 "id + id + id"        Expand out T with (4)
	[id, E]                "id + id + id"        Consume an id
	[E]                       "+ id + id"        Expand E with (2)
	[+, T, E]                 "+ id + id"        Consume +
	[T, E]                      "id + id"        Expand out T with (4)
	[id, E]                     "id + id"        Consume an id
	[E]                            "+ id"        Expand E with (2)
	[+, T, E]                      "+ id"        Consume +
	[T, E]                           "id"        Expand T with (4)
	[id, E]                          "id"        Consume id
	[E]                                ""        Expand E with (3)
	[]                                 ""        This accepts
```

Here it becomes clear the top-down nature of LL parsing and how it terminates (having an empty stack and empty remaining
input).

---

## Parse Table

Notice in the previous example, whenever the top of the stack and the first token of the input match, we simply consume
the token.

However it is not immediately clear what to do when the top of the stack is a nonterminal. That is where the parsing
table comes into play. A parsing table has the row "key" as the nonterminal and the column "key" as a terminal. In other
words, the row is the terminal at the top of the stack, and the column is the next token to be consumed.

In order to produce the parse table, we need to understand the first set and follow set (this is where the
first-first/first-follow conflicts come about).

### First set

This is used to determine what rule to use if a nonterminal *A* is at the top of the stack and a symbol *a* is the next
token in the input.  Since we need to expand *A*, the rule must be of the form *A → γ* and that the language of *γ*
(strings that fit *γ*) should have at least one string that starts with *a*

To this end we want to do this for all terminals that *γ* can start with. So this is the first set of *γ*, the set of
terminals that can be found at the start of some string in *γ*. Note that if *γ* recognises the empty string ϵ, then it
is also added to the set.

Therefore, given a grammar with the rules:
```txt
	A_1 → γ_1
	A_2 → γ_2
	⋮
	A_n → γ_n
```
We can compute the first set for all *γ_i* and *A_i* with a fixed-point computation (repeatedly doing a procedure until no changes are made).

	1. Initialise every First(X) with ∅ for all grammar symbols X
	2. For every terminal a, set First(a) = { a }
	3. Set first(ϵ) = { ϵ }
	4. Repeat until no change:
		- For every rule A -> X_1, X_2, ..., X_n:
			- Let F = First(X_1)
			- For every symbol X_i from left to right:
				- Add First(X_i) - { ϵ } to First(A)
				- If ϵ ∉ First(X_i), stop inner for loop
			- If ϵ ∈ First(X_i) for all i = 1..n, add ϵ to First(A)
			
> Note that during actual implementation, it might be slightly easier to compute *Nullable(A)* where it returns true if
> *A* can derive ϵ and false otherwise.

And there you have it! The First sets.

### Follow set

Turns out that just computing the First set would not be enough. The reason for this is that some nonterminals can
derive ϵ, therefore we would need to know what other symbols may follow after that. That is where follow sets come into
play. The parser should still use the rule *A → γ* if ϵ is in First(γ) and it sees the next token could be a token that
belongs after A (or the token **follows** A). So in other words, Follow(A) is the set of nonterminals that could appear
in a string that is accepted by the grammar and is after A (a string in the form of αAaβ which is in the grammar).

