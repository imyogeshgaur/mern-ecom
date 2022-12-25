import AuthService from "../services/auth.service.js";
import validator from 'validator';
import { signInUserContoller } from "../helpers/signinUser.js";

class AuthController {
    constructor() {
        this.authService = new AuthService()
    }

    async signUpUser(req, res) {
        try {
            const body = req.body;
            const user = await this.authService.signUpUser(body);
            return res.status(200).send(user);
        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }
    async signInUser(req, res) {
        try {
            const email = req.body.email
            if (validator.isEmail(email)) {
                const value = await this.authService.signInUserByEmail(req.body);
                const data = await signInUserContoller(res, value);
                return data;
            } else {
                const value = await this.authService.signInUserByUserName(req.body);
                const data = await signInUserContoller(res, value);
                return data;
            }

        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }

    async forgetPassword(req, res) {
        try {
            const email = req.body.email;
            const data = await this.authService.mailTheUser(email);
            if (!data) {
                return res.status(200).send({ message: "Reset Link Shared in your Registerd Mail !!!" })
            } else {
                return res.status(200).send({ message: data })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }
    async resetPassword(req, res) {
        try {
            const userId = req.params.id;
            const password = req.body.password;
            const data = await this.authService.resetPassword(userId,password);
            return res.status(200).send({ message: data })
        } catch (error) {
            console.log(error)
            return res.status(500).send("Auth Service : Internal Server Error !!!")
        }
    }
}

export default AuthController