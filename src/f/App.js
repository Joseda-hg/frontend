import './App.css';
import React, { Component } from 'react';

const EjerciciosItems = [
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        id:"",
        nombre: "",
        descripcion: "",
      },
      EjercicioList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://192.168.100.18:8000/api/ejercicios/');
        const EjercicioList = await res.json();
        this.setState({
          EjercicioList
        });
      } catch (e) {
        console.log(e);
    }
    }
    renderItems = () => {
      const newItems = this.state.EjercicioList.filter(
        item => item.id !== -1
      );
      return newItems.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
              {item.id} - {item.nombre} - {item.descripcion}
        </li>
      ));
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
              <button variant="primary"> Mas Ejercicios</button>{' '}
              <form></form>
              <button variant="primary"> Mas Ejercicios</button>{' '}
            </div>
          </div>
        </div>
      </main>
      )
    }
  }

export default App;
