import IFolder from "../TextEditor/interfaces/IFolder";

export default interface IRenderProps{
    root: IFolder;
    nestLvl: number;
    ctxMenu : {
        lastMenu: Function;
        setlastMenu: Function;
        lastClickedFile: string;
        setlastClickedFile: Function;
    };
    fileSystem : {
        fs : IFolder;
        changeFS: React.Dispatch<React.SetStateAction<IFolder | undefined>>;
    };
}