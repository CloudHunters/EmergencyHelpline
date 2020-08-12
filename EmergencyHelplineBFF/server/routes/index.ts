import * as express from "express";
import {login, register, searchallHospitalsForAnalytics, searchHospitals, submitAdmission, updateFacility
    } from "../app/appservice";
import {updatepatientprofile, viewAdmission, viewFacility, viewHospitalAdmission, viewpatientprofile} from "../app/appservice";

import {ActionAdmissionRequest, searchPatientsForAnalytics} from "../app/appservice";

export const emergencyappBFF = (app: express.Application) => {
    app.get("/", (req: express.Request, res: express.Response) => {
        res.send("Hello world!");
    });

    app.get("/api/login", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        login(authToken, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    app.get("/api/register", (req: express.Request, res: express.Response) => {
        const access_token = req.params.access_token;
        register(access_token, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
        // START of the Patient service
    app.get("/api/viewpatientprofile", (req: express.Request, res: express.Response) => {
        const mobileNumber = req.params.mobileNumber;
        const authToken = req.header("Authorization");
        viewpatientprofile(authToken, mobileNumber)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.get("/api/updatepatientprofile", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        updatepatientprofile(authToken, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    app.get("/api/submitAdmission", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        submitAdmission(authToken, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.get("/api/viewAdmission", (req: express.Request, res: express.Response) => {
        const mobileNumber = req.params.mobileNumber;
        const authToken = req.header("Authorization");
        viewAdmission(authToken, mobileNumber)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    app.get("/api/searchPatientsForAnalytics", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        searchPatientsForAnalytics(authToken)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    // End of the Patient service

      // START of the Hospital service
    app.get("/api/viewFacility", (req: express.Request, res: express.Response) => {
        const hosRegnNo = req.params.hosRegnNo;
        const authToken = req.header("Authorization");
        viewFacility(authToken, hosRegnNo)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.get("/api/updateFacility", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        updateFacility(authToken, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    app.get("/api/submitHospitalAdmission", (req: express.Request, res: express.Response) => {
        const authToken = req.header("Authorization");
        ActionAdmissionRequest(authToken, req)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.get("/api/viewHospitalAdmission", (req: express.Request, res: express.Response) => {
        const HospitalRegnNo = req.params.HospitalRegnNo;
        const authToken = req.header("Authorization");
        viewHospitalAdmission(authToken, HospitalRegnNo)
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    app.get("/api/searchallHospitalsForAnalytics", (req: express.Request, res: express.Response) => {
       // const authToken = req.header("Authorization");
       searchallHospitalsForAnalytics()
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });

    app.get("/api/searchHospitals", (req: express.Request, res: express.Response) => {
      //  const authToken = req.header("Authorization");
        searchHospitals()
            .then((claimables) => {
                res.send(claimables);
            }, (reason) => {
                res.status(500).send(reason.toString());
            });
    });
    // End of the Hospital service

};
