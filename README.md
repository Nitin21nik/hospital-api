# HospitalApi
An API created using NodeJs Mogodb and Express for the doctors of a Hospital to register Patients and Maintain their reports depending on whether they are positive, Negative or Asymptomatic.



#Clone the project

```bash
  git clone https://github.com/Nitin21nik/HospitalApi.git
```

#Go to the project directory

```bash
  cd HOSPITALSERVER
```

#Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
# Documentation

Routes :

    a. api/v1/doctor/register - Registers a new Doctor.
    b. api/v1/doctor/login - Authenticates and returns the JWT token to be used.
    c. api/v1/patient/register - Allows a doctor to register a new patient (JWT Auth enabled).
    d. api/v1/patient/:id/create_report - Allows a doctor to create a patients report (JWT Auth enabled).
    e. api/v1/patient/:id/all_reports - Sends all the reports of a patient oldest to latest. (JWT Auth enabled).
    f. api/v1/report/:status - List of all the reports of all patients with a specific status. (JWT Auth enabled).

Data that needs to be sent with a route :
    
    a. api/v1/doctors/register - name, email & password.
    b. api/v1/doctors/login - email & password
    c. api/v1/patients/register - JWT Token (In Headers), name and phone
    d. api/v1/patients/:id/create_report - JWT Token (In Headers), Patient's ID (in params), status (enums),doctor's id.
    e. api/v1/patients/:id/all_reports - JWT Token (In Headers), Patient's ID (in params).
    f. api/v1/reports/:status - JWT Token (In Headers), status (in params).

Folder Structure

    a. index.js -hospital Server runs here
    b. models - Contains all the models for Doctor, Patient, Report.
    c. routes - Contains all the routes in api folder.
    d. controllers - Contains all the controllers.
    e. config - Contains all the config files.

  
