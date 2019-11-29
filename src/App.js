import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';

//Importacion de objetos
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import EditMessage from './components/EditMessage';

function App() {

  const [ messages, saveMessages ] = useState([]);
  const [ rechargeMessages, saveRechargeMessages ] = useState(true);
  const [ totalRegistros, guardarTotalRegistros ] = useState(0);

useEffect(() => {
  if( rechargeMessages ){
    const consultarApi = async () => {

        //console.log('consultarApi');
        //console.log(resultado);

      // const keyToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiZW1haWwiOiJ0ZXN0QHVzZXIuY29tIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTU3NDg2NjAxNiwiZXhwIjoxNTc1NDcwODE2fQ.-OsCXT6wm_MpIJ985CLXaqjh7S9MQocFevQXim6tv6U";

      // const resultado3 = await axios.get('https://apitest.smbssolutions.com/public/api/v1/tasks', {
      //     headers: {
      //       Authorization:keyToken 
      //     }
      //   }
      // )
    
       //console.log("resultado3.data");
       //console.log(resultado3.data);
      // console.log("resultado");
      // console.log(resultado);


      //const resultadoM = await axios.get('https://my-json-server.typicode.com/livingstone23/message/message');
      const resultadoM = await axios.get('http://localhost:4000/message');
      let totalRegistros = resultadoM.data;
      const conteo = totalRegistros.length;

      //saveTasks(resultado.data);
      saveMessages(resultadoM.data);
      guardarTotalRegistros(conteo);
    }
    consultarApi()


    saveRechargeMessages(false);
  }

}, [  rechargeMessages ])

  return (
   <Router>
     <Header />
    
      <main className="container mt-5">
        <Switch>
            <Route exact path="/messages" 
                                  render = {() => (
                                <Messages 
                                    messages={messages}
                                    saveRechargeMessages={saveRechargeMessages}
                                  />                           
                                  )} />


            <Route exact path="/new-message"
                                        render = {() =>(
                                          <NewMessage 
                                          saveRechargeMessages={saveRechargeMessages}
                                          totalRegistros={totalRegistros}
                                          guardarTotalRegistros={guardarTotalRegistros}
                                            />
                                        )}/>


            <Route exact path="/messages/edit/:id" 
                                        render = { props => {
                                            //console.log('ID del producto: ',props.match.params.id)
                                            //tomar el id del producto
                                            const id = parseInt(props.match.params.id);

                                            //El producto que se pasa al state
                                            const message = messages.filter(message => message.id === id)
                                            return (
                                              <EditMessage
                                                message = {message[0]} 
                                                saveRechargeMessages={saveRechargeMessages}
                                              />
                                            )
                        }}/>

        </Switch>
      </main>

     <p className="mt-4 p2 text-center">All rigtht reserved</p>
   </Router>
  );
}


export default App;


