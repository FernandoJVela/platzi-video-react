import {useState, useEffect} from 'react';


const useInitialState = (API) => {

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() =>{
        //const API = 'http://localhost:3000/initialState';
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return videos;
}

export default useInitialState;