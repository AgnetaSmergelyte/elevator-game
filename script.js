const btnsElevatorFloor = document.querySelectorAll('.elevator-buttons > div');
const elevator = document.querySelector('.elevator')
const personBubble = document.querySelector('#to-where p');
const personDiv = document.querySelector('.person-wrapper');

let freeze = false;
let currentFloor = 1;
let personInside = false;
let personLocation = null;
let personWish = null;

const randomFloor = () => {
    return Math.floor(Math.random()*3) + 1;
}
const randomChoice = (n1, n2) => {
    if (Math.random() < 0.5) {
        return n1;
    } else return n2;
}

const newPerson = (n1, n2) => {
    personLocation = randomChoice(n1, n2);
    if (personLocation === 1) {
        personWish = randomChoice(2,3);
    } else if (personLocation === 2) {
        personWish = randomChoice(1,3);
    } else {
        personWish = randomChoice(1,2);
    }
    personDiv.classList.add(`waiting-in-${personLocation}`)
    personBubble.textContent = personWish;
    personInside = false;
}

newPerson(2,3);

//click events
{
    btnsElevatorFloor[2].onclick = () => {
        //to 1st floor
        if (freeze) return;
        if (currentFloor === 2) {
            elevator.classList.remove('second');
            elevator.classList.add('first');
            if (personInside) {
                personDiv.classList.remove('second');
                personDiv.classList.add('first');
            }
            currentFloor = 1;
        } else if (currentFloor === 3) {
            elevator.classList.remove('third');
            elevator.classList.add('first');
            currentFloor = 1;
            if (personInside) {
                personDiv.classList.remove('third');
                personDiv.classList.add('first');
            }
        }
        if (personInside && personWish === 1) {
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('in-elevator');
                personDiv.classList.add('leaving');
                setTimeout(() => {
                    personDiv.classList.remove('leaving', 'first');
                    personDiv.style.display = 'none';
                }, "1000");
            }, "1000");
            setTimeout(() => {
                newPerson(2,3);
                personDiv.style.display = 'flex';
                freeze = false;
            }, "2300");
        }
        if (personDiv.classList.contains('waiting-in-1')) {
            personInside = true;
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('waiting-in-1');
                personDiv.classList.add('in-elevator', 'first');
                freeze = false;
            }, "1000");
        }
    }
    btnsElevatorFloor[1].onclick = () => {
        //to 2nd floor
        if (freeze) return;
        if (currentFloor === 1) {
            elevator.classList.remove('first');
            elevator.classList.add('second');
            if (personInside) {
                personDiv.classList.remove('first');
                personDiv.classList.add('second');
            }
            currentFloor = 2;
        } else if (currentFloor === 3) {
            elevator.classList.remove('third');
            elevator.classList.add('second');
            if (personInside) {
                personDiv.classList.remove('third');
                personDiv.classList.add('second');
            }
            currentFloor = 2;
        }
        if (personInside && personWish === 2) {
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('in-elevator');
                personDiv.classList.add('leaving');
                setTimeout(() => {
                    personDiv.classList.remove('leaving', 'second');
                    personDiv.style.display = 'none';
                }, "1000");
            }, "1000");
            setTimeout(() => {
                newPerson(1,3);
                personDiv.style.display = 'flex';
                freeze = false;
            }, "2300");
        }
        if (personDiv.classList.contains('waiting-in-2')) {
            personInside = true;
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('waiting-in-2');
                personDiv.classList.add('in-elevator', 'second');
                freeze = false;
            }, "1000");
        }
    }
    btnsElevatorFloor[0].onclick = () => {
        //to 3rd floor
        if (freeze) return;
        if (currentFloor === 1) {
            elevator.classList.remove('first');
            elevator.classList.add('third');
            if (personInside) {
                personDiv.classList.remove('first');
                personDiv.classList.add('third');
            }
            currentFloor = 3;
        } else if (currentFloor === 2) {
            elevator.classList.remove('second');
            elevator.classList.add('third');
            if (personInside) {
                personDiv.classList.remove('second');
                personDiv.classList.add('third');
            }
            currentFloor = 3;
        }
        if (personInside && personWish === 3) {
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('in-elevator');
                personDiv.classList.add('leaving');
                setTimeout(() => {
                    personDiv.classList.remove('leaving', 'third');
                    personDiv.style.display = 'none';
                }, "1000");
            }, "1000");
            setTimeout(() => {
                newPerson(1,2);
                personDiv.style.display = 'flex';
                freeze = false;
            }, "2300");
        }
        if (personDiv.classList.contains('waiting-in-3')) {
            personInside = true;
            freeze = true;
            setTimeout(() => {
                personDiv.classList.remove('waiting-in-3');
                personDiv.classList.add('in-elevator', 'third');
                freeze = false;
            }, "1000");
        }
     }
}

