var XMLParser = require("react-xml-parser")

const LON = 0
const LAT = 1
const ELEV = 2
const TIMESTAMP = 3

function transform_69_420 (gpx_file_as_string) {
    try {
      var xml = new XMLParser().parseFromString(gpx_file_as_string)

      let coorddinates = []
      let errors = []

      xml.getElementsByTagName("trkpt").forEach( trkpt => {
        let position = [null,null,null,null,null,null]

        position[LON] = parseFloat(trkpt.attributes.lon)
        position[LAT] = parseFloat(trkpt.attributes.lat)

        if (trkpt.children.length > 0 && trkpt.children[0].name === "ele")
          position[ELEV] = parseFloat(trkpt.children[0].value)
        if (trkpt.children.length > 0 && trkpt.children[0].name === "time")
          position[TIMESTAMP] = parseFloat(trkpt.children[0].value)

        coorddinates.push(position)
      })
      
      return {coorddinates: coorddinates, _params: {LON: 0, LAT: 1, ELEV: 2, TIMESTAMP: 3}, errors: errors}
    } catch (e) {
      return {error_bool: true, error: e }
    }
  }

  module.exports = transform_69_420