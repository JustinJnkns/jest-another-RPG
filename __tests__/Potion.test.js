test('creates a health potion object', () => {
    // new keyword creates a new object
    const potion = new Potion('health')

    expect(potion.name).toBe('health')
    expect(potion.value).toEqual(expect.any(Number))
})
test('ceates a random potion object', () => {
    const potion = new Potion()
    expect(potion.name).toEqual(expect.any(String))
    expect(potion.name.length).toBeGreaterThan(0)
    expect(potion.value).toEqual(expect.any(Number))
})

const Potion = require('../lib/Potion')