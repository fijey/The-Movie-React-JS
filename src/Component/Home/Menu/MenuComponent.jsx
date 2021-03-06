import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import SliderButton from '../../../Component/Home/Slider/SliderButton';
import SliderCard from '../Slider/SliderCard';
import ReactStars from 'react-rating-stars-component';
import API from "../../../services";
import './MenuComponent.css';

 const Menu = (props) => {

  const [movie, setMovie] = useState ([]);
  const [img, setImg] = useState('https://image.tmdb.org/t/p/w500');

  const getMovie=() => {
    API.getListMovieDiscover().then((result) => {
      setMovie(result.results);
    })
  }

  useEffect(() => {
      getMovie();
    }, []);

    
 
  return(

        <div className="menu">
        <Card style={{backgroundColor: '#eee', marginTop: '16px' , padding: '5px'}}>
            <Row>
                {
                  movie.map((item) => {
                    return(
                      <Col style={{marginTop: '16px'}} lg={3} md={4} s={6}>
                        <Card style ={{cursor: 'pointer', overFlow: 'hidden'}} className="menu-item p-2 roundedCircle">
                            <img className="menu-item-img" src={img + item.poster_path} alt=""/>
                            <div style={{color:'white',backgroundColor:'black', width:'93.6%', display:'inline-block', position:'absolute'}} classname="menu-item-title">
                              <ReactStars
                                  edit={false}
                                  count={5}
                                  value={item.vote_average/2}
                                  size={24}
                                  activeColor="#ffd700"
                                >
                                </ReactStars>
                            </div>
                            <div style={{width:'93.6%', bottom:'0', marginBottom:'5px', color:'white', backgroundColor: 'black', position:'absolute'}} classname="menu-item-title">
                              <h6>{item.original_title}</h6>
                            </div>
                        </Card>
                      </Col>
                    )
                  })
                }
                </Row>
        </Card> 
        </div>
        )  

}

export default Menu;