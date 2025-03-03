import "../header.css";

export const Header = () => {
  return (
    <header className="encabezado">
      <div className="contenedor">
        {/* Logo y nombre de la entidad */}
        <div className="logo-titulo">
          <img src="/logo.jpeg" alt="Logo" className="logo" />
          <h1 className="titulo">Municipalidad Distrital de José Leonardo Ortiz</h1>
        </div>

        {/* Botón de acción */}
        <div className="contenedor-boton">
          <button className="boton boton-secundario">Registra tu asistencia</button>
        </div>
      </div>
    </header>
  );
};

export default Header;