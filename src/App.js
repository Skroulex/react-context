import React from 'react';
import Counter from "./components/Counter/Counter";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import CounterContextProvider from "./contexts/counterContext";
import TodoContextProvider from "./contexts/todoContext";
import Add from "./components/Add/Add";
import List from "./components/List/List";

const App = () => {
    return (
        <TodoContextProvider>
        <CounterContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/counter' element={<Counter />}/>
                    <Route path='/add' element={<Add/>}/>
                    <Route path='/list' element={<List />}/>
                </Routes>
            </BrowserRouter>
        </CounterContextProvider>
        </TodoContextProvider>
    );
};

export default App;
