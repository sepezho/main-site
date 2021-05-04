const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const fs = require('fs');

const username = "USER"
const password = "PASSS"

const usernameToGetProfileInfo = "sepezho"

const cookieStore = new FileCookieStore('/Instagram_Api/cookies.json')
const client = new Instagram({ username, password, cookieStore })
 
;(async () => {
  await client.login()
  const instagram = await client.getUserByUsername({ username: usernameToGetProfileInfo })
  fs.writeFileSync('/Instagram_Api/instagramData.json', JSON.stringify(instagram))
})()
