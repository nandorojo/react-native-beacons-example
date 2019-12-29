import { useEffect } from "react";
import { DeviceEventEmitter } from 'react-native'
import { requestPermissions } from './beacon-permissions'

export function useBeaconsListener() {
//   useEffect(requestPermissions, [])
console.log('hook')
  useEffect(() => {
	const subscription = DeviceEventEmitter.addListener(
		'beaconsDidRange',
		(data) => {
			const beacon = data.beacons.find(b => b.uuid.includes('426C7565'))
			if (beacon) console.log('okkkkkkkkkk', beacon)
			console.log('beks')
			// console.log('bbeeeeeeeccc', beacon)
		  // data.region - The current region
		  // data.region.identifier
		  // data.region.uuid
	  
		  // data.beacons - Array of all beacons inside a region
		  //  in the following structure:
		  //    .uuid
		  //    .major - The major version of a beacon
		  //    .minor - The minor version of a beacon
		  //    .rssi - Signal strength: RSSI value (between -100 and 0)
		  //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
		  //    .accuracy - The accuracy of a beacon
		}
	)
	return () => {
		subscription.remove()
	}
  }, []);
}
