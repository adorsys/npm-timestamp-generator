export default class TimestampGenerator {
  private timestamp = 0

  generate = () => {
    return (this.timestamp = Math.max(this.timestamp + 1, Date.now()))
  }
}
