import React, {Component, useEffect, useState, Fragment} from 'react';
import CarouselComponent from '../../Component/Home/Carousel/CarouselComponent';
import Menu from '../../Component/Home/Menu/MenuComponent';
import { Container} from 'react-bootstrap';
import Navi from '../../Component/Stateless/Nav/Navi';
import Filter from '../../Component/Home/Menu/FilterComponent';

const Home = () => {

    
    
        return(
            <div style={{paddingBottom: '1000px'}}>
                <Navi />
                <CarouselComponent/>
                <Container>
                    <h1>Filter Movie</h1>
                    <Filter/>
                    <Menu/>
                </Container>
            </div>
        )

}


export default Home;