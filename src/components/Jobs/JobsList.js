import React, { useEffect, useState } from 'react';
import JobItem from './JobItem/JobItem';
import classes from './JobsList.module.css'

const JobsList = props => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        setJobs(props.jobs)
    }, [props.jobs])

    return (
        <div className={classes.JobsListContainer}>
            {jobs.map(job => {
                return <JobItem job={job} key={job.key} onDelete={props.onDelete}/>
            })}
        </div>
    )
}

export default JobsList;