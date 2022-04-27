//This is actually a custom hook.


import React, { useState, useEffect } from 'react'; 
import API_KEY from './keys';


//we need this, because it tells google which search engine to use so the one that we just created which searches the entire web.

const CONTEXT_KEY = "3db718a6f7bab68c4";

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    //responsible for getting search data
    useEffect(() => {

        const fetchData = async () => {

            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => setData(result))
                .catch(error => console.log(error))


        }

        fetchData();



    }, [term]);


    return { data }



};

export default useGoogleSearch;

