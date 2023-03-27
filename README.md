# Tic Tac Toe 
Welcome to Tic Tac Toe! 
<br>
This is a simple game for 2 players and working as a classic Tic Tac Toe game. 
<br>
The target audience is children from 5 years of age. Since this is a easy game to follow. Its a perfect way for kids to practice logically thinking. 
It's also fun to challenge each other time and time again.
<br>
There is a scorekeeper who keeps track of who has won the most times. In order for it to be fair and for the loser to have a chance for rematch, the Loser will start each new round.

![IMG](/assets/images/tictactoe_responsive.png)

A live version of this game can be found here! [Tic Tac Toe](https://myekman.github.io/tic_tac_toe/)

# Table of content

### Wireframes
* [Wireframes](#wireframes "Wireframes")

### List of features:

* [Logo first page](#Logofirstpage "Logo/first page")
* [Don't Play](#don't-play "Don't Play")
* [Let's Play ](#let's-play  "Let's Play ")
* [Alert message](#alert-message "Alert message")
* [Game section](#game-section  "Game section")
* [Winner showed](#winner-showed "Winner showed")
* [Score](#score "Score")
* [Draw](#draw "Draw")

### UX/UI:

* [User Stories](#user-stories "User Stories")
* [Requirements](#requirements "Requirements")
* [Design](#design "Design")
* [Typography](#typography "Typography")

### List of testing

* [Manual Testning](#manual-testing "Manual Testing")
* [HTML Validator](#html "HTML")
* [CSS Validator](#css "CSS")
* [JavaScript Validator](#javascript "JavaScript")
* [Lighthouse](#lighthouse "Lighthouse")

### Develop and Deployment

* [Deployment](#deployment "Deployment")
* [Content](#content "Content")
* [Credits](#credits "Credits")
* [How to fork](#how-to-fork "How to fork")
* [How to clone](#how-to-clone "How to clone")

## User Stories

* Choise if i want to start game or not.
* If yes, i can enter my Name to start play.
* If no, i can change my mind and return to enter my name. 
* As a player, I want to be notified on who wins and see the final result.
* As a player, I want to be able to start a new game.
* As a player, I want to se my name when enter game. 
* As a player, I want to be able to play the game on different devices and screen sizes. 


## Design 

* The design is simple and clean but with strong and happy colors since the game is made for kids in first place and i want them to be happy and inspired when playing. 
### Color sheme:
![IMG](/assets/images/tictactoe_colorsheme.png)

## Wireframes

Design game to look good on all screen sizes with [Balsamiq]("https://balsamiq.com/wireframes/desktop/docs/overview/")

![IMG](/assets/images/wireframe1.png)
![IMG](/assets/images/Wireframe2.png)
![IMG](/assets/images/wireframe3.png)

## Typography

* The typograpfy was imported from [Google fonts](https://fonts.google.com/) and pasted in style.css file. 
* The fonts i used: Righteous and Architects Daughter.

## Technologies used:
* CSS
* HTML
* JavaScript

## Features 

## Logo/first page
![IMG](/assets/images/tac1.png)
## Don't Play
![IMG](/assets/images/tac2.png)
## Let's Play 
![IMG](/assets/images/tac3.png)
## Alert message 
![IMG](/assets/images/tac4.png)
## Game section 
![IMG](/assets/images/tac5.png)
## Winner showed
![IMG](/assets/images/tac6.png)
## Score 
![IMG](/assets/images/tac8.png)
## Draw
![IMG](/assets/images/tac7.png)

## Manual Testing 
1. Both buttons on first page is working as they should.
- "yey" button takes the visitor to --> enter name of player 1 and 2 to start game. 
- "no way.." button takes visitor to a message and back button. 
2. When i try to enter game without enter a name, i got an alert of "please enter your name to play". Its working for both input fields, i have to fill in names of all players before continue.
3. The Back button works, it reaload the page when clicked. 
4. The gameboard show when i have enter 2 players. In score section it shows 2 names of Maja and Lisa. which I filled in when enter game.
5. When i click on board, X and backgroundcolor is showed in that clicked box. It also got a message of x's turn above the playboard. 
6. When X have clicked on board, it shows message of o's turn. 
7. O clickes on board and O is shown in that box clicked, also a backgroundcolor of pink. 
8. I continued tp play and O wins, shows a winning message of "The winner is Lisa". 
9. Restart button is showed at same time. When clicking on that button the board is set to emty again. 
10. In the score Area, the Player O (Lisa) got 1 score and Maja still got 0 score. 
11. If nobody wins it shows a message of "draw!" and restart button is showed. 
12. You can play again as many times you want to. 

13. The game is looking good on all screen sizes. 

## Testing with validator

### JavaScript 
* The code was passed through JSHint for testing, and no errors were found, but there were warnings. 

### HTML 
* Error was showed first time i run the validator. I had attribute of cellindex inside all my div's in gameboard. I changed the cellindex to id's instead in all div's. 
* After fixed errors no errors were showed when passing thrue HTML [3Wc Validator](https://jigsaw.w3.org/css-validator/). 

### CSS

* No errors were showed when passing thrue CSS [Jigsaw Validator](https://jigsaw.w3.org/css-validator/). 

### Lighthouse 

* The results of Lighthouse testing, see image below.

![IMG](/assets/images/lighthouse_tictactoe.png)

## Bugs 

Here is a list of issues discovered and how they were solved. 

1. The element i wanted to display when clicked on a specific button was showed before.
*  Solution: Set display non; to css and set .style.display = "block" in javascript. 
2. The elements of input and button were gone when adding alert message and if statement to javascript.
*  Solution: Changed the order of if/else in that function.
3. The game did'nt start again after restart buttun was clicked.
*  Solution: Set running to true;
4. The html validator complained about cellindex inside my divs.
* Solution: Change cellindex to id's. 

### Unfixed bugs 
I have made different background colors for player X and player O when the players click on board, but when i clicked the same box twice, the color changed again. My mentor gave me tips on how to fixed but unfortunately that did'nt work out and i have not figure it out yet. So this is a bug that has not been fixed before submitting. 

## Deployment 

The development environment used for this game was GitPod. In GitPod a template enviorment was used provided by Code Institute.

Regular commits and pushes to GitHub have been implemented to save through development.

The procedure for deployment was followed by the video from Love Running. 

1. Log into GitHub.
2. Find the Repository that you want to deploy live.
3. At the top of the repository, select Settings.
4. Click "Pages" to the left in menu. 
5. The ”Source” should be "deploy from branch". Then choose Branch as ”main” and "root" as folder and click ”Save”.
6. The website will deploy and the link to live webbsite will be ready when refresh the page. 

### How to fork

To fork the respository:
* Log in or sign up to GitHub. 
* Go to the repository for this project: [Tic Tac Toe](#tic-tac-toe "Tic Tac Toe")
* Click the Fork button in the top right corner.

### How to clone

To clone repository:
* Log in or sign up to GitHub. 
*  Go to the repository for this project: [Tic Tac Toe](#tic-tac-toe "Tic Tac Toe")
* Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
* Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
* Type 'git clone' into the terminal and then paste the link you copied in step 3 and press enter. 

## Content
*  The Content of javascript file was influenced of love maths project and from diffrent youtube videos, i have linked them in credits. 
* The content of html and css was planned with wireframes and then made by testing and trying different solutions along the way. Some parts were also inspired by youtube videos. For example how to remove border-bottom, top, right and left in my gameboard. that video is also linked in the credits.
* The circle and X images was taken from [Font Awesome](https://fontawesome.com/icons/dumbbell?s=solid&f=classic).

## Credits 

Martina Terlevic

* My fantastic mentor at Code Institute

And also all awesome people att slack code institute community who are warm and helpful every time. 

### This videos inspired me strongly

https://www.youtube.com/watch?v=Y-GkMjUZsmM
https://www.youtube.com/watch?v=AnmwHjpEhtA&t=922s

## Great sources

https://www.w3schools.com/ 
https://stackoverflow.com/?newreg=3583f84a5bfa4452b918dc819119ce0c 

Image in top that present site in differns devices are made with:

http://ami.responsivedesign.is/

Wireframes made with: 
[Balsamiq]("https://balsamiq.com/wireframes/desktop/docs/overview/")

Best Regards 

[back to top](#tic-tac-toe "Tic Tac Toe")