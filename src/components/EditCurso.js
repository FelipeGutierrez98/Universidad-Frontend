/* import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCurso = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [curso, setCurso] = useState(null);
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/cursos/${id}`)
            .then(response => response.json())
            .then(data => setCurso(data))
            .catch(error => console.error('Error fetching curso:', error));

        fetch('http://localhost:3000/cursos/nombres')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/cursos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(curso),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Curso updated:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating curso:', error);
                setError('Error updating curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    if (!curso) return <div>Loading...</div>;

    return (
        <div>
            <h2>Editar Curso</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <select name="nombre" value={curso.nombre} onChange={handleInputChange}>
                        <option value="">Seleccione un nombre</option>
                        {courseNames.map(name => (
                            <option key={name.nombre} value={name.nombre}>
                                {name.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Descripción:
                    <input type="text" name="descripcion" value={curso.descripcion} onChange={handleInputChange} />
                </label>
                <label>
                    Departamento:
                    <select name="id_departamento" value={curso.id_departamento} onChange={handleInputChange}>
                        <option value="">Seleccione un departamento</option>
                        {departments.map(department => (
                            <option key={department.id_departamento} value={department.id_departamento}>
                                {department.nombre}
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

export default EditCurso;
 */




/* 
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCurso = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [curso, setCurso] = useState(null);
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/cursos/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setCurso(data))
            .catch(error => console.error('Error fetching curso:', error));

        fetch('http://localhost:3000/cursos/nombres')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/cursos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(curso),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Curso updated:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating curso:', error);
                setError('Error updating curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    if (!curso) return <div>Loading...</div>;

    return (
        <div>
            <h2>Editar Curso</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <select name="nombre" value={curso.nombre} onChange={handleInputChange}>
                        <option value="">Seleccione un nombre</option>
                        {courseNames.map(name => (
                            <option key={name.nombre} value={name.nombre}>
                                {name.nombre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Descripción:
                    <input type="text" name="descripcion" value={curso.descripcion} onChange={handleInputChange} />
                </label>
                <label>
                    Departamento:
                    <select name="id_departamento" value={curso.id_departamento} onChange={handleInputChange}>
                        <option value="">Seleccione un departamento</option>
                        {departments.map(department => (
                            <option key={department.id_departamento} value={department.id_departamento}>
                                {department.nombre}
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

export default EditCurso;
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCurso = () => {
    const { id } = useParams();
    const [curso, setCurso] = useState({
        nombre: '',
        descripcion: '',
        id_departamento: ''
    });
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/cursos/${id}`)
            .then(response => response.json())
            .then(data => setCurso(data))
            .catch(error => console.error('Error fetching curso:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/cursos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(curso),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Curso updated:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error updating curso:', error);
                setError('Error updating curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    return (
        <div>
            <h2>Editar Curso</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={curso.nombre}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Descripción:
                    <input
                        type="text"
                        name="descripcion"
                        value={curso.descripcion}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Departamento:
                    <select
                        name="id_departamento"
                        value={curso.id_departamento}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccione un departamento</option>
                        {departments.map(department => (
                            <option key={department.id_departamento} value={department.id_departamento}>
                                {department.nombre}
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

export default EditCurso;

