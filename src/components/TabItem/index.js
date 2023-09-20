// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : 'button'
  const activeLine = isActive ? 'active-line' : 'line'

  return (
    <li className="tab-container">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
      <hr className={activeLine} />
    </li>
  )
}

export default TabItem
