class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;  
  }

  start(callback) {
      this.intervalId = setInterval(()=> {
      this.currentTime +=1
  }
, 1000)};
  
  

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
      return this.currentTime % 60;
    }
  

  computeTwoDigitNumber(value) {
    if (value < 10 && value >= 0) {
      return (`0${value}`);
    }else if (value >= 10 && value < 100) {
      return String(value);
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
