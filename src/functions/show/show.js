/* eslint-disable */
const contentful = require("contentful-management")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})


exports.handler = async function(event, context) {
  try {
   const id = event.queryStringParameters.id.replace("/", "")

   const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
   const environment = await space.getEnvironment("master")
   const entry = await environment.getEntry(id)

   const vuistje = {
     to: entry.fields.to["en-US"],
     from: entry.fields.from["en-US"],
     message: entry.fields.message["en-US"]
   }

    return {
      statusCode: 200,
      body: JSON.stringify(vuistje)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
