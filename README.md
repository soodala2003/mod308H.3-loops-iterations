# mod308H.3-loops-iterations

https://github.com/soodala2003/mod308H.3-loops-iterations.git

Part 1: Loop Concepts Overview

for loop:
- A for loop repeats until a specified condition evaluates to false.
<pre>- [Syntax]  for (initialization; condition; afterthought) {
                    //statements;
                 }          
     - [Example] for (let i = o; i < 10; i++) {<
                 console.log(i);
                 }
</pre>

while loop: 
- A while loop executes its statements as long as a specified condition evaluates to true. The condition test occurs before statement in the loop is executed.
- [Syntax]  while (condition) {<br>
                //statements;<br>
            }           
- [Example] let j = 0;<br>
            while (j < 5) {<br>
                console.log(j);<br>
                j++;<br>
            }

do...while loop: 
- The do...while loop repeats until a specified condition evaluates to false. It is always executed at least once before the condition is checked.
- [Syntax]  do {<br>
                //statements;<br>
            } while (condition);<br>
- [Example] let x = 10;<br>
            do {<br>
                x--;<br>
                console.log(x);<br>
            } while (x > 50);

Part 3: Reflection

I learned that various types of loops offer different ways to execute statements in JavaScript. Also, I've learned that one type of loop could be easier to serve than other loops depending on situation. "4. Advanced Guessing Game with Do...While Loop" was interesting, but it was hard to figure out how to pop up prompts.

For loop and nested loop might be used to calculate scores of each learner.


