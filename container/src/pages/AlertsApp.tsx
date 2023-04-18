import React, { useEffect, useRef } from "react";
import { mount } from "alerts/AlertsApp";

const AlertsApp = (): JSX.Element => {  
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current)
    }, []);
    return <div ref={ref} />;
}

export default AlertsApp;