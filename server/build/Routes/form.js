"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formRoute = express_1.default.Router();
formRoute.post("/", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(req.body);
    if (name.length < 2) {
        return res.status(400).json({ err: "name error" });
    }
    if (emailCheker(email)) {
        return res.status(400).json({ err: "email error" });
    }
    if (subject.length < 5) {
        return res.status(400).json({ err: "subject error" });
    }
    if (message.length < 5) {
        return res.status(400).json({ err: "message error" });
    }
    return res.status(201).json({ name, email, subject, message });
});
const emailCheker = (email) => {
    const emailRgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !emailRgx.test(email);
};
exports.default = formRoute;
