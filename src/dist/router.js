"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Auth_1 = require("./screens/Auth");
var dashboard_1 = require("./screens/dashboard");
var AppRouter = function () {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: dashboard_1["default"] }),
        React.createElement(react_router_dom_1.Route, { path: '/auth', component: Auth_1["default"] }),
        React.createElement(react_router_dom_1.Route, { path: '*', exact: true, render: function () { return (React.createElement("div", null,
                React.createElement("h1", null, "Page not found"))); } })));
};
exports["default"] = AppRouter;
