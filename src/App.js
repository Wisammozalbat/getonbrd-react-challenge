import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import JobsList from './components/Jobs/JobsList';
import background from './assets/texture-transparent-gray.png';
// import axios from 'axios'

const jobsListData = [
  {
      id: "programming",
      type: "category",
      attributes: {
          name: "Programming",
          dimension: "programming"
      },
      relationships: {}
  },
  {
      id: "advertising-media",
      type: "category",
      attributes: {
          name: "Advertising & Media",
          dimension: "advertising_media"
      },
      relationships: {}
  },
  {
      id: "data-science-analytics",
      type: "category",
      attributes: {
          name: "Data Science / Analytics",
          dimension: "data_analytics"
      },
      relationships: {}
  },
  {
      id: "digital-marketing",
      type: "category",
      attributes: {
          name: "Digital Marketing",
          dimension: "digital_marketing"
      },
      relationships: {}
  },
  {
      id: "sysadmin-devops-qa",
      type: "category",
      attributes: {
          name: "SysAdmin / DevOps / QA",
          dimension: "sysadmin"
      },
      relationships: {}
  },
  {
      id: "sales",
      type: "category",
      attributes: {
          name: "Sales",
          dimension: "sales"
      },
      relationships: {}
  },
  {
      id: "design-ux",
      type: "category",
      attributes: {
          name: "Design / UX",
          dimension: "design"
      },
      relationships: {}
  },
  {
      id: "innovation-agile",
      type: "category",
      attributes: {
          name: "Innovation & Agile",
          dimension: "innovation_agile"
      },
      relationships: {}
  },
  {
      id: "customer-support",
      type: "category",
      attributes: {
          name: "Customer Support",
          dimension: "customer_support"
      },
      relationships: {}
  },
  {
      id: "operations-management",
      type: "category",
      attributes: {
          name: "Operations / Management",
          dimension: "operations"
      },
      relationships: {}
  }
]

export default function App() {

  const [jobs, setJobs] = useState([])
  const [filterItemsBy, setFilterItemsBy] = useState('All Jobs')

  const onDeleteJob = (key) => {
    setJobs(jobs.filter(job => job.key !== key))
  }

  const onFilterHandler = (value) => {
    setFilterItemsBy(value)
    if(value!=="All Jobs") {
      let newJobs = jobsListData.filter(job => job.id === value)
      newJobs = newJobs.map(job => {return {...job, key: Math.random()}})
      setJobs(newJobs)
    }
    else {
      let newJobs = jobsListData.filter(job => job.id === "design-ux" || job.id === "programming")
      newJobs = newJobs.map(job => {return {...job, key: Math.random()}})
      setJobs(newJobs)
    }
  }

  useEffect(() => {
    let newJobs = jobsListData.filter(job => job.id === "design-ux" || job.id === "programming")
    newJobs = newJobs.map(job => {return {...job, key: Math.random()}})
    setJobs(newJobs)

    // const config = {
    //   url: "https://www.getonbrd.com/api/v0/categories?per_page=10&page=1",
    //   method: 'get',
    //   headers: {
    //   }
    // };

    // axios(config)
    // .then(res => {
    //   setJobs(res.data.map(job => job.id === "diseno-ux" || job.id === 'programacion'))
    // })
    // .catch(err => {
    //   console.error(err.message)
    // })
  }, [])

  return (
    <div className={classes.App} style={{backgroundImage: "url(" + background + ")"}}>
      <Header onChangeFilter={onFilterHandler} filterValue={filterItemsBy} cuantity={jobs.length}/>
      <JobsList jobs={jobs} onDelete={onDeleteJob}/>
    </div>
  );
}
