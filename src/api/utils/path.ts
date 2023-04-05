import path from "path"

/* 
    Retorna o caminho relativo do arquivo de acordo com o ambiente
*/

interface IgetPath {
    resourcesPath: string
    developmentPath?: string
}

export const getPath = ({ resourcesPath, developmentPath }: IgetPath) => {
    if (process.env.NODE_ENV === 'development') {
        return path.join(process.cwd(), developmentPath ? developmentPath : resourcesPath)
    } else {
        return path.join(process.resourcesPath, resourcesPath)
    }
}