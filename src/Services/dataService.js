import axios from "axios";
axios.defaults.withCredentials = true;

class DataService {

    constructor() {
        this.backendUrl = "http://localhost:4000"; // Define backendUrl here 
    }

    studentForm(values) {
        return axios.post(`${this.backendUrl}/api/v1/student-details/student-form`, (values));
    }
    getHome(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-home`);
    }
    getCourseCard() {
        return axios.get(`${this.backendUrl}/api/v1/get/course-card`);
    }
    getAboutUs(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-about-us`);
    }
    getStudentPlaced() {
        return axios.get(`${this.backendUrl}/api/v1/get/student-placed`);
    }
    getOurPartners() {
        return axios.get(`${this.backendUrl}/api/v1/get/get-partners`);
    }
    getExploreCards() {
        return axios.get(`${this.backendUrl}/api/v1/get/get-explore-card`);
    }
    getOurStats() {
        return axios.get(`${this.backendUrl}/api/v1/get/get-our-stats`);
    }
    getBlogs() {
        return axios.get(`${this.backendUrl}/api/v1/get/get-blogs`);
    }
    getContactUs(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-contact-us`);
    }
    getTags(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-tags`)
    }
    getCourseBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/course-banner-img`)
    }
}

export const ittrainingDataSerivice = new DataService();

