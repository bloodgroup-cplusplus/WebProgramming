"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@trpc/server");
const express_2 = require("@trpc/server/adapters/express");
const t = server_1.initTRPC.create();
const appRouter = t.router({
    sayHi: t.procedure.query(() => {
        return "Hi";
    }),
    logToServer: t.procedure.input(v => {
        if (typeof v === "string")
            return v;
        throw new Error("Invalid input :Expected string ");
    }).mutation(req => {
        console.log(`Client Says :${req.input}`);
    }),
});
const app = (0, express_1.default)();
app.use("/trpc", (0, express_2.createExpressMiddleware)({ router: appRouter }));
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.listen(3000);
console.log("Hi");
//# sourceMappingURL=api.js.map