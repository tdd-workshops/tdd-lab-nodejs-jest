const { Shop, Item } = require('./gilded_rose')

describe('Gilded Rose', () => {
  it('should keep the item name', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe('foo')
  })
})
