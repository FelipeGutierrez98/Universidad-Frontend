import React from 'react';

const Matriculas = ({ data }) => {
    return (
        <div>
            <h1>Matriculas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Fecha de Matrícula</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(enrollment => (
                        <tr key={enrollment.id_matricula}>
                            <td>{enrollment.Nombre_Estudiante} {enrollment.Apellido_Estudiante}</td>
                            <td>{enrollment.Nombre_Curso}</td>
                            <td>{new Date(enrollment.fecha_matricula).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matriculas;
