import { Hono } from "hono";
import { signUp } from "../controllers/auth.signup";
import { verify } from "../controllers/auth.verify";
import { login } from "../controllers/auth.login";
import { googleOauth } from "../controllers/auth.oauth";

const router = new Hono();

router.post("/signup", signUp)
router.post("/verify", verify)
router.post("/login", login)
router.get('/auth/google', googleOauth.initiateGoogleAuth);
router.get('/auth/google/callback', googleOauth.handleGoogleCallback);
router.get('/auth/github',);
router.get('/auth/github/callback',);

export default router;