import './index.css'

const Tab = props => {
  const {details, changeTab, isMatch} = props
  const {id, buttonText} = details
  const cr = isMatch ? 'act' : 'no'

  const ok = () => {
    changeTab(id)
  }

  return (
    <li className="tab-li">
      <button className={cr} type="button" onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tab
