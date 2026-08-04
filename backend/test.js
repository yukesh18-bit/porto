const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://25cs304_db_user:PSqx4YLZwSV8gD7n@acadfolio.r1d6udq.mongodb.net/?retryWrites=true&w=majority&appName=acadfolio";

async function test() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected Successfully");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

test();