
const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: "5.000",
    fumar: false,
    mascotas: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: "1.200",
    fumar: true,
    mascotas: true
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: "4.500",
    fumar: false,
    mascotas: true
  }
];

// Función para cargar las propiedades en venta
const cargarPropiedadesVenta = () => {
  const contenedor = document.getElementById("venta").querySelector(".row");
  propiedadesVenta.forEach(propiedad => {
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

document.addEventListener("DOMContentLoaded", cargarPropiedadesVenta);
