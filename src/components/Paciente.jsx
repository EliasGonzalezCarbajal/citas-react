const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
      <span className="font-normal normal-case">
        Tom
      </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario {''}
      <span className="font-normal normal-case">
        Elias
      </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">
        correo@correo.com
      </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
      <span className="font-normal normal-case">
        10/03/23
      </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
      <span className="font-normal normal-case">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptatum quis repudiandae esse! Error maiores repellendus natus blanditiis cupiditate tenetur. Id ipsum recusandae obcaecati, veritatis asperiores tempore voluptate repudiandae pariatur!
      </span>
    </p>
  </div>
  )
}

export default Paciente