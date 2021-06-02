import React, { useState, useEffect } from "react";

function JobListings() {
  let [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://remotive.io/api/remote-jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  return (
    <>
      {jobs.map((job) => {
        return (
          <div className="jobs-container">
            <h3>{job.company_name}</h3>
            <h4>{job.title}</h4>
            <p>{job.job_type}</p>
            <p>{job.candidate_required_location}</p>
            <button className="apply-button">
              <a>{job.url}</a> APPLY
            </button>
          </div>
        );
      })}
    </>
  );
}

export default JobListings;
