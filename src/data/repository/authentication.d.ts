type VerifyUserResponse = {
    statusCode: 0,
    message: string,
    payload: string
}
interface onSubmittingLoginForm {
    email: string,
    password: string
}

interface changePassword{
    currentPassword: string,
    newPassword: string
}
interface resendcode{
    email: string,

}

export interface Authentication {

    async register(userData: NewUser): Promise<User>;
    verify(code: string): VerifyUserResponse;
    login({email: password}: onSubmittingLoginForm): User;
    changepassword({currentPassword:newPassword}:changePassword):User;
    resendcode({email}:resendcode):User
}