import Issues from './Issues';
import { useAuthContext } from '../hooks/useAuthContext';


const AdminPanel = () => {
    const { user } = useAuthContext();
    if (user && user.role === 'Admin') {
    return (
        
        <div
        
         className='adminPanel'>
            <Issues />
             
        </div>
    )
    }
}
export default AdminPanel;
