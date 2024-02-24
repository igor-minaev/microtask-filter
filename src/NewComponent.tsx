import React from 'react';
import {Button} from './Button';
import {FilterValuesType} from './App';

type NewComponentPropsType = {
    money: BanknotType[]
    onClickFilterHandler: (buttonName: FilterValuesType) => void
}
export type BanknotType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
                {props.money.map(m => {
                    return (
                        <li key={m.number}>
                            <span>{m.banknots} </span>
                            <span>{m.value} </span>
                            <span>{m.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '50px'}}>
                {/*<button onClick={() => onClickFilterHandler('All')}>All</button>*/}
                {/*<button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>*/}
                {/*<button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>*/}
                <Button name={'All'} callBack={() => props.onClickFilterHandler('All')}/>
                <Button name={'RUBLS'} callBack={() => props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </div>
    );
};

