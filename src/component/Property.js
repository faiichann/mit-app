import React,{useState} from 'react'
import Label from './Label'

const Property = () => {
    const [showResults, setShowResults] = useState(false)
    const Show = () =>  setShowResults(true)
    const Hide = () =>  setShowResults(false)
            return(
                <div>
                    {showResults ? (<input type="submit" value="LabeL" onClick={Hide} />) 
                    :(<input type="submit" value="LabeL" onClick={Show} />) }
               
                { showResults && <Label/>}
            </div>  
            )
    
}
export default Property