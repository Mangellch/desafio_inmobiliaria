
const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: "2.000",
    fumar: false,
    mascotas: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: "2,500",
    fumar: true,
    mascotas: true
  },
  {
    nombre: "Condominio moderno en zona residencial",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: "2,200",
    fumar: false,
    mascotas: false
  }
];

// Función para cargar las propiedades en alquiler
const cargarPropiedadesAlquiler = () => {
  const contenedor = document.getElementById("alquiler").querySelector(".row");
  propiedadesAlquiler.forEach(propiedad => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
      <div class="card">
        <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
          <p class="${propiedad.fumar ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.fumar ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar'}</p>
          <p class="${propiedad.mascotas ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.mascotas ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", cargarPropiedadesAlquiler);
