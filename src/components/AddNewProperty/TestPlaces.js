import React,{useState} from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete'; 
function TestPlaces({setDefaultlatitude, setDefaultlongitude}) {
  const [inputvalue, setInputvalue]= useState("")
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
        <div style={{marginLeft:'40%'}}>
            <PlacesAutocomplete
        value={inputvalue}
        onChange={setInputvalue}
        onSelect={handleInput}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Your City ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
