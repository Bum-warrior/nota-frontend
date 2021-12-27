import React from 'react'
import IFile from './IFile';

export default interface IFolder{
    name?: string;
    folders?: IFolder[];
    files?: IFile[];
}