const mongoose = require('mongoose');
const Ingredient = require('../../models/ingredient');
const Pantry = require("../../models/pantry");

require("../mongodb_helper");

describe("Pantry model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.pantries.drop(() => {
      done();
    });
  });

  it("has an empty array of ingredients", () => {
    const pantry = new Pantry
    expect(pantry.ingredients.length).toEqual(0)
  })

  it('can add 1 ingredient to the pantry', async () => {
    const ingredient = new Ingredient({
      name: 'Apple'
    })
    const pantry = new Pantry
    await ingredient.save();
    pantry.ingredients.push(ingredient)
    //pantry.populate('ingredients');
    await pantry.save();
    expect(pantry.ingredients.length).toEqual(1)
    expect(pantry.ingredients).toContain(ingredient)
  })



  it('can delete 1 ingredient from the pantry', async () => {
    const ingredient = new Ingredient({
      name: 'Banana'
    })
    const pantry = new Pantry
    await ingredient.save();
    pantry.ingredients.push(ingredient)
    //pantry.populate('ingredients');
    await pantry.save();
    pantry.ingredients.remove(ingredient)
    //pantry.populate('ingredients');
    await pantry.save();
    expect(pantry.ingredients.length).toEqual(0)
    expect(pantry.ingredients).not.toContain(ingredient)
  })
});


