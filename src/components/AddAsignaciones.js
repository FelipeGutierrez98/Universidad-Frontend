import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAsignaciones = () => {
    const [asignacion, setAsignacion] = useState({
        id_profesor: '',
        id_curso: ''
    });
    const [profesores, setProfesores] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [error, setError] = useState('');
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAsignacion({ ...asignacion, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/asignaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(asignacion),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Asignacion added:', data);
                navigate('/asignaciones', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding asignacion:', error);
                setError('Error adding asignacion');
            });
    };

    const handleCancel = () => {
        navigate('/asignaciones');
    };

    return (
        <div>
            <h2>Agregar Asignación</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Profesor:
                    <select
                        name="id_profesor"
                        value={asignacion.id_profesor}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione un profesor</option>
                        {profesores.map(profesor => (
                            <option key={profesor.id_profesor} value={profesor.id_profesor}>
                                {profesor.nombre_completo}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Curso:
                    <select
                        name="id_curso"
                        value={asignacion.id_curso}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione un curso</option>
                        {cursos.map(curso => (
                            <option key={curso.id_curso} value={curso.id_curso}>
                                {curso.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddAsignaciones;


