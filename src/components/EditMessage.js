import React, { useState, useRef } from 'react';
import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';



function EditMessage(props) {

// destructuring de props
const {history, message, saveRechargeMessages} = props;


//generar los refs
const nameRef = useRef('');
const descriptionRef = useRef('');

const [ error, guardarError ] = useState(false);

console.log('MessageEdit');

const editMessage =  async e => {
    e.preventDefault();


    // validacion
    const newName = nameRef.current.value,
    newDescription = descriptionRef.current.value;


    if(newName === '' || newDescription === '' ) {
        guardarError(true);
        return;
    }
    
    guardarError(false);

    //Obtener los valores del formulario
    const editMessage = {
        id: message.id,
        name: newName,
        descripion: newDescription,
        userid:8,
        status: true
    }


    // Enviar el Request
    const url = `http://localhost:4000/message/${message.id}`;


    try {
        const resultado = await axios.put(url, editMessage);

        if(resultado.status === 200) {
            Swal.fire(
                'The message is edited',
                'The message is edited',
                'success'
            )
        }
    } catch (error) {
        //console.log(error);
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'There was an error, try again'
        })
    }

    saveRechargeMessages(true);
    history.push('/messages');







}

    return (
        
        <div className="col-md-8 mx-auto">

            <h1 className="text-center">Edit Task</h1>
             { (error)? <Error mensaje='All the fields are required' />: null } 
            <form
                className="mt-5"
                onSubmit={editMessage}
            >
                <div className="form-group">
                    <label>Task</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Name of the message "
                        ref={ nameRef }
                        defaultValue={ message.name }
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="description"
                        placeholder=" Notes "
                        ref={ descriptionRef }
                        defaultValue={ message.description }
   
                    />
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
            </form>
        </div>

    )










}

export default withRouter(EditMessage);




























