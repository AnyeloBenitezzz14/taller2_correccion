import React from 'react'

export const Content = () => {
  const productos = [
    {
      id: 1,
      nombre: "Auriculares Audio‑Technica ATH‑M20x",
      precio: 100000,
      img: "/img/ATH-M20X_1.webp",
    },
    {
      id: 2,
      nombre: "Interfaz de audio Apollo Solo",
      precio: 1450000,
      img: "/img/Apollo.jpg",
    },
    {
      id: 3,
      nombre: "Guitarra clasica Yamaha C40",
      precio: 1670,
      img: "/img/guitarra.webp",
    },
    {
      id: 4,
      nombre: "Parlantes KRK Rokit 5 G4",
      precio: 593,
      img: "/img/KRK.jpg",
    },
    {
      id: 5,
      nombre: "Akai MPK Mini MK3",
      precio: 350,
      img: "/img/midi.jpg",
    },
    {
      id: 6,
      nombre: "Fender Frontman 10G",
      precio: 506,
      img: "/img/amp.jpg",
    },
  ];

  return (
    <main className="container-fluid px-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="text-warning mb-3">Productos destacados</h4>

          <div className="row">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow bg-dark text-light">
                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={p.nombre}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="mb-1">{p.nombre}</h6>
                    <p className="fw-bold text-success mb-2">
                      ${p.precio} USD
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <button type="button" className="btn btn-warning btn-sm flex-fill">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger btn-sm flex-fill">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white rounded shadow p-4" style={{ top: "150px" }}>
            <h5 className="mb-3">Agregar producto</h5>

            <input className="form-control mb-2" placeholder="Nombre completo" />
            <input className="form-control mb-2" placeholder="Correo electrónico" />
            <input className="form-control mb-3" placeholder="Dirección" />

            <hr/>

            <h6>Pago digital</h6>
            <input className="form-control mb-2" placeholder="Número de tarjeta" />

            <div className="row">
              <div className="col-6">
                <input className="form-control mb-2" placeholder="MM/AA" />
              </div>
              <div className="col-6">
                <input className="form-control mb-2" placeholder="CVV" />
              </div>
            </div>
            <button className="btn btn-success w-100 mt-2"><i className="bi bi-cart-fill"></i>
              Agregar al carrito
            </button>
            <button className="btn btn-danger w-100 mt-2"><i className="bi bi-trash-fill"></i>
              limpiar carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

