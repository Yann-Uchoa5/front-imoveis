import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../utils/auth";

const PrivateRoute = ({ children }) => {

    if (!isTokenValid()) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;