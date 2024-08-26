import {Component} from "react";

export default class Contador extends Component{
    
    constructor(props){
        super();
        this.state = { valor: 0};

    }

    incrementar(){
        this.setState({
            valor: this.state.valor + 1
        });
    }    

    decrementar(){
        this.setState({
            valor: this.state.valor - 1
        });        
    }

    //SÓ RETORNA 1 ELEMENTO DE CADA VEZ
    render(){
        return(
            <div>
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={
                        () => {
                            this.incrementar();}
                    }>+</button>
                    <button onClick={
                        () => {this.decrementar();}
                    }>-</button>
                </div>
            </div>
        );
    }
}