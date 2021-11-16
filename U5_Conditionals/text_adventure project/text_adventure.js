alert("You got out of the bed.")

let bed_or_door = prompt("Do you (1) slide into the bed to pass the time, or do you (2) go through the door?")

if(bed_or_door == 1){
    let blue_or_red = prompt("As you went back to the bed and begaining to sleep, the room became white and there is a man in black holding two pills in each hand. Do you (1) take the blue pill to go back into reality, or do you (2) take the red pill to do deeper into the rabbit hole?");
    if(blue_or_red == 1) {
        alert("As you take the blue pill, you waked up from the bed. The sudden motion of waking up gave you a heart attack leaving you dead on the ground alone. Game over...");
    } else { 
        let reg_or_glit = prompt("As you take the red pill, you are teleported into a cyber world. Behind you is a floating blue pill in order to go back and in front of you is a glitchy door that takes you to the matrix. Do you (1) take the blue pill, or do you (2) open the door?");
        if (reg_or_glit==1){
            alert("As you take the blue pill, you waked up from the bed. The sudden motion of waking up gave you a heart attack leaving you dead on the ground alone. Game over...");
        } else {
            alert("As you open the door, you fall down into the dark hole. When you land,you see a rack of weapons and grabbed every single one of them. Then you go thorugh another door. YOU WIN!!!....maybe?");
        } 
    } 
} else {
    alert("As you open the door, a man with a shotgun shoots you through the chest. You fall down on the ground and painfully die a bloody death. Game Over..");

} alert("thank you for participating this experience.");
