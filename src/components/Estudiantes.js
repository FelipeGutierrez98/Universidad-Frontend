/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Estudiantes = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/estudiantes/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
            fetch(`http://localhost:3000/estudiantes/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Student deleted:', data);
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => console.error('Error deleting student:', error));
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-estudiante');
    };

    const filteredData = data.filter(student => {
        return student.nombre.toLowerCase().includes(searchTerm);
    });

    return (
        <div>
            <h1>Estudiantes</h1>
            <div id="search-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Buscar estudiante por nombre"
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
                        <th>Fecha de Nacimiento</th>
                        <th>Foto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(student => (
                        <tr key={student.id_estudiante}>
                            <td>{student.id_estudiante}</td>
                            <td>{student.nombre}</td>
                            <td>{student.apellido}</td>
                            <td>{student.email}</td>
                            <td>{new Date(student.fecha_nacimiento).toLocaleDateString()}</td>
                            <td><img src={student.foto} alt={`Foto de ${student.nombre}`} className="student-photo" /></td>
                            <td>
                                <button onClick={() => handleEdit(student.id_estudiante)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(student.id_estudiante)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Estudiantes;
 */

/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Estudiantes = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/estudiantes/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
            fetch(`http://localhost:3000/estudiantes/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Student deleted:', data);
                    window.location.reload();
                })
                .catch(error => console.error('Error deleting student:', error));
        }
    };

    const handleSearch = () => {
        setSearchTerm(document.getElementById('search-input').value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-estudiante');
    };

    const filteredData = data.filter(student => 
        student.nombre && student.nombre.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Estudiantes</h1>
            <div id="search-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Buscar estudiante por nombre"
                    className='barra-buscador'
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
                <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass buscar"></i></button>
                <button onClick={handleCreate}><i className="fa-solid fa-user-plus agregar"></i></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Foto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(student => (
                        <tr key={student.id_estudiante}>
                            <td>{student.id_estudiante}</td>
                            <td>{student.nombre}</td>
                            <td>{student.apellido}</td>
                            <td>{student.email}</td>
                            <td>{new Date(student.fecha_nacimiento).toLocaleDateString()}</td>
                            <td><img src={student.foto} alt={`Foto de ${student.nombre}`} className="student-photo" /></td>
                            <td>
                                <button onClick={() => handleEdit(student.id_estudiante)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(student.id_estudiante)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Estudiantes;
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Estudiantes = ({ data, fetchData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCreate = () => {
        navigate('/agregar-estudiante');
    };

    const handleEdit = (id) => {
        navigate(`/estudiantes/${id}`);
    };
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
            fetch(`http://localhost:3000/estudiantes/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text().then(text => text ? JSON.parse(text) : {});
                })
                .then(() => {
                    console.log('Estudiante eliminado');
                    fetchData(); // Recargar datos después de eliminar
                })
                .catch(error => {
                    console.error('Error al eliminar el estudiante:', error);
                    setError('Error al eliminar el estudiante');
                });
        }
    };

  /*   const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
            fetch(`http://localhost:3000/estudiantes/${id}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    return response.text().then(text => text ? JSON.parse(text) : {});
                })
                .then(() => {
                    console.log('Estudiante eliminado');
                    fetchData(); 
                })
                .catch(error => {
                    console.error('Error al eliminar el estudiante:', error);
                    setError('Error al eliminar el estudiante');
                });
        }
    }; */

    const filteredData = data.filter(estudiante =>
        estudiante.nombre && estudiante.nombre.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h1>Estudiantes</h1>
            {error && <p className="error">{error}</p>}
            <div id="search-container">
                <input
                    type="text"
                       /*  id="buscarEstudiante"
                        name="buscarEstudiante" */
                    placeholder="Buscar estudiante por nombre"
                    className="barra-buscador"
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
                        <th>Fecha de Nacimiento</th>
                        <th>Foto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(estudiante => (
                        <tr key={estudiante.id_estudiante}>
                            <td>{estudiante.id_estudiante}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.apellido}</td>
                            <td>{estudiante.email}</td>
                            <td>{estudiante.fecha_nacimiento}</td>
                            <td><img src={estudiante.foto} alt={`Foto de ${estudiante.nombre}`} className="estudiante-photo x" /></td>
                            <td>
                                <button onClick={() => handleEdit(estudiante.id_estudiante)}><i className="fa-solid fa-pen editar"></i></button>
                                <button onClick={() => handleDelete(estudiante.id_estudiante)}><i className="fa-solid fa-trash eliminar"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Estudiantes;

   