function TimestampGenerator() {
  // private variable
  let previousTimestamp = 0;

  // methods
  this.generateTimestamp = function() {
    const timestamp = Math.max(Date.now(), previousTimestamp + 1);
    previousTimestamp = timestamp;
    return timestamp;
  }
}

module.exports = new TimestampGenerator();
