import * as AWS from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'

const XAWS = AWSXRay.captureAWS(AWS)

const s3BucketName = process.env.ATTACHMENT_S3_BUCKET
const urlExpiration = 300


export class AttachmentUtils{
    constructor(
        private s3 = new XAWS.S3({ signatureVersion: 'v4'}),
        private bucketName = s3BucketName
    ) {}

    getAttachmentUrl(todoId: string): string {
        const attachmentUrl = `https://${this.bucketName}.s3.amazonaws.com/${todoId}`
        return attachmentUrl
    }

    getUploadUrl(todoId: string): string {

        const url = this.s3.getSignedUrl('putObject', {
            Bucket: this.bucketName,
            Key: todoId,
            Expires: urlExpiration
          });
    
        return url as string 
    }
}