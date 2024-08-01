/* import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/estudiantes/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStudent(data))
            .catch(error => console.error('Error fetching student:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSave = () => {
        console.log('Updating student:', student); 
        fetch(`http://localhost:3000/estudiantes/${id}`, {
            method: 'PUT',
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
                console.log('Student updated:', data);
                navigate('/estudiantes');
            })
            .catch(error => {
                console.error('Error updating student:', error);
                setError('Error updating student');
            });
    };

    const handleCancel = () => {
        navigate('/estudiantes');
    };

    if (!student) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Student</h2>
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
                    <input type="date" name="fecha_nacimiento" value={student.fecha_nacimiento.split('T')[0]} onChange={handleInputChange} />
                </label>
                <label>
                    Foto:
                    <input type="text" name="foto" value={student.foto} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}>Guardar</button>
                <button type="button" onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditStudent;

 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/estudiantes/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStudent(data))
            .catch(error => console.error('Error fetching student:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSave = () => {
        // Convertir fecha_nacimiento al formato adecuado
        const fecha_nacimiento = student.fecha_nacimiento ? new Date(student.fecha_nacimiento).toISOString().split('T')[0] : '';

        const updatedStudent = {
            nombre: student.nombre || '',
            apellido: student.apellido || '',
            email: student.email || '',
            fecha_nacimiento: fecha_nacimiento,
            foto: student.foto || ''
        };

        console.log('Updating student:', updatedStudent);

        fetch(`http://localhost:3000/estudiantes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStudent),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Student updated:', data);
                navigate('/estudiantes', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating student:', error);
                setError('Error updating student');
            });
    };

    const handleCancel = () => {
        navigate('/estudiantes');
    };

    if (!student) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Student</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={student.nombre || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={student.apellido || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={student.email || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Fecha de Nacimiento:
                    <input type="date" name="fecha_nacimiento" value={student.fecha_nacimiento ? student.fecha_nacimiento.split('T')[0] : ''} onChange={handleInputChange} />
                </label>
                <label>
                    Foto:
                    <input type="text" name="foto" value={student.foto || ''} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i class="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i class="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default EditStudent;
