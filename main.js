document.addEventListener("DOMContentLoaded", function () {
    function updateCheckboxCount() {
        let counter = 0;

        for (let i = 1; i <= 65; i++) {
            var checkbox = document.getElementById(String(i));

            if (!checkbox) {
                break;
            }

            if (checkbox.checked) {
                counter += 1;
            }
        }

        document.getElementById("ending").innerHTML = counter;
    }

    for (let i = 1; i <= 65; i++) {
        var checkbox = document.getElementById(String(i));

        if (checkbox) {
            checkbox.addEventListener("change", updateCheckboxCount);
        }
    }


    updateCheckboxCount();
});