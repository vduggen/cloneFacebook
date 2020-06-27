window.onload = () => {
    birthday();
}

const birthday = () => {
    for (i = 0; i <= 31; i++) {
        let OptionEl = document.createElement('option');
        OptionEl.innerHTML = i;
        document.getElementById('dayBirthday').append(OptionEl);
    }

    for (i = 1905; i <= 2020; i++) {
        let OptionEl = document.createElement('option');
        OptionEl.innerHTML = i;
        document.getElementById('yearBirthday').append(OptionEl);
    }
}