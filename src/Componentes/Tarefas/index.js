import React,{Component,Fragment} from 'react';
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
        <Fragment>
          <h3>
            Lista de tarefas
          </h3>
 
          <div class="flex center-x center-y">
            <input onChange={this.handleChange} placeholder="Digite uma tarefa a ser feita"
                   value={this.state.tarefa} type="text"/>
            <button class="btn btn-add" onClick={this.addNote}>Adicionar</button>
            <button class="btn btn-remove" onClick={this.removeAllNotes}>Limpar</button>
          </div>
 
          <div  class="flex center-x center-y">
            <ul className="lista">
              {
                this.state.tarefas.map(tarefa => 
                <li>
                  {tarefa}
                  </li> )
              }
            </ul>
           
          </div>

        </Fragment>
    )
  }

  handleChange(event){
    this.setState({tarefa:event.target.value})
  }

  addNote(){
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
