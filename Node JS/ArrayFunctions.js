countries=["India", "US", "Canada", "Australia", "Japan"];
capital= ["New Delhi", "Washington", "ottawa", "canberra", "Tokyo"];
function getCapitals(country)
{
    for(i in countries)
    {
        if(countries[i] == country)
        return capital[i];
    }
    return "Country doesnot exist";
}

module.exports.getCapCity=getCapitals;