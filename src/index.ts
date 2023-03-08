/// <reference types="@types/google.maps" />
// import { Company } from "./Company";
// import { User } from "./User";

// const user = new User();
// const company = new Company(); 
const containerMap = document.getElementById("root") as HTMLElement; 
new google.maps.Map(containerMap, {
    zoom: 1,
    center: {
        lat: 0, 
        lng: 0
    }
} )

