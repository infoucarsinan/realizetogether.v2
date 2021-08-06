import express from "express";
import { ObjectId } from "mongodb";
import { deleteUser, findUser, insertUser, updateUser } from "./users";

const router = express.Router();

router.post("/users", async (req, res, next) => {
  try {
    const user = req.body;
    const insertedUser = await insertUser(user);

    if (!insertedUser) {
      res.status(409).send("Registration failed");
      return;
    }

    res.setHeader(
      "Set-Cookie",
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/users/loggeduser", async (req, res, next) => {
  try {
    const { userId } = req.cookies;
    if (!userId) {
      return res.status(401).end("Unauthorized! You have to login first.");
    }
    const user = await findUser({ _id: new ObjectId(userId) });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/users/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email, password });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.setHeader(
      "Set-Cookie",
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/users/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const deleted = await deleteUser({ email });
    if (!deleted) {
      res.status(404).send("Deletion failed");
      return;
    }
    res.status(200).send(`User ${email} deleted`);
  } catch (error) {
    next(error);
  }
});

router.post("/users/forgot-password", (_req, res) => {
  res.status(404).send();
});

router.patch("/users/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = req.body;
    const updatedUser = await updateUser(email, user);

    if (!updatedUser) {
      res.status(409).send("Update failed");
      return;
    }
    res.status(200).json({ status: "ok" });
  } catch (error) {
    next(error);
  }
});

router.get("/users/:firstname", async (req, res, next) => {
  try {
    const { firstname } = req.params;
    if (!firstname) {
      return res.status(401).end("Unauthorized! You have to login first.");
    }
    const user = await findUser({ firstName: firstname });
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
