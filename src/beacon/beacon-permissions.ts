import { DeviceEventEmitter } from "react-native";
import Beacons from "react-native-beacons-manager";

export const requestPermissions = () => {
	console.log('will request', Beacons)
  // @ts-ignore
  Beacons.requestAlwaysAuthorization();

  // Define a region which can be identifier + uuid,
  // identifier + uuid + major or identifier + uuid + major + minor
  // (minor and major properties are numbers)
  const region = {
    identifier: "Estimotes",
    uuid: "426C7565-4368-6172-6D42-6561636F6E73"
  };

  // Request for authorization while the app is open
  // @ts-ignore
  Beacons.requestWhenInUseAuthorization();

  Beacons.startMonitoringForRegion(region);
  Beacons.startRangingBeaconsInRegion(region.identifier, region.uuid);

  // @ts-ignore
  Beacons.startUpdatingLocation();
};
