
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
 

    return (
        <div>
               
            <h2> booking id: {serviceId}</h2>
            <h3>by:{user?.email}</h3>
            
        </div>
    );
};

export default PlaceOrder;