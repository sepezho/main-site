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
  const inst = await client.getUserByUsername({ username: usernameToGetProfileInfo })
  let data = {}
  data.biography = inst.biography
  data.external_url = inst.external_url
  data.edge_followed_by = inst.edge_followed_by.count
  data.edge_follow = inst.edge_follow.count
  data.full_name = inst.full_name
  data.profile_pic_url = inst.profile_pic_url
  data.username = inst.username
  data.posts = inst.edge_owner_to_timeline_media.edges.filter(e => !e.node.is_video).map((e) => e.node).slice(0, 11).map(instPost => {
    let newData = {}
    newData.id = instPost.id
    newData.img = instPost.thumbnail_resources[2].src
    newData.date = instPost.accessibility_caption
    newData.likedCount = instPost.edge_liked_by.count
    newData.commentCount = instPost.edge_media_to_comment.count
    newData.text = instPost.edge_media_to_caption.edges[0]?.node.text
    console.log('----------------')
    console.log(JSON.stringify(newData))
    console.log('----------------')
    return newData
  })
  console.log(JSON.stringify(data))

  fs.writeFileSync('./instagramData.json', JSON.stringify(inst))
})()
