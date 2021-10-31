import React,{useState, useEffect} from 'react';

const ManageServices = () => {
    const [services,setServices] = useState([])
useEffect( () =>{
    fetch('')
    .then(res=>res.json())
    .then(data => setServices(data))
},[])

const handleDelete = id => {
    const url =`https://secret-harbor-38071.herokuapp.com/services/${id}`;
    fetch(url ,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}



    return (
        <div>
            <h2>manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;