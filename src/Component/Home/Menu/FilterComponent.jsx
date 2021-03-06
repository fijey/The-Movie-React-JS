import React, {useState, useEffect} from "react";
import SliderButton from '../../../Component/Home/Slider/SliderButton';
import API from "../../../services";
import './FilterComponent.css';

import Select from 'react-select';
import {Card} from 'react-bootstrap';


const Filter = (props) => {
    
    const [genre, setGenre] = useState ([]);
    
    const getListGenre = () => {
        API.getListGenre().then(result => {
            setGenre(result.genres);
        })
    }
    
    useEffect(() => {
        getListGenre();
    });

    const options = genre.map((item) => {
        return { value: item.id, label: item.name }
    })
    
 
  return(

    <div className="filter">
                <Select className="filter-select" options={options}/>
    </div>
        
    )  

}

export default Filter;