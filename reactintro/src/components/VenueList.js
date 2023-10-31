import './VenueList.css';
function VenueList()
{
    let VenueCount=15;
    return (
        <div className="VenueList">
        <center><b>List of Venues</b>{VenueCount}<br></br>
        <ol>
            <li>Chepauk, chennai</li>
            <li>chinnaswamy stadium, Banglore</li>
            <li>Eden gardens, Kolkata</li>
            <li>Wankhade, Mumbai</li>
        </ol>
        </center>
        </div>
    )
}
export default VenueList;