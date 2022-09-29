import React from 'react'
import MainPage from '../../components/MainPage';
import { Button, Card, Badge} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import note, { } from '../../data/notes';

const MyNotes = () => {
  const deleteHandler = (id) => { 
    if (window.confirm("Are you sure?")) {
      
    }
  }



  return (
    <MainPage title="Welcome back to Sasikumar Lakshmanan">
      <Link to='createnote'>
        <Button style={{ marginleft: 10, marginbotom: 6}} size="lg">
        Create New Note
        </Button> 
      </Link>   
      {
        note.map(note => (
          
            <Card style={{margin:10}}>
        <Card.Header style={{display:"flex" }}>
          <span style={{
            color: "black",
            textDecoration: "none",
            flex: 1,
            cursor: "pointer",
            alignSelf: "center",
            fontSize:18,
                }}>
                  {note.title} </span>
          <div>
                <Button href={ `/note/${note._id}`}> Edit</Button>
            <Button variant="danger" className="mx-2" onClick={()=>deleteHandler(note._id)}>Delete</Button>
          </div>
              </Card.Header>
              
              <Card.Body>
                
              <h4>
                <Badge variant="success">Category -{note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
          <p>{note.content}</p>
          <footer className="blockquote-footer">
            Created On - date
          </footer>
                  </blockquote>
                  
              </Card.Body>
              
              
              
            </Card>

        ))
      }
    
    </MainPage>
  )
}

export default MyNotes;
