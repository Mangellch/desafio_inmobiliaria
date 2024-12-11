document.addEventListener('DOMContentLoaded', function () {
    const propiedadesVenta = [
      {
        title: "Apartamento de lujo en zona exclusiva",
        imgSrc: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        price: "$5,000",
        rooms: "4 Habitaciones",
        bathrooms: "4 Baños",
        location: "123 Luxury Lane, Prestige Suburb, CA 45678",
        pets: false,
        smoking: false
      },
      {
        title: "Apartamento acogedor en la montaña",
        imgSrc: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        price: "$1,200",
        rooms: "2 Habitaciones",
        bathrooms: "1 Baños",
        location: "789 Mountain Road, Summit Peaks, CA 23456",
        pets: true,
        smoking: true
      },
      {
        title: "Penthouse de lujo con terraza panorámica",
        imgSrc: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        price: "$4,500",
        rooms: "3 Habitaciones",
        bathrooms: "3 Baños",
        location: "567 Skyline Avenue, Skyview City, CA 56789",
        pets: true,
        smoking: false
      }
    ];
  
    const propiedadesAlquiler = [
      {
        title: "Apartamento en el centro de la ciudad",
        imgSrc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        price: "$2,000",
        rooms: "2 Habitaciones",
        bathrooms: "2 Baños",
        location: "123 Main Street, Anytown, CA 91234",
        pets: true,
        smoking: false
      },
      {
        title: "Apartamento luminoso con vista al mar",
        imgSrc: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Este hermoso apartamento ofrece una vista impresionante al mar",
        price: "$2,500",
        rooms: "3 Habitaciones",
        bathrooms: "3 Baños",
        location: "456 Ocean Avenue, Seaside Town, CA 56789",
        pets: true,
        smoking: true
      },
      {
        title: "Condominio moderno en zona residencial",
        imgSrc: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        price: "$2,200",
        rooms: "2 Habitaciones",
        bathrooms: "2 Baños",
        location: "123 Main Street, Anytown, CA 91234",
        pets: false,
        smoking: false
      }
    ];
  
    // Función para mostrar las propiedades
    function mostrarPropiedades(propiedades, contenedor) {
      propiedades.forEach((propiedad) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
          <div class="card">
            <img src="${propiedad.imgSrc}" class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
              <h5 class="card-title">${propiedad.title}</h5>
              <p class="card-text">${propiedad.description}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.location}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.rooms} | <i class="fas fa-bath"></i> ${propiedad.bathrooms}</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
              <p class="${propiedad.smoking ? 'text-success' : 'text-danger'}">
                <i class="fas ${propiedad.smoking ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${propiedad.smoking ? 'Permitido fumar' : 'No se permite fumar'}
              </p>
              <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
              </p>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
      });
    }
  
    const ventaContainer = document.getElementById('venta-list');
    const alquilerContainer = document.getElementById('alquiler-list');
  
    mostrarPropiedades(propiedadesVenta.slice(0, 3), ventaContainer);
    mostrarPropiedades(propiedadesAlquiler.slice(0, 3), alquilerContainer);
  });
  