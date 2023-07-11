function HtmlElement() {
    this.click = function() {
        console.log("clicked");
    }
};

HtmlElement.prototype.focus = function() {
    console.log("focused");
};

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItems = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
};

HtmlSelectElement.prototype = new HtmlElement();