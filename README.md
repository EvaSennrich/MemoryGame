# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Eva Sennrich**

Time spent: **15** hours spent in total

Link to project: (https://veiled-wax-route.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] User can dynamically choose the button amount (5-8)
- [X] Timer changes dynamically depending on button amount
- [X] User can choose the speed of the clue sequence playback via dropdown
- [X] Sequence length changes to match button amount
- [X] Added sounds to go with lose and win game alerts


## Video Walkthrough (GIF)

Basic page walkthrough, showing winning the game, normal speed, and updating score.
https://user-images.githubusercontent.com/85651695/160232516-4b2704b7-1cdf-43fd-8ba0-128ea4b10f15.mp4

Showing multiple buttons, faster speed options, strikes functionality, and losing with 3 strikes.
https://user-images.githubusercontent.com/85651695/160232523-3b05c942-47c5-4bf2-b00c-c90fcbe86bf3.mp4

Showing losing by running out of time, fast speed option, and longer sequences / higher scores because of using more buttons.
https://user-images.githubusercontent.com/85651695/160232532-67db80db-25af-4f94-b014-9d5541c10d6a.mp4

Showing dynamic timer that depends on amount of buttons chosen.
https://user-images.githubusercontent.com/85651695/160232540-f735691e-326b-4ad7-90c1-a8a0a3affad9.mp4

Showing page responsiveness.
https://user-images.githubusercontent.com/85651695/160232547-a7ba80f5-cb7f-4e7c-9df5-a222a4e73ed4.mp4


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For my light and sound memory game I used the following resources to help me: Stack OverFlow, W3Schools and MDN Docs. 
I also used css-tricks.com for getting using CSS flexbox correctly. Having attended workshops at my university as a part
of Upsilon Pi Epsilon (UPE) also helped since I was familiar with some basic HTML, CSS, and JS because of these workshops 
last semester.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Some of the challenges I encountered while completing this project were that I wanted to add features that I had almost no idea how to do.
So, reading documentation and figuring things out to complete them was challenging at first. One example was the ability to add multiple
buttons. I did not just want to do the optional feature as adding more than 4 buttons statically, but instead I wanted to let the user 
decide dynamically how many buttons they wanted and the sequence along with the length of the game would behave correctly according to the
chosen number of buttons. I had to read a lot of documentation and use w3schools to figure out how to implement this. I also needed to permit 
the player to only select between 5-8 buttons because I did not want them to have infinite or 0 buttons as an option. One other feature I found 
challenging was implementing the timer. I originally implemented a timer based on just the user having the 5 buttons, but since I did not know 
how many buttons the user would choose, I had to make sure the timer was based on the amounts of buttons so it would not be unfair if they chose 
more buttons. So, the final version, the time on the timer is dependent on how many buttons the player chooses once the game starts. This took me
a while to get correct because I was not familiar with intervals and had some trouble because of not clearing the interval. One particular issue
that I encountered as well was that the timer, once working properly, was not displaying properly to the user. I wanted it to be in the correct 
format (00:00), but when the timer hit less than 10 seconds it would show up as (00:9) instead of showing correctly formatted as (00:09) this took
a while to debug but I ended up using two variables to split the seconds into two separate numbers and using floor division by 10 I could get the 
first digit and using the modulo by 10 I could get the second digit and display those in the innerHTML separately to get the visual I wanted.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I mainly have questions about how I can improve on coding and doing things more efficiently. I feel like on some things I gave it a lot of thought 
and got to the solution, but there are a lot of ways to solve the same problem and I would want to learn more about how to improve my skills and be 
able to recognize this more. There are some features that I added that took me a while to come up with a solution to make it work, I have questions 
on how I can get better and improve on this to maybe get to a better solution more quickly. I also have a lot of questions about technologies in web 
development. I have used plain JavaScript but want to try my hand at using a framework like React and have some questions about how I can get started 
with that. I also want to know more about working on projects like this, since I learned a lot by just building something and getting stuck and unstuck 
along the way.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional 
features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more time, I would like to improve the design more, even though I like it personally and it was what I originally intended on building after 
making a design file on Figma before starting to code it. I think at this point I would like to improve it and make it more fun to play with. I would 
love to work on adding animations and making it look more interactive. I thought about adding a way to keep track of the highest score for the user and 
searched up about how to do this, and it seems like there is a way using local storage, but since the instructions require the game to end and the user 
to be able to win, the sequence amount is dependent on the buttons, so 5-8. The max score possible is 8 so the user can win, so I did not look more into 
it for now. If the submission did not require the player to win and the alert to show, I would like to figure out how to add this feature, setting the 
number of sequences that play to a really large number, or infinite, and keeping track of the highest score a player had and displaying that as the high 
score to give the player a reason to come back.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/f772877f68f34644aa9f56d645d5948e?sharedAppSource=personal_library)


## License

    Copyright [Eva Sennrich]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
