import { Hono } from "hono";
import { signUp } from "../controllers/auth.signup";
import { verify } from "../controllers/auth.verify";

const router = new Hono();

router.post("/signup", signUp)
router.post("/verify", verify)

export default router;