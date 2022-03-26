import './HistoryItem.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {
    id,
    orderId,
    customer,
    address,
    productTitle,
    date,
    status,
  } = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history">
      <div className="domain-details-container">
        <div className="domain-details">
          <div>
            <div className="order">ORDER ID</div>
            <p className="orderId">{orderId}</p>
          </div>

          <div>
            <div className="customers">CUSTOMERS</div>
            <p className="customer">{customer}</p>
          </div>

          <div>
            <div className="address">ADDRESS</div>
            <p className="address">{address}</p>
          </div>

          <div>
            <div className="product_tittles">PRODUCTS</div>
            <p className="productTitle">{productTitle}</p>
          </div>

          <div>
            <div className="date_order">DATE ORDER</div>
            <p className="date">{date}</p>
          </div>

          <div>
            <div className="statuses">STATUS</div>

            <p className="status">{status}</p>
          </div>
        </div>

        <button
          testId="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
