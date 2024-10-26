import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartData} = value

      return (
        <ul className="cart-list">
          {cartData.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
