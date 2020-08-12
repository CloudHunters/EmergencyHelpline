import axios from "axios";
import Big from "big.js";
// import {IClaimable, IRawClaimableResponse} from "../model/entities";
import * as express from "express";
import moment from "moment";

export function login(authToken: string, request: any) {
    return axios({
        data: request,
        headers: {Authorization: authToken},
        method: "post",
        url: "http://localhost:8080/oauth/token",

    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}

export function register(accessToken: string, request: any) {
    return axios({
        // headers: {"X-Auth-Token": authToken},
        data: request,
        method: "post",
        url: "http:/localhost:9300/authDetails/register"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
///  START of patient service /////
export function viewpatientprofile(authToken: string, mobileNumber: string) {
    return axios({
        headers: {Authorization: authToken},
        method: "get",
        url: "http:/localhost:8082/patient/viewPatientProfile?mobileNumber=" + mobileNumber
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}

export function updatepatientprofile(accessToken: string, request: any) {
    return axios({
        data: request,
        headers: {Authorization: accessToken},
        method: "post",
        url: "http:/localhost:8082/patient/updateProfile"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}

export function submitAdmission(accessToken: string, request: any) {
    return axios({
        data: request,
        headers: {Authorization: accessToken},
        method: "post",
        url: "http:/localhost:8082/patient/submitAdmission"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
export function viewAdmission(authToken: string, mobileNumber: string) {
    return axios({
        headers: {Authorization: authToken},
        method: "get",
        url: "http:/localhost:8082/patient/viewAdmission?mobileNumber=" + mobileNumber
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
export function searchPatientsForAnalytics(authToken: string) {
    return axios({
        headers: {Authorization: authToken},
        method: "get",
        url: "http:/localhost:8082/patient/searchPatientsForAnalytics"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
///  End of patient service /////
///  START of Hospital service /////
export function viewFacility(authToken: string, hosRegnNo: string) {
    return axios({
        headers: {Authorization: authToken},
        method: "get",
        url: "http:/localhost:8083/hospital/viewFacility?hosRegnNo=" + hosRegnNo
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}

export function updateFacility(accessToken: string, request: any) {
    return axios({
        data: request,
        headers: {Authorization: accessToken},
        method: "post",
        url: "http:/localhost:8083/hospital/updateFacility"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}

export function ActionAdmissionRequest(accessToken: string, request: any) {
    return axios({
        data: request,
        headers: {Authorization: accessToken},
        method: "post",
        url: "http:/localhost:8082/hospital/ActionAdmissionRequest"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
export function viewHospitalAdmission(authToken: string, HospitalRegnNo: string) {
    return axios({
        headers: {Authorization: authToken},
        method: "get",
        url: "http:/localhost:8082/hospital/viewAdmission?HospitalRegnNo=" + HospitalRegnNo
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
export function searchallHospitalsForAnalytics() {
    return axios({
        // headers: {"Authorization": authToken},
        method: "get",
        url: "http:/localhost:8082/hospital/searchallHospitalsForAnalytics"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
export function searchHospitals() {
    return axios({
        // headers: {"Authorization": authToken},
        method: "get",
        url: "http:/localhost:8082/hospital/searchHospitals"
    })
        .then((response) => {
            return (response.data);
        }, (reason) => {
            return Promise.reject(reason);
        });
}
///  End of Hospital service /////

function formatDate(dateString: string) {
    const date = moment(dateString);
    return date.format("d MMM YYYY");
}

function formatPrice(subunits: number, currencyCode: string) {
    const currencyFormat = new Intl.NumberFormat("en-AU", {style: "currency", currency: currencyCode});
    const divisor = Math.pow(10, currencyFormat.resolvedOptions().maximumFractionDigits);
    const units = Big(subunits).div(divisor);
    return currencyFormat.format(Number(units));
}
