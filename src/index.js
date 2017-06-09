function TimestampGenerator() {
  let previousTimestamp = 0;

  function generateTimestamp() {
    const timestamp = Math.max(Date.now(), previousTimestamp + 1);
    previousTimestamp = timestamp;
    return timestamp;
  }

  this.generateTimestamp = generateTimestamp;
}

module.exports = new TimestampGenerator();
