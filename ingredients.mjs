import Effect from "./effects.mjs";

class Ingredient
{
    constructor(name, effects, value, weight)
    {
        this.name = name;
        this.effects = effects;
        this.value = value;
        this.weight = weight;
    }

    static from({name, effects, value, weight}) {
        return new Ingredient(
            name,
            effects.map(effect => Effect.from(effect)),
            value,
            weight
        );
    }
}

class Ingredients
{
    constructor(ingredients)
    {
        this.ingredients = ingredients;
    }

    static load(data) {
        return new Ingredients(data.ingredients.map(Ingredient.from));
    }

}