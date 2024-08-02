/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Matriculas = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [studentNames, setStudentNames] = useState([]);
    const [courseNames, setCourseNames] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => response.json())
            .then(data => setStudentNames(data))
            .catch(error => console.error('Error fetching student names:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-matricula');
    };

    const handleEdit = (id) => {
        navigate(`/matriculas/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta matricula?')) {
            fetch(`http://localhost:3000/matriculas/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Matricula deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting matricula:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(matricula => {
            const matchesSearchTerm = `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}`.toLowerCase().includes(searchTerm);
            const matchesStudent = selectedStudent === '' || `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}` === selectedStudent;
            const matchesCourse = selectedCourse === '' || matricula.Nombre_Curso === selectedCourse;
            return matchesSearchTerm && matchesStudent && matchesCourse;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedStudent, selectedCourse, data]);

    return (
        <div>
            <h1>Matriculas</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar matricula por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleStudentChange} className='barra-nombres'>
                    <option value="">Todos los estudiantes</option>
                    {studentNames.map(student => (
                        <option key={student.id_estudiante} value={`${student.nombre_completo}`}>
                            {student.nombre_completo}
                        </option>
                    ))}
                </select>
                <select onChange={handleCourseChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {courseNames.map(course => (
                        <option key={course.id_curso} value={course.nombre}>
                            {course.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Fecha de Matrícula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(matricula => (
                        <tr key={matricula.id_matricula}>
                            <td>{matricula.Nombre_Estudiante} {matricula.Apellido_Estudiante}</td>
                            <td>{matricula.Nombre_Curso}</td>
                            <td>{new Date(matricula.fecha_matricula).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(matricula.id_matricula)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(matricula.id_matricula)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matriculas;
 */



/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Matriculas = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [studentNames, setStudentNames] = useState([]); // Inicializado como lista vacía
    const [courseNames, setCourseNames] = useState([]); // Inicializado como lista vacía
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => response.json())
            .then(data => setStudentNames(data))
            .catch(error => console.error('Error fetching student names:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-matricula');
    };

    const handleEdit = (id) => {
        navigate(`/matriculas/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta matricula?')) {
            fetch(`http://localhost:3000/matriculas/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Matricula deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting matricula:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(matricula => {
            const matchesSearchTerm = `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}`.toLowerCase().includes(searchTerm);
            const matchesStudent = selectedStudent === '' || `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}` === selectedStudent;
            const matchesCourse = selectedCourse === '' || matricula.Nombre_Curso === selectedCourse;
            return matchesSearchTerm && matchesStudent && matchesCourse;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedStudent, selectedCourse, data]);

    return (
        <div>
            <h1>Matriculas</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar matricula por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleStudentChange} className='barra-nombres'>
                    <option value="">Todos los estudiantes</option>
                    {studentNames.map(student => (
                        <option key={student.id_estudiante} value={`${student.nombre_completo}`}>
                            {student.nombre_completo}
                        </option>
                    ))}
                </select>
                <select onChange={handleCourseChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {courseNames.map(course => (
                        <option key={course.id_curso} value={course.nombre}>
                            {course.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Fecha de Matrícula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(matricula => (
                        <tr key={matricula.id_matricula}>
                            <td>{matricula.Nombre_Estudiante} {matricula.Apellido_Estudiante}</td>
                            <td>{matricula.Nombre_Curso}</td>
                            <td>{new Date(matricula.fecha_matricula).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(matricula.id_matricula)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(matricula.id_matricula)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matriculas;
 */
/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Matriculas = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [studentNames, setStudentNames] = useState([]); // Inicializado como lista vacía
    const [courseNames, setCourseNames] = useState([]); // Inicializado como lista vacía
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStudentNames(data))
            .catch(error => console.error('Error fetching student names:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-matricula');
    };

    const handleEdit = (id) => {
        navigate(`/matriculas/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta matricula?')) {
            fetch(`http://localhost:3000/matriculas/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Matricula deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting matricula:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(matricula => {
            const matchesSearchTerm = `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}`.toLowerCase().includes(searchTerm);
            const matchesStudent = selectedStudent === '' || `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}` === selectedStudent;
            const matchesCourse = selectedCourse === '' || matricula.Nombre_Curso === selectedCourse;
            return matchesSearchTerm && matchesStudent && matchesCourse;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedStudent, selectedCourse, data]);

    return (
        <div>
            <h1>Matriculas</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar matricula por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleStudentChange} className='barra-nombres'>
                    <option value="">Todos los estudiantes</option>
                    {studentNames.map(student => (
                        <option key={student.id_estudiante} value={`${student.nombre_completo}`}>
                            {student.nombre_completo}
                        </option>
                    ))}
                </select>
                <select onChange={handleCourseChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {courseNames.map(course => (
                        <option key={course.id_curso} value={course.nombre}>
                            {course.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Fecha de Matrícula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(matricula => (
                        <tr key={matricula.id_matricula}>
                            <td>{matricula.Nombre_Estudiante} {matricula.Apellido_Estudiante}</td>
                            <td>{matricula.Nombre_Curso}</td>
                            <td>{new Date(matricula.fecha_matricula).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(matricula.id_matricula)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(matricula.id_matricula)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matriculas;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Matriculas = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [studentNames, setStudentNames] = useState([]);
    const [courseNames, setCourseNames] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => response.json())
            .then(data => setStudentNames(data))
            .catch(error => console.error('Error fetching student names:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
    };

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-matricula');
    };

    const handleEdit = (id) => {
        navigate(`/matriculas/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta matricula?')) {
            fetch(`http://localhost:3000/matriculas/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Matricula deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting matricula:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(matricula => {
            const matchesSearchTerm = `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}`.toLowerCase().includes(searchTerm);
            const matchesStudent = selectedStudent === '' || `${matricula.Nombre_Estudiante} ${matricula.Apellido_Estudiante}` === selectedStudent;
            const matchesCourse = selectedCourse === '' || matricula.Nombre_Curso === selectedCourse;
            return matchesSearchTerm && matchesStudent && matchesCourse;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedStudent, selectedCourse, data]);

    return (
        <div>
            <h1>Matriculas</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar matricula por nombre de estudiante"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleStudentChange} className='barra-nombres'>
                    <option value="">Todos los estudiantes</option>
                    {studentNames.length > 0 && studentNames.map(student => (
                        <option key={student.id_estudiante} value={student.nombre_completo}>
                            {student.nombre_completo}
                        </option>
                    ))}
                </select>
                <select onChange={handleCourseChange} className='barra-cursos'>
                    <option value="">Todos los cursos</option>
                    {courseNames.length > 0 && courseNames.map(course => (
                        <option key={course.id_curso} value={course.nombre}>
                            {course.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Fecha de Matrícula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(matricula => (
                        <tr key={matricula.id_matricula}>
                            <td>{matricula.Nombre_Estudiante} {matricula.Apellido_Estudiante}</td>
                            <td>{matricula.Nombre_Curso}</td>
                            <td>{new Date(matricula.fecha_matricula).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(matricula.id_matricula)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(matricula.id_matricula)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matriculas;
