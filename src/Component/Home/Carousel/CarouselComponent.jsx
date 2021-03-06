import React, { Component } from 'react';
import API from '../../../services';
import './CarouselComponent.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Row} from 'react-bootstrap';


class CarouselComponent extends Component {

    state = {
        carousel: [],
        backdrop_path: 'https://image.tmdb.org/t/p/original/',
        poster_path: 'https://image.tmdb.org/t/p/w185/',
    }

    getCarouselData = () => {
        API.getPopulerMovie().then(result => {
            this.setState({
                carousel: result.results
            })
        })
    }
    componentDidMount(){

        this.getCarouselData();
        

        
    }    
    
    render() {
        return (
                    <Carousel 
                    controls={false}
                    >
                                {
                                    this.state.carousel.slice(1,9).map(carousel => {

                                        return(
                                                 <Carousel.Item interval={1000}>
                                                    <img
                                                    className="d-block w-100"
                                                    src={this.state.backdrop_path+carousel.backdrop_path}
                                                    alt={carousel.original_title}
                                                    />
                                                    <Carousel.Caption>
                                                            <h1>{carousel.original_title}</h1>
                                                            <p>Now Playing</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                        )
                                    })
                                }
                    </Carousel>
    )
    }

}


export default CarouselComponent;