/* import React from 'react';

const Asignaciones = ({ data }) => {
    return (
        <div>
            <h1>Asignaciones</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profesor</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(assignment => (
                        <tr key={assignment.id_asignacion}>
                            <td>{assignment.id_asignacion}</td>
                            <td>{assignment.nombre_profesor}</td>
                            <td>{assignment.nombre_curso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Asignaciones;
 */

/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Asignaciones = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProfesor, setSelectedProfesor] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [profesores, setProfesores] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/profesores')
            .then(response => response.json())
            .then(data => setProfesores(data))
            .catch(error => console.error('Error fetching profesores:', error));

        fetch('http://localhost:3000/cursos')
            .then(response => response.json())
            .then(data => setCursos(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleProfesorChange = (e) => {
        setSelectedProfesor(e.target.value);
    };

    const handleCursoChange = (e) => {
        setSelectedCurso(e.target.value);
    };

    useEffect(() => {
        const filtered = data.filter(asignacion => {
            const matchesSearchTerm = asignacion.nombre_profesor && asignacion.nombre_profesor.toLowerCase().includes(searchTerm);
            const matchesProfesor = selectedProfesor === '' || asignacion.nombre_profesor === selectedProfesor;
            const matchesCurso = selectedCurso === '' || asignacion.nombre_curso === selectedCurso;
            return matchesSearchTerm && matchesProfesor && matchesCurso;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedProfesor, selectedCurso, data]);

    return (
        <div>
            <h1>Asignaciones</h1>
            <div id="search-container" className="search-container">
                <input
                    type="text"
                    placeholder="Buscar asignación por nombre de profesor"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleProfesorChange} className='barra-profesores'>
                    <option value="">Todos los profesores</option>
                    {profesores.map(profesor => (
                        <option key={profesor.id_profesor} value={profesor.nombre}>
                            {profesor.nombre} {profesor.apellido}
                        </option>
                    ))}
                </select>
                <select onChange={handleCursoChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {cursos.map(curso => (
                        <option key={curso.id_curso} value={curso.nombre}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={() => navigate('/agregar-asignacion')}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profesor</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(asignacion => (
                        <tr key={asignacion.id_asignacion}>
                            <td>{asignacion.id_asignacion}</td>
                            <td>{asignacion.nombre_profesor}</td>
                            <td>{asignacion.nombre_curso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Asignaciones;
 */


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Asignaciones = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProfesor, setSelectedProfesor] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [profesores, setProfesores] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/asignaciones/profesores')
            .then(response => response.json())
            .then(data => setProfesores(data))
            .catch(error => console.error('Error fetching profesores:', error));

        fetch('http://localhost:3000/asignaciones/cursos')
            .then(response => response.json())
            .then(data => setCursos(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleProfesorChange = (e) => {
        setSelectedProfesor(e.target.value);
    };

    const handleCursoChange = (e) => {
        setSelectedCurso(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-asignacion');
    };

    const handleEdit = (id) => {
        navigate(`/asignaciones/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta asignación?')) {
            fetch(`http://localhost:3000/asignaciones/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Asignacion deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting asignacion:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(asignacion => {
            const matchesSearchTerm = asignacion.nombre_profesor && asignacion.nombre_profesor.toLowerCase().includes(searchTerm);
            const matchesProfesor = selectedProfesor === '' || asignacion.nombre_profesor === selectedProfesor;
            const matchesCurso = selectedCurso === '' || asignacion.nombre_curso === selectedCurso;
            return matchesSearchTerm && matchesProfesor && matchesCurso;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedProfesor, selectedCurso, data]);

    return (
        <div>
            <h1>Asignaciones</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar asignación por nombre de profesor"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleProfesorChange} className='barra-profesores'>
                    <option value="">Todos los profesores</option>
                    {profesores.map(profesor => (
                        <option key={profesor.id_profesor} value={profesor.nombre_completo}>
                            {profesor.nombre_completo}
                        </option>
                    ))}
                </select>
                <select onChange={handleCursoChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {cursos.map(curso => (
                        <option key={curso.id_curso} value={curso.nombre}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profesor</th>
                        <th>Curso</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(asignacion => (
                        <tr key={asignacion.id_asignacion}>
                            <td>{asignacion.id_asignacion}</td>
                            <td>{asignacion.nombre_profesor}</td>
                            <td>{asignacion.nombre_curso}</td>
                            <td>
                                <button onClick={() => handleEdit(asignacion.id_asignacion)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(asignacion.id_asignacion)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Asignaciones;
