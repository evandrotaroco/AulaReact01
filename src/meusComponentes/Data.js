import { Component } from "react";

export default class Data extends Component{
    
    constructor(props){
        super(); //executa o construtor do pai
        this.props = props;
        this.state = {
                        dataAtual : new Date().toLocaleString()
                     }
    }

    

    //fase de montagem
    componentDidMount(){
        this.dataAtual = new Date().toLocaleString();
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({
                dataAtual: new Date().toLocaleString()
        });
        },1000);
    }

    //sobrescrita de método
    render(){
        return(
            <h1>{this.props.texto || ""}{this.state.dataAtual}</h1>
        )
    }
}