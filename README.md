# Giphy API
A web application that uses both pre-coded and user-generated buttons to get a variety of relevant animated gifs from the giphy API

The application functions in 5 basic steps.

1) It starts by rendering buttons for 5 pre-defined search terms, as established in the "topics" array.

2) It allows users to type their own desired search terms in the input box. Whn the "Submit" button is clicked, it adds their term to the topics array and then generates the buttons anew, with the addition of the new, user-defined term.

3) Whenever any of the gif buttons are clicked, a method will be run to "GET" 10 gifs from the giphy API. 

4) These gifs (in their still form) will then be prepended to the gifDiv, with a horizontal break separating them from previous outputs. 

5) Finally, the user can click these still images to animate them, and vice versa once they are animated.