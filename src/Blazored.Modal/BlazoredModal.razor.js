export function setBodyStyle() {
    document.body.style.overflow = 'hidden';
}

export function removeBodyStyle() {
    document.body.style.overflow = 'auto';
}

window.BlazoredModal = {
    setBodyStyle: function () {
        document.body.style.overflow = 'hidden';
    },
    removeBodyStyle: function () {
        document.body.style.overflow = 'auto';
    }
};