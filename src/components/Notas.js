/* import React from 'react';

const Notas = ({ data }) => {
    return (
        <div>
            <h1>Notas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Fecha de Evaluación</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(grade => (
                        <tr key={grade.id_nota}>
                            <td>{grade.id_nota}</td>
                            <td>{grade.nombre_estudiante} {grade.apellido_estudiante}</td>
                            <td>{grade.curso}</td>
                            <td>{grade.nota}</td>
                            <td>{new Date(grade.fecha_evaluacion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notas; */

/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notas = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [cursos, setCursos] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    // Fetch cursos for the select dropdown
    useEffect(() => {
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

    const handleCursoChange = (e) => {
        setSelectedCurso(e.target.value);
    };

    useEffect(() => {
        const filtered = data.filter(grade => {
            const matchesSearchTerm = grade.nombre_estudiante && grade.nombre_estudiante.toLowerCase().includes(searchTerm);
            const matchesCurso = selectedCurso === '' || grade.curso === selectedCurso;
            return matchesSearchTerm && matchesCurso;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedCurso, data]);

    return (
        <div>
            <h1>Notas</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar nota por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleCursoChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {cursos.map(curso => (
                        <option key={curso.nombre} value={curso.nombre}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Fecha de Evaluación</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(grade => (
                        <tr key={grade.id_nota}>
                            <td>{grade.id_nota}</td>
                            <td>{grade.nombre_estudiante} {grade.apellido_estudiante}</td>
                            <td>{grade.curso}</td>
                            <td>{grade.nota}</td>
                            <td>{new Date(grade.fecha_evaluacion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notas; */

/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notas = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [cursos, setCursos] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [showAprobados, setShowAprobados] = useState(false);
    const [showDesaprobados, setShowDesaprobados] = useState(false);
    const navigate = useNavigate();

    // Fetch cursos for the select dropdown
    useEffect(() => {
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

    const handleCursoChange = (e) => {
        setSelectedCurso(e.target.value);
    };

    const handleAprobadosChange = (e) => {
        setShowAprobados(e.target.checked);
    };

    const handleDesaprobadosChange = (e) => {
        setShowDesaprobados(e.target.checked);
    };

    useEffect(() => {
        const filtered = data.filter(grade => {
            const matchesSearchTerm = grade.nombre_estudiante && grade.nombre_estudiante.toLowerCase().includes(searchTerm);
            const matchesCurso = selectedCurso === '' || grade.curso === selectedCurso;
            const matchesAprobados = showAprobados ? grade.nota >= 7 : true;
            const matchesDesaprobados = showDesaprobados ? grade.nota < 7 : true;

            // Ensure that either showAprobados or showDesaprobados is true before considering them in the filter
            if (showAprobados && showDesaprobados) {
                return matchesSearchTerm && matchesCurso;
            } else if (showAprobados) {
                return matchesSearchTerm && matchesCurso && matchesAprobados;
            } else if (showDesaprobados) {
                return matchesSearchTerm && matchesCurso && matchesDesaprobados;
            } else {
                return matchesSearchTerm && matchesCurso;
            }
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedCurso, showAprobados, showDesaprobados, data]);

    return (
        <div>
            <h1>Notas</h1>
            <div id="search-container" className="search-container">
                <input
                    type="text"
                    placeholder="Buscar nota por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleCursoChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {cursos.map(curso => (
                        <option key={curso.nombre} value={curso.nombre}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
                <div className="checkbox-container">
                    <label>
                        <input
                            type="checkbox"
                            checked={showAprobados}
                            onChange={handleAprobadosChange}
                        />
                        Aprobados
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={showDesaprobados}
                            onChange={handleDesaprobadosChange}
                        />
                        Desaprobados
                    </label>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Fecha de Evaluación</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(grade => (
                        <tr key={grade.id_nota}>
                            <td>{grade.id_nota}</td>
                            <td>{grade.nombre_estudiante} {grade.apellido_estudiante}</td>
                            <td>{grade.curso}</td>
                            <td>{grade.nota}</td>
                            <td>{new Date(grade.fecha_evaluacion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notas;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notas = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [cursos, setCursos] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [showAprobados, setShowAprobados] = useState(false);
    const [showDesaprobados, setShowDesaprobados] = useState(false);
    const navigate = useNavigate();

    // Fetch cursos for the select dropdown
    useEffect(() => {
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

    const handleCursoChange = (e) => {
        setSelectedCurso(e.target.value);
    };

    const handleAprobadosChange = (e) => {
        setShowAprobados(e.target.checked);
    };

    const handleDesaprobadosChange = (e) => {
        setShowDesaprobados(e.target.checked);
    };

    useEffect(() => {
        const filtered = data.filter(grade => {
            const matchesSearchTerm = grade.nombre_estudiante && grade.nombre_estudiante.toLowerCase().includes(searchTerm);
            const matchesCurso = selectedCurso === '' || grade.curso === selectedCurso;
            const matchesAprobados = showAprobados ? grade.nota >= 7 : true;
            const matchesDesaprobados = showDesaprobados ? grade.nota < 7 : true;

            if (showAprobados && showDesaprobados) {
                return matchesSearchTerm && matchesCurso;
            } else if (showAprobados) {
                return matchesSearchTerm && matchesCurso && matchesAprobados;
            } else if (showDesaprobados) {
                return matchesSearchTerm && matchesCurso && matchesDesaprobados;
            } else {
                return matchesSearchTerm && matchesCurso;
            }
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedCurso, showAprobados, showDesaprobados, data]);

    return (
        <div>
            <h1>Notas</h1>
            <div id="search-container" className="search-container">
                <input
                    type="text"
                    placeholder="Buscar nota por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleCursoChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {cursos.map(curso => (
                        <option key={curso.nombre} value={curso.nombre}>
                            {curso.nombre}
                        </option>
                    ))}
                </select>
                <div className="checkbox-container">
                    <label>
                        <input
                            type="checkbox"
                            checked={showAprobados}
                            onChange={handleAprobadosChange}
                        />
                        Aprobados
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={showDesaprobados}
                            onChange={handleDesaprobadosChange}
                        />
                        Desaprobados
                    </label>
                </div>
                <button onClick={() => navigate('/agregar-nota')}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Nota</th>
                        <th>Fecha de Evaluación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(grade => (
                        <tr key={grade.id_nota}>
                            <td>{grade.id_nota}</td>
                            <td>{grade.nombre_estudiante} {grade.apellido_estudiante}</td>
                            <td>{grade.curso}</td>
                            <td>{grade.nota}</td>
                            <td>{new Date(grade.fecha_evaluacion).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => navigate(`/notas/${grade.id_nota}`)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => {
                                    if (window.confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
                                        fetch(`http://localhost:3000/notas/${grade.id_nota}`, {
                                            method: 'DELETE',
                                        })
                                            .then(response => {
                                                if (!response.ok) {
                                                    throw new Error('Network response was not ok');
                                                }
                                                return response.json();
                                            })
                                            .then(data => {
                                                console.log('Nota deleted:', data);
                                                fetchData();
                                            })
                                            .catch(error => console.error('Error deleting nota:', error));
                                    }
                                }}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notas;




