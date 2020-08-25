
var p1 = []; var p2 = []; i = 0;

function mouse_record(e) {
    console.log("X=", e.x, "Y=", e.y);
    if (i == 0) {
        p1 = [e.x, e.y];
        i = 1;
        return;
    }
    if (i == 1) {
        p2 = [e.x, e.y];
        i = 0;
        rect_maker(p1, p2);
        window.removeEventListener("mousedown", mouse_record);
        return;
    }

}

function make_rect_screen() {
    window.addEventListener("mousedown", mouse_record);
    return
}

function rect_maker(p1, p2) {
    let w = Math.abs(p1[0] - p2[0]);
    let h = Math.abs(p1[1] - p2[1]);
    window.addEventListener("keydown", (e) => {
        if (e.keyCode == "13") {
            console.log(w, h);
            space.style.width = w;
            space.style.height = h;
            var elem = document.querySelector('#space');

            // Set the background color to a light gray
            elem.style.backgroundColor = 'red';

            // Set the height to 150px
            elem.style.position = 'relative';
            elem.style.top = String(Math.min(p1[1], p2[1])) + "px";
            elem.style.left = String(Math.min(p1[0], p2[0])) + "px";
            elem.style.height = String(h) + "px";
            elem.style.width = String(w) + "px";
            return
        }
        else {
            console.log("dim rejected");
            return
        }
    })
}



