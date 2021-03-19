//loops and arrays part 3

//Challenge: Build a pac-man board. A pacman board is a board 18 x 18 squares large that has squares 
//coloured based on if there is a wall in the square, a power-pellet in the square, a pac-dot in the
//square, pac-man himself, or the four ghosts, inky, blinky, pinky and clyde. Based on the game //board example, and what you have learned about if statements and adding classes in javascript, I //would like you to create your own pac-man board. Be as creative with the maze as you like.

//I have gone ahead an added 324 squares for you in the html and made an array for you to work //with.

//please dont forget to share your code on the #share-your--code channel on discord.

const squares = Array.from(document.querySelectorAll('.grid div'))

const layout = [
    1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4,
    1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 1, 2, 3, 3, 3, 3, 1,
    1, 2, 1, 3, 3, 1, 10, 1, 4, 4, 4, 1, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 4, 4, 1, 2, 1, 4, 4, 3, 1, 2, 1, 3, 1, 2, 1,
    2, 2, 1, 4, 4, 1, 10, 1, 3, 3, 2, 2, 2, 1, 4, 1, 2, 1,
    1, 2, 1, 3, 3, 1, 2, 2, 2, 2, 2, 1, 3, 4, 4, 4, 3, 4,
    1, 9, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    1, 2, 1, 2, 3, 3, 2, 11, 2, 2, 5, 2, 2, 2, 6, 2, 2, 2,
    1, 2, 1, 2, 1, 4, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3,
    1, 2, 1, 2, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 1,
    1, 2, 1, 2, 1, 4, 1, 3, 3, 3, 3, 3, 3, 4, 4, 1, 2, 1,
    1, 2, 1, 3, 4, 4, 1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 1,
    1, 2, 1, 4, 4, 4, 1, 2, 1, 1, 3, 3, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 3, 3, 3, 1, 2, 1, 4, 4, 4, 1, 3, 3, 3, 3, 1,
    1, 2, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4,
    1, 2, 1, 2, 3, 3, 3, 1, 2, 2, 2, 8, 2, 1, 3, 3, 3, 3,
    1, 2, 2, 2, 1, 4, 4, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
    1, 3, 3, 10, 1, 4, 4, 4, 4, 4, 4, 4, 1, 3, 3, 3, 3, 3,
]

for (let i = 0; i < squares.length; i++) {
    if (layout[i] === 1) { squares[i].classList.add('vertical-wall') }
    else if (layout[i] === 2) { squares[i].classList.add('path') }
    else if (layout[i] === 3) { squares[i].classList.add('horizontal-wall') }
    else if (layout[i] === 4) { squares[i].classList.add('background-wall') }
    else if (layout[i] === 5) { squares[i].classList.add('pacman') }
    else if (layout[i] === 6) { squares[i].classList.add('g-red') }
    else if (layout[i] === 7) { squares[i].classList.add('g-pink') }
    else if (layout[i] === 8) { squares[i].classList.add('g-orange') }
    else if (layout[i] === 9) { squares[i].classList.add('g-green') }
    else if (layout[i] === 10) { squares[i].classList.add('g-blue') }
    else if (layout[i] === 11) { squares[i].classList.add('cherry') }

}