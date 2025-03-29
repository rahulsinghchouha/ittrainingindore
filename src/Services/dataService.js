import axios from "axios";
axios.defaults.withCredentials = true;

const url = import.meta.env?.VITE_BACKEND_LIVE_URL ? import.meta.env.VITE_BACKEND_LIVE_URL : import.meta.env.VITE_BACKEND_URL;

class DataService {

    constructor() {
        this.backendUrl = url; // Define backendUrl here 
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
    getCategoryByName(categories) {
        return axios.get(`${this.backendUrl}/api/v1/get/get-category-by-name`,{params:categories});
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
        return axios.get(`${this.backendUrl}/api/v1/get/get-tags`);
    }
    getCourseBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/course-banner-img`);
    }
    getCourseDetailsBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/course-details-banner`);
    }
    getBlogBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-blog-banner`);
    }
    getBlogDetailBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-blog-detail-banner`);
    }
    getTagBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/get-tag-banner`);
    }
    getTestimonialBanner(){
        return axios.get(`${this.backendUrl}/api/v1/get/testimonial-banner`);
    }
}

export const ittrainingDataSerivice = new DataService();

