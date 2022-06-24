import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";

import CounterContextProvider from "./contexts/counterContext";
import TodoContextProvider from "./contexts/todoContext";

import Add from "./components/Add/Add";
import List from "./components/List/List";
import Counter from "./components/Counter/Counter";
import Edit from "./components/Edit/Edit";


const App = () => {

    return (
        <TodoContextProvider>
        <CounterContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/counter' element={<Counter />}/>
                    <Route path='/add' element={<Add/>}/>
                    <Route path='/list' element={<List />}/>
                    <Route path='/edit/:id' element={<Edit />}/>
                </Routes>
            </BrowserRouter>
        </CounterContextProvider>
        </TodoContextProvider>
    );
};

export default App;
