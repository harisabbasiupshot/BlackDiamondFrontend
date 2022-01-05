import React, { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import '../fullcss.css'
function TestPlaces({ setDefaultlatitude, setDefaultlongitude }) {
  const [inputvalue, setInputvalue] = useState("")
  const searchOptions = {
    location: new window.google.maps.LatLng(33, 73),
    componentRestrictions: { country: ['us'] },
    radius: 2000
  }
  const handleInput = async value => {
    console.log(value)
    const placedetails = await geocodeByAddress(value)
    console.log(placedetails)
    console.log(placedetails[0].geometry.location.lat())
    console.log(placedetails[0].geometry.location.lng())
    setDefaultlatitude(placedetails[0].geometry.location.lat())
    setDefaultlongitude(placedetails[0].geometry.location.lng())



    setInputvalue(value)
  }
  return (
    <div style={{ marginLeft: '40%' }}>
      <PlacesAutocomplete
        value={inputvalue}
        onChange={setInputvalue}
        onSelect={handleInput}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              style={{ backgroundColor: '#00ba74', borderRadius: '3px', border: 'none', padding: '1%', color: 'white', height:'45px', textAlign:'center' }}
              id="searchcityid"
              {...getInputProps({
                placeholder: 'Search Your City ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container" style={{ borderRadius: '5px', position: 'relative', left: '-32%', marginTop:'1%', borderTop:suggestions.length!=0?'5px solid #2D3954':null, borderBottom:suggestions.length!=0?'5px solid #00ba74':null }}>
              {loading && <div>Loading...</div>}
              {suggestions.length!=0 && <div id="resultsdiv"><span style={{color:'white', marginLeft:'5px'}}>Search Results</span></div>}
              
              {suggestions.map(suggestion => {
                const inputstyle = {
                  backgroundColor: suggestion.active ? '#2D3954' : "#00ba74",
                  color: "white",
                  padding: '5px'
                }
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = inputstyle
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    </div>
  )
}

export default TestPlaces
