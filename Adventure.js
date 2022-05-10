alert("Choose your class")

let different_Class = prompt("The Knight (1), the Rouge (2), or Wizard (3).")

//Knight 
if(different_Class == 1){
    alert("You picked the Knight, here are your stats: ");
    alert("Hp:15, Attack:10, Defense:30, Speed:5.")
    alert("As you walked down the path, you encountered an enemy.")
    
    let different_Class = Number(prompt("Do you (1) attack or (2) flee?"));
    if(different_Class == 1){
        alert("The ennemy attacks, but you easily blocked it and then retalliate back, it dies.");
        alert("That was the only enemy in this game. The End....");
        alert("or not?")
        alert("Just kidding :D")
    } else{
        alert("You tried to flee, but you are too slow and get killed by the enemy.")
        alert("Game Over.")
    }




} if(different_Class == 2){ //Rouge
    alert("You picked the Rouge, here are your stats: ")
    alert("Hp:10, Attack:15, Defense:5, Speed:30")
    alert("As you walked down the path, a demon lord appears in front of you.")
    
    let rouge_Class = prompt("Do you (1) attack or (2) flee.")
    if(rouge_Class == 1){
        alert("You attacked the enemy and it spews out posinious gas. This gas then kills you in a painfully slow way.")
        alert("Basically, you died.")
    
    } else {
        alert("You succesfully fled with your ultra speed")
        alert("But you used to much power and break through the fabric of space.")
        let rouge_Class = prompt("Now there is nothing you can do. The End...")
        if(rouge_Class == "no"){
            alert("?????")
            let rouge_Class = prompt("What do you mean 'no'?")
            if(rouge_Class == "more"){
                alert("Fine. Here ya go.")
                alert("01000011 01101111 01101101 01100010 01101001 01101110 01100101 00100000 01100001 01101100 01101100 00100000 01001000 01010000 00100000 01100001 01101110 01100100 00100000 01100001 01101110 01110011 01110111 01100101 01110010 00100000 01101001 01110100 00100000 01100110 01101001 01110010 01110011 01110100")
                alert("Are you happy now?")
                alert("I'll just leave it to you and go take a nap. GOOD LUCK!")
            } else{
                alert("Nothing to say?")
                alert("Then don't ask me anymore!") 
            }

        }
    } 

//Wizard
} if (different_Class == 3){
    alert("You picked the Wizard, here are your stats: ")
    alert("Hp:-12, Attack:1, Defense:1, Speed:1")
    alert("Enemy appeared.")
    
    let different_Class = prompt("(1) (2)?")
    if (different_Class == 1){
    alert("There is *no room for the Rouge.")
    } else {
        alert("The Rouge needs *more room.")
    }
    

} if(different_Class == 13){
    alert("well, well, well....")
    alert("looks like you've found the secret class.")
    alert("Here are you're stats:")
    alert("HP:infinite, Attack:66, Defense:6, Speed:01000100 01100101 01110011 01110000 01100001 01101001 01110010")
    let different_Class = prompt("As you walked down a path, a strange figure appears. What do you do? Attack (1) or Flee (2).")
    if(different_Class == 1){
        alert("As it attacks, the forest turns into a grey husk and the sky is drooping red.")
        alert("Suddenely everything turns to black.")
        alert("There is nothing you can do.")
    } else {
        alert("You ran away as far as you can to escape it.")
        alert("But it seems to be coming closer.")
        alert("You stumped into a dead end and it is scarely close.")
        let different_Class = prompt("The figure stands there. It then says, 'You are trapped into a corner, what do you do? Talk (1) or ####### (2)?")
        if(different_Class == 1) {
            alert("That is not an option")
        } else {
            alert("As you #### yourself, there is something that appears.")
            alert("It is a multi generational pendant passed down through my ancestors...")
            alert("A....")
            alert("$2.99 FOOTLONG COUPON FOR SUBWAY!!!!")
            alert("GOOD LUCK WITH IT! :D")
        }
    }
}
