import React, {useState} from 'react';
import './App.css';
import {Button} from './Button';
import {NewComponent} from './NewComponent';

export type FilterValuesType = 'All' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('All')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter(m => m.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(m => m.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (buttonName: FilterValuesType) => {
        setFilter(buttonName)
    }
    return (
        <div className="App">
            <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>
    )
        ;
}

export default App;
