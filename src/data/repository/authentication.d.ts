type VerifyUserResponse = {
    statusCode: 0,
    message: string,
    payload: string
}
interface LoginOptions {
    email: string,
    password: string
}


export interface Authentication {

    async register(userData: NewUser): Promise<User>;
    verify(code: string): VerifyUserResponse;
    login({email: password}: LoginOptions): User;
    
}