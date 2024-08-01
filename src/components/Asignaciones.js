import React from 'react';

const Asignaciones = ({ data }) => {
    return (
        <div>
            <h1>Asignaciones</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profesor</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(assignment => (
                        <tr key={assignment.id_asignacion}>
                            <td>{assignment.id_asignacion}</td>
                            <td>{assignment.nombre_profesor}</td>
                            <td>{assignment.nombre_curso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Asignaciones;
