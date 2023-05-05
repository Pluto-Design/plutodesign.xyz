export const onClickScroll = (to: string) => {
    document.getElementById(to)?.scrollIntoView();
}