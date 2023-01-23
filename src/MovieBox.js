import React,{useState} from 'react';
import {Button, Modal,show} from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox=({title, poster_path,vote_average, release_date, overview })=>{

    const [show, setShow] = useState(false);


    const handleShow =()=> setShow(true);
    const handleClose=()=> setShow(false);

    return(
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body'>
                <img className='card-img-top' style={{width:'14rem'}} src={API_IMG+poster_path}/>
                <div className='card-body'>
                    <button type ="button" className='btn btn-dark' onClick={handleShow}>Book Now</button>
                   
                    <Modal show = {show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>

                            </Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                        <img className='card-img-top' src={API_IMG+poster_path}/>
                        <h3>{title}</h3>
                        <h4>ImDb: {vote_average}</h4>
                        <h5>Release Date: {release_date}</h5>
                        <h5> Language : English, Hindi,Telugu, Tamil</h5>
                        <h5> Seats available</h5>
                        <div>
                            <button type='button' style={{color:'green'}}>A1,B2,C2/ 01:45pm</button>
                            <button type='button' style={{color:'green'}}>E1,E2,E3,E4/ 06:45pm</button>
                        </div>
                        
                        <br></br>
                        <h6>overview:</h6>
                        <p>{overview}</p>
                        <button  type='button' style={{color:'red'}}> Start Booking Now </button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant ="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>

                    </Modal>
                </div>
            </div>
            {/* <h1> {title}</h1>
            <img src ={API_IMG+poster_path}></img>
            <p>{overview}</p> */}
        </div>
    )
}

export default MovieBox;