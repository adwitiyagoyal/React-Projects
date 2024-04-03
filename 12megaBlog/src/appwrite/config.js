import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client
    databases;
    bucket;//storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(err){
            throw err;
        }
    }

    async updatePost(slug,{title, content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(err){
            throw err;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )

            return true; // we can also return await fn but we can handle true in front end
        }
        catch(err){
            throw err;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getPost(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
    // filtering all the post which are active
    //if we will not use query we will get all posts
    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                queries,
                //ATERNATIVE WAY IS NOT TO SPECIFY AS PARAMETER
                //[Query.equal("status","active")]
            )
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    //file upload services

    async uploadFile(file){
        try{
            //will return file id
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                )
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
    async deleteFile(fileId){
        try{
            //will return file id
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
                ) 
            return true;  
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    //perview file 
    //here we will not use async await because operation is very fast
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}

const service = new Service()
export default service