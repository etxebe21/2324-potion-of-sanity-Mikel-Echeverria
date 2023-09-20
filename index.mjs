import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";

const execute = async () => {

    try
    {
        const responseData = await getData();
        
        const data = responseData["ingredients"];
        //showIngredients(data);

        //CREAMOS LOS INGREDIENTES
        const ingredients = Ingredients.load(data);
        //console.log(ingredients);

        //CREAMOS CALDERO DE POCIONES
        const cauldron = new Cauldron(ingredients);
        //console.log(`Calderos: `, cauldron);

        //Creamos las pociones
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("NightSade", "Ectoplasm");
        showPotion(potion4);

        function showPotion(potion) {

            console.log(`${potion.name}`);
            console.log(`Value:            ${potion.value}`);
            console.log(`Weight:           ${potion.weight}`);
            console.log(`Time:             ${potion.time}`);
            console.log(`------------------------------------`)
        }
       

    }
    catch(error)
    {
          //ERROR
          console.log(error.message);
    }
}

execute();

const showIngredients = (data) => {

    data.forEach(element => {
        const effects = element.effects;
        console.log(`${element.name} --> Efectos: ${effects}`);
        
    });

}

