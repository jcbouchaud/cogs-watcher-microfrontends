import React, { useEffect, useState } from "react";
import alertsApi from "../apis/AlertsApi";

interface Alert {
    id: number,
    recordId: number
}


const AlertsPage = (): JSX.Element => {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    useEffect(() => {
        alertsApi.getAll().then((res) => setAlerts(res.data))
    }, [])
    
    return (
        <div>
            <div>Alerts</div>
            {alerts && alerts.length > 0 && alerts.map((alert, index) => {
                return <div key={index}>{alert.id}</div>
            })}
        </div>
    )
}

export default AlertsPage;