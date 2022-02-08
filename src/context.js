import { React, createContext } from 'react';
import { Link } from 'react-router-dom';

export function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 text-center border-dark mx-auto' + bg + txt;
    }
    return (
        <div className={classes()} style={{maxWidth: '40rem'}}>
            <div className="card-header" style={{backgroundColor: 'rgb(161, 19, 19)', color: 'white'}}>{props.header}</div>
            <div className="card-body" style={{backgroundColor: 'rgb(248, 202, 202)'}}>
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
                {props.link1 && <Link className="btn btn-light border-dark w-100" style={{maxWidth: '20rem', marginBottom: "5px"}} to={props.link1}>{props.name1}</Link>}
                {props.link2 && <Link className="btn btn-light border-dark w-100" style={{maxWidth: '20rem'}} to={props.link2}>{props.name2}</Link>}
            </div>
        </div>
    )
}

export const UserContext = createContext(null);