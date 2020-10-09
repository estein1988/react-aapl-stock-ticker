//////////////////////////////////////////////////////////////////////////////////////////////////////////

//funcational component

// import React from 'react'

// export default function FinancialCard(props) {
//     return (
//         <div className='FinancialCard'>
//             <p>{props.financial.symbol}</p>
//             <p>{props.financial.date}</p>
//             <a href={props.financial.link}>Go to SEC</a>
//         </div>
//     )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//turned into class component
//need this.props down here because it's a class

// import React, {Component} from 'react'

// class Card extends Component {
//     render() {

//     return (
//         <div className='FinancialCard'>
//             <p>{this.props.financial.symbol}</p>
//             <p>{this.props.financial.date}</p>
//             <a href={this.props.financial.link}>Go to SEC</a>        
//         </div>
//     )}
// }

// export default Card

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//add state and the ability to toggle with isCLicked

//make sure state is ABOVE the render function
//this.state.isClicked is part usually forget I think

// import React, {Component} from 'react'

// class FinancialCard extends Component {
    
//     state = {
//         isClicked: false
//     }

//     render() {

//     return (
//         <div className='FinancialCard'>
//             <div onClick={() => this.setState({isClicked: true})}>
//                 <h3>Ticker: {this.props.financial.symbol}</h3>
//                 <p>Date: {this.props.financial.date}</p>
//             </div>

//             { this.state.isClicked
//                 ? <div><a href={this.props.financial.link}>Go to SEC</a></div> 
//                 : null
//             }

//         </div>
//     )}
// }

// export default FinancialCard
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//toggle card: 

import React, {Component} from 'react'

class FinancialCard extends Component {
    
    state = {
        isClicked: false
    }

    render() {

    return (
        
        <div className='FinancialCard'>
            <div onClick={() => this.setState({isClicked: !this.state.isClicked})}>

                <h3>Ticker: {this.props.financial.symbol}</h3>
                <p>Date: {this.props.financial.date}</p>
                <p>Period: {this.props.financial.period}</p>

            </div>

            { this.state.isClicked

                ? <div>
                    <p>Revenue: ${this.props.financial.revenue}</p>
                    <p>Cost of Revenue: ${this.props.financial.costOfRevenue}</p>
                    <p>Gross Profit: ${this.props.financial.grossProfit}</p>
                    <p>Operating Expenses: ${this.props.financial.operatingExpenses}</p>
                    <p>EBITA: {this.props.financial.ebitda}</p>
                    <p>EBITA Ratio: {this.props.financial.ebitdaratio}</p>
                    <p>Net Income: {this.props.financial.netIncome}</p>
                    <p>EPS: {this.props.financial.eps}</p>                
                    <a href={this.props.financial.finalLink}>View on SEC</a>
                    
                </div> 
                : null
            }

        </div>
    )}
}

export default FinancialCard