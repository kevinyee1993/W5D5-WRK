class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // this.printTime(this.hours, this.minutes, this.seconds);

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    console.log("what is this!?", this);
    // let bound = this._tick.bind(this);
    setInterval(() => this._tick(), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}: ${this.minutes} : ${this.seconds}`);

  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // setInterval(
      //update the time


      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds %= 60;
        this.minutes++;
      }
      if (this.minutes >= 60){
        this.minutes %= 60;
        this.hours++;
      }
      if (this.hours >=24) {
        this.hours = 0;
      }
      this.printTime();
    }


  }


const clock = new Clock();
// const cb = clock.updateTime(clock.second, clock.minute, clock.hour);
