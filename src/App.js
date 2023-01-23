import React,{ useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=8e8af49af386515b091921f40ef9a531"
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=8e8af49af386515b091921f40ef9a531&query"
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery]=useState('');

  useEffect(()=>{
    
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
    
  },[])
  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{

const url=`https://api.themoviedb.org/3/search/movie?api_key=8e8af49af386515b091921f40ef9a531&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
 
  return(
    <>
     <Navbar bg="dark" expand="lg" variant="dark">
     <Container fluid>
        <Navbar.Brand href="/home">
        <img src='https://tse4.mm.bing.net/th?id=OIP.j354ERLZ5YHv64Hc1IN1UAHaER&pid=Api&P=0' className='logo'></img></Navbar.Brand>
        <Navbar.Brand href="/home"> <div>
          <p> streaming</p>
          <p> Events</p>
          <p>Location</p></div></Navbar.Brand>
          <Navbar.Brand href="/home"> <div>
          <p> Sports</p>
          <p> Activities</p>
          <p>Buzz</p></div></Navbar.Brand>
          <Navbar.Brand href="/home"> <div>
          <p>Gift cards</p>
          <p> Snacks</p>
          <p>Meals</p></div></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
              
              <button className='login' type='button' style={{background:'red'}}> Login</button> 
            </Form>
          </Navbar.Collapse>
      </Container>
     </Navbar>
    <div className="container">
      <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key ={movieReq.id} {...movieReq}/>)}

      </div>
    
    </div>
    </>
    
  );

}

export default App;