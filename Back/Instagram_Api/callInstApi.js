const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const fs = require('fs');

const username = "USER"
const password = "PASS"

const usernameToGetProfileInfo = "sepezho"

const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password })
 
;(async () => {
  await client.login()
  const instagram = await client.getUserByUsername({ username: usernameToGetProfileInfo })
  fs.writeFileSync('./instagramData.json', JSON.stringify(instagram))
})()
