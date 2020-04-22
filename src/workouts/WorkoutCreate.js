import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props => {
    const [description, setDescrition] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
        fetch(`http:///localhost/api/log`,{
            method: 'POST',
            body: JSON.stringify({log: {description: description, definition: definition, result: result}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescrition('');
            setDefinition('');
            setResult('');
            props.fetchWorkouts();
        })
    }

    return(

    <>
       <h3>Log a workout</h3>
       <Form>
           <FormGroup>
               <Label htmlFor="description"/>
               <Input name="description" value={description} onChange={(e) => setDescrition(e.target.value)}/> 
           </FormGroup>
           <FormGroup>
               <Label htmlFor="definition"/>
               <Input type="select" name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)}>
                   <option value="Time">Time</option>
                   <option value="Weight">Weight</option>
                   <option value="Distance">Distance</option>
               </Input>
           </FormGroup>
           <FormGroup>
               <Label htmlFor="result/"/>
              <Input name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
           </FormGroup>
           <Button type="submit">Click to Submit</Button>
       </Form>
       </>
    )
})

export default WorkoutCreate;