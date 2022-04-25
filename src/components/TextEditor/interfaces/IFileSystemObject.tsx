
export default interface IFileSystemObject {
    systemUnitType: 'file' | 'folder';
    uniqueId: string;
    initialEdit?: boolean;
}