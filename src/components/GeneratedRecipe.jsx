

import ReactMarkdown from 'react-markdown'

export default function GeneratedRecipe(props){
    return(
        <section>
            <div aria-live="polite" style={{fontFamily:"Patrick Hand, Ink Free, cursive",marginLeft:"10px", marginTop:"50px",marginRight:"10px", maxWidth:"450px"}}>
                <h1> Chef Recommends: </h1>
          <ReactMarkdown>{props.recipe}</ReactMarkdown>  
          </div>
        </section>


    )
}