/* import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profesores = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-profesor');
    };

    const handleEdit = (id) => {
        navigate(`/profesores/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            fetch(`http://localhost:3000/profesores/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Profesor deleted:', data);
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => console.error('Error deleting profesor:', error));
        }
    };

    const filteredData = data.filter(profesor => {
        const matchesSearchTerm = profesor.nombre.toLowerCase().includes(searchTerm);
        return matchesSearchTerm;
    });

    return (
        <div>
            <h1>Profesores</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar profesor por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Especialidad</th>
                        <th>Foto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(profesor => (
                        <tr key={profesor.id_profesor}>
                            <td>{profesor.id_profesor}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.especialidad}</td>
                            <td><img src={profesor.foto} alt={`Foto de ${profesor.nombre}`} className="student-photo"  /></td>
                            <td>
                                <button onClick={() => handleEdit(profesor.id_profesor)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(profesor.id_profesor)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profesores;
  */

/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profesores = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-profesor');
    };

    const handleEdit = (id) => {
        navigate(`/profesores/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            fetch(`http://localhost:3000/profesores/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Profesor deleted:', data);
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => console.error('Error deleting profesor:', error));
        }
    };

    const filteredData = data.filter(profesor => 
        profesor.nombre && profesor.nombre.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Profesores</h1>
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar profesor por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Especialidad</th>
                        <th>Foto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(profesor => (
                        <tr key={profesor.id_profesor}>
                            <td>{profesor.id_profesor}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.especialidad}</td>
                            <td><img src={profesor.foto} alt={`Foto de ${profesor.nombre}`} className="profesor-photo" /></td>
                            <td>
                                <button onClick={() => handleEdit(profesor.id_profesor)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(profesor.id_profesor)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profesores;

 */


/* 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profesores = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-profesor');
    };

    const handleEdit = (id) => {
        navigate(`/profesores/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            fetch(`http://localhost:3000/profesores/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(() => {
                    console.log('Profesor eliminado');
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => {
                    console.error('Error al eliminar el profesor:', error);
                    setError('Error al eliminar el profesor');
                });
        }
    };

    const filteredData = data.filter(profesor => 
        profesor.nombre && profesor.nombre.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Profesores</h1>
            {error && <p className="error">{error}</p>}
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar profesor por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(profesor => (
                        <tr key={profesor.id_profesor}>
                            <td>{profesor.id_profesor}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.especialidad}</td>
                            <td>
                                <button onClick={() => handleEdit(profesor.id_profesor)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(profesor.id_profesor)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profesores;
 */


/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profesores = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-profesor');
    };

    const handleEdit = (id) => {
        navigate(`/profesores/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            fetch(`http://localhost:3000/profesores/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(() => {
                    console.log('Profesor eliminado');
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => {
                    console.error('Error al eliminar el profesor:', error);
                    setError('Error al eliminar el profesor');
                });
        }
    };

    const filteredData = data.filter(profesor => 
        profesor.nombre && profesor.nombre.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Profesores</h1>
            {error && <p className="error">{error}</p>}
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar profesor por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(profesor => (
                        <tr key={profesor.id_profesor}>
                            <td>{profesor.id_profesor}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.especialidad}</td>
                            <td>
                                <button onClick={() => handleEdit(profesor.id_profesor)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(profesor.id_profesor)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profesores;
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profesores = ({ data = [], fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEspecialidad, setSelectedEspecialidad] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/profesores/especialidades')
            .then(response => response.json())
            .then(data => setEspecialidades(data))
            .catch(error => console.error('Error fetching especialidades:', error));
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleEspecialidadChange = (e) => {
        setSelectedEspecialidad(e.target.value);
    };

    const handleCreate = () => {
        navigate('/agregar-profesor');
    };

    const handleEdit = (id) => {
        navigate(`/profesores/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            fetch(`http://localhost:3000/profesores/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Profesor deleted:', data);
                    // Refetch data after deletion
                    fetchData();
                })
                .catch(error => {
                    console.error('Error deleting profesor:', error);
                    setError('Error al eliminar el profesor');
                });
        }
    };

    useEffect(() => {
        const filtered = data.filter(profesor => {
            const matchesSearchTerm = profesor.nombre && profesor.nombre.toLowerCase().includes(searchTerm);
            const matchesEspecialidad = selectedEspecialidad === '' || profesor.especialidad === selectedEspecialidad;
            return matchesSearchTerm && matchesEspecialidad;
        });
        setFilteredData(filtered);
    }, [searchTerm, selectedEspecialidad, data]);

    return (
        <div>
            <h1>Profesores</h1>
            {error && <p className="error">{error}</p>}
            <div id="search-container">
                <input
                    type="text"
                    placeholder="Buscar profesor por nombre"
                    className='barra-buscador'
                    onChange={handleSearch}
                />
                <select onChange={handleEspecialidadChange} className='barra-especialidades'>
                    <option value="">Todas las especialidades</option>
                    {Array.isArray(especialidades) && especialidades.map(especialidad => (
                        <option key={especialidad.especialidad} value={especialidad.especialidad}>
                            {especialidad.especialidad}
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
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Especialidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(profesor => (
                        <tr key={profesor.id_profesor}>
                            <td>{profesor.id_profesor}</td>
                            <td>{profesor.nombre}</td>
                            <td>{profesor.apellido}</td>
                            <td>{profesor.email}</td>
                            <td>{profesor.especialidad}</td>
                            <td>
                                <button onClick={() => handleEdit(profesor.id_profesor)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(profesor.id_profesor)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Profesores;


