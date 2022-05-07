import './App.css';
import React from 'react'
import { useEffect, useState } from 'react';
import RadioButton from "./components/RadioButton";
import URLForm from "./components/URLForm";
import SearchButton from "./components/SearchButton";



function App() {




  const [references, setReferencesValue] = useState(false);
  const [URL, setURLValue] = useState('');


  const handleRadioButtonChange = () => {
    setReferencesValue(!references);
  }

  const onURLChangeHandler = event => {
    setURLValue(event.target.value);
  };

  useEffect(() => {
    console.log(references)
  }, [references])

  const handleSearchInitiated = () => {
    console.log("search initiated")
    console.log(references)
    console.log(URL)
  }




  return (
    <div className="container">
      <URLForm
        onChange={onURLChangeHandler}
      />
      <RadioButton
        value={references}
        onChange={handleRadioButtonChange}
      />
      <br />
      <SearchButton onClick={handleSearchInitiated}>
      </SearchButton>
    </div>
  );


  


}

export default App;
