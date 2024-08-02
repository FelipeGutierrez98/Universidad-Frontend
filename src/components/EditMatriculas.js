/* import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMatriculas = () => {
    const { id } = useParams();
    const [matricula, setMatricula] = useState({
        id_estudiante: '',
        id_curso: '',
        fecha_matricula: ''
    });
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/matriculas/${id}`)
            .then(response => response.json())
            .then(data => setMatricula(data))
            .catch(error => console.error('Error fetching matricula:', error));

        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching estudiantes:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMatricula({ ...matricula, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/matriculas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matricula),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Matricula updated:', data);
                navigate('/matriculas', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating matricula:', error);
                setError('Error updating matricula');
            });
    };

    const handleCancel = () => {
        navigate('/matriculas');
    };

    return (
        <div>
            <h2>Editar Matricula</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Estudiante:
                    <select name="id_estudiante" value={matricula.id_estudiante} onChange={handleInputChange}>
                        <option value="">Seleccione un estudiante</option>
                        {students.map(student => (
                            <option key={student.id_estudiante} value={student.id_estudiante}>
                                {student.nombre_completo}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Curso:
                    <select name="id_curso" value={matricula.id_curso} onChange={handleInputChange}>
                        <option value="">Seleccione un curso</option>
                        {courses.map(course => (
                            <option key={course.id_curso} value={course.id_curso}>
                                {course.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Fecha de Matrícula:
                    <input
                        type="date"
                        name="fecha_matricula"
                        value={matricula.fecha_matricula}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default EditMatriculas; */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditMatriculas = () => {
    const { id } = useParams();
    const [matricula, setMatricula] = useState({
        id_estudiante: '',
        id_curso: '',
        fecha_matricula: ''
    });
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/matriculas/${id}`)
            .then(response => response.json())
            .then(data => setMatricula(data))
            .catch(error => console.error('Error fetching matricula:', error));

        fetch('http://localhost:3000/matriculas/estudiantes')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching estudiantes:', error));

        fetch('http://localhost:3000/matriculas/cursos')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMatricula({ ...matricula, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/matriculas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matricula),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Matricula updated:', data);
                navigate('/matriculas', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating matricula:', error);
                setError('Error updating matricula');
            });
    };

    const handleCancel = () => {
        navigate('/matriculas');
    };

    return (
        <div>
            <h2>Editar Matricula</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Estudiante:
                    <select name="id_estudiante" value={matricula.id_estudiante} onChange={handleInputChange}>
                        <option value="">Seleccione un estudiante</option>
                        {students.map(student => (
                            <option key={student.id_estudiante} value={student.id_estudiante}>
                                {student.nombre_completo}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Curso:
                    <select name="id_curso" value={matricula.id_curso} onChange={handleInputChange}>
                        <option value="">Seleccione un curso</option>
                        {courses.map(course => (
                            <option key={course.id_curso} value={course.id_curso}>
                                {course.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Fecha de Matrícula:
                    <input
                        type="date"
                        name="fecha_matricula"
                        value={matricula.fecha_matricula}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default EditMatriculas;

