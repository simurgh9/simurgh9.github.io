+++
title = 'Daydreams to Research'
date = 2022-08-18T00:00:00-05:00
tags = ['maths', 'research', 'Real World Applications']
summary = """\
3 quarters, 2 dimes, 1 nickel and 4 pence. If anyone carries \
(at most) these 10 coins, they'll make any change exactly!\
"""
[params]
  mathjax = true
+++

![Madeleine au Bois d'Amour](bernard.WEBP "Madeleine au Bois d'Amour")

Sometime before the last semester, I was in my (parked) car, staring
at the gradually piling lot of coins under the armrest. Whenever I pay
in cash, I just pay a dollar above the bill and receive back some
change per _modus operandi_. That day I began to think, why don't I
actually use these coins? Laziness?

Further rummaging into that thought resulted speculation. Even if I
lugged along some of those coins, most of the times I either end-up
over or under. I. e., bringing coins back anyway. If at this point you
are fitting some sort of a fancy Gaussian in your head; getting ready
to prove that _in the limit_ I will actually consume more coins than
collect, stop it. Why not just bring coins back by paying above the
bill?

_What if I there was an oracle guaranteeing the exact-coinage needed
to make the change?_ Well, one such oracle is the entire mass of the
coins. I will always with high-probability make the change. This
solution is what the mathematicians call "inelegant." On the other
hand, if I carry no coins then I am guaranteed to never make any
change.

Most first or second year calculus students hear this from their
instructor.

> If Alice weighed 150 pounds on a Monday and 148 on the following
> Sunday then there has to be a moment/time in-between where Alice
> weighed 149 pounds.

The above notion is then formalised into continuous functions. E. g.,
weight is a continuous function of time.

While the idea of continuity does not perfectly apply to my
change-making problem, it certainly echos. You see, the more random
coins I take--the greater the probability of making the exact
change. What is that point where the probability goes from
differing to equalling 1? There has to be such a point!

This is where the computer scientist took over the mathematician. I
had proven to myself that a solution exists and it was now time to
find the said solution. Luckily, computer science has a class of
algorithms known as the _greedy algorithms_. Though, I must stress
their independence from the ones you come by in political sciences.

I try to make the change (greedily) starting from the largest possible
denomination of coins to the smallest.

1. One; two; three; four? No, there I should just use a dollar. So,
   three quarters.
2. One; two; three; erm... that is more than a quarter. Two dimes.
3. Two nickels is a dime so just one nickel.
5. Four pence obviously.

Eureka! 3 quarters, 2 dimes, 1 nickel and 4 pence. If anyone carries
these 10 coins, they'll make any change exactly!

Did that rabbit-hole-optimisation end there? Well, no. What you have
read so far is a _sketch_ of a proof. A couple of days ago when I
decided to write on this, I wanted to accompany it with a rigorous
mathematical proof.

To my surprise, the general problem of making the exact change for
different currencies is actually a very hard one. What do I mean
general? Well, I only solved the problem for the common coins in the
US. What about the countries with the coins of different worth?
Actually, this tosses the whole idea of the greedy algorithms out of
the window.

Have you ever wondered why the US has coins worth one, five, ten and
twenty-five cents? Why not something, e. g., a twelve cents coin?
Because as it turns out, there are other people who have thought about
this problem way before I did. They knew that certain sets of
coin-denominations allow for greedy algorithms while others do not!

Take the example of a twelve-cents coin. If I need to make fifteen
cents and I go about it the same greedy way, I pick a twelve-cents
coin, and three pence. That is 4 coins. But clearly, the optimal set
of coins here is a dime and a nickel (2 coins). The greedy approach
fails.

Those familiar with the jargon, finding the optimal set of coins to
make the exact change is an instance of the knapsack problem known to
be NP-complete. To give the uninitiated reader some perspective, these
problems are hard enough that even a theoretical quantum computer does
not have enough computation muscle to provide a solution without a
major breakthrough in theory.

Therein lies the rub of those who make the decision of picking out the
different coin denominations. They have to make sure that they mint
coins such that when looking for a change, a greedy algorithm can find
a solution. Otherwise, we face the unyielding knapsack problem.

What about that rigours proof of the optimal number of coins needed to
make any exact change (in US)? Here is a proof using moduli,

_Proof._ Let \(t\in\mathbb{N}\) be any dollar amount in cents and \(c \in
\curl{5, 10, 25, 100}\). Define \(\max(\mathbb{Z}/c\mathbb{Z}) = c-1\) as
the smallest element of the largest residue class in
\(\mathbb{Z}/c\mathbb{Z}\).
Observe that any \((t \mod c)\) can be paid entirely using only the
coins worth less than \(c\). Since we know that,
\[
\max(t) = \max(\mathbb{Z}/c\mathbb{Z})
\]
We list the minimum number of coins of each type to make
\(\max(\mathbb{Z}/c\mathbb{Z})\) for each \(c\),

\[
\begin{align*}
\max(\mathbb{Z}/5\mathbb{Z}) = 5-1 &= 4  && \text{4 Pence.} \\
\max(\mathbb{Z}/10\mathbb{Z}) = 10-1 = 9 &= 5+4  && \text{1 Nickel, 4 Pence.} \\
\max(\mathbb{Z}/25\mathbb{Z}) = 25-1 = 24 &= 10+10+4  && \text{2 Dimes, 4 Pence.} \\
\max(\mathbb{Z}/100\mathbb{Z}) = 100-1 = 99 &= 25+25+25+10+10+4  && \text{3 Quarters,} \\
& && \text{2 Dimes, 4 Pence.} \\
\end{align*}
\]

Therefore, any \(t\) can be made exactly with 3 Quarters, 2 Dimes, 1
Nickel and 4 Pence. QED.

Both the change-making and the general knapsack problem are areas of
current research. E. g., what are the sufficient and necessary
conditions for a set of coin denominations to be greedy-searchable?
Now to be clear, this is a lighthearted demo of a possible application
of an NP-complete problem. A general solution to any such problem will
have [far bigger
consequences](https://www.youtube.com/watch?v=F5bAa6gFvLs&t=35s) then
some old change counting algorithm.

We have come the full circle, from _Daydreams to Research_.

### Further Reading,

- [Adamaszek, A., & Adamaszek, M. (2010).
   Combinatorics of the change-making problem.
  _European Journal of Combinatorics_, 31(1), 47-63.](https://www.sciencedirect.com/science/article/pii/S0195669809001292)
- [Cai, X. (2009, August).
   Canonical coin systems for change-making problems. In _2009
   Ninth International Conference on Hybrid Intelligent Systems_
   (Vol. 1, pp. 499-504). IEEE.](https://arxiv.org/pdf/0809.0400.pdf)
- [Related question from Mathematics Stackexchange](https://math.stackexchange.com/q/4505822/783364)
- [Another related question from Mathematics Stackexchange](https://math.stackexchange.com/q/106317/783364)
