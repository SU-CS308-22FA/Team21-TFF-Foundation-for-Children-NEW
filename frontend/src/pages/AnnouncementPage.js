import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';

const AnnouncementPage = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={{ textAlign: 'center', marginBottom: '20px', marginTop: '50px' }}
      >
        Announcements
      </h1>
      <Announcements />
    </div>
  );
};

export default AnnouncementPage;
