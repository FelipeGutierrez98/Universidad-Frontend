/* import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfesores = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profesor, setProfesor] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/profesores/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProfesor(data))
            .catch(error => console.error('Error fetching profesor:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfesor({ ...profesor, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/profesores/${id}`, {
            method: 'PUT',
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
                console.log('Profesor updated:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating profesor:', error);
                setError('Error updating profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    if (!profesor) return <div>Loading...</div>;

    return (
        <div>
            <h2>Editar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <input type="text" name="especialidad" value={profesor.especialidad || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Foto:
                    <input type="text" name="foto" value={profesor.foto || ''} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default EditProfesores;


 */
/* 
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfesores = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profesor, setProfesor] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/profesores/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProfesor(data))
            .catch(error => console.error('Error fetching profesor:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfesor({ ...profesor, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/profesores/${id}`, {
            method: 'PUT',
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
                console.log('Profesor updated:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating profesor:', error);
                setError('Error updating profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    if (!profesor) return <div>Loading...</div>;

    return (
        <div>
            <h2>Editar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <input type="text" name="especialidad" value={profesor.especialidad || ''} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleSave}><i className="fa-regular fa-floppy-disk guardar"></i></button>
                <button type="button" onClick={handleCancel}><i className="fa-solid fa-x x"></i></button>
            </form>
        </div>
    );
};

export default EditProfesores;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProfesores = () => {
    const [profesor, setProfesor] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/profesores/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProfesor(data))
            .catch(error => {
                console.error('Error fetching profesor:', error);
                setError('Error fetching profesor');
            });
    }, [id]);

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
        fetch(`http://localhost:3000/profesores/${id}`, {
            method: 'PUT',
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
                console.log('Profesor updated:', data);
                navigate('/profesores', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating profesor:', error);
                setError('Error updating profesor');
            });
    };

    const handleCancel = () => {
        navigate('/profesores');
    };

    if (!profesor) return <div>Loading...</div>;

    return (
        <div>
            <h2>Editar Profesor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={profesor.nombre || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={profesor.apellido || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profesor.email || ''} onChange={handleInputChange} />
                </label>
                <label>
                    Especialidad:
                    <select name="especialidad" value={profesor.especialidad || ''} onChange={handleInputChange}>
                        <option value="">Seleccione una especialidad</option>
                        {especialidades.map(especialidad => (
                            <option key={especialidad.especialidad} value={especialidad.especialidad}>
                                {especialidad.especialidad}
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

export default EditProfesores;
