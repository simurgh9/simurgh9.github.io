# Homework Mathjax Ext.
<!-- Per file macros -->
$
  \newcommand{\bk}{\texttt{\\\\}}
  \newcommand{\n}{\newline}
  \newcommand{\dummy}[1]{\bk\texttt{#1\{\\frac\{x\}\{2\}\}}}
$

## Custom Macros Table

I use this table to check if all the custom macros in `hwjax.js` are being rendered properly.

$$
\begin{array}{ | c | c | c | c | } \hline
  Macro                    & Symbol     & Macro                             & Symbol              \n \hline
  \texttt{\\C}             & \C         & \dummy{floor}                     & \floor{\frac{x}{2}} \n \hline
  \texttt{\\R}             & \R         & \dummy{ceil}                      & \ceil{\frac{x}{2}}  \n \hline
  \texttt{\\Q}             & \Q         & \dummy{near}                      & \near{\frac{x}{2}}  \n \hline
  \texttt{\\Z}             & \Z         & \dummy{arr}                       & \arr{\frac{x}{2}}   \n \hline
  \texttt{\\N}             & \N         & \dummy{paren}                     & \paren{\frac{x}{2}} \n \hline
  \texttt{\\P}             & \P         & \dummy{brk}                       & \brk{\frac{x}{2}}   \n \hline
  \texttt{\\F}             & \F         & \dummy{curl}                      & \curl{\frac{x}{2}}  \n \hline
  \texttt{\\GF, \\GF[7]}   & \GF,\GF[7] & \dummy{abs}                       & \abs{\frac{x}{2}}   \n \hline
  \texttt{\\nil}           & \nil       & \texttt{\\modulo[7]}              & \modulo[7]          \n \hline
  \texttt{\\O(n)}          & \O(n)      & \texttt{\\vec\{v\}}               & \vec{v}             \n \hline
  \bk\bk\texttt{?}         & \\?        & \texttt{\\bijective}              & \bijective          \n \hline
  \texttt{\\is}            & \is        & \texttt{\\surjective}             & \surjective         \n \hline
  \texttt{\\al}            & \al        & \texttt{\\injective}              & \injective          \n \hline
  \texttt{\\ep}            & \ep        & \texttt{\\Ra}                     & \Ra                 \n \hline
  \texttt{\\phi}           & \phi       & \texttt{\\ra}                     & \ra                 \n \hline
  \texttt{\\p}             & \p         & \texttt{\\derivative[g]\{f\}}     & \derivative[g]{f}   \n \hline
  \texttt{\\D}             & \D         & \texttt{\\derivative\{\\zeta\}}   & \derivative{\zeta}  \n \hline
\end{array}
$$

## Other Features

This line is to test the in-line equations. We render this quadratic: $ax^2+bx+c=0$.

Bellow we test the twin-delimiter expanding macros (e. g., they should get taller for fractions):

$$
  \floor{x}, \ceil{y}, \near{z}, \arr{x,y,z},
  \floor{\frac{x}{2}} < \frac{x}{2} < \ceil{\frac{x}{2}},
  \near{\frac{x}{2}},
  \arr{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \paren{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \brk{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \curl{\frac{x}{2}, \frac{x}{3}, \frac{x}{4}},
  \abs{\frac{x}{2}}
$$

Lastly, checking an environment and that,

$$
\begin{align*}
  x^2- 8x - 9         & = 9-9         &  & \text{Subtract 9 on both sides.}         \n
  x^2- x + 9x - 9     & = 0           &  & \text{Breaking the middle term.}         \n
  x(x - 1) + 9(x - 1) & = 0           &  & \text{Pulling out common factors.}       \n
  (x - 1)(x + 9)      & = 0           &  & \text{Pulling out common } (x - 1).      \n
  x                   & \in \{1, -9\} &  & f(x)g(x) = 0 \Ra f(x) = 0 \vee g(x) = 0. \n
\end{align*}
$$

The checks here are by no means exhaustive. Though the table above should check all the `hwsymb.sty` symbols.
