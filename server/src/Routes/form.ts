import express, { Request, Response } from "express";

const formRoute = express.Router();

formRoute.post("/", (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body)
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

const emailCheker = (email: string) => {
  const emailRgx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !emailRgx.test(email);
};

export default formRoute;
