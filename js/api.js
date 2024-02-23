var h, sid, spass;
createRequestObject = function() {
    var a = null;
    "undefined" != typeof XMLHttpRequest && (a = new XMLHttpRequest);
    !a && window.createRequest && (a = window.createRequest());
    return a
};
g = function(e) {
    return document.getElementById(e)
};
pushwuop = function() {
    g("notice").style.display = 'block';
    g("notice").className = 'alert alert-danger text-center';
    g("notice").innerHTML = 'Wrong ID or password!';

};
fixdis = function() {
    g("submit-form").style.display = 'block';

};
logout = function() {
    g("submit-form").style.display = 'block';
    g("notice").style.display = "none";
    g("resultsec").style.display = "none";
};
lsuccess = function(name) {
    g("resultsec").style.display = "block";
    g("submit-form").style.display = "none";
    g("resultsec").innerHTML = '<b>Login successful!<br><br>Welcome, <h1>' + name + '</h1><br>Your University student ID is ' + sid + '</b><br><br><button id="logout" name="logout" class="btn btn-danger ms-auto">Logout</button>';
    g("logout").addEventListener("click", logout);
};
pushItemCallback = function(e) {
    var h = e.currentTarget;
    if (h.readyState == 4 && h.status == 200) {
        var info = JSON.parse(h.responseText);
        if (info.status == '$$$WUOP$$$') pushwuop();
        if (info.status == '$$$SL$$$') lsuccess(info.name);
    }
};
pushItem = function() {
    var ress;
    var pd = 'username=' + sid + '&password=' + md5(spass);
    h = createRequestObject();
    h.onreadystatechange = pushItemCallback;
    h.open("POST", "api.php", true);
    h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    h.send(pd);
};
checkItem = function() {
    sid = g("studentid").value;
    spass = g("password").value;
    if (sid == '') {
        g("submit-form").className = 'needs-validation was-validated';
    }
    if (spass == '') {
        g("submit-form").className = 'needs-validation was-validated';
    }
    if (sid && spass != '') {
        pushItem();
    }

};
btnSubmitClick = function() {
    res();
    resf();
    checkItem();
    return false
};
resf = function() {
    g("notice").style.display = "none";
    g("resultsec").style.display = "none";
};
res = function() {
    h = null,
        g("submit-form").onsubmit = btnSubmitClick,
        g("submit").onclick = btnSubmitClick,
        g("submit").disabled = !1,
        g("studentid").disabled = !1,
        g("password").disabled = !1;
};
init = function() {
    g("submit-form").onsubmit = btnSubmitClick,
        g("submit").onclick = btnSubmitClick,
        g("submit").disabled = !1,
        g("studentid").disabled = !1,
        g("password").disabled = !1;
};
"undefined" != typeof _nafiz && (init(), window.onload = function() {});
