import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
    RiShoppingCart2Fill, //RiShoppingBasket2Line,
    RiShoppingCart2Line // RiShoppingBasket2Fill, 
} from 'react-icons/ri';
import Busca from 'components/busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const iconeProps = {
    color: 'white',
    size: 24
}


export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <nav className={styles.nav}>
            < Logo className={styles.logo} onClick={() => navigate('/')} />
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Página Inicial
                    </Link>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca />
            </div>
            <div className={styles.icones}>
                <Link to='/carrinho'>
                    {location.pathname === '/carrinho'
                        ? <RiShoppingCart2Fill  {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </Link>
            </div>
        </nav>
    )
}