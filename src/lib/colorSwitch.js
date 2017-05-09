function getColor() {
    let color;
    switch(window.location.pathname) {
        case '/route': color = blue;
        case '/otherRoute': color= green;
    }
}
