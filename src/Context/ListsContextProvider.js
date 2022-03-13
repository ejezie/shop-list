import React, { useEffect, useState } from "react";
import withDataFetching from "../withDataFetching";

async function fecthData(dataSource){
    try{
        const data = await fetch(dataSource);
        const dataJSON = data.json();

        if(dataJSON){
            return await ({data: dataJSON, error: false,})
        }
    }catch(error){
        return({data: false, error: error.message})
    }
} 

export const ListsContext = React.createContext();

const ListsContextProvider = ({children}) => {

    const [lists, setLists] = useState([]);

    useEffect(()=>{

        const asyncFetchData = async dataSource => {
            const result = fecthData(dataSource);
            // setLists([data])
            console.log(await result);
        }

        asyncFetchData('https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists');

    },[setLists])

    return(
    <ListsContext.Provider value={{lists}}>
        {children}
    </ListsContext.Provider>
    )
}

export default ListsContextProvider;