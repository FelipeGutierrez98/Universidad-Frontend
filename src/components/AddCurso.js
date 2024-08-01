/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCurso = () => {
    const [curso, setCurso] = useState({
        nombre: '',
        descripcion: '',
        id_departamento: ''
    });
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/cursos/nombres')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/cursos', {
            method: 'POST',
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
                console.log('Curso added:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding curso:', error);
                setError('Error adding curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    return (
        <div>
            <h2>Agregar Curso</h2>
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

export default AddCurso;

 */




/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCurso = () => {
    const [curso, setCurso] = useState({
        nombre: '',
        descripcion: '',
        id_departamento: ''
    });
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/cursos/nombres')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/cursos', {
            method: 'POST',
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
                console.log('Curso added:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding curso:', error);
                setError('Error adding curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    return (
        <div>
            <h2>Agregar Curso</h2>
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

export default AddCurso; */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCurso = () => {
    const [curso, setCurso] = useState({
        nombre: '',
        descripcion: '',
        id_departamento: ''
    });
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSave = () => {
        fetch('http://localhost:3000/cursos', {
            method: 'POST',
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
                console.log('Curso added:', data);
                navigate('/cursos', { state: { updated: true } });
            })
            .catch(error => {
                console.error('Error adding curso:', error);
                setError('Error adding curso');
            });
    };

    const handleCancel = () => {
        navigate('/cursos');
    };

    return (
        <div>
            <h2>Agregar Curso</h2>
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

export default AddCurso;

