/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProfesores = () => {
    const [profesor, setProfesor] = useState({
        nombre: '',
        apellido: '',
        email: '',
        especialidad: '',
        foto: '' 
    });
    const [departamentos, setDepartamentos] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartamentos(data))
            .catch(error => console.error('Error fetching departamentos:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfesor({ ...profesor, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/profesores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profesor),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor added:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding profesor:', error);
                setError('Error adding profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    return (
        <div>
            <h2>Agregar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <select name="especialidad" value={profesor.especialidad} onChange={handleInputChange}>
                        <option value="">Select a department</option>
                        {departamentos.map(departamento => (
                            <option key={departamento.id_departamento} value={departamento.nombre}>
                                {departamento.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Foto:
                    <input type="text" name="foto" value={profesor.foto} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddProfesores;

  */
/* 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProfesores = () => {
    const [profesor, setProfesor] = useState({ nombre: '', apellido: '', email: '', especialidad: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfesor({ ...profesor, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/profesores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profesor),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor added:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding profesor:', error);
                setError('Error adding profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    return (
        <div>
            <h2>Agregar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <input type="text" name="especialidad" value={profesor.especialidad} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddProfesores;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProfesores = () => {
    const [profesor, setProfesor] = useState({
        nombre: '',
        apellido: '',
        email: '',
        especialidad: '',
       /*  foto: '' */
    });
    const [especialidades, setEspecialidades] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/profesores/especialidades')
            .then(response => response.json())
            .then(data => setEspecialidades(data))
            .catch(error => console.error('Error fetching especialidades:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfesor({ ...profesor, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/profesores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profesor),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Profesor added:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding profesor:', error);
                setError('Error adding profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    return (
        <div>
            <h2>Agregar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <select name="especialidad" value={profesor.especialidad} onChange={handleInputChange}>
                        <option value="">Seleccione una especialidad</option>
                        {especialidades.map(especialidad => (
                            <option key={especialidad.especialidad} value={especialidad.especialidad}>
                                {especialidad.especialidad}
                            </option>
                        ))}
                    </select>
                </label>
               {/*  <label>
                    Foto:
                    <input type="text" name="foto" value={profesor.foto} onChange={handleInputChange} />
                </label> */}
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default AddProfesores;
