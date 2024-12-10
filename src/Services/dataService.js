import axios from "axios";
axios.defaults.withCredentials = true;
 
class DataService {

    constructor() {
        this.backendUrl = "http://localhost:4000"; // Define backendUrl here 
    }

    studentForm(values) {
        
        axios.post(`${this.backendUrl}/api/v1/student-details/student-form`, (values));

    }
    getCourseCard(){
      return  axios.get(`${this.backendUrl}/api/v1/get/course-card`);
    }
    getStudentPlaced(){
        return  axios.get(`${this.backendUrl}/api/v1/get/student-placed`);
      }
      getOurPartners(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-partners`)
      }
}

export const ittrainingDataSerivice = new DataService();


