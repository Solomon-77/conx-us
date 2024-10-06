import { Hono } from "hono";
import { signUp } from "../controllers/auth.signup";
import { verify } from "../controllers/auth.verify";
import { login } from "../controllers/auth.login";

const router = new Hono();

router.post("/signup", signUp)
router.post("/verify", verify)
router.post("/login", login)
router.get('/auth/google',);
router.get('/auth/google/callback',);

export default router;