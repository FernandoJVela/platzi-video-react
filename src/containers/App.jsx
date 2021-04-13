import React, {useState, useEffect} from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Footer from '../components/Footer.jsx'
import useInitialState from '../hooks/useInitialState.js'

const API = 'http://localhost:3000/initialState/';

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1> Loading... </h1> : (
    <div className="App">
        <Header />
        <Search />

        {initialState.mylist.length > 0 &&
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
        }

        <Categories title="Tendencias">
            <Carousel>
                {initialState.trends.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>

        <Categories title="Favoritos de Platzi video">
            <Carousel>
                {initialState.originals.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>

        <Footer />
    </div>
    );
}

export default App;