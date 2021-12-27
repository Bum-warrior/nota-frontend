import React from 'react'
import IFile from './IFile';
import IFolder from './IFolder';

export default interface IFileSystem{
    root: IFolder;
}