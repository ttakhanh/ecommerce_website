import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import cartRoute from "./routes/cart.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();

dotenv.config();
//CONNECT DATABASE
const URI = "mongodb://127.0.0.1/webstore";
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//ROUTES
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/auth", authRoute);

async function startServer() {
    mongoose
        .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to DB");
            app.listen(PORT, () => {
                console.log(`server running on ${PORT}`);
            });
        })
        .catch((err) => {
            console.log("err", err);
        });
}

startServer();