const users = ['did:example:alice', 'did:example:bob', 'did:example:charlie'];
const filter = {
  dataFormat: 'application/json',
  visibility: 'public'
};
const response = await web5.dwn.records.query({
  from: users,
  message: {
    filter: filter
  }
});
console.log(response.entries);



const userDIDs = ["did:user1", "did:user2", "did:user3"];
const userDIDDocuments = [];
async function fetchUserInfo() {
  for (const userDid of userDIDs) {
    try {
      const didDocument = await web5.did.resolve(userDid);
      userDIDDocuments.push({ userDid, didDocument });
    } catch (error) {
      // Handle error if the DID resolution fails for a user
      console.error(`Error resolving DID for ${userDid}:`, error);
    }
  }
  // Now you have all the resolved DID documents and their corresponding user identifiers
  console.log(userDIDDocuments);
}
fetchUserInfo();