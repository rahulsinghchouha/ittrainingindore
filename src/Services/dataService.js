import axios from "axios";
axios.defaults.withCredentials = true;
const backendUrl = "http://localhost:4000";

class DataService {

    constructor() {
        // constructor implementation pending
    }

    studentForm(values) {
        
        axios.post(`${backendUrl}/api/v1/student-details/student-form`, (values));

    }
}

export const ittrainingDataSerivice = new DataService();


