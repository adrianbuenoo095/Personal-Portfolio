 const useScrollIntoTheView = (id: string) => {
    let element = document.getElementById(id) as HTMLElement;

    if (!element) {
        return;
    }

    return element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
};

 export default useScrollIntoTheView;