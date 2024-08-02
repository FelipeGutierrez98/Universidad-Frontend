/* import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';  
import AddProfesores from './components/AddProfesores';  
import EditProfesores from './components/EditProfesores';  
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; 
 */




/* 

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';  
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/agregar-curso" element={<AddCurso />} /> 
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
 */



/* 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; */







/* 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
 */





/* 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; */





/*  
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import AddDepartamento from './components/AddDepartamento';
import EditDepartamento from './components/EditDepartamento';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} />;
            case 'cursos':
                return <Cursos data={data} />;
            case 'departamentos':
                return <Departamentos data={data} />;
            case 'matriculas':
                return <Matriculas data={data} />;
            case 'asignaciones':
                return <Asignaciones data={data} />;
            case 'notas':
                return <Notas data={data} />;
            case 'profesores':
                return <Profesores data={data} />;
            default:
                return <Estudiantes data={data} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/departamentos/:id" element={<EditDepartamento />} />
                    <Route path="/agregar-departamento" element={<AddDepartamento />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} />} />
                    <Route path="/cursos" element={<Cursos data={data} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} />} />
                    <Route path="/notas" element={<Notas data={data} />} />
                    <Route path="/profesores" element={<Profesores data={data} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
 

 */

/* 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [section]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Estudiantes data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
 */


/* 
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('profesores'); // Asegúrate de que 'profesores' esté configurado inicialmente
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Profesores data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; */



/* import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('profesores');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Profesores data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;

 */

/* 
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Estudiantes data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; */

/* import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import AddDepartamento from './components/AddDepartamento';
import EditDepartamento from './components/EditDepartamento';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('profesores');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Profesores data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/agregar-departamento" element={<AddDepartamento />} />
                    <Route path="/departamentos/:id" element={<EditDepartamento />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper; */
/* 
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import AddDepartamento from './components/AddDepartamento';
import EditDepartamento from './components/EditDepartamento';
import AddNotas from './components/AddNotas';
import EditNotas from './components/EditNotas';
import './styles.css';

const App = () => {
    const [section, setSection] = useState('profesores');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Profesores data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/notas/:id" element={<EditNotas />} />
                    <Route path="/agregar-nota" element={<AddNotas />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/agregar-departamento" element={<AddDepartamento />} />
                    <Route path="/departamentos/:id" element={<EditDepartamento />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
 */

import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Estudiantes from './components/Estudiantes';
import Cursos from './components/Cursos';
import Departamentos from './components/Departamentos';
import Matriculas from './components/Matriculas';
import Asignaciones from './components/Asignaciones';
import Notas from './components/Notas';
import Profesores from './components/Profesores';
import EditStudent from './components/EditStudent';
import AddStudent from './components/AddStudent';
import AddProfesores from './components/AddProfesores';
import EditProfesores from './components/EditProfesores';
import AddCurso from './components/AddCurso';
import EditCurso from './components/EditCurso';
import AddNotas from './components/AddNotas';
import EditNotas from './components/EditNotas';
import AddDepartamento from './components/AddDepartamento';
import EditDepartamento from './components/EditDepartamento';
import AddAsignaciones from './components/AddAsignaciones';
import EditAsignaciones from './components/EditAsignaciones';
import AddMatriculas from './components/AddMatriculas';
import EditMatriculas from './components/EditMatriculas'; // Nueva importación
import './styles.css';

const App = () => {
    const [section, setSection] = useState('estudiantes');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3000/${section}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error al cargar la sección:', error);
        }
    }, [section]);

    useEffect(() => {
        fetchData();
    }, [section, fetchData]);

    useEffect(() => {
        if (location.state?.updated) {
            fetchData();
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, fetchData]);

    const renderSection = () => {
        switch (section) {
            case 'estudiantes':
                return <Estudiantes data={data} fetchData={fetchData} />;
            case 'cursos':
                return <Cursos data={data} fetchData={fetchData} />;
            case 'departamentos':
                return <Departamentos data={data} fetchData={fetchData} />;
            case 'matriculas':
                return <Matriculas data={data} fetchData={fetchData} />;
            case 'asignaciones':
                return <Asignaciones data={data} fetchData={fetchData} />;
            case 'notas':
                return <Notas data={data} fetchData={fetchData} />;
            case 'profesores':
                return <Profesores data={data} fetchData={fetchData} />;
            default:
                return <Estudiantes data={data} fetchData={fetchData} />;
        }
    };

    return (
        <div>
            <Navbar onSelectSection={setSection} />
            <div className="container" id="content">
                <Routes>
                    <Route path="/estudiantes/:id" element={<EditStudent />} />
                    <Route path="/agregar-estudiante" element={<AddStudent />} />
                    <Route path="/agregar-profesor" element={<AddProfesores />} />
                    <Route path="/profesores/:id" element={<EditProfesores />} />
                    <Route path="/cursos/:id" element={<EditCurso />} />
                    <Route path="/agregar-curso" element={<AddCurso />} />
                    <Route path="/estudiantes" element={<Estudiantes data={data} fetchData={fetchData} />} />
                    <Route path="/cursos" element={<Cursos data={data} fetchData={fetchData} />} />
                    <Route path="/departamentos" element={<Departamentos data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas" element={<Matriculas data={data} fetchData={fetchData} />} />
                    <Route path="/matriculas/:id" element={<EditMatriculas />} /> {/* Nueva ruta */}
                    <Route path="/agregar-matricula" element={<AddMatriculas />} />
                    <Route path="/asignaciones" element={<Asignaciones data={data} fetchData={fetchData} />} />
                    <Route path="/notas" element={<Notas data={data} fetchData={fetchData} />} />
                    <Route path="/profesores" element={<Profesores data={data} fetchData={fetchData} />} />
                    <Route path="/notas/:id" element={<EditNotas />} />
                    <Route path="/agregar-nota" element={<AddNotas />} />
                    <Route path="/agregar-departamento" element={<AddDepartamento />} />
                    <Route path="/departamentos/:id" element={<EditDepartamento />} />
                    <Route path="/agregar-asignacion" element={<AddAsignaciones />} />
                    <Route path="/asignaciones/:id" element={<EditAsignaciones />} />
                    <Route path="/" element={renderSection()} />
                </Routes>
            </div>
        </div>
    );
};

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
