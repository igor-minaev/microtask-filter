import React from 'react'
import {FilterValuesType} from "./App";
import {Button} from "./Button";

type NewComponentPropsType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (filter: FilterValuesType) => void
}

export type MoneyType = {
    banknots: FilterValuesType
    value: number
    number: string

}

const NewComponent = (props:NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map(m => {
                    return (
                        <li key={m.number}>
                            <span>{m.banknots} </span>
                            <span>{m.value} </span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <Button name="All" callBack={() => props.onClickFilterHandler("All")}/>
                <Button name="RUBLS" callBack={() => props.onClickFilterHandler("RUBLS")}/>
                <Button name="Dollars" callBack={() => props.onClickFilterHandler("Dollars")}/>
                {/*<button onClick={() => props.onClickFilterHandler("All")}>All</button>*/}
                {/*<button onClick={() => props.onClickFilterHandler("RUBLS")}>RUBLS</button>*/}
                {/*<button onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>*/}
            </div>
        </>
    );
};

export default NewComponent;