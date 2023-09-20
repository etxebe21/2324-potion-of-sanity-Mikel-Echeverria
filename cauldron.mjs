import Potion from "./potion.mjs";

export default class Cauldron
{
    constructor(ingredients)
    {
        this.ingredients = ingredients;
        
    }


}

export function isPotionOfSanity(i1, i2) {

    return i1.name === "Nightshade" && i2.name === "Ectoplasm" || 
            i2.name === "Nightshade" && i1.name === "Ectoplasm" ? true : false;
}