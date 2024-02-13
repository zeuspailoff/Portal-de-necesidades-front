
import { Link } from 'react-router-dom';
import './FloatingButton.css';
import { useUser } from '../../UserContext';

const FloatingButton = () => {
  const [user, setUser] = useUser()
  return (
    <div className="floating_button_container">
      <Link to="/demands/new">
        {user ? <button className="floating-button">Demand</button> : null}

      </Link>
    </div>
  );
};

export default FloatingButton;
