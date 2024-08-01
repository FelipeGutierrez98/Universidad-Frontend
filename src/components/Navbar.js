import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const sections = [
    { name: 'Estudiantes', key: 'estudiantes' },
    { name: 'Cursos', key: 'cursos' },
    { name: 'Departamentos', key: 'departamentos' },
    { name: 'Matriculas', key: 'matriculas' },
    { name: 'Asignaciones', key: 'asignaciones' },
    { name: 'Notas', key: 'notas' },
    { name: 'Profesores', key: 'profesores' }
];

const Navbar = ({ onSelectSection }) => {
    return (
        <nav>
            {sections.map(section => (
                <Link 
                    to={`/${section.key}`} 
                    key={section.key} 
                    onClick={() => onSelectSection(section.key)}
                >
                    {section.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;

