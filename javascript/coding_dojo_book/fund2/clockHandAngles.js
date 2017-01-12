//Q: Reguardles how hard a Dojo student works and they should work hrd, they need time now and then to unwind like hands on a clock. Traitional clocks are increasingly uncommon, but most can stil read an analog clock's hands of hours, minutes and seconds. Create clockHandAngles(seconds) thag given the number of seconds since 12:00:00 prints angles in degrees of the hour minute second hands. As review 360 degrees form a full rotation. For input of 3600 secs equivalent to 1:00:00 hour = 30 deg minute 0 dets and seconds 0 degrees.




function clockHandAngles(input) {
  out = []
  for (var i = 2; i >= 0; i--) {
    out[i] = ((input % 60) * 30 ) % 360
    input = Math.floor(input/60)
  }
  return out
}

console.log(clockHandAngles(119730));
