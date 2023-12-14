function swg(length) {
    let result = '';
    const characters = 'swg';
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // counter += 1;
    return result;
}

let ip;
while (ip!='n') {
    let rand = swg(1)
    ip = prompt("Enter S,W or G: ")
    if (ip == rand) {
        alert("It is draw")

    }
    else if (ip == 's' && rand == 'w') {
        alert("you win")
    }
    else if (ip == 's' && rand == 'g') {
        alert("you lose")
    }
    else if (ip == 'w' && rand == 's') {
        alert("you lose")
    }
    else if (ip == 'w' && rand == 'g') {
        alert("you win")
    }
    else if (ip == 'g' && rand == 's') {
        alert("you win")
    }
    else if (ip == 'g' && rand == 'w') {
        alert("you lose")
    }
    else {
        alert("Give correct input: ")
    }
}