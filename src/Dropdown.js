import React, { useState, useEffect, useRef } from 'react'

let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let outsideClickHandler = (event) => {
      // check if the dropdown domNode was the node that was just clicked
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", outsideClickHandler)

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler)
    }
  })

  return domNode
}

function Dropdown (props) {
  const { header, multiselect, subject, items, showIcons, selections, onChange } = props

  const [isToggled, setIsToggled] = useState(false)
  const [isAllSelected, setIsAllSelected] = useState(false)

  const handleAddItem = (addedItemId) => {
    if (onChange) {
      let newSelections = multiselect ? [...selections, addedItemId] : [addedItemId]
      onChange(newSelections)
      // check "all-selected" box if all items are now selected
      if (newSelections.length === items.length) {
        setIsAllSelected(true)
      }
    }
  }

  const handleRemoveItem = (removedItemId) => {
    if (onChange) {
      let newSelections = selections.filter(i => i !== removedItemId)
      onChange(newSelections)
      // uncheck "all-selected" box if all items are no longer selected
      if (newSelections.length !== items.length) {
        setIsAllSelected(false)
      }
    }
  }

  const handleSelectAll = () => {
    if (onChange) {
      setIsAllSelected(!isAllSelected)
      onChange(items.map(a => a.id))
    }
  }

  const handleDeselectAll = () => {
    if (onChange) {
      setIsAllSelected(!isAllSelected)
      onChange([])
    }
  }

  let domNode = useClickOutside(() => {
    setIsToggled(false)
  })

  // build dropdown
  return (
    <div ref={domNode} className="dropdown-container">
      {header ? <h2>{header}</h2> : null}
      
      <div className="dropdown-input">
        <span onClick={() => setIsToggled(!isToggled)}>
          <i className={`angle ${isToggled ? "up" : "down"} icon`}></i>
        </span>
        {multiselect
          ? <span onClick={isAllSelected ? handleDeselectAll : handleSelectAll}>
              <i className={`${isAllSelected ? "check circle" : "circle outline"} icon`}></i>
            </span>
          : null
        }
        <div className="dropdown-values">
          {selections.length 
            ? selections.map(i => 
                <div key={i} className="dropdown-value"> 
                  {`${items[i].label} `} 
                  <span className="dropdown-remove" onClick={() => handleRemoveItem(i)}>
                    <i className="grey close icon"></i>
                  </span>
                </div>) 
            : <div onClick={() => setIsToggled(!isToggled)} className="dropdown-placeholder">
                Select {`${subject ? subject : "item"}${multiselect ? "(s)" : ""}`}
              </div> 
          }
        </div>
      </div>

      <div id="opt-container">
        <div className={`dropdown-options ${isToggled ? "dropdown-active" : ""}`}>
          {items.filter(it => selections.findIndex(sel => sel === it.id) === -1).map(item =>
            <div className="dropdown-item" key={item.id} onClick={() => handleAddItem(item.id)}>
              {showIcons
                ? <img src={item.image}/>
                : null
              }
              {item.label}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dropdown