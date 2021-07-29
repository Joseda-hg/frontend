import React from 'react'
import { EjercicioList } from './EjercicioList'

const EjerciciosList = [
    {id :1,
    nombre: "flexiones",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :2,
    nombre: "Sentadillas",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :3,
    nombre: "Abdominales",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :4,
    nombre: "burpees",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :5,
    nombre: "correr",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :6,
    nombre: "trotar",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :7,
    nombre: "curl bicep",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  {id :8,
    nombre: "martillos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, odio et ullamcorper efficitur, mi enim mollis justo, sit amet bibendum elit libero eu erat. In malesuada in justo vel maximus. Aenean id sodales velit. Aliquam fermentum convallis lacus ultricies blandit. Sed interdum magna et libero dignissim aliquet. Nunc ante."
  },
  ]

export  function Ejercicio() {
    const handleEjercicioAdd = () => {

    }
  
    const handleEjercicioRand = () => {
      
    }        
    return (
        <div>
                  <EjercicioList ejercicios={ EjerciciosList } />
<input class="form-control" type="text" placeholder="Nuevo Ejercicio"></input>
<input class="form-control" type="text" placeholder="Descripcion"></input>
<button class="btn btn-primary" onClick={handleEjercicioAdd}>Añadir Ejercicio</button>

<p>Mas ejercicios</p>
<input class="form-control" type="text" placeholder="Numero de Ejercicios"></input>
<button class="btn btn-primary" onClick={handleEjercicioRand}>Otros Ejercicios</button>
        </div>
    )
}
