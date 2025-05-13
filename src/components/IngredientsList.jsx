

export default function IngredientsList(props){

const ingredientList=props.ingredients.map((ingredient, index) => {
        return (

            <tr key={index}> 
            <td > - {ingredient.charAt(0).toUpperCase()+ingredient.slice(1)}</td> 
             <td><button className="btn-remove" onClick={() => {
                props.setIngredients(prevIngredients=>[...prevIngredients.filter((ingredient, i) => i !== index)])}
            }>Remove</button>
            </td>
            </tr>     
        )
    })

    return(
        <section>
             <div className="ingredients-list-header">
                         {props.ingredients.length>0 ? <h2>Your list of ingredients🍴</h2> :  <h2>No ingredients added yet</h2>}
                         {/*{ingredients.length>0 && <h2>Ingredients :</h2>}
                         {ingredients.length===0 && <h2>No ingredients added yet</h2>}}
                         {/*conditional rendering forthe header based on the length of the ingredients array */}
                    </div>
                   
         <table className="ingredients-list">
                <tbody>
                     {ingredientList}
                </tbody>
         </table>
          { props.ingredients.length>1 ? 
            <section>
                <div className="recipe-ready">
                    <div>
                       <h4 style={{marginBottom:"0px"}}>Ready for a recipe ?</h4>
                       <p style={{marginTop:"10px",fontSize:"15px"}}>Generate a recipe from your list of ingredients</p>
                    </div>                   
                        <button className="btn-recipe" onClick={props.getRecipe}>  Generate Recipe</button> 
                    
                </div> 

            </section>: 
            <section>
                    <div className="recipe-ready">
                    <div>
                       <h4>Add more than 1 ingredient to Generate a recipe</h4>
                       
                    </div>
                    </div>
            </section> }
            
         </section>
    )
}