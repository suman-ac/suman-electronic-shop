//import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
//import { configureStore } from '@reduxjs/toolkit'
//import { configureStore } from '@reduxjs/toolkit'
//import { configureStore } from "@reduxjs/toolkit";
//import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import rootred from "./redux/reducers/main";

const store = configureStore( {
    reducer:rootred,
});

export default store;