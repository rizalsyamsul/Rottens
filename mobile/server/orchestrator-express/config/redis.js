const Redis = require("ioredis");
const redis = new Redis({
  port: 17095, // Redis port
  host: "redis-17095.c1.asia-northeast1-1.gce.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "oB41sCQuvePapBwEyj2E9EwjfbSeAY6e",
  db: 0, // Defaults to 0
});

module.exports = redis;
