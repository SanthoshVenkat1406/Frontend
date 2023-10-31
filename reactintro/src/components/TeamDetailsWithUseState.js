import { useState } from "react";
function TeamDetailsWithUseState(){
    const [teamName, setTeamName]= useState("Chennai super kings");
    const[teamCaptain, setTeamCaptain]= useState("Dhoni");
    const[baseLocation, setBaseLocation]= useState("Chennai");
  {
    function validate()
    {
        let vstatus=false;
        if(teamName==="")
        window.alert("Name cannot be blank");
        else
        vstatus=true;

        if(teamCaptain==="")
        window.alert("Captain name cannot be blank");
        else
        vstatus=true;
        return vstatus;
    }
    return(<div>
        <center>
        <form action="javascript::window.alert('All ok')" onSubmit="validate()">
                <label> Team Name</label><input type="text" onChange= {e=>{setTeamName(e.target.value)}}defaultValue={teamName} /><br></br>
                <label> Team Captain</label><input type="text"onChange= {e=>{setTeamCaptain(e.target.value)}} defaultValue={teamCaptain} /><br></br>
                <label> Base location</label>
                <select size="1" name="base_location"  onChange={e=>{setBaseLocation(e.target.value)}} defaultValue={baseLocation}>
                    
                    defaultValue={baseLocation};
                    <option value="MI"> Mumbai</option>
                    <option value="CSk"> Chennai</option>
                    <option value="RCB"> Bangalore</option>
                    <option value="KKR"> kolkata</option>
                    <option value="SRH"> Hyderabad</option>
                </select><br></br>
                <input type="submit" value="save"/>
        </form>
        <b>Team name</b> {teamName}<br></br>
        <b>Team captain</b> {teamCaptain}<br></br>
        <b>Base location</b> {baseLocation}<br></br><br></br>
        </center>
    </div>)
  }

}
export default TeamDetailsWithUseState;