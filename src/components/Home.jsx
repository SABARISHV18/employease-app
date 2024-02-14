import axios from "axios";
import React, { useEffect, useState } from "react";
import DashChart from "./DashChart";
function Home()
{
    const [admin,setAdmin]=useState(0)
    const [employees,setEmployees]=useState()
    const [salary,setSalary]=useState()
    const [categoryCount, setCategoryCount] = useState(0);
    const [employeeCount, setEmployeeCount] = useState(0);
    const [noadminCount, setadminCount] = useState(0);
  
    useEffect(() => {
        axios.get("https://employease-9o6yqkbd3-sabarishs-projects-09ce967f.vercel.app/v1/adminCount")
          .then(result => setadminCount(result.data.count))
          .catch(err => console.log(err))
      }, [])
    const updateCounts = (count, count1) => {
        setCategoryCount(count);
        setEmployeeCount(count1);
      };
    return(
        <div className="row">
            <div className="d-block d-sm-flex justify-content-around mt-3 p-3 mt-5 mt-sm-0 ">
                <div className="pt-3 px-3 pb-3 border shadow w-100 w-sm-25">
                    <div className="text-center pb-1">
                          <h4>Admin Count</h4>
                    </div>
                    <hr />
                    <div className="text-center">
                          <h5>Total:{noadminCount}</h5>
                    </div>
                    
                </div>
                <div className="pt-3 px-3 pb-3 border shadow w-100 w-sm-25">
                    <div className="text-center pb-1">
                    {/* <h4 className="large-screen-title">Number of Employees</h4>
                    <h4 className="small-screen-title">NoE</h4> */}{/*using css*/}
                     <h4 className="d-block d-sm-none">NoE</h4>
                     <h4 className="d-none d-sm-block">Number of Employees</h4>
                    </div>
                    <hr />
                    <div className="text-center">
                          <h5>Total:{employeeCount}</h5>
                    </div>
                    
                </div>
                <div className="pt-3 px-3 pb-3 border shadow w-100 w-sm-25">
                    <div className="text-center pb-1">
                          <h4>Number of Categories</h4>
                    </div>
                    <hr />
                    <div className="text-center">
                          <h5>Total:{categoryCount}</h5>
                    </div>
                    
                </div>

            </div>
            <div className="d-block d-sm-flex">
            <div className="col-md-6 mt-5 ms-5">
            <h3>Graphs:</h3>
            <DashChart updateCounts={updateCounts}/>
            </div> <div className="col-md-4 mt-5 ms-5">
                 <h3>Get Projects from this websites:</h3>
                 <table className="table table-responsive mt-4">
                    <thead>
                        <tr>
                            <th>Platforms</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fiverr</td>
                            <td><a href="https://www.fiverr.com/" target="no_blank">fiverr</a></td>
                        </tr>
                        <tr>
                            <td>Freelancer</td>
                            <td><a href="https://www.freelancer.in/" target="no_blank">freelancer</a></td>
                        </tr>
                        <tr>
                            <td>Behance</td>
                            <td><a href="https://www.behance.net/" target="no_blank">behance</a></td>
                        </tr>
                        <tr>
                            <td>Upwork</td>
                            <td><a href="https://www.upwork.com/" target="no_blank">upwork</a></td>
                        </tr>
                    </tbody>
                 </table>
            </div>
            </div>
        </div>
    )
}
export default Home;