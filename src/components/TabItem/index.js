// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    changeTab(tabId)
  }

  const css = isActive ? 'active-tab-button' : ''

  return (
    <li className="tab-item">
      <button type="button" className={`button ${css}`} onClick={clickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
