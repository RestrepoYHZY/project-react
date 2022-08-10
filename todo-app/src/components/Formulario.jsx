
import Swal from 'sweetalert2'
import {v4 as uuidv4} from "uuid";
import { useFormulario } from "./hooks/useFormulario";

const Formulario = ({agregarTodo}) => {

    const initialState={
        nombre: 'todo 1',
        descripcion: 'descripcion 1',
        estado: 'pendiente',
        prioridad:  false,

    }

    const [inputs, handleChange,reset] = useFormulario(initialState);
    
    const {nombre, descripcion, estado,prioridad}= inputs;

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: "Error!",
                text: "No deje vacio el campo",
                icon: "error",
            });
            return ;
        }
        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: "Error!",
                text: "No deje vacio el campo",
                icon: "error",
            });
            return ;
        }

        Swal.fire({
            title: "Éxito!",
            text: "Tarea Agregada",
            icon: "success",
        });
        agregarTodo({
            nombre,
            descripcion,
            estad: estado === 'pendiente' ? false:true,
            prioridad,
            id: uuidv4(),
        })
        // console.log(todo);
        reset();
    };


  return (
    <>
        <h3>Agregar TODO</h3>

        <form onSubmit={handleSubmit}>
           <input
             type="text"
             className="form-control mb-2"
             name="nombre"
             placeholder="Ingrese TODO nombre"
             value={nombre}
             onChange={handleChange}
           /> 
           <textarea
             className="form-control mb-2"
             name="descripcion"
             placeholder="Ingrese TODO descripcion"
             value={descripcion}
             onChange={handleChange}
           />
           <select 
           name="estado" 
           className="form-control mb-2"
           value={estado} 
           onChange={handleChange}
           >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
           </select>

           <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        className="form-check-input mb-2"
                        checked={prioridad}
                        onChange={handleChange}
                    />
                    <label 
                    htmlFor="idCheckbox" className="form-check-label"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    </>
  )
}

export default Formulario