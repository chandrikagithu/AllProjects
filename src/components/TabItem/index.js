import './index.css'

const TabItem = props => {
  const {tabDetails, updatedtabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClass = isActive ? `active-tab-btn` : ''

  const onClicktab = () => {
    updatedtabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClicktab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
