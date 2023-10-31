import { Component } from "react";

class TeamDetails extends Component
{
    teamName="Chennai";
    teamCaptain="Dhoni"
    componentDidMount()
    {
      console.log("TeamDetails component mounted....");
    }
    componentDidUpdate()
    {
      console.log("TeamDetails component has updated... ")
    }
    componentWillUnmount()
    {
      console.log("TeamDetails component has been unmounted....");
    }
  render()
  {
    return(<div>
        <center>
        <form>
                <label> Team Name</label><input type="text" value={this.teamName} /><br></br>
                <label> Team Captain</label><input type="text" value={this.teamCaptain} /><br></br>
                <label> Base location</label>
                <select size="1" name="base_location" value={this.baseLocation}>
                    <option value="MI"> Mumbai</option>
                    <option value="CSk"> Chennai</option>
                    <option value="RCB"> Bangalore</option>
                    <option value="KKR"> kolkata</option>
                    <option value="SRH"> Hyderabad</option>

                </select><br></br>
                
        </form></center>
    </div>)
  }

}
export default TeamDetails;