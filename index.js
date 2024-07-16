// code your solution here

function superbowlWin(myArray){
    const win = myArray.find( (element) => element.result === "W")
    if(win === undefined){
        return undefined
    }

    else{
        return win.year
    }


}



