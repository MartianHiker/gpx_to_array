# gpx_to_array

> takes a gpx file as a string and returns the data as an array

## Install

```
$ npm install gpx_to_array
```

## Usage Example

The package is very straighforwarddsd and simple to use: 
```
const gpx_to_array = require("gpx_to_array")
let result = gpx_to_array(xml_file_as_string)
```

## Expected Outut

You should expect the following JSON array to be returned after calling this package

```
{coorddinates: [...], _params: {LON: 0, LAT: 1, ELEV: 2, TIMESTAMP: 3}, errors: errors}
```
### coorddinates

this is an array of array like the following:
```
[ [lat, lon, elevation, timestamp], .... , [lat, lon, elevation, timestamp] ]
```
### what's the point of _params

Params are needed so you don't need to remember the position of lat, lon and so on in the array. You can retrieve information from coorddinates like the following:


```
let result = gpx_to_array(xml_file_as_string)

const LON = result._params.LON
const LAT = result._params.LAT
const ELEV = result._params.ELEV
const TIMESTAMP = result._params.TIMESTAMP

result.coordinates.forEach(coordinate => {
	...
	let coordinate_lon = coordinate[LON] // you don't need to remeber that lon is at position 0
	let coordinate_lat = coordinate[LAT] // you don't need to remeber that lat is at position 1
	...
})
```