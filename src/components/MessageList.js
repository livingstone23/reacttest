import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';

function MessageList({ message, saveRechargeMessages }) {

    return (
        <Fragment>
        <div className="container"> 
            <div className="card text-white bg-info mb-3" >
                <div className="card-header">
                    {message.name}
                </div>

                <div className="card-body bg-light">
                    <h5 className="card-title">{message.description}</h5>
                    <p className="card-text"></p>
                </div>

                <div>
                    <Link
                        to={`/messages/edit/${message.id}`}
                        className="btn btn-success mr-2 ml-auto"
                    >Editar</Link>
                </div>
            </div>    
          </div>
        </Fragment>
        )

}

export default MessageList;