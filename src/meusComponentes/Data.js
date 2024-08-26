import { Component } from "react";

export default class Data extends Component{
    
    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.dataAtual = new Date().toLocaleString();
    }

    //fase de montagem
    componentDidMount(){
        this.dataAtual = new Date().toLocaleString();
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado.");
    }

    //sobrescrita de método
    render(){
        return(
            <h1>{this.props.texto || ""}{this.dataAtual}</h1>
        )
    }
}