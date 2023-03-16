const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    console.log(data)
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td><button onClick={() => setDataToEdit(item)}>Editar</button>
                                        <button onClick={() => deleteData(item.id)}>Eliminar</button></td>
                                </tr>
                            ))
                            ) : (
                            <tr>
                                <td>No existen elementos</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable;