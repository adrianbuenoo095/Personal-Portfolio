export const  isExternalLink = (path: string) : boolean => {
    let operation = false;
        try {
            let url;
            url = new URL(path);
            window.open(url,"blank");
            operation = true;
        }catch(_){
            operation = false;
        }

    return operation;
};