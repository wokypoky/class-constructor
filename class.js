class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createNewDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg};
         font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
    }
}

const objNewDiv = new Options(200, 300, 'black', 30, 'center');
objNewDiv.createNewDiv();