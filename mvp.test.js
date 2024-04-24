const { JSDOM } = require('jsdom')
const fs = require('fs')

let pathToHTML = './index.html'

const htmlString = fs.readFileSync(pathToHTML, { encoding: 'utf8' })
const { window } = new JSDOM(htmlString)

eval(window.document.querySelector('#challenge').textContent)

describe('Tests', () => {
  test('functions and classes exist in script', () => {
    expect(() => {
      profileActivation
      mineSweeper
      booleanize
      scrub
    }).not.toThrow()
  })
  describe('CHALLENGE 1 - profileActivation', () => {
    {
      let expected = 'confirm status manually'
      test(`returns "${expected}" when active profile has reason prop`, () => {
        expect(profileActivation({ active: true, reason: '' })).toBe(expected)
      })
    }
    {
      test(`given an active profile, returns a deactivated one with a reason`, () => {
        expect(profileActivation({ active: true }, 'because')).toEqual({ active: false, reason: 'because' })
      })
    }
    {
      test(`given an inactive profile, it deletes the reason and returns an active one`, () => {
        expect(profileActivation({ active: false, reason: 'because' })).toEqual({ active: true })
      })
    }
  })
  describe('CHALLENGE 2 - mineSweeper', () => {
    test('invalid coordinates', () => {
      expect(mineSweeper([['🟥', '🟦', '🟥'], ['🟦', '🟥', '🟥'], ['🟥', '🟦', '🟦']], 0, 4)).toBe("invalid coordinates")
      expect(mineSweeper([['🟥', '🟦', '🟥'], ['🟦', '🟥', '🟥'], ['🟥', '🟦', '🟦']], 0, 1)).toBe("invalid coordinates")
      expect(mineSweeper([['🟥', '🟦', '🟥'], ['🟦', '🟥', '🟥'], ['🟥', '🟦', '🟦']], 1, 4)).toBe("invalid coordinates")
      expect(mineSweeper([["🟦", "🟦", "🟥"], ["🟦", "🟦", "🟦"], ["🟦", "🟦", "🟥"]], 1, 1)).toBe("🟦 🥳")
      expect(mineSweeper([["🟦", "🟥", "🟦"], ["🟦", "🟦", "🟦"], ["🟥", "🟦", "🟥"]], 2, 1)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟦", "🟥"], ["🟥", "🟥", "🟦"], ["🟥", "🟥", "🟦"]], 3, 1)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟦", "🟦"], ["🟥", "🟦", "🟥"], ["🟦", "🟦", "🟦"]], 1, 2)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟥", "🟥"], ["🟥", "🟦", "🟥"], ["🟦", "🟥", "🟦"]], 2, 2)).toBe("🟦 🥳")
      expect(mineSweeper([["🟥", "🟦", "🟦"], ["🟦", "🟥", "🟥"], ["🟥", "🟥", "🟦"]], 3, 2)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟥", "🟥"], ["🟦", "🟦", "🟥"], ["🟥", "🟥", "🟦"]], 1, 3)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟦", "🟥"], ["🟥", "🟥", "🟥"], ["🟥", "🟦", "🟥"]], 2, 3)).toBe("🟦 🥳")
      expect(mineSweeper([["🟥", "🟥", "🟥"], ["🟦", "🟥", "🟥"], ["🟥", "🟥", "🟦"]], 3, 3)).toBe("🟦 🥳")
      expect(mineSweeper([["🟥", "🟦", "🟦"], ["🟥", "🟥", "🟦"], ["🟥", "🟥", "🟥"]], 1, 1)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟦", "🟦"], ["🟥", "🟥", "🟦"], ["🟥", "🟥", "🟥"]], 2, 2)).toBe("🟥 💀")
      expect(mineSweeper([["🟥", "🟦", "🟦"], ["🟥", "🟥", "🟦"], ["🟥", "🟥", "🟥"]], 3, 3)).toBe("🟥 💀")
    })
  })
  describe('CHALLENGE 3 - booleanize', () => {
    test('returns object with null props removed', () => {
      expect(booleanize({ bad1: null })).toEqual({})
      expect(booleanize({ bad1: null, bad2: null })).toEqual({})
    })
    {
      let expected = "shorten all prop names to 9 chars or less"
      test(`returns "${expected}" if any key length > 9`, () => {
        expect(booleanize({ '0123456789': 1 })).toBe(expected)
      })
    }
    test('returns object with ones turned to true', () => {
      expect(booleanize({ a: 1, b: 1 })).toEqual({ a: true, b: true })
    })
    test('returns object with zeroes turned to false', () => {
      expect(booleanize({ a: 0, b: 0 })).toEqual({ a: false, b: false })
    })
    test('performs no unintended changes', () => {
      expect(booleanize({ a: 1, b: 0, c: null, d: 'Lady Gaga' }))
        .toEqual({ a: true, b: false, d: 'Lady Gaga' })
    })
  })
  describe('CHALLENGE 4 - scrub', () => {
    test('replaces forbidden words with words of equal length made of "x" chars', () => {
      expect(scrub("out of the silent planet", ["of", "silent"])).toBe("out xx the xxxxxx planet")
      expect(scrub("out of the silent planet", ["of", "planet"])).toBe("out xx the silent xxxxxx")
      expect(scrub("the ghost of the navigator", ["the"])).toBe("xxx ghost of xxx navigator")
      expect(scrub("lost somewhere in time", [])).toBe("lost somewhere in time")
      expect(scrub("aces high", ["high", "aces", "hearts"])).toBe("xxxx xxxx")
      expect(scrub("", ["high", "aces"])).toBe("")
    })
  })
})
