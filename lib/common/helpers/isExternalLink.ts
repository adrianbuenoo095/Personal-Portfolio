export const  isExternalLink = (id: string , path: string) : boolean => {
    let operation = false;
    if(id==="Shop"){
        try {
            let url;
            url = new URL(path);
            window.open(url,"blank");
            operation = true;
        }catch(_){
            operation = false;
        }
    }
    return operation;
};