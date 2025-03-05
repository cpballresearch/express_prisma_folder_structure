<div align="center">
  <img src="assets/banners/header-banner.jpeg" alt="Hospital Management System" width="800px">
  
  # 🏥 Hospital Management System API

  [![Build Status](https://travis-ci.org/yourusername/hms_api.svg?branch=master)](https://travis-ci.org/yourusername/hms_api)
  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
</div>

A **powerful, scalable, and modern REST API** built with **Node.js** and **Express.js** to streamline hospital operations. This solution integrates advanced features to manage patient records, doctor schedules, appointments, and inventory seamlessly.

---

## 📑 Table of Contents
- [🌟 Key Features](#-key-features)
- [🚀 Quick Start](#-quick-start)
- [🛠 Technical Architecture](#-technical-architecture)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [📚 API Documentation](#-api-documentation)
- [🔒 Security Features](#-security-features)


## 🌟 **Key Features**

### 🏥 **Patient Management**  
- Maintain detailed patient demographics.  
- Access comprehensive medical history.  
- Manage insurance information effectively.  
- Track appointment history effortlessly.  

### 👨‍⚕️ **Doctor Management**  
- Organize specialties and qualifications.  
- Efficiently manage doctor availability.  
- Simplify patient assignments.  
- Streamline schedule management.  

### 📅 **Advanced Appointment System**  
- Real-time scheduling with conflict detection.  
- Automated reminders for appointments.  
- Support for multi-department scheduling.  

### 🗋 **Comprehensive Medical Records**  
- Maintain secure, digital health records.  
- Store and access test results quickly.  
- Log treatment histories systematically.  
- Manage secure document storage with ease.  

---

## 🚀 Quick Start
```bash
# One-line quick installation
npx create-hms-api my-hospital-api
```

## 📊 Demo & Screenshots

<div align="center">
  <img src="assets/screenshots/dashboard-demo.gif" alt="Dashboard Demo" width="600px">
  
  ### 💻 Admin Dashboard
</div>

<details>
<summary>📸 View More Screenshots</summary>

| Patient Management | Doctor Schedule | Appointments |
|-------------------|-----------------|--------------|
| ![Patient](assets/screenshots/patient.png) | ![Doctor](assets/screenshots/doctor.png) | ![Appointments](assets/screenshots/appointments.png) |

</details>

## ✨ Features Showcase

<div align="center">

### 🏆 Core Capabilities

| Feature | Description |
|---------|-------------|
| 🔄 Real-time Sync | Instant updates across all devices |
| 🔒 Advanced Security | Military-grade encryption |
| 📊 Analytics | Comprehensive reporting dashboard |
| 🔍 Smart Search | AI-powered search functionality |

</div>

---

## 🛠 **Technical Architecture**

- **Backend Framework**: 🚀 Node.js with Express.js  
- **Database**: 📊 MySQL with Prisma ORM  
- **Authentication**: 🔑 JWT with role-based access control  
- **API Documentation**: 📜 Swagger/OpenAPI  
- **Testing**: 🧪 Jest with Supertest  
- **Code Quality**: ✨ ESLint & Prettier  
- **Logging**: 📋 Winston logger  

---

## ⚙️ **Setup Instructions**

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js**: v14 or higher  
- **MySQL**: v8.0 or higher  
- npm or yarn package manager  

### **Installation Steps**  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/GCSBH/hms_api.git
   cd hms_api
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Configure environment variables:**  
   Edit the `.env` file to include your database configuration:  
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/hms_database"
   ```

4. **Run database migrations:**  
   ```bash
   npm run prisma:generate
   ```

5. **Start the server:**  
   ```bash
   npm start
   ```

---

## 📚 **API Documentation**

### **Authentication Endpoints**  
Authenticate and manage users with these endpoints:  
- **Login:** `POST /api/auth/login`  
- **Register:** `POST /api/auth/register`  
- **Refresh Token:** `POST /api/auth/refresh-token`  
- **Forgot Password:** `POST /api/auth/forgot-password`  

### **Master Data Routes**

---

#### 🏢 **Departments**

| **Method** | **Endpoint**          | **Description**                     |
|------------|------------------------|-------------------------------------|
| **POST**   | `/departments`        | ➕ Create a new department           |
| **GET**    | `/departments`        |  Retrieve all departments         |
| **GET**    | `/departments/:id`    | 🔍 Get details of a specific department by ID |
| **PUT**    | `/departments/:id`    | ✏️ Update a specific department     |
| **DELETE** | `/departments/:id`    | 🗑️ Delete a specific department     |

---

#### 👩‍⚕️ **Specialists**

| **Method** | **Endpoint**          | **Description**                     |
|------------|------------------------|-------------------------------------|
| **POST**   | `/specialists`        | ➕ Add a new specialist              |
| **GET**    | `/specialists`        | 📋 Retrieve all specialists         |
| **GET**    | `/specialists/:id`    | 🔍 Get details of a specific specialist by ID |
| **PUT**    | `/specialists/:id`    | ✏️ Update a specialist’s details    |
| **DELETE** | `/specialists/:id`    | 🗑️ Remove a specialist              |

---

#### 🧑‍💼 **Staff Designations**

| **Method** | **Endpoint**                | **Description**                           |
|------------|-----------------------------|-------------------------------------------|
| **POST**   | `/staff-designations`      | ➕ Add a new staff designation             |
| **GET**    | `/staff-designations`      | 📋 Retrieve all staff designations         |
| **GET**    | `/staff-designations/:id`  | 🔍 Get details of a specific staff designation by ID |
| **PUT**    | `/staff-designations/:id`  | ✏️ Update a specific staff designation     |
| **DELETE** | `/staff-designations/:id`  | 🗑️ Delete a specific staff designation     |

---

#### 🏨 Ward Types
| **Method** | **Endpoint**             | **Description**                           |
|------------|--------------------------|-------------------------------------------|
| **POST**   | `/ward-types`           | ➕ Create a new ward type                 |
| **GET**    | `/ward-types`           | 📋 Retrieve all ward types               |
| **GET**    | `/ward-types/:id`       | 🔍 Get details of a specific ward type   |
| **PUT**    | `/ward-types/:id`       | ✏️ Update a specific ward type           |
| **DELETE** | `/ward-types/:id`       | 🗑️ Delete a specific ward type           |

#### 🗒️ Ward Numbers
| **Method** | **Endpoint**             | **Description**                              |
|------------|--------------------------|----------------------------------------------|
| **POST**   | `/ward-numbers`         | ➕ Create a new ward number                  |
| **GET**    | `/ward-numbers`         | 📋 Retrieve all ward numbers                |
| **GET**    | `/ward-numbers/:id`     | 🔍 Get details of a specific ward number    |
| **PUT**    | `/ward-numbers/:id`     | ✏️ Update a specific ward number            |
| **DELETE** | `/ward-numbers/:id`     | 🗑️ Delete a specific ward number            |

#### 🛏️ Beds
| **Method** | **Endpoint**      | **Description**                        |
|------------|-------------------|----------------------------------------|
| **POST**   | `/beds`           | ➕ Create a new bed                    |
| **GET**    | `/beds`           | 📋 Retrieve all beds                  |
| **GET**    | `/beds/:id`       | 🔍 Get details of a specific bed      |
| **PUT**    | `/beds/:id`       | ✏️ Update a specific bed              |
| **DELETE** | `/beds/:id`       | 🗑️ Delete a specific bed              |

#### ⚙️ Equipment Maintenance Logs
| **Method** | **Endpoint**                      | **Description**                                  |
|------------|-----------------------------------|--------------------------------------------------|
| **POST**   | `/equipment-maintenance-logs`     | ➕ Create a new equipment maintenance log        |
| **GET**    | `/equipment-maintenance-logs`     | 📋 Retrieve all maintenance logs                |
| **GET**    | `/equipment-maintenance-logs/:id` | 🔍 Get details of a specific maintenance log    |
| **PUT**    | `/equipment-maintenance-logs/:id` | ✏️ Update a specific maintenance log            |
| **DELETE** | `/equipment-maintenance-logs/:id` | 🗑️ Delete a specific maintenance log            |

#### ⚙️ Equipment
| **Method** | **Endpoint**      | **Description**                           |
|------------|-------------------|-------------------------------------------|
| **POST**   | `/equipment`      | ➕ Create a new equipment                 |
| **GET**    | `/equipment`      | 📋 Retrieve all equipment                |
| **GET**    | `/equipment/:id`  | 🔍 Get details of a specific equipment   |
| **PUT**    | `/equipment/:id`  | ✏️ Update a specific equipment           |
| **DELETE** | `/equipment/:id`  | 🗑️ Delete a specific equipment           |

#### ⚙️ Equipment Category
| **Method** | **Endpoint**               | **Description**                                 |
|------------|----------------------------|-------------------------------------------------|
| **POST**   | `/equipment-category`      | ➕ Create a new equipment category              |
| **GET**    | `/equipment-category`      | 📋 Retrieve all equipment categories           |
| **GET**    | `/equipment-category/:id`  | 🔍 Get details of a specific equipment category|
| **PUT**    | `/equipment-category/:id`  | ✏️ Update a specific equipment category        |
| **DELETE** | `/equipment-category/:id`  | 🗑️ Delete a specific equipment category        |

---

### **Patient Management Endpoints**

| **Method** | **Endpoint**       | **Description**                           |
|------------|--------------------|-------------------------------------------|
| **POST**   | `/patients`        | ➕ Create a new patient record            |
| **GET**    | `/patients`        | 📋 Retrieve all patients                 |
| **GET**    | `/patients/:id`    | 🔍 Get patient details by ID             |
| **PUT**    | `/patients/:id`    | ✏️ Update patient information            |
| **DELETE** | `/patients/:id`    | 🗑️ Soft delete a patient record          |

### Additional Patient Endpoints

#### Profile Image
| **Method** | **Endpoint**                   | **Description**                                  |
|------------|--------------------------------|--------------------------------------------------|
| **PUT**    | `/patient/profile-image/:id`   | Update a patient’s profile image                |

#### Vital Signs
| **Method** | **Endpoint**              | **Description**                     |
|------------|---------------------------|-------------------------------------|
| **GET**    | `/patient-vital-sign`    | Retrieve all vital signs            |
| **GET**    | `/patient-vital-sign/:id`| Get details of a specific vital sign|
| **POST**   | `/patient-vital-sign`    | Create a new vital sign record      |
| **PUT**    | `/patient-vital-sign/:id`| Update an existing vital sign record|
| **DELETE** | `/patient-vital-sign/:id`| Delete a specific vital sign        |

#### Patient Drugs
| **Method** | **Endpoint**         | **Description**                              |
|------------|----------------------|----------------------------------------------|
| **POST**   | `/patient-drugs`     | Create a new patient drug record            |
| **GET**    | `/patient-drugs`     | Retrieve all patient drug records           |
| **GET**    | `/patient-drugs/:id` | Get details of a specific patient drug record|
| **PUT**    | `/patient-drugs/:id` | Update an existing patient drug record       |

#### Patient Diagnosis
| **Method** | **Endpoint**                | **Description**                           |
|------------|-----------------------------|-------------------------------------------|
| **POST**   | `/patients-diagnosis`       | Create a new patient diagnosis            |
| **GET**    | `/patient-diagnosis`        | Retrieve all patient diagnoses            |
| **GET**    | `/patients-diagnosis/:id`   | Get details of a specific diagnosis       |
| **PUT**    | `/patients-diagnosis/:id`   | Update an existing diagnosis              |

#### Patient Test
| **Method** | **Endpoint**       | **Description**                              |
|------------|--------------------|----------------------------------------------|
| **POST**   | `/patient-test`    | Create a new patient test                    |
| **GET**    | `/patient-test`    | Retrieve all patient tests                   |
| **PUT**    | `/patient-test/:id`| Update an existing patient test              |

#### Patient Document
| **Method** | **Endpoint**                    | **Description**                                    |
|------------|---------------------------------|----------------------------------------------------|
| **POST**   | `/patient-document`             | Upload a new patient document                      |
| **GET**    | `/patient-document`             | Retrieve all patient documents                     |
| **GET**    | `/patient-document/:id`         | Get details of a specific patient document         |
| **PUT**    | `/patient-document/:id`         | Update an existing patient document                |
| **GET**    | `/patient-documents/:id`        | Get documents by patient ID                        |
| **DELETE** | `/patient-document/:id`         | Delete a specific patient document                 |
| **GET**    | `/patient-documents-toggle/:id` | Toggle the status of a patient document            |

#### Patient Symptoms
| **Method** | **Endpoint**            | **Description**                                 |
|------------|-------------------------|-------------------------------------------------|
| **POST**   | `/patient-symptoms`    | Create a new patient symptom record            |
| **GET**    | `/patient-symptoms`    | Retrieve all patient symptom records           |
| **GET**    | `/patient-symptoms/:id`| Get details of a specific patient symptom       |

#### Patient Appointment
| **Method** | **Endpoint**                     | **Description**                                   |
|------------|----------------------------------|---------------------------------------------------|
| **POST**   | `/patients-appointment`          | Create a new patient appointment                  |
| **GET**    | `/patient-appointment`           | Retrieve all patient appointments                 |
| **GET**    | `/patients-appointment/:id`      | Get details of a specific patient appointment     |
| **PUT**    | `/patients-appointment/:id`      | Update an existing appointment                    |
| **DELETE** | `/patients-appointment/:id`      | Delete a specific appointment                     |

---

### 👤 **Roles & Permissions**

| **Method** | **Endpoint**    | **Description**                     | **Status Codes** |
|------------|----------------|-----------------------------------|-----------------|
| **POST**   | `/roles`      | ➕ Create new role with permissions | 201, 400, 409   |
| **GET**    | `/roles`      | 📋 List all roles                  | 200, 404        |
| **GET**    | `/roles/:id`  | 🔍 Get role details by ID          | 200, 404        |
| **PUT**    | `/roles/:id`  | ✏️ Update role and permissions     | 200, 400, 404   |
| **DELETE** | `/roles/:id`  | 🗑️ Delete role (soft delete)       | 200, 404        |



---

### 👥 **Staff Management**

| **Method** | **Endpoint**    | **Description**                     | **Status Codes** |
|------------|----------------|-----------------------------------|-----------------|
| **POST**   | `/staff`      | ➕ Create new staff member         | 201, 400, 409   |
| **POST**   | `/staff/login`| 🔑 Staff login                    | 200, 401        |
| **GET**    | `/staff`      | 📋 List all staff                 | 200             |
| **GET**    | `/staff/:id`  | 🔍 Get staff details by ID        | 200, 404        |
---

## 🔒 **Security Features**

- **JWT-based Authentication**  
- **Role-based Access Control (RBAC)**  
- **Request Rate Limiting**  
- **Input Validation & Sanitization**  
- **SQL Injection Protection** (via Prisma)  
- **Cross-Site Scripting (XSS) Protection**  
- **CORS Configuration**  

---

## 🎯 Performance Metrics

```mermaid
graph LR
    A[API Response Time] --> B[95% < 100ms]
    B --> C[99% < 200ms]
    C --> D[99.9% < 500ms]
```

---

## 🛠 **Development Commands**

- **Start in Development Mode:**  
   ```bash
   npm run start
   ```

- **Run Tests:**  
   ```bash
   npm run test
   ```

- **Run Linting:**  
   ```bash
   npm run lint
   ```

- **Generate Prisma Client:**  
   ```bash
   npm run prisma:generate
   ```

---

## 📨 **Contributing**

We welcome contributions from the community! Follow these steps:  
1. **Fork the repository**  
2. **Create a feature branch**  
3. **Commit your changes**  
4. **Push to the branch**  
5. **Create a Pull Request**  



---

## 🔧 **Error Handling**  
Standardized JSON responses ensure consistency:  
```json
{
  "status": "error",
  "code": 400,
  "message": "Invalid input data"
}
```

---

## 🤝 **Support**

Have questions or need help?  
- 📧 Reach out by creating an issue in the repository.  
- 💬 Contact the development team directly.  

---

## 📜 **License**

This project is licensed under the **MIT License**. See the LICENSE file for details.

<div align="center">
  <img src="assets/banners/footer-banner.jpeg" alt="Footer" width="100%">
  <p>Made with ❤️ by HMS Team</p>
</div>

