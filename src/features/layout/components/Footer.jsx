import React from 'react'

export const Footer = () => {
  return (
    <footer
      className="mt-0 py-3"
      style={{
        background: "linear-gradient(135deg, #1ae5f3, #1b272b, #412e97)",
        boxShadow: "0 -8px 20px rgba(0,0,0,.3)",
        borderTop: "1px solid rgba(255,255,255,.1)",
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <span className="text-light small">
              © {new Date().getFullYear()} MusicStore — Creado por Angelo Pollon 
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}