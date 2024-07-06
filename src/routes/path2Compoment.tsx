import * as React from "react";
import Dashboard from "../pages/Dashboard";
import Login from '../pages/admin/common/Login';
import HttpLog from "@/pages/admin/rule/HttpLog";
import HttpRule from "@/pages/admin/rule/HttpRule";
import DnsRule from "@/pages/admin/rule/DnsRule";

const path2components = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dnslog',
        component: Dashboard
    },
    {
        path: '/httplog',
        component: HttpLog,
    },
    {
        path: '/httprule',
        component: HttpRule,
    },
    {
        path: '/dnsrule',
        component: DnsRule,
    }
]

export default path2components;
