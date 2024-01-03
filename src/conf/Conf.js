const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.APPWRITE_PROJECT_ID),
    appwriteDatabasetId:String(import.meta.env.APPWRITE_DATABASE_ID),
    appwriteBucketId:String(import.meta.env.APPWRITE_BUCKET_ID),
    appwriteCollectionId:String(import.meta.env.COLLECTION_ID),
}

export default conf