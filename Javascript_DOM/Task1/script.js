class CountDown {

  cancel(e, id) {
    document.getElementById(id).parentElement.remove()
  }


  start(countDownDate, timerId) {

    let x = setInterval(function () {


      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      let seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

      // Display the result in the element with id="demo"
      let timer = document.getElementById(timerId)

      // when cancel btton removes the timerId, we clear the Interval
      if (timer == null) {
        clearInterval(x)
      } else {
        timer.textContent = hours + ":" + minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          timer.textContent = "EXPIRED";
        }
      }

    }, 1000);
  }

}


let clicks = 0
let newCountDownObject = new CountDown()

// document.getElementById('myBtn').addEventListener('click', function() {newCountDownObject.start()}, false)

document.getElementById('myBtn').addEventListener('click', createCountDown, false)

function createCountDown() {
  let userCountdown = document.getElementById('countdown').value
  const [hours, minutes, seconds] = userCountdown.split(':')

  // counter used for div's id
  clicks += 1

  //create new counter
  let newCountDown = document.createElement('div')
  newCountDown.setAttribute('id', `countDown-${clicks}`)

  let countDownDate = new Date()
  countDownDate.setHours(hours, minutes, seconds)

  let timer = document.createElement('span')
  let timerId = `timer-${clicks}`
  timer.setAttribute('id', timerId)
  newCountDown.appendChild(timer)

  // adding the cancel Button
  let cancelBtn = document.createElement('button')
  let id = `cancel-${clicks}`
  cancelBtn.setAttribute('id', id)
  cancelBtn.innerHTML = 'Cancel'
  let algo = new CountDown()
  cancelBtn.addEventListener('click', function (e) { algo.cancel(e, id) }, false)
  newCountDown.appendChild(cancelBtn)

  document.getElementById('results').appendChild(newCountDown)
  algo.start(countDownDate, timerId)
}






