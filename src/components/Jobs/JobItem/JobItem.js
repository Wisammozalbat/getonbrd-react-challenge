import React from 'react';
import classes from "./JobItem.module.css"
import {BiPaint} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai'

const JobItem = props => {

    let { job = {} } = props;
    let icon = null;
    if ( job.id === "programming" ) {
        icon = <BsCodeSlash className={classes.Icon} />
    } else {
        icon = <BiPaint className={classes.Icon} />
    }

    return (
        <div className={classes.JobItemContiner}>
            <div className={classes.JobItemContent}>
                <div className={classes.IconContainer}>{icon}</div>
                <div className={classes.Content}>
                    <div className={classes.Title}>{job.attributes.name}</div>
                    <div className={classes.Company}>Company name</div>
                    <div className={classes.Salary}>1000USD - 1500USD</div>
                </div>
            </div>
            <div className={classes.Delete} onClick={() => props.onDelete(job.key)}>
                <AiOutlineDelete className={classes.DeleteIcon}/>
                <div>Remove from list</div>
            </div>
        </div>
    )
}

export default JobItem;