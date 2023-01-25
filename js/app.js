const bob = document.querySelector('.bob')
const eyes = document.querySelector('.eye-container')


//  accummulating amounts of movement

let left = 100
let up = 100

// move bob up, create a function
/*function moveUp()
{
    up -= 100
    bob.style.top = up + 'px'
    eyes.style.transform = 'rotate(-8deg)'
}

// move bob down, create a function
function moveDown()
{
    up += 100
    bob.style.top = up + 'px'
    eyes.style.transform = 'rotate(8deg)'
}*/

// move Bob left, create a function
function moveRight()
{
    left += 100
    bob.style.left = left + 'px'
    eyes.style.transform = 'rotate(0deg)'
    eyes.style.left = '60px'
}

// move Bob right create a function
function moveLeft()
{
    left -= 100
    bob.style.left = left + 'px'
    eyes.style.transform = 'rotate(180deg)'
    eyes.style.left = '-60px'
}

function moveBob(e)
{
    console.log('pressing key', e.key)
    if (e.key === 'ArrowLeft')
    {
        //move Bob left, call created function
        moveLeft()
    }
    if (e.key === 'ArrowRight')
    {
        //move Bob right, call created function
        moveRight()
    }
    /*if (e.key === 'ArrowUp')
    {
        //move Bob up, call created function
        moveUp()
    }
    if (e.key === 'ArrowDown')
    {
        //move Bob up, call created function
        moveDown()
    }*/
}

document.addEventListener('keydown', moveBob)