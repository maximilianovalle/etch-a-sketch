# etch-a-sketch
Etch-a-sketch grid for pixel drawings!

**Link to Project:** (https://maximilianovalle.github.io/etch-a-sketch/)

![](demo.gif) TBA!!

## How It's Made

**Tech Used:** HTML, CSS, Javascript

I was given a rough outline of this project by the Odin Project, as well as some rules I had to abide by (for example, I had to spawn in the divs using JS rather than manually insertng them by using HTML). As this project was more difficult than any I've worked on previously, I started by planning the website's look and general function on a whiteboard. From there, I worked as I usually do - breaking things up into smaller, more manageable chunks and taking it step by step.

## Lessons Learned:

Taking a problem step by step saves you more time in the long run than implementing everything at once. For example, when making the buttons function, I had a rough idea in my head and programmed the event listeners and functions in one go before testing them. When I did test them, surprise! They didn't work. After erasing my code and taking it one step at a time, I figured out what my initial mistake had been - I coded the event listener into a function that was never called. The mistake was so obvious that I never caught on when checking my first attempt.

Taking breaks is also incredibly important. There were many instances where I became frustrated because my code wasn't working as expected, so in moments where my head began to ache, I just put the project away. Coming back to it with a clear mind made figuring out the solution for a problem infinitely easier.

There were also a few cool features I learned about:

1. Using ":focus" on a selector in CSS allows you to change the cursor - this can be utilized to highlight the cursor hovering over a button, for example!
2. The "&times;" HTML value for a nice 'X' shape!
3. Modal boxes... omg.

This was my first time implementing modal boxes, they're somewhat simple and made the project look way cleaner than it did when I used alert() and prompt().

It also took me an awfully long time to realize that a page will refresh when a form resets. I kept wondering why, upon submitting a new grid size, the grid would remain at 16 x 16. What was actually happening was that the new grid would be created, but then the page would refresh and the original 16 x 16 grid would take its place. This all happened faster than I could see so to my eyes, it looked like it was just staying the same. I ended up having to set the onsubmit value in the form element to return false to prevent the page from refreshing. This ended up working but it feels like a wonky solution, I'm sure there's a method with better practice that I'll figure out later.