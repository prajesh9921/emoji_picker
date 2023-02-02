import axios from "axios";
import React, {useState, useEffect, useCallback} from 'react';

export default () => {

    const [result, setResult] = useState([]);

    const AllEmoji = async () => {
            try{
                const response = await axios.get('https://emoji-api.com/emojis?access_key=25b86a68278a7c08e0dc78cfbab7c0614d1cdbaa');
                // setResult(response.data)
                setResult(response.data);
            } catch (e){
                console.log(e);
            }
        };
    

    const SearchEmoji = async (searchTerm) => {
        try {

            const response = await axios.get(`https://emoji-api.com/emojis?search=${searchTerm}&access_key=25b86a68278a7c08e0dc78cfbab7c0614d1cdbaa`);
            console.log(response.data)
            setResult(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => { 
        AllEmoji();
    },[]);

    return [result, SearchEmoji];

};