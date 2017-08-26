import TimestampGenerator from "../src/timestamp-generator"
const originalNow = Date.now

afterEach(() => {
  Date.now = originalNow
})

describe("TimestampGenerator", () => {
  test("is a function", () => {
    expect(typeof TimestampGenerator === "function").toBeTruthy()
  })

  test("is expecting no parameters", () => {
    expect(TimestampGenerator.length).toBe(0)
  })

  test("is instantiable", () => {
    expect(new TimestampGenerator()).toBeInstanceOf(TimestampGenerator)
  })

  describe("a TimestampGenerator instance", () => {
    const tg = new TimestampGenerator()

    test("is an object", () => {
      expect(typeof tg === "object").toBeTruthy()
    })

    test("has a property generate", () => {
      expect(tg.generate).toBeDefined()
    })

    describe("generate", () => {
      const { generate } = tg

      test("is a function", () => {
        expect(typeof generate === "function").toBeTruthy()
      })

      test("is expecting no parameters", () => {
        expect(generate.length).toBe(0)
      })

      test("is using Date.now", () => {
        // arrange
        let mockNow = jest.fn()
        const testValue = originalNow()
        mockNow.mockReturnValue(testValue)
        Date.now = mockNow

        // act
        const timestamp = generate()

        // assert
        expect(mockNow).toHaveBeenCalledTimes(1)
        expect(timestamp).toBe(testValue)
      })

      test("is returnning increasing timestamps", () => {
        // arrange
        const sampleSize = 100
        const testValue = originalNow()
        let mockNow = jest.fn()
        mockNow.mockReturnValue(testValue)
        Date.now = mockNow

        // act
        const timestamps = Array(sampleSize).fill(0).map(() => generate())

        // assert
        expect(mockNow).toHaveBeenCalledTimes(sampleSize)
        expect(
          timestamps.every((v, i, a) => i === 0 || v > a[i - 1])
        ).toBeTruthy()
      })
    })
  })
})
