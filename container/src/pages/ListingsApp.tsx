import React, { useEffect, useRef } from "react";
import { mount } from "listings/ListingsApp";

const ListingsApp = (): JSX.Element => {  
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, []);
    return <div ref={ref} />;
}

export default ListingsApp;