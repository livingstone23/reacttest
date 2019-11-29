import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';


function NewMessage({history, saveRechargeMessages, totalRegistros, guardarTotalRegistros}) {

//state
const [ name, saveName ] = useState('');
const [ description, saveDescription ] = useState('');
const [ error, saveError ] = useState(false);

const newMessage = async e => {
    e.preventDefault();


if( name === '' || description === '' ){
    saveError(true);
    //console.log('error true al grabar nuevo producto')
    return;
}

saveError(false);

const message = ({
    id:totalRegistros+1 ,
    name,
    description,
    userid:8,
    status: true
});

console.log('valor de newMessage');
console.log(message);

try{

    const answer = await axios.post('http://localhost:4000/message',message);
    //const answer = await axios.post('https://my-json-server.typicode.com/livingstone23/message/message',message);

     const keyToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiZW1haWwiOiJ0ZXN0QHVzZXIuY29tIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTU3NDg2NjAxNiwiZXhwIjoxNTc1NDcwODE2fQ.-OsCXT6wm_MpIJ985CLXaqjh7S9MQocFevQXim6tv6U";

    console.log('resultado3');
    const resultado3 = await axios.post('https://apitest.smbssolutions.com/public/api/v1/tasks',
    
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
      },
      message
    )

    console.log('resultado3');
    console.log(resultado3);

    //  const url = 'https://apitest.smbssolutions.com/public/api/v1/tasks';

    // var headers = {
    //      'Content-Type': 'application/json',
    //      'Authorization': keyToken ,
    //      'Access-Control-Allow-Origin': 'http://localhost:3000/'

    //  }

    //  console.log('resultado4');
    //  const resultado4 = await axios.post(url, message, {"headers" : headers})

    // console.log('resultado4');
    // console.log(resultado4);
    
    if(answer.status === 201){
        Swal.fire(
            'Task Created',
            'The task has been created',
            'success'
        )
    }
    //Actualizamos el ID
    guardarTotalRegistros(totalRegistros+1 );
    
}catch (error) {
    //console.log(error);
    Swal.fire({
        type:'error',
        title: 'Error',
        text:'There was an error, try again'
    })
}

//Recargamos el listado de tareas
saveRechargeMessages(true);
//console.log('saveRechargeMessages');

//Redirigir al usuario a las tareas
history.push('/messages');

}

return (

    <div className="col-md-8 mx-auto">

    <h1 className="text-center">Add New Message</h1>
    { (error)? <Error mensaje='all the fields are required' />: null } 
        <form
            className="mt-5"
            onSubmit={newMessage}
        >
            <div className="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="task" 
                    placeholder="Message"
                    onChange={ e => saveName(e.target.value) }
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="description"
                    placeholder="Description"
                    onChange={ e => saveDescription(e.target.value) }
                />
            </div>

            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
        
        </form>
    </div>
)
}
export default withRouter(NewMessage);