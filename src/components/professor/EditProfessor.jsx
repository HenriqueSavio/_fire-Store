import React, {useState, useEffect} from "react";
import { professores } from "./data";
import { useParams } from "react-router-dom";

const EditProfessor = () => {
        const [name, setName] = useState("");
        const [university, setUniversity] = useState("");
        const [degree, setDegree] = useState("");
    
        const handleSubmit = (event) => {
            alert(`Nome: ${name} \nCurso: ${course}\nSalario: ${wage}`);
        }
    
        const params = useParams();

        useEffect (() => {
        const professor = professores[params.id];
        setName(professor.name);
        setCourse(professor.course);
        setWage(professor.wage);
    }
    )
    
        return (
            <div>
                <h2>Criar Professor</h2>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label>Nome:</label>
                        <input className="form-control"
                        type="text" 
                        name="name"
                        value={name ?? ""}
                        onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Universidade:</label>
                        <input className="form-control"
                        type="text"
                        name="course"
                        value={course ?? ""}
                        onChange={(event) => setCourse(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Titulação:</label>
                        <input className="form-control"
                        type="text"
                        name="wage" 
                        value={wage ?? ""}
                        onChange={(event) => setWage(event.target.value)} />
                    </div>
                    <div className="form-group" style={{ paddingTop:8 }} >
                        <input type="submit" 
                        value="Editar Professor"
                        className="btn btn-success"/>
                    </div>
                </form>
            </div>
        )
}

export default EditProfessor;
