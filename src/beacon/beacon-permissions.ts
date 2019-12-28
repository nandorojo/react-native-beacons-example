import { DeviceEventEmitter } from "react-native";
import Beacons from "react-native-beacons-manager";

export const requestPermissions = () => {
  // @ts-ignore
  Beacons.requestAlwaysAuthorization();

  // Define a region which can be identifier + uuid,
  // identifier + uuid + major or identifier + uuid + major + minor
  // (minor and major properties are numbers)
  const region = {
    identifier: "Estimotes",
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D"
  };

  // Request for authorization while the app is open
  // @ts-ignore
  Beacons.requestWhenInUseAuthorization();

  Beacons.startMonitoringForRegion(region);
  Beacons.startRangingBeaconsInRegion(region.identifier, region.uuid);

  // @ts-ignore
  Beacons.startUpdatingLocation();
};
