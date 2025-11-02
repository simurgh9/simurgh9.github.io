+++
title = 'Log Log Log'
date = '2025-10-16T23:29:00-05:00'
tags = ['maths', 'youtube', 'clickbait']
summary = """\
What do the drowning number theorists say? Log log log log...
"""
[params]
  mathjax = true
+++

> What do the drowning number theorists say?
>
> Log log log log...

I heard this joke while watching a Terry Tao lecture on YouTube titled
[Small and Large Gaps Between the Primes][lecture]. But not all
YouTube was created equal, was it?  A few weeks back, I was
doom-scrolling and found this little piece of work.

![YouTube Thumbnail](sc.WEBP "\(9^a + 9^a = 900\)")

To quench a moment of intellectual insecurity, I decided to figure it
out _real quick_. Let me start by reminding the people who haven't
done Algebra in a hot second of the logarithm notation. If we multiply
\(2\) by itself \(5\) times, we get \(32\). This is written as \(2^5 =
32\). Here we say that \(5\) is the exponent and read the entire term
as _two raised to the power of five_.  \[ 2^5 = 2\times 2\times
2\times 2\times 2 = 32 \] Similarly, we can ask, _two raised to which
power is thirty-two?_ Another way to ask this same question is _what
is \(\log_2(32)\)_. And the answer as we saw is \(\log_2(32) =
5\). Below is where my attempt at the original problem was, oh, in
some two minutes.

\[
\begin{align*}
9^a + 9^a &= 900 \\
2 \cdot 9^a &= 900 && \text{Since } 2 \cdot 9^a = 9^a + 9^a \\
\frac{2 \cdot 9^a}{2} &= \frac{900}{2} && \text{Divide by 2 on the both sides.} \\
9^a &= 450 \\
\log_9(9^a) &= \log_9(450) && \log_9\text{ on both sides} \\
a &= \log_9(450) && \text{Since } \log_b(b^x) = x \\
\end{align*}
\]

This was when it all started.  It can't be.  If not a natural number,
the answer had to be a rational number, _right_?  I mean, the
thumbnail title does say that this is supposed to be a Harvard exam
problem.  If by the off-chance any non-mathematical demographic does
read my blog: the answer not being a rational number implies that it
cannot be expressed as a fraction of two whole numbers, i.e., you have
to use a calculator to get an approximation. What's the fun in that?
All this problem will then test is who can plant keystrokes on a
calculator.

With faith in humanity and all that is sacred, I proceeded to look for
the trick that will yield the fraction equal to \(\log_9(450)\). I
remember in High School, in order to avoid using calculators, they
used to teach to convert all logs to decimal bases like this,
\[
\log_9(450) = \frac{\log_{10}(450)}{\log_{10}(9)}.
\]

However, as once pointed out by a jaded T. A., the _change of base_
rule actually can be used to change the base to any positive integer
greater than \(1\). I picked \(3\) for obvious reasons.

\[
\begin{align*}
a &= \log_9(450) \\
&= \frac{\log_3(450)}{\log_3(9)} && \text{Since } \log_x(y) = \frac{\log_b(y)}{\log_b(x)} \\
&= \frac{\log_3(450)}{\log_3(9)} \\
&= \frac{\log_3(9 \cdot 50)}{\log_3(9)} \\
&= \frac{\log_3(9) + \log_3(50)}{\log_3(9)} && \text{Since } \log(xy) = \log(x) + \log(y) \\
&= \frac{\log_3(9)}{\log_3(9)} + \frac{\log_3(50)}{\log_3(9)} \\
&= 1 + \frac{\log_3(50)}{2}
\end{align*}
\]

Heartbroken, I had a strong gut feeling that the answer was not
rational. We could, however, still calculate an approximation by hand
since,
\[
(3^3 = 27) < 50 < (81 = 3^4)
\]
meaning that,
\[
3 < \log_3(50) < 4.
\]
Therefore the final answer,
\[
1 + \frac{3}{2} < \paren{1 + \frac{\log_3(50)}{2}} < 1 + \frac{4}{2},
\]
simplifies to,
\[
2.5 < a < 3.
\]
I split the difference and called it \(a \approx 2.75\). The
calculator answer is,
\[
2.78043839750365588574680396485002082345772518673198990298821786671483487688...
\]
We solved it all by hand for an error less than 0.04. At this point,
if you are wondering how does the original YouTube video solve it?

_Drum roll..._

They resort to using the calculator at \(a =\log_9(450)\).  The
[original YouTube video][original] was taken down and replaced with a
[new YouTube video][new]. Apparently, now it is a "Math Olymp*ai*d
Question."

[lecture]: https://youtu.be/pp06oGD4m00?t=1261
[original]: https://www.youtube.com/watch?v=PnnsWjwSuRM
[new]: https://youtu.be/nFH2TWVB02c
