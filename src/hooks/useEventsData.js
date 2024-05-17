import eventsJson from '../data/Events.json'
import { useState, useEffect } from 'react';

const useEventsData = () =>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            try{
                setData(eventsJson);
                setLoading(true);  
            }
            catch(e){
                console.log(e);
            }          
        },1000);
    },[]);

    return{        
        events: data?._embedded?.events || [],
        loading,
    }
};

export default useEventsData;