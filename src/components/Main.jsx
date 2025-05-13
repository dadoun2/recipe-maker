import {useState} from "react"
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";
import GeneratedRecipe from "./GeneratedRecipe";

export default function Main(){
    
    const [alertLabel, setAlertLabel] = useState("Add your ingredients")
    const [input, setInput] = useState("");
    // The useState hook is used to manage the state of the input value
    const [ingredients, setIngredients] = useState([]);
    // The useState hook is used to manage the state of the ingredients list
    // The initial state is set to an empty array
    const [recipe,setRecipe]=useState("")
   
    function addIngredient(formData) {
        
        const ingredient=formData.get("ingredient")
        const trimmed=ingredient.toLowerCase().trim()

        if(ingredient==="") {
            setInput("")
            
            setAlertLabel("❗Please enter a valid ingredient❗")
            setTimeout(() => setAlertLabel("Add your ingredients"), 1000);
            return
        }
        if(ingredients.includes(trimmed)) {
            setInput("")
            
            setAlertLabel("❗Already added❗");
            setTimeout(() => setAlertLabel("Add your ingredients"), 1000);
            return
        }

        // The spread operator (...) is used to create a new array 
        // by copying the existing ingredients and appending the new one
         
        if(ingredients.length<10 && trimmed!=="") { 
           setInput(""); // Clear the input field
            setAlertLabel("✅ Ingredient added ✅")
            setTimeout(() => setAlertLabel("Add your ingredients"), 1000);
            // The setAlertLabel function is used to update the alert label
             setIngredients(prevIngredients=>[...prevIngredients, trimmed])
        }
        else {
            setInput("")
            setAlertLabel("❌ You can only add 10 ingredients ❌")
            setTimeout(() => setAlertLabel("Add your ingredients"), 2000);
        }
}   
   
    function handleChange(e) {
        const {value} = e.target
        setInput(value)
        // The setInput function is used to update the input value
        // The value of the input field is stored in the input state variable
    }

    async function getRecipe(){
    const recipeMarkdown= await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
    console.log(recipeMarkdown)
    console.log("API key:", import.meta.env.VITE_HF_API_KEY);
     }
        
    return (
        <main>         
            <form className="ingredients-form" action={addIngredient}>

                <label htmlFor="text">{alertLabel} </label>  

                <input id="text" className="txt" type="text" name="ingredient" pattern="^[a-zA-Z ]+$" 
                title="One Item at a time ( No space or special characters )" placeholder="e.g. Onion" 
                onChange={handleChange} value={input} /> 

                <button className="btn-add">Add ingredient</button>
            </form>
             
            <IngredientsList 
                 //recipe={recipe} 
                 getRecipe={getRecipe}
                 ingredients={ingredients} 
                 setIngredients={setIngredients} />

            {
                recipe && <GeneratedRecipe recipe={recipe}/>
            }
            
        </main>

    )
}