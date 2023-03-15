import { useEffect, useState } from "react"

const initialForm = {
    id: null,
    nombre: '',
    apellido: ''
}

const CrudForm = ({ create, update, dataToEdit, SetDataToEdit }) => {
    const [form, setForm] = useState(initialForm);
    useEffect(() => {
        console.log("elementos " + dataToEdit)
        if (dataToEdit) {
            setForm(dataToEdit)
        }
        else{

            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChance = (e) => {
        //console.log(e.target.name +" "+e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nombre || !form.apellido) {
            alert('Datos incompletos')
            return;
        }
        if (form.id === null) {
            create(form)
        }
        else {
            update(form)
        }
        handleReset();
    }
    const handleReset = (e) => {
        setForm(initialForm);
        SetDataToEdit(null);
    }

    return (
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='nombre' placeholder='Nombre' onChange={handleChance} value={form.nombre} />
                <input type='text' name='apellido' placeholder='Apellido' onChange={handleChance} value={form.apellido} />
                <input type='submit' value='Enviar' />
                <input type='reset' value='Limpiar' onClick={handleReset} />
            </form>
        </div>
    )
}
export default CrudForm;