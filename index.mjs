import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";

const execute = async () => {

    try
    {
        const data = await getData();

        //CREAMOS LOS INGREDIENTES
        const ingredients = Ingredients.load(data);

    }
    catch(error)
    {
          //ERROR
          console.log(error.message);
    }
}

execute();