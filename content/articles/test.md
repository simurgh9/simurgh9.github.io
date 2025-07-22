+++
draft = true
title = 'Test'
date = 1970-01-01T00:00:00-07:00
tags = ['sample']
[params]
  mathjax = true
  code = true
+++

The author uses this file to test formatting and other display
features of the website to assure that they work as intended. We will
first test the inline equation \(e=mc^2\). And below is a block
equation.
\[
e^{i\pi} + 1 = 0
\]
Now we test a block equation with two dollar signs.
$$
    f(x) = \int_{-\infty}^\infty f(\xi)e^{2 \pi i \xi x} d\xi
$$

Bellow we test different kinds of lists and inline formatting.

- Backticked: `One a peny two a peny hot cross buns!`
  - Italic: _Two_
  - Bold: **Three**
    - Crossthrough: ~~Four~~
      - Five
    - Six
      - Seven
    - Eight
- Nine
- Ten

Now testing ordered lists.

1. One
   1. Two
   2. Three
      1. Four
      2. Five
         1. Six
         2. Seven
   3. Eight
2. Nine
3. Ten

And, a task list.

- [x] One
  - [x] Two
  - [ ] Three
- [ ] Four

Similarly, a table.

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| A | B | C | D | E | F | G | H | I | J |
| K | L | M | N | O | P | Q | U | R | S |
| T | U | V | W | X | Y | Z | / | / | / |

Table with alignments and a caption.

| First Header | Second Header |         Third Header |
|:-------------|:-------------:|---------------------:|
| First row    | Data          | Very long data entry |
| Second row   | **Cell**      |               _Cell_ |
| Third row    | Tomato        |                      |

{caption="This is the table caption."}

A remote image.

![Delacroix](https://tinyurl.com/26x2qk3m 'La Liberté guidant le peuple')

A local image.

![Local](/favicon-96x96.png 'Local.')

Code listing.

```python
def function(n): # prints first n natural numbers.
    for i in range(n):
        print(n)
    return 0
```

With the Hugo shortcode.

{{< highlight python "hl_lines=1 3-4" >}}
def function(n): # prints first n natural numbers.
    for i in range(n):
        print(n)
    return 0
{{< /highlight >}}

Blockquote.

> “When I was young, I forgot how to laugh in the cave of Trophonius;
> when I was older, I opened my eyes and beheld reality, at which I
> began to laugh, and since then, I have not stopped laughing. I saw
> that the meaning of life was to secure a livelihood, and that its
> goal was to attain a high position; that love’s rich dream was
> marriage with an heiress; that friendship’s blessing was help in
> financial difficulties; that wisdom was what the majority assumed it
> to be; that enthusiasm consisted in making a speech; that it was
> courage to risk the loss of ten dollars; that kindness consisted in
> saying, “You are welcome,” at the dinner table; that piety consisted
> in going to communion once a year. This I saw, and I laughed.”
>
> “When I was young, I forgot how to laugh in the cave of Trophonius;
> when I was older, I opened my eyes and beheld reality, at which I
> began to laugh, and since then, I have not stopped laughing. I saw
> that the meaning of life was to secure a livelihood, and that its
> goal was to attain a high position; that love’s rich dream was
> marriage with an heiress; that friendship’s blessing was help in
> financial difficulties; that wisdom was what the majority assumed it
> to be; that enthusiasm consisted in making a speech; that it was
> courage to risk the loss of ten dollars; that kindness consisted in
> saying, “You are welcome,” at the dinner table; that piety consisted
> in going to communion once a year. This I saw, and I laughed.”
>
> ― Søren Kierkegaard

---

## Homework Mathjax Extension

This table to checks if all the custom macros in `hwjax.min.js` are
being rendered properly.

$$
\newcommand{\dummy}[1]{\texttt{\\#1\{\frac\{x\}\{2\}\}}}
\begin{array}{ | c | c | c | c | } \hline
  Macro                   & Symbol     & Macro                             & Symbol              \\ \hline
  \texttt{\C}             & \C         & \dummy{floor}                     & \floor{\frac{x}{2}} \\ \hline
  \texttt{\R}             & \R         & \dummy{ceil}                      & \ceil{\frac{x}{2}}  \\ \hline
  \texttt{\Q}             & \Q         & \dummy{near}                      & \near{\frac{x}{2}}  \\ \hline
  \texttt{\Z}             & \Z         & \dummy{arr}                       & \arr{\frac{x}{2}}   \\ \hline
  \texttt{\N}             & \N         & \dummy{paren}                     & \paren{\frac{x}{2}} \\ \hline
  \texttt{\P}             & \P         & \dummy{brk}                       & \brk{\frac{x}{2}}   \\ \hline
  \texttt{\F}             & \F         & \dummy{curl}                      & \curl{\frac{x}{2}}  \\ \hline
  \texttt{\GF, \GF[7]}    & \GF,\GF[7] & \dummy{abs}                       & \abs{\frac{x}{2}}   \\ \hline
  \texttt{\nil}           & \nil       & \texttt{\\modulo[7]}              & \modulo[7]          \\ \hline
  \texttt{\O(n)}          & \O(n)      & \texttt{\\vec\{v\}}               & \vec{v}             \\ \hline
  \texttt{\?}             & \?         & \texttt{\\bijective}              & \bijective          \\ \hline
  \texttt{\is}            & \is        & \texttt{\\surjective}             & \surjective         \\ \hline
  \texttt{\al}            & \al        & \texttt{\\injective}              & \injective          \\ \hline
  \texttt{\ep}            & \ep        & \texttt{\\Ra}                     & \Ra                 \\ \hline
  \texttt{\phi}           & \phi       & \texttt{\\ra}                     & \ra                 \\ \hline
  \texttt{\p}             & \p         & \texttt{\\derivative[g]\{f\}}     & \derivative[g]{f}   \\ \hline
  \texttt{\D}             & \D         & \texttt{\\derivative\{\\zeta\}}   & \derivative{\zeta}  \\ \hline
\end{array}
$$

## Other Features

Bellow we test the twin-delimiter expanding macros (e. g., these
\(\floor{x}, \ceil{y}, \near{z}, \arr{x,y,z}\) should get taller for
fractions):

$$
  \floor{\frac{x}{2}} < \frac{x}{2} < \ceil{\frac{x}{2}},
  \near{\frac{x}{2}},
  \arr{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \paren{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \brk{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \curl{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \abs{\frac{x}{2}}
$$

Lastly, checking an environment (again I guess).

$$
\begin{align*}
  x^2- 8x - 9         & = 9-9         &  & \text{Subtract 9 on both sides.}         \\
  x^2- x + 9x - 9     & = 0           &  & \text{Breaking the middle term.}         \\
  x(x - 1) + 9(x - 1) & = 0           &  & \text{Pulling out common factors.}       \\
  (x - 1)(x + 9)      & = 0           &  & \text{Pulling out common } (x - 1).      \\
  x                   & \in \{1, -9\} &  & f(x)g(x) = 0 \Ra f(x) = 0 \vee g(x) = 0. \\
\end{align*}
$$

Le fin.
