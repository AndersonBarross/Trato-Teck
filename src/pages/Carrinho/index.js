import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Item from 'components/item';
import { resetarCarrinho } from 'store/reducers/carrinho';

export default function Carrinho () {
    const dispatch = useDispatch();
    const {carrinho, total} = useSelector(state => {
        let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
        const item = state.itens.find(item => item.id === itemNoCarrinho.id);
        total += (item.preco * itemNoCarrinho.quantidade)
        itens.push({
            ...item,
            quantidade: itemNoCarrinho.quantidade,
        })
        return itens;
    }, []);
        return {
            carrinho: carrinhoReduce,
            total,
        };
    });
    return (
        <div>
            <Header 
                titulo='Carrinho de compras'
                descricao= 'Confira os produtos que você adicionou ao Carrinho'
            />
            <div className={styles.Carrinho}>
                {carrinho.map(item => < Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>
                        Resumo da Compra
                    </strong>
                    <span>
                        subtotal: <strong> R$ {total.toFixed(2)}</strong>
                    </span>
                </div>
                <button
                    className={styles.finalizar}
                    onClick={() => dispatch(resetarCarrinho())}
                    >
                    Finalizar Compra
                </button>
            </div>

        </div>
    )
}
