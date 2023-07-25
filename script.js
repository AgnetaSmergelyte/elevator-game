const btnsElevatorFloor = document.querySelectorAll('.elevator-buttons > div');
const elevator = document.querySelector('.elevator')

let currentFloor = 1;


//click events
{
    btnsElevatorFloor[2].onclick = () => {
        //to 1st floor
        if (currentFloor === 2) {
            elevator.classList.remove('second');
            elevator.classList.add('first');
            currentFloor = 1;
        } else if (currentFloor === 3) {
            elevator.classList.remove('third');
            elevator.classList.add('first');
            currentFloor = 1;
        }
    }
    btnsElevatorFloor[1].onclick = () => {
        //to 2nd floor
        if (currentFloor === 1) {
            elevator.classList.remove('first');
            elevator.classList.add('second');
            currentFloor = 2;
        } else if (currentFloor === 3) {
            elevator.classList.remove('third');
            elevator.classList.add('second');
            currentFloor = 2;
        }
    }
    btnsElevatorFloor[0].onclick = () => {
        //to 3rd floor
        if (currentFloor === 1) {
            elevator.classList.remove('first');
            elevator.classList.add('third');
            currentFloor = 3;
        } else if (currentFloor === 2) {
            elevator.classList.remove('second');
            elevator.classList.add('third');
            currentFloor = 3;
        }
    }
}

