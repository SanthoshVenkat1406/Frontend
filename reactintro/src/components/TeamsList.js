import { Component } from 'react';
import './TeamsList.css';
class TeamsList extends Component
{
    componentDidMount()
    {
      console.log("TeamsList component mounted....");
    }
    componentDidUpdate()
    {
      console.log("TeamsList component has updated... ")
    }
    componentWillUnmount()
    {
      console.log("TeamsList component has been unmounted....");
    }
 render()
{
    return (
        <div className='VenueList'>
    <center className='TeamsList'><b> List of teams in IPL 2023</b><br></br>
    <ul>
        <li> CSK</li>
        <li> RCB</li>
        <li>MI</li>
        <li>KKR</li>
        <li>GT</li>

    </ul>
    </center>
    </div>
    )
}
}
export default TeamsList;