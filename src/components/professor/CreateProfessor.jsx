import React, {useState} from "react";

const CreateProfessor = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [wage, setWage] = useState("");

    const handleSubmit = (event) => {
        alert(`Nome: ${name} \nCurso: ${course}\nSalario: ${wage}`);
    }


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
                    <label>Curso:</label>
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
                    value="Criar Professor"
                    className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateProfessor;
