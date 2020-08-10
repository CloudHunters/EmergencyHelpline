export class ModelData {
  stateName: String;
  districtTalukPinCode: DistrictTalukPinCode[];
}

export class DistrictTalukPinCode {
  districtTalukPinCode: String;
}
export class ApiResponseArray{
  apiResArray:ApiResponse [];
}

export class ApiResponse  {
  hospitalRegnNo: String = null;
  hospitalName: String = null;
  hospitalType: String = null;
  contactNumber: String = null;
  address: String = null;
  multiSpeciality: String = null;
  ambulanceAvailability: String = null;
  bloodBankAvailability: String = null;
  scanAvailability: String = null;
  insuranceAvailability: String = null;
  email: String = null;
  city: String = null;
  pincode: String = null;
  state: String = null;
  country: String = null;
  latitude: String = null;
  longitude: String = null;
  bedCapacity: String = null;
  bedAvailable: String = null;
  ventilatorFacility: String = null;
  ventilatorCapacity: String = null;
  ventilatorAvailable: String = null;
  covidSpeciality: String = null;
  heartSpeciality: String = null;
  accidentSpeciality: String = null;
  orthoSpeciality: String = null;
  neuroSpeciality: String = null;
}
export class RequestInput{
  state:String = null;
  city:String = null;
  pincode:String = null;
  speciality:String = null;
}
