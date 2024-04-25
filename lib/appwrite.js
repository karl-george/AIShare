import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: process.env.endpoint,
  platform: process.env.platform,
  projectId: process.env.projectId,
  databaseId: process.env.databaseId,
  userCollectionId: process.env.databaseId,
  videoCollectionId: process.env.videoCollectionId,
  storageId: process.env.storageId,
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), 'jim@example.com', 'password', 'Jim Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
