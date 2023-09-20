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
        console.log(cauldron);
       

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

