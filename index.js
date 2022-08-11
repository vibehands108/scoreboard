let homeScore = 0
let guestScore = 0 

function plusOneHome(){
    homeScore += 1
    let homeScorePlus = document.getElementById("scoreHome")
    homeScorePlus.textContent = homeScore
}

function plusTwoHome(){
    homeScore += 2
    let homeScorePlus = document.getElementById("scoreHome")
    homeScorePlus.textContent = homeScore
}

function plusThreeHome(){
    homeScore += 3
    let homeScorePlus = document.getElementById("scoreHome")
    homeScorePlus.textContent = homeScore
}

function plusOneGuest(){
    guestScore += 1
    let guestScorePlus = document.getElementById("scoreGuest")
    guestScorePlus.textContent = guestScore
}

function plusTwoGuest(){
    guestScore += 2
    let guestScorePlus = document.getElementById("scoreGuest")
    guestScorePlus.textContent = guestScore
}

function plusThreeGuest(){
    guestScore += 3
    let guestScorePlus = document.getElementById("scoreGuest")
    guestScorePlus.textContent = guestScore
}