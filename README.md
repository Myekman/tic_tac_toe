# Tic Tac Toe 
Welcome to Tic Tac Toe! This is a simple game for 2 players and working as a classic Tic Tac Toe game. The target audience is children from 5 years of age since this is a easy game to follow. Its a perfect way for kids to practice logically thinking. 
It's also fun to challenge each other time and time again. Because there is a scorekeeper who keeps track of who has won the most times. In order for it to be fair and for the loser to have a chance for rematch, the Loser will start each new round.

![IMG]()

A live version of this game can be found here! [Tic Tac Toe](https://myekman.github.io/tic_tac_toe/)

# Table of content

### Wireframes
* [Wireframes](#wireframes "Wireframes")

### List of features:

* [Logo](#logo "Logo")
* [Welcome section](#welcome-section "Welcome section")
* [Name section](#name-section "Name section")

### UX/UI:

* [User Stories](#user-stories "User Stories")
* [Requirements](#requirements "Requirements")
* [Design](#design "Design")
* [Typography](#typography "Typography")

### List of testing

* [Testing](#testing "Testing")
* [Manual Testning](#manual-testing "Manual Testing")
* [HTML Validator](#html "HTML")
* [CSS Validator](#css "CSS")
* [JavaScript Validator](#javascript "JavaScript")
* [Lighthouse](#lighthouse "Lighthouse")

### Develop and Deployment

* [Deployment](#deployment "Deployment")
* [Content](#content "Content")
* [Credits](#credits "Credits")

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

## Wireframes

## Typography

* The typograpfy was imported from [Google fonts](https://fonts.google.com/) and pasted in style.css file. 
* The fonts i used: Righteous and Architects Daughter.

## Technologies used:
* CSS
* HTML
* JavaScript

## Features 

### Logo
* add images of game here 
### Welcome section
* add imeges here 
### Name section
* add images here 


## Testing 

## Manual Testing 
* Add text here of manuel testing

## Testing with validator

### JavaScript 
* The code was passed through JSHint for testing, and no errors were found. There were a few warnings. 

### HTML 

* No errors were showed when passing thrue HTML [3Wc Validator](https://jigsaw.w3.org/css-validator/). 

### CSS

* No errors were showed when passing thrue CSS [Jigsaw Validator](https://jigsaw.w3.org/css-validator/). 

### Lighthouse 

* The results of Lighthouse testing, see image of all test below.

![IMG]() ![IMG]() ![IMG]() ![IMG]()

## Bugs 

Here is a list of issues discovered and how they were solved. 

1. The element i wanted to display when clicked on a specific button was showed before.
*  Solution: Set display non; to css and set .style.display = "block" in javascript. 
2. The elements of input and button were gone when adding alert message and if statement to javascript.
*  Solution: Changed the order of if/else in that function.
3. The game Did'nt start again after restart buttun was clicked.
*  Solution: Set running to true;

### Unfixed bugs 
I made different background colors for player X and player O when playing, but when i clicked the same box twice, the color changed again. My mentor gave me tips on how to fixed but unfortunately that did'nt work out. 
This is a bug that has not been fixed before submitting. 

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

Best Regards 

[back to top](#tic-tac-toe "Tic Tac Toe")