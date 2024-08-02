/* import React from 'react';

const Cursos = ({ data }) => {
    return (
        <div>
            <h1>Cursos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.nombre_departamento || 'No especificado'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos; */





/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/cursos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching courses:', error));

        fetch('http://localhost:3000/cursos/nombres')
            .then(response => response.json())
            .then(data => setCourseNames(data))
            .catch(error => console.error('Error fetching course names:', error));

        fetch('http://localhost:3000/departamentos')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleAddCourse = () => {
        navigate('/agregar-curso');
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre.toLowerCase().includes(searchTerm);
        const matchesName = selectedName === '' || course.nombre === selectedName;
        const matchesDepartment = selectedDepartment === '' || course.departamento === selectedDepartment;
        return matchesSearchTerm && matchesName && matchesDepartment;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddCourse}><i className="fa-solid fa-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.departamento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos;
 */

/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    // Fetch course names and departments for the select dropdown
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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleEdit = (id) => {
        navigate(`/cursos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            fetch(`http://localhost:3000/cursos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Curso deleted:', data);
                    window.location.reload();
                })
                .catch(error => console.error('Error deleting curso:', error));
        }
    };

    const handleCreate = () => {
        navigate('/agregar-curso');
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre.toLowerCase().includes(searchTerm);
        const matchesDepartment = selectedDepartment === '' || course.departamento === selectedDepartment;
        const matchesName = selectedName === '' || course.nombre === selectedName;
        return matchesSearchTerm && matchesDepartment && matchesName;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i> Agregar Curso</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.departamento}</td>
                            <td>
                                <button onClick={() => handleEdit(course.id_curso)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(course.id_curso)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos; */






/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    // Fetch course names and departments for the select dropdown
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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-curso');
    };

    const handleEdit = (id) => {
        navigate(`/cursos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            fetch(`http://localhost:3000/cursos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Curso deleted:', data);
                    window.location.reload();
                })
                .catch(error => console.error('Error deleting curso:', error));
        }
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre.toLowerCase().includes(searchTerm);
        const matchesDepartment = selectedDepartment === '' || course.departamento === selectedDepartment;
        const matchesName = selectedName === '' || course.nombre === selectedName;
        return matchesSearchTerm && matchesDepartment && matchesName;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.departamento}</td>
                            <td>
                                <button onClick={() => handleEdit(course.id_curso)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(course.id_curso)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos; */






/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    // Fetch course names and departments for the select dropdown
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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-curso');
    };

    const handleEdit = (id) => {
        navigate(`/cursos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            fetch(`http://localhost:3000/cursos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Curso deleted:', data);
                    fetchData(); // Update the data after deletion
                })
                .catch(error => console.error('Error deleting curso:', error));
        }
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre.toLowerCase().includes(searchTerm);
        const matchesDepartment = selectedDepartment === '' || course.departamento === selectedDepartment;
        const matchesName = selectedName === '' || course.nombre === selectedName;
        return matchesSearchTerm && matchesDepartment && matchesName;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.departamento}</td>
                            <td>
                                <button onClick={() => handleEdit(course.id_curso)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(course.id_curso)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos; */






/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-curso');
    };

    const handleEdit = (id) => {
        navigate(`/cursos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            fetch(`http://localhost:3000/cursos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Curso deleted:', data);
                    fetchData();
                })
                .catch(error => console.error('Error deleting curso:', error));
        }
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre ? course.nombre.toLowerCase().includes(searchTerm) : false;
        const matchesDepartment = selectedDepartment === '' || course.departamento === selectedDepartment;
        const matchesName = selectedName === '' || course.nombre === selectedName;
        return matchesSearchTerm && matchesDepartment && matchesName;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.departamento}</td>
                            <td>
                                <button onClick={() => handleEdit(course.id_curso)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(course.id_curso)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos;
 */


// src/components/Cursos.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cursos = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [courseNames, setCourseNames] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-curso');
    };

    const handleEdit = (id) => {
        navigate(`/cursos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este curso?')) {
            fetch(`http://localhost:3000/cursos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Curso deleted:', data);
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => console.error('Error deleting curso:', error));
        }
    };

    const filteredData = data.filter(course => {
        const matchesSearchTerm = course.nombre ? course.nombre.toLowerCase().includes(searchTerm) : false;
        const matchesDepartment = selectedDepartment === '' || course.nombre_departamento === selectedDepartment;
        const matchesName = selectedName === '' || course.nombre === selectedName;
        return matchesSearchTerm && matchesDepartment && matchesName;
    });

    return (
        <div>
            <h1>Cursos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar curso por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {courseNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} className='barra-departamento'>
                    <option value="">Todos los departamentos</option>
                    {departments.map(department => (
                        <option key={department.id_departamento} value={department.nombre}>
                            {department.nombre}
                        </option>
                    ))}
                </select>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(course => (
                        <tr key={course.id_curso}>
                            <td>{course.id_curso}</td>
                            <td>{course.nombre}</td>
                            <td>{course.descripcion}</td>
                            <td>{course.nombre_departamento}</td>
                            <td>
                                <button onClick={() => handleEdit(course.id_curso)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(course.id_curso)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cursos;
