export const changeCssVariables  = theme => {
    const root = document.querySelector(':root');

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-default-bg', `var(--theme-${theme}-bg)`);

    const cssVariables = ['header', 'bg']
    cssVariables.forEach(element => {
        root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
    })
}
