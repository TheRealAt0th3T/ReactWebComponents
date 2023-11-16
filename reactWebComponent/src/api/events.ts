export const dispatch = (eventName: string, detail: object) => {
    window.dispatchEvent(new CustomEvent (eventName, {detail}));
};