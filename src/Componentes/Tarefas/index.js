import React,{Component} from 'react';
import './style.css';

export default class Tarefas extends Component{

  constructor(){
    super();
    this.state = {
        tarefa:'',
        tarefas : ['Atividade de ESII','Prova de IA','Atividade de framework JS - TDI']
      };
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this)
    this.removeAllNotes = this.removeAllNotes.bind(this)
  }

  render (){
    return(
        <div> 
          <div className="flex">
            <input onChange={this.handleChange} placeholder="Digite uma tarefa a ser feita"
                   value={this.state.tarefa} type="text"/>
            <button className="btn btn-add" onClick={this.addNote}>Adicionar</button>
            <button className="btn btn-remove" onClick={this.removeAllNotes}>Limpar</button>
          </div>
          <ul className="lista">
            {
              this.state.tarefas.map( (item, key) => 
                <li key={key}>
                  <input  type="checkbox"/>
                  {item}
                </li> )
            }
          </ul>
        </div>
    )
  }

  handleChange(event){
    this.setState(
      { tarefa: event.target.value})
  }

  addNote(){
    if(this.state.tarefa=="")
      return 0;
    this.setState({
      tarefa:"",
      tarefas : [].concat(this.state.tarefas,this.state.tarefa)
    })   
  }

  removeAllNotes(){
    this.setState({
      tarefa:"",
      tarefas : []
    })   
  }


}
