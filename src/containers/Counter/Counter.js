import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //         this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //         break; 
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add " clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract " clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button  onClick={this.props.onStoreResult}>Store Results</button>
               <ul><li onClick={this.props.onDeleteResult}></li></ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
     ctr:state.counter
    };
};
const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter:()=>dispatch({type:'Increment'}),
        onDecrementCounter:()=>dispatch({type:'Decrement'}),
        onAddCounter:()=>dispatch({type:'Add',val:10}),
        onSubtractCounter:()=>dispatch({type:'Subtract',val:15}),
        onStoreResult:() =>  dispatch({type:'Store_Result'}),
        onDeleteResult:() =>  dispatch({type:'Delete_Result'}),  
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);