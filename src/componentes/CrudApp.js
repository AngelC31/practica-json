import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const initialDb = [
    {
        id: 0,
        nombre: 'Amgel',
        apellido: 'Cruh'
    },
    {
        id: 1,
        nombre: 'Jon',
        apellido: 'Nas'
    },
]

const CrudApp = () => {
    const [dataToEdit,setDataToEdit]=useState(null)
    const createData=(data)=>{
        data.id=db.length;
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData=db.map(item=> item.id==data.id?data:item)
        setDb( newData)
    };
    const deleteData=(id)=>{
        let eliminar=db.filter(item=>item.id!==id)
        setDb(eliminar)
    };

    const [db,setDb]=useState(initialDb)
    return (
        <div>
            <h1>CRUD App</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}
export default CrudApp;