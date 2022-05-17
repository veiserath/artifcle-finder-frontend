import './App.css';
import React from 'react'
import { useEffect, useState } from 'react';
import RadioButton from "./components/RadioButton";
import URLForm from "./components/URLForm";
import SearchButton from "./components/SearchButton";
import OrgChartTree from './components/OrgChart';
import { Route, Routes, BrowserRouter } from "react-router-dom";



function App() {

    const Home = () => {
        const [references, setReferencesValue] = useState(false);
        const [URL, setURLValue] = useState('');


        const handleRadioButtonChange = () => {
            setReferencesValue(!references);
        }

        const onURLChangeHandler = event => {
            setURLValue(event.target.value);
        };

        const handleSearchInitiated = async () => {
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
    };



    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} > </Route>
                <Route path='/tree' element={<OrgChartTree />} />
            </Routes>
        </BrowserRouter>



    );

}

export default App;
