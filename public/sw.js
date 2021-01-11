self.addEventListener("install", function () {
  console.log("installing service worker");
});

self.addEventListener("activate", function () {
  console.log("activating service worker");
  return self.clients.claim;
});

self.addEventListener("fetch", function () {
  console.log("service worker getching something");
});

//event
