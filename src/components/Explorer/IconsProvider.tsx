import iconFile from './src/file.svg'
import iconFolderOpen from './src/openedFolder.svg'
import iconFolderClose from './src/closedFolder.svg'

export enum DataType{
    File,
    FolderOpen,
    FolderClose,
}

export const ICONS = [iconFile, iconFolderOpen, iconFolderClose];


// Load icons and export enum for it