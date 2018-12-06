class BoxShadow {
  // 添加 boxshadow 的目标节点
  nodeTarget;

  // 监听滚动事件的节点
  nodeScroll;

  // 是否已经显示
  shadow;

  // requestAnimationFrame 是否在进行
  ticking;

  constructor(nodeTarget, nodeScroll) {
    this.nodeTarget = nodeTarget;
    this.nodeScroll = nodeScroll;
    this.shadow = false;
    this.ticking = false;
    this.listen();
  }

  listen() {
    this.nodeScroll.addEventListener('scroll', this);
  }

  handleEvent(event) {
    const { scrollTop } = event.target;

    if (!this.ticking && !this.shadow && scrollTop > 0) {
      this.show();
      this.ticking = true;
    } else if (!this.ticking && this.shadow && scrollTop === 0) {
      this.hide();
      this.ticking = true;
    }
  }

  show() {
    window.requestAnimationFrame(() => {
      this.nodeTarget.classList.add('active');
      this.ticking = false;
      this.shadow = true;
    });
  }

  hide() {
    window.requestAnimationFrame(() => {
      this.nodeTarget.classList.remove('active');
      this.ticking = false;
      this.shadow = false;
    });
  }

  destroy() {
    this.nodeTarget = null;
    this.nodeScroll.removeEventListener('scroll', this.handler);
    this.nodeScroll = null;
  }
}

export default BoxShadow;
