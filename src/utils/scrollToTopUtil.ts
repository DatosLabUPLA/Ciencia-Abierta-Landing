const  scrollToTopUtil = (
    idContainer: string, 
    bottom: boolean = false
) => {
    const container = document.getElementById(idContainer);

    if (!container) return ;

    const topOffset = bottom ? container.scrollHeight - 1100 : 0;

    container.scroll({
        top: topOffset,
        behavior: "smooth"
    });
}

export default scrollToTopUtil;