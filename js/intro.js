 window.onload = () => {
    const text = document.getElementById("portalText");
    const enterBtn = document.getElementById("enterBtn");

    /* 1) بعد ثانيتين يظهر النص */
    setTimeout(() => {
        text.classList.add("show");
    }, 1800);

    /* 2) بعد 7 ثواني يبدأ الانفجار */
    setTimeout(() => {

        // الخلفية تعمل انفجار دائري
        document.body.classList.add("explosionFlash");

        // النص يكبر
        text.classList.add("expand");

        // وميض كهربائي
        setTimeout(() => {
            document.body.classList.add("electric");
        }, 100);

      //   الدخول
        setTimeout(() => {
   window.location.href = "home.html"
        }, 1200);

    }, 5000);
};


 