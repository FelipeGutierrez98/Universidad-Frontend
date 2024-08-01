/* import React from 'react';

const Departamentos = ({ data }) => {
    return (
        <div>
            <h1>Departamentos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Facultad</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(department => (
                        <tr key={department.id_departamento}>
                            <td>{department.id_departamento}</td>
                            <td>{department.nombre}</td>
                            <td>{department.facultad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departamentos; */



/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Departamentos = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [departmentNames, setDepartmentNames] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/departamentos/nombres')
            .then(response => response.json())
            .then(data => setDepartmentNames(data))
            .catch(error => console.error('Error fetching department names:', error));

        fetch('http://localhost:3000/departamentos/facultades')
            .then(response => response.json())
            .then(data => setFaculties(data))
            .catch(error => console.error('Error fetching faculties:', error));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleFacultyChange = (e) => {
        setSelectedFaculty(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-departamento');
    };

    const handleEdit = (id) => {
        navigate(`/departamentos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
            fetch(`http://localhost:3000/departamentos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Departamento deleted:', data);
                    window.location.reload();
                })
                .catch(error => console.error('Error deleting departamento:', error));
        }
    };

    const filteredData = data.filter(department => {
        const matchesSearchTerm = department.nombre.toLowerCase().includes(searchTerm);
        const matchesName = selectedName === '' || department.nombre === selectedName;
        const matchesFaculty = selectedFaculty === '' || department.facultad === selectedFaculty;
        return matchesSearchTerm && matchesName && matchesFaculty;
    });

    return (
        <div>
            <h1>Departamentos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar departamento por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {departmentNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleFacultyChange} className='barra-facultades'>
                    <option value="">Todas las facultades</option>
                    {faculties.map(faculty => (
                        <option key={faculty.facultad} value={faculty.facultad}>
                            {faculty.facultad}
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
                        <th>Facultad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(department => (
                        <tr key={department.id_departamento}>
                            <td>{department.id_departamento}</td>
                            <td>{department.nombre}</td>
                            <td>{department.facultad}</td>
                            <td>
                                <button onClick={() => handleEdit(department.id_departamento)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(department.id_departamento)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departamentos;

 */

/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Departamentos = ({ data = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [departmentNames, setDepartmentNames] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    // Fetch department names and faculties for the select dropdown
    useEffect(() => {
        fetch('http://localhost:3000/departamentos/nombres')
            .then(response => response.json())
            .then(data => setDepartmentNames(data))
            .catch(error => console.error('Error fetching department names:', error));

        fetch('http://localhost:3000/departamentos/facultades')
            .then(response => response.json())
            .then(data => setFaculties(data))
            .catch(error => console.error('Error fetching faculties:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleFacultyChange = (e) => {
        setSelectedFaculty(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-departamento');
    };

    const handleEdit = (id) => {
        navigate(`/departamentos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
            fetch(`http://localhost:3000/departamentos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Departamento deleted:', data);
                    // Refetch data after deletion
                    fetch('http://localhost:3000/departamentos')
                        .then(response => response.json())
                        .then(data => setFilteredData(data))
                        .catch(error => console.error('Error fetching updated departments:', error));
                })
                .catch(error => console.error('Error deleting departamento:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(department => {
            const matchesSearchTerm = department.nombre && department.nombre.toLowerCase().includes(searchTerm);
            const matchesName = selectedName === '' || department.nombre === selectedName;
            const matchesFaculty = selectedFaculty === '' || department.facultad === selectedFaculty;
            return matchesSearchTerm && matchesName && matchesFaculty;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedName, selectedFaculty, data]);

    return (
        <div>
            <h1>Departamentos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar departamento por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {departmentNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleFacultyChange} className='barra-facultades'>
                    <option value="">Todas las facultades</option>
                    {faculties.map(faculty => (
                        <option key={faculty.facultad} value={faculty.facultad}>
                            {faculty.facultad}
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
                        <th>Facultad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(department => (
                        <tr key={department.id_departamento}>
                            <td>{department.id_departamento}</td>
                            <td>{department.nombre}</td>
                            <td>{department.facultad}</td>
                            <td>
                                <button onClick={() => handleEdit(department.id_departamento)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(department.id_departamento)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departamentos;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Departamentos = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [departmentNames, setDepartmentNames] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const navigate = useNavigate();

    // Fetch department names and faculties for the select dropdown
    useEffect(() => {
        fetch('http://localhost:3000/departamentos/nombres')
            .then(response => response.json())
            .then(data => setDepartmentNames(data))
            .catch(error => console.error('Error fetching department names:', error));

        fetch('http://localhost:3000/departamentos/facultades')
            .then(response => response.json())
            .then(data => setFaculties(data))
            .catch(error => console.error('Error fetching faculties:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleNameChange = (e) => {
        setSelectedName(e.target.value);
    };

    const handleFacultyChange = (e) => {
        setSelectedFaculty(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-departamento');
    };

    const handleEdit = (id) => {
        navigate(`/departamentos/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
            fetch(`http://localhost:3000/departamentos/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Departamento deleted:', data);
                    // Refetch data after deletion
                    fetchData(); // Asegúrate de que fetchData esté disponible para recargar los datos
                })
                .catch(error => console.error('Error deleting departamento:', error));
        }
    };

    useEffect(() => {
        const filtered = data.filter(department => {
            const matchesSearchTerm = department.nombre && department.nombre.toLowerCase().includes(searchTerm);
            const matchesName = selectedName === '' || department.nombre === selectedName;
            const matchesFaculty = selectedFaculty === '' || department.facultad === selectedFaculty;
            return matchesSearchTerm && matchesName && matchesFaculty;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedName, selectedFaculty, data]);

    return (
        <div>
            <h1>Departamentos</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar departamento por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleNameChange} className='barra-nombres'>
                    <option value="">Todos los nombres</option>
                    {departmentNames.map(name => (
                        <option key={name.nombre} value={name.nombre}>
                            {name.nombre}
                        </option>
                    ))}
                </select>
                <select onChange={handleFacultyChange} className='barra-facultades'>
                    <option value="">Todas las facultades</option>
                    {faculties.map(faculty => (
                        <option key={faculty.facultad} value={faculty.facultad}>
                            {faculty.facultad}
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
                        <th>Facultad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(department => (
                        <tr key={department.id_departamento}>
                            <td>{department.id_departamento}</td>
                            <td>{department.nombre}</td>
                            <td>{department.facultad}</td>
                            <td>
                                <button onClick={() => handleEdit(department.id_departamento)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(department.id_departamento)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departamentos;
