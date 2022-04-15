import axios from "axios";


export default class APIService{
     

     create_user(firstname,lastname,email,username,password,mobile,intro,profile){
        return axios.post(`/api/register`,{firstname: firstname,lastname: lastname,email: email,username: username,password: password
        ,mobile: mobile, intro: intro, profile: profile})
    }

    login(user, password){
        return axios.post(`/api/token/`, {username: user, password: password})
    }

/*    logout() {
        this.user_token = 0;
        this.config = {
            headers: {
                Authorization: 'Bearer ' + props.token
              }
        }
    }

  */  


}


