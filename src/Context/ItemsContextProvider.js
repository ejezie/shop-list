import React from "react";
import withDataFetching from "../withDataFetching";

export const ItemContext = React.createContext();

const ItemContextProvider = ({children, data}) => {
    <ItemContext.Provider value={data}>
        {children}
    </ItemContext.Provider>
}

export default withDataFetching({dataSource: 
'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items'})(ItemContextProvider);