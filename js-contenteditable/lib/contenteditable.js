function setChangeListener (ele, listener) {
	ele.addEventListener("blur", listener);
	ele.addEventListener("keyup", listener);
	ele.addEventListener("paste", listener);
	ele.addEventListener("cut", listener);
	ele.addEventListener("mouseup", listener);
}