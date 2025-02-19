export class Time {
  hour: number;
  minute: number;
  seconds: number;

  constructor(hour: number, minute: number, seconds: number) {
    minute += Math.floor(seconds / 60);
    seconds %= 60;
    seconds += seconds < 0 ? 60 : 0;

    hour += Math.floor(minute / 60);
    minute %= 60;
    minute += minute < 0 ? 60 : 0;

    hour %= 12;
    hour += hour < 0 ? 12 : 0;

    this.hour = hour;
    this.minute = minute;
    this.seconds = seconds;
  }

  static fromDate(date: Date): Time {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return new Time(hours, minutes, seconds);
  }

  // Time add
  add(time: Time): Time {
    return new Time(
      this.hour + time.hour,
      this.minute + time.minute,
      this.seconds + time.seconds
    );
  }
}
