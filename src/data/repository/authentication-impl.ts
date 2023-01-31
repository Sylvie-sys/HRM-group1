import { Authentication, changePassword, onSubmittingLoginForm, resendcode, VerifyUserResponse } from "./authentication";

export default class AuthenticationImpl implements Authentication {
   
    private API_ENDPOINT = "https://web-production-3d1f.up.railway.app/api/auth";
    async register(userData: NewUser): Promise<User> {
        const endpoint = `${this.API_ENDPOINT}/register`;
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
        
        const response = await fetch(endpoint, requestOptions);
        const resultPayload = await response.json();
        const user = resultPayload.payload;
        return user;
    }
    verify(code: string): VerifyUserResponse {
        throw new Error("Method not implemented.");
    }
    login({ email: password }: onSubmittingLoginForm): User {
        throw new Error("Method not implemented.");
    }
    changepassword({ currentPassword: newPassword }: changePassword): User {
        throw new Error("Method not implemented.");
    }
    resendcode({ email }: resendcode): User {
        throw new Error("Method not implemented.");
    }
   
}