// const assert = require('assert');
const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      // var result = utils.add(33, 11);
      // if (result !== 44) {
      //   throw new Error(`Expected 44, but got ${result}`);
      // }
      // assert.equal(44, utils.add(33, 11));
      expect(utils.add(33, 11)).toBe(44).toBeA('number');
    });
  });

  // Use done to test aysnc calls
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBeA('number').toBe(7);
      done();
    });
  });

  it('should square a number', () => {
    // var actual = utils.square(10);
    // if (actual !== 100) {
    //   throw new Error(`Expected 100, but got ${actual}`);
    // }
    // assert.equal(100, utils.square(10));
    expect(utils.square(10)).toBeA('number').toBe(100);
  });

  it('should async sqaure a number', (done) => {
    utils.asyncSquare(9, (x2) => {
      expect(x2).toBeA('number').toBe(81);
    });
    done();
  });

  it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'Menghua'}).toNotBe({name: 'Menghua'});
    // expect({name: 'Menghua'}).toBe({name: 'Menghua'});
    expect({name: 'Menghua'}).toEqual({name: 'Menghua'});
    expect({name: 'menghua'}).toNotEqual({name: 'Menghua'});
    expect([2, 3, 4]).toInclude(4);
    expect([2, 3, 4]).toExclude(5);
    expect({name: 'Menghua', age: 38, location: 'Toronto'}).toInclude({age: 38});
    expect({name: 'Menghua', age: 38, location: 'Toronto'}).toExclude({name: 'menghua'});
  });
});


it('should verify the first name and last name are set', () => {
  var user = utils.setName({}, 'Menghua Li');
  expect(user).toInclude({firstName: 'Menghua', lastName: 'Li'});
});
