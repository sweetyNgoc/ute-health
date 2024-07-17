import styles from './cardDashboard.module.scss'
import { useNavigate } from 'react-router-dom'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
export default function CardDashBoard({ data, goto }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${goto}`)
    }
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.icon}><AssignmentTurnedInIcon /> </div>
            <h2>{data.quant}</h2>
            <h3>{data.text}</h3>

        </div>
    )
}