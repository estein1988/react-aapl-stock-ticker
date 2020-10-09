import React from 'react'

export default function SearchFinancialsForm({filterFinancials}){
    return (
        <form>
            <label>Search Financials By Date</label>
            <input type="text" onChange={filterFinancials}></input>
        </form>
    )
}