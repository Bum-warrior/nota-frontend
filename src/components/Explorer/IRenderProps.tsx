import IFolder from "../TextEditor/interfaces/IFolder";

export default interface IRenderProps{
    root: IFolder;
    nestLvl: number;
    lastMenu: Function;
    setlastMenu: Function;
}