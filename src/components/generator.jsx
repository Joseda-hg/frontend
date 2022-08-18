export function Generator(props) {
  return (
    <>
      <div className="Generator">
        <i className="GeneratorIcon" >{props.emoji}</i>
        <h1 className="GeneratorName">{props.nombre}</h1>
        <p className="GeneratorDescripcion">{props.descripcion}</p>
        <p className="GeneratorCantidad">{props.cantidadGenerada}</p>
      </div>
    </>
  );
}

