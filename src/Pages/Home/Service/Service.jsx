import { useState } from "react"
import ServicesCard from "./ServicesCard"


const Service = () => {

    const [services, setServices] = useState([])

    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))

  return (
    <div className='text-center mt-5'>
        <h3 className='font-bold text-xl text-orange-600'>Service</h3>
        <h2 className='text-5xl font-bold mb-2'>Our Service Area</h2>
        <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services.map(service => <ServicesCard
                key={service._id}
                service={service}
            ></ServicesCard>)
        }
    </div>
    </div>
  )
}

export default Service