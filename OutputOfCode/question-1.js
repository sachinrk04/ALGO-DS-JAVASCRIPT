const object = {
    name: "‘Amit’",
    getDetails() {
        let _this = this;
        const object2 = {
            name: "Sachin", 
            getDetails() {
            console.log(this, _this);
            }
        };
        return object2.getDetails();
    } 
}
 
 
object.getDetails();
 