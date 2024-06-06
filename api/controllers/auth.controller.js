import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username, email, password: hashedPassword
            }
        })
        console.log(newUser)
        res.status(201).send(
            newUser
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "failed to create user!"
        })
    }

}
export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (!user) return res.status(401).send({
            message: "invalid credentials"
        })

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" })
        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({
            id: user.id,
            isAdmin: true
        }, process.env.JWT_SECRET_KEY, { expiresIn: age })
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: age
        }).status(200).json({ message: "login successful" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to login!" })
    }
}
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" })
}