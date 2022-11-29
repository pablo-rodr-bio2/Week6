class CountDown {
    start() {
        let userCountdown = document.getElementById('countdown').value
        const [hours, minutes, seconds] =  userCountdown.split(':')

        // counter used for div's id
        clicks += 1
    
        //create new counter
        let newCountDown = document.createElement('div')
        newCountDown.setAttribute('id', `countDown-${clicks}`)
    
        let countDownDate = new Date()
        countDownDate.setHours(hours, minutes, seconds)
    
        let timer = document.createElement('span')
        timer.setAttribute('id', `timer-${clicks}`)
        newCountDown.appendChild(timer)
    
        // adding the cancel Button
        let cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('id', `cancel-${clicks}`)
        cancelBtn.innerHTML = 'Cancel'
        cancelBtn.addEventListener('click', cancel, false)
        newCountDown.appendChild(cancelBtn)
    
        newCountDown.getAttribute('id')
    
        document.getElementById('results').appendChild(newCountDown)
    
        
    
        let x = setInterval(function() {
    
            // Get today's date and time
            let now = new Date().getTime();
          
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
          
            // Time calculations for hours, minutes and seconds
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            let seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
          
            // Display the result in the element with id="demo"
            timer.textContent =  hours + ":" + minutes + ":" + seconds;
          
            // If the count down is finished, write some text
            if (distance < 0) {
              clearInterval(x);
              timer.textContent = "EXPIRED";
            }
          }, 1000);
    }

    end() {

    }
}


let clicks = 0
let newCountDownObject = new CountDown()

document.getElementById('myBtn').addEventListener('click', newCountDownObject.start)
function start() {
    // get input form user
    [hours, minutes, seconds] = document.getElementById('countdown').value.split(':')

    // counter used for div's id
    clicks += 1

    //create new counter
    let newCountDown = document.createElement('div')
    newCountDown.setAttribute('id', `countDown-${clicks}`)

    let countDownDate = new Date()
    countDownDate.setHours(hours, minutes, seconds)

    let timer = document.createElement('span')
    timer.setAttribute('id', `timer-${clicks}`)
    newCountDown.appendChild(timer)

    // adding the cancel Button
    let cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id', `cancel-${clicks}`)
    cancelBtn.innerHTML = 'Cancel'
    cancelBtn.addEventListener('click', cancel, false)
    newCountDown.appendChild(cancelBtn)

    newCountDown.getAttribute('id')

    document.getElementById('results').appendChild(newCountDown)

    

    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();
      
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        timer.textContent =  hours + "h " + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          timer.textContent = "EXPIRED";
        }
      }, 1000);

}

function cancel(e) {
    this.parentElement.remove();
}



