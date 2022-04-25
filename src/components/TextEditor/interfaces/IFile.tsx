import IFileSystemObject from './IFileSystemObject';


export default interface IFile extends IFileSystemObject {
    name: string;
    text: string;
}

