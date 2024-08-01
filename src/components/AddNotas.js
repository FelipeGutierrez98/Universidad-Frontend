import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotas = () => {
    const [nota, setNota] = useState({
        id_estudiante: '',
        id_curso: '',
        nota: '',
        fecha_evaluacion: ''
    });
    const [estudiantes, setEstudiantes] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/estudiantes')
            .then(response => response.json())
            .then(data => setEstudiantes(data))
            .catch(error => console.error('Error fetching estudiantes:', error));

        fetch('http://localhost:3000/cursos')
            .then(response => response.json())
            .then(data => setCursos(data))
            .catch(error => console.error('Error fetching cursos:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNota({ ...nota, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/notas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nota),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Nota added:', data);
                navigate('/notas', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding nota:', error);
                setError('Error adding nota');
            });
    };

    const handleCancel = () => {
        navigate('/notas');
    };

    return (
        <div>
            <h2>Agregar Nota</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Estudiante:
                    <select name="id_estudiante" value={nota.id_estudiante} onChange={handleInputChange}>
                        <option value="">Seleccione un estudiante</option>
                        {estudiantes.map(estudiante => (
                            <option key={estudiante.id_estudiante} value={estudiante.id_estudiante}>
                                {estudiante.nombre} {estudiante.apellido}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Curso:
                    <select name="id_curso" value={nota.id_curso} onChange={handleInputChange}>
                        <option value="">Seleccione un curso</option>
                        {cursos.map(curso => (
                            <option key={curso.id_curso} value={curso.id_curso}>
                                {curso.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Nota:
                    <input type="number" name="nota" value={nota.nota} onChange={handleInputChange} />
                </label>
                <label>
                    Fecha de Evaluación:
                    <input type="date" name="fecha_evaluacion" value={nota.fecha_evaluacion} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddNotas;
