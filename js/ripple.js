

        let height = this.offsetHeight;
        let pos = this.getBoundingClientRect();
        let posX = ev.pageX - pos.left;
        let posY = ev.pageY - pos.top;
        let rippleStyleAttr = new RippleStyleAttributes(width, height, posX, posY);
        let tag = document.createElement("span");
        let width = this.offsetWidth;
        tag.className = "ripple-animation";
        tag.style.height = rippleStyleAttr.height + 'px';
        tag.style.left = rippleStyleAttr.left + 'px';
        tag.style.top = rippleStyleAttr.top + 'px';
        tag.style.width = rippleStyleAttr.width + 'px';
        this.appendChild(tag);
        this.height = (width <= height) ? height : width;
        this.left = posX - (this.width * 0.5);
        this.top = posY - (this.height * 0.5);
        this.width = (width <= height) ? height : width;
    constructor(width, height, posX, posY) {
    ripplecontainer.addEventListener('click', function (ev) {
    }
    });
class RippleStyleAttributes {
rippleContainers.forEach((ripplecontainer) => {
var rippleContainers = document.querySelectorAll('.ripple');
}
});
