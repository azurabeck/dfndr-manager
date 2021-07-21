import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright , faUserTag , faLock } from '@fortawesome/free-solid-svg-icons'

export const project = [
    {
        menu: "enterprise",
        route: "#",
        submenu: [
            { icon: <FontAwesomeIcon icon={faCopyright}/>, name: "Copy", route: "/copy", port: 8081 },
            { icon: <FontAwesomeIcon icon={faUserTag}/>, name: "Impersonate", route: "/impersonate", port: 8082 },
            { icon: <FontAwesomeIcon icon={faLock}/>, name: "Admin", route: "/admin", port: 8082 }
        ]        
    },
    {
        menu: "security",
        route: "#",
        submenu: [
            { icon: <FontAwesomeIcon icon={faLock}/>, name: "Push Notification", route: "#", port: "external" },
            { icon: <FontAwesomeIcon icon={faLock}/>, name: "Result Page", route: "#", port: "external" },
            { icon: <FontAwesomeIcon icon={faLock}/>, name: "Admin", route: "#", port: "external" }
        ]        
    },
    {
        menu: "BI Dashboard",
        route: "#",
        submenu: null
    }
]