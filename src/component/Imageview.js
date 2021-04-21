import React, { Component } from "react";


const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  
  const Results = () => (
    <div id="results" className="search-results">
      <center>
      <form>
        <label>
          Clickable
          <br></br>
          <input type="checkbox"  />
          
        </label>
        <br></br>
        <label>
        Width 
        <br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>
        Height 
        <br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>
          Picture :
          <input type="file" accept="image/*" />
        </label>
        <br></br>
        <label>
          RotationAngle
          <br></br>
          <input type="text" />
        </label>
        <br></br>
        <label>
          ScalePictureToFit
          <br></br>
          <input type="checkbox"  />
        </label>
        <br></br>
        <label>
          Visible
          <br></br>
          <input type="checkbox"  />
        </label>
      </form>  
      </center>
    </div>
  )
  
export default Search ;
  