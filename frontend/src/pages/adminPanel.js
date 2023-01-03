import Issues from './Issues';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';

const AdminPanel = () => {
    const { user } = useAuthContext();
    const [email, setEmail] = useState('');
    if (user && user.role === 'Admin') {
        



    const handleDeleteUser = () => {
        fetch('/api/user/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            
              }),
            })
          };
    return (
        
        <div
        
         className='adminPanel'>
            <Issues />
            <div>
            <label>User email to delete:</label>
            <input
          type="text"
          name="deleteUser"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <button onClick={handleDeleteUser}>Delete User</button>
        </div>
        </div>
        
    )
    }
}
export default AdminPanel;
