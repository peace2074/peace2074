import { defineEventHandler } from "h3";

export default defineEventHandler(async (_event) => {
    return { data: "API" }
})