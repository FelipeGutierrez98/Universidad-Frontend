import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [student, setStudent] = useState({
        nombre: '',
        apellido: '',
        email: '',
        fecha_nacimiento: '',
        foto: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/estudiantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Student added:', data);
                navigate('/estudiantes', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding student:', error);
                setError('Error adding student');
            });
    };

    const handleCancel = () => {
        navigate('/estudiantes');
    };

    return (
        <div>
            <h2>Agregar Estudiante</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={student.nombre} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={student.apellido} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={student.email} onChange={handleInputChange} />
                </label>
                <label>
                    Fecha de Nacimiento:
                    <input type="date" name="fecha_nacimiento" value={student.fecha_nacimiento} onChange={handleInputChange} />
                </label>
                <label>
                    Foto:
                    <input type="text" name="foto" value={student.foto} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i class="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i class="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddStudent;

