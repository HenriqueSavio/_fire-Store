import { Routes, Route } from "react-router-dom"

import Home from '../Home';

import CreateStudent from '../students/CreateStudent';
import EditStudent from '../students/EditStudent';
import ListStudent from '../students/ListStudent';

import About from './components/About';

import CreateStudent from './components/students/CreateStudent';
import ListStudent from './components/students/ListStudent';
import EditStudent from './components/students/EditStudent';

import CreateProfessor from './components/professor/CreateProfessor';
import ListProfessor from './components/professor/ListProfessor';
import EditProfessor from './components/professor/EditProfessor';



const CRUDRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            
            <Route path='createStudent' element={<CreateStudent />} />
            <Route path='listStudent' element={<ListStudent />} />
            <Route path='editStudent/:id' element={<EditStudent />} />
            
            
            <Route path='createProfessor' element={<CreateProfessor />} />
            <Route path='editProfessor/:id' element={<EditProfessor />} />
            <Route path='listProfessor' element={<ListProfessor />} />
            
        </Routes>
    )
}

export default CRUDRoutes
