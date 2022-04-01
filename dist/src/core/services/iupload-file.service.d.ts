export interface IUploadFileService {
    uploadSingleImage(file: any, folderName: string): any;
    uploadMultiImage(files: any[], folderName: string): any;
}
