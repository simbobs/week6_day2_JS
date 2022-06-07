const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park ('Stegosaurus Park', 25);
  });

  it('should have a name', function(){
     const actual = park.name;
     assert.strictEqual(actual, 'Stegosaurus Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
      const actual = park.dinosaurList;
      const expected = [];
      assert.deepEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur('T-rex');
      const actual = park.dinosaurList;
      assert.deepStrictEqual(actual, ['T-rex']);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('Trex');
    park.addDinosaur('Stegosaurus');
    park.removeDinosaur('Trex');
    const expected = ['Stegosaurus'];
    const actual = park.dinosaurList;
    assert.deepStrictEqual(actual, expected);
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  //   const dinosaur2 = new Dinosaur('stegosaurus', 'carnivore', 80);
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur2);
  //   park.checkHighestVisitorCount(park.dinosaurList);
  //   const expected = ['stegosaurus'];
  //   const actual = dinosaur2.species;
  //   assert.strictEqual(actual, expected);
  // });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
