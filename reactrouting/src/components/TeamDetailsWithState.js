import { Component } from "react";

class TeamDetailsWithState extends Component{
    constructor(props)
    {
        super(props);
        this.state={teamName:"CSK",baseLocation:"Chennai",teamCaptain:"Dhoni"};
    }
    teamName="CSK";
    baseLocation="Chennai";
    teamCaptain="Dhoni"
  render()
  {
    return(<div>
        <center>
        <form>
                <label> Team Name</label><input type="text" defaultValue={this.state.teamName} /><br></br>
                <label> Team Captain</label><input type="text" defaultValue={this.state.teamCaptain} /><br></br>
                <label> Base location</label>
                <select size="1" name="base_location" defaultValue={this.state.baseLocation}>
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
export default TeamDetailsWithState;