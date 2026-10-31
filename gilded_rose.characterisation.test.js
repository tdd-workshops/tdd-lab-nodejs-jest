const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')
const { Shop, Item } = require('./gilded_rose')

describe('Gilded Rose characterisation', () => {
  it('should match thirty days of texttest output', () => {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Conjured Mana Cake', 3, 6)
    ]
    const gildedRose = new Shop(items)
    const lines = ['OMGHAI!']

    for (let day = 0; day <= 30; day++) {
      lines.push(`-------- day ${day} --------`)
      lines.push('name, sellIn, quality')
      items.forEach(item => lines.push(`${item.name}, ${item.sellIn}, ${item.quality}`))
      lines.push('')
      gildedRose.updateQuality()
    }

    const expected = readFileSync(resolve(__dirname, 'texttests/ThirtyDays/stdout.gr'), 'utf8')
    expect(`${lines.join('\n')}\n`).toBe(expected)
  })
})
