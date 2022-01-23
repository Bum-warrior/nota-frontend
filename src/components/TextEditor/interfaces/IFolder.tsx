import React from 'react'
import IFile from './IFile';
import IFileSystemObject from './IFileSystemObject';

export default interface IFolder extends IFileSystemObject{
    name?: string;
    folders?: IFolder[];
    files?: IFile[];
}