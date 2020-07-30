module.exports = {
    isEmptyObject: (obj) => {
        return !!obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    },
    getCookie: (name) => {
        const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookieValue ? cookieValue[2] : null;
    }
}