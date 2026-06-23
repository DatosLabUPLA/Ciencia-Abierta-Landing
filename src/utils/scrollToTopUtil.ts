const  scrollToTopUtil = (idContainer: string) => {
    const container = document.getElementById(idContainer);

    if (!container) return ;

    container.scroll({
        top: 0,
        behavior: "smooth"
    });
}

export default scrollToTopUtil;