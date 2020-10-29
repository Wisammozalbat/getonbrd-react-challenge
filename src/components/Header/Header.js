import React, { useEffect, useState } from 'react';
import classes from "./Header.module.css"

const Header = props => {

    const [visible, setVisible] = useState(null)

    const onChangeFilterHandler = (newVal) => {
        props.onChangeFilter(newVal)
        setVisible(false)
    }


    return (
        <div className={classes.HeaderContainer}>
            <div className={classes.JobsList}>{props.filterValue === 'programming' ? "Programming" : props.filterValue === 'design-ux' ? "Design/UX" : "All Jobs"}({props.cuantity})</div>
            <div className={classes.DropdownContainer}>
                <div className={classes.Dropdown} onClick={() => setVisible(true)}>
                    <div>{props.filterValue === 'programming' ? "Programming" : props.filterValue === 'design-ux' ? "Design/UX" : "All Jobs"}</div>
                    <div>{'>'}</div>
                </div>
                <div className={classes.DropdownOptions} style={{display: visible ? "block": "none"}}>
                    <div onClick={() => onChangeFilterHandler("All Jobs")}>All</div>
                    <div onClick={() => onChangeFilterHandler("programming")}>Programming</div>
                    <div onClick={() => onChangeFilterHandler("design-ux")}>Design/UX</div>
                </div>
            </div>
        </div>
    )
}

export default Header;