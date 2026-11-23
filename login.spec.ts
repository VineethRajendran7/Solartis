import test from "@playwright/test";

test("Test to verify login", async({page})=>{
await page.goto("https://developer.salesforce.com/");
})