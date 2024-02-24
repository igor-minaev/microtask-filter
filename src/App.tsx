import React, {useState} from 'react';
import './App.css';

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
    const mappedMoney = money.map(m => {
        return (
            <li key={m.number}>
                <span>{m.banknots}</span>
                <span>{m.value}</span>
                <span>{m.number}</span>
            </li>
        )
    })
    return (
        <div className="App">
            <ul>

            </ul>
        </div>
    );
}

export default App;
