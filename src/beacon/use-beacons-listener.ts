import { useEffect } from "react";
import { DeviceEventEmitter } from 'react-native'

export function useBeaconsListener() {
  useEffect(() => {
	const subscription = DeviceEventEmitter.addListener(
		'beaconsDidRange',
		(data) => {
			console.log('bleeeeee', data)
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
