import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditDepartamento = () => {
    const [departamento, setDepartamento] = useState({
        nombre: '',
        facultad: ''
    });
    const [facultades, setFacultades] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/departamentos/${id}`)
            .then(response => response.json())
            .then(data => setDepartamento(data))
            .catch(error => console.error('Error fetching departamento:', error));

        fetch('http://localhost:3000/departamentos/facultades')
            .then(response => response.json())
            .then(data => setFacultades(data))
            .catch(error => console.error('Error fetching facultades:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDepartamento({ ...departamento, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/departamentos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(departamento),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Departamento updated:', data);
                navigate('/departamentos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating departamento:', error);
                setError('Error updating departamento');
            });
    };

    const handleCancel = () => {
        navigate('/departamentos');
    };

    return (
        <div>
            <h2>Editar Departamento</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={departamento.nombre}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Facultad:
                    <select
                        name="facultad"
                        value={departamento.facultad}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione una facultad</option>
                        {facultades.map(faculty => (
                            <option key={faculty.facultad} value={faculty.facultad}>
                                {faculty.facultad}
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

export default EditDepartamento;
