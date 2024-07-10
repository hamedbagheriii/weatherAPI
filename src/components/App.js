import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import { Provider } from 'react-redux';
import store from '../redux/store';


const App = ()=>{



    
    return (
        <Provider store={store}>
            <div>
                <Weather/>
            </div>
        </Provider>
    ) 
}


export default App;