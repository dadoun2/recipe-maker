

import ReactMarkdown from 'react-markdown'

export default function GeneratedRecipe(props){
    return(
        <section>
            <div aria-live="polite" style={{fontFamily:"Ink Free", marginTop:"50px", maxWidth:"450px"}}>
                <h1> Chef Suggests: </h1>
          <ReactMarkdown>{props.recipe}</ReactMarkdown>  
          </div>
        </section>


    )
}