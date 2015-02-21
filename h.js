// ... ...
$("#otherLoginButtn").click(function () {
    h()
})

// ... ...

var v = new $.pge(
        {pgePath: "/upload/cab/",
        pgeId: "_ocx_password3",
        pgeEdittype: 0,
        pgeEreg1: "[\\s\\S]*",
        pgeEreg2: "[\\s\\S]{6,20}",
        pgeMaxlength: 20,
        pgeTabindex: 1,
        pgeClass: "ocx_style4",
        pgeInstallClass: "ocx_style4",
        pgeOnkeydown: "", tabCallback: ""}
    ),
    y = new $.pge(
        {pgePath:"/upload/cab/",
         pgeId: "_ocx_password4",
         pgeEdittype: 0,
         pgeEreg1: "[\\s\\S]*",
         pgeEreg2: "[\\s\\S]{6,20}",
         pgeMaxlength: 20,
         pgeTabindex: 1,
         pgeClass: "ocx_style5",
         pgeInstallClass: "ocx_style5",
         pgeOnkeydown: "",
         tabCallback: ""}
    );

$(".js-security-input").html(v.innerGenerate()),
$(".js-security-input1").html(y.innerGenerate()),
v.pgInitialize(),
y.pgInitialize()

// ... ...
function e() {
   return(new Date).getTime()
}

function h() {
    if ($("#otherPhone").val($.trim($("#otherPhone").val())), s(), "true" != $("#othercodeCheckFlag").val())return n("请输入正确的验证码！"), $("#othercodeVcode").focus(), void 0;
    if (1 == v.pwdValid())return n("密码格式有误，请检查。"), $("#_ocx_password3").focus(), void 0;
    if (0 == v.pwdLength())return n("密码格式有误，请检查。"), $("#_ocx_password3").focus(), void 0;
    if (v.pwdLength() > 50 || v.pwdLength() < 6)return n("密码格式有误，请检查。"), $("#_ocx_password3").focus(), void 0;
    s(), $.ajax({url: "/api/security/getRandomString?key=keyPassword&" + e(), type: "GET", async: !1, success: function (e) {
        v.pwdSetSk(e)
    }});
    var t = v.pwdResult();
    $("#otherLoginButtn").after("<a class='ui-button ui-button-morange ui-loginbutton ui-graybutton'>正在进入...</a>"), $.ajax({url: "/api/user/otherLogin", type: "POST", data: {productNo: $("#otherPhone").val(), vcode: $("#othercodeVcode").val(), password: t, target: $.query.get("target")}, success: function (e) {
        return"ok" == e.data.status ? window.location = e.data.target : (o("othercode"), n(e.data.msg), $(".ui-graybutton").remove(), void 0)
    }, error: function () {
        o("othercode"), n("登录失败，服务暂时不可用"), $(".ui-graybutton").remove()
    }})
}

// ... ...

var u = new $.pge({pgePath: "/upload/cab/", pgeId: "_ocx_password3", pgeEdittype: 0, pgeEreg1: "[\\s\\S]*", pgeEreg2: "[\\s\\S]{6,20}", pgeMaxlength: 20, pgeTabindex: 1, pgeClass: "ocx_style4", pgeInstallClass: "ocx_style4", pgeOnkeydown: "", tabCallback: ""});
$(".js-security-input").html(u.innerGenerate()), u.pgInitialize()

// ... ...

$("#otherLoginButtn").click(function () {
    $("#oproductNo").val($.trim($("#oproductNo").val()));
    $("#oproductNo").val();
    if ($(".auth-input").hasClass("input-err") && $(".auth-input").removeClass("input-err"), c($("#oproductNo").val()))return $("#othErrMsg").text("请输入正确的非电信手机号！"), $("#oth-err").show(), $("#oproductNo").focus().addClass("input-err"), !1;
    if (1 == u.pwdValid())return $("#othErrMsg").text("密码格式有误，请检查。"), $("#oth-err").show(), $("#_ocx_password3").focus(), void 0;
    if (0 == u.pwdLength())return $("#othErrMsg").text("密码格式有误，请检查。"), $("#oth-err").show(), $("#_ocx_password3").focus(), void 0;
    if (u.pwdLength() > 50 || u.pwdLength() < 6)return $("#othErrMsg").text("密码格式有误，请检查。"), $("#oth-err").show(), $("#_ocx_password3").focus(), void 0;
    var t = $("#othCheckCode").val(), i = $("#othImgCodeFlag").val();
    if ("" == t)return $("#othErrMsg").text("请输入图片验证码！"), $("#oth-err").show(), $("#othCheckCode").focus().addClass("input-err"), !1;
    if ("true" != i)return $("#othErrMsg").text("请输入正确图片验证码！"), $("#oth-err").show(), $("#othCheckCode").focus().addClass("input-err"), !1;
    $("#oth-err").hide(), $.ajax({url: "/api/security/getRandomString?key=keyPassword&" + e(), type: "GET", async: !1, success: function (e) {
        u.pwdSetSk(e)
    }});
    var n = u.pwdResult();
    $.ajax({url: "/api/oauth/otherLogin", type: "POST", data: {productNo: $("#oproductNo").val(), vcode: $("#othCheckCode").val(), password: n, client_id: $("#client_id").val(), redirect_uri: $("#redirect_uri").val()}, success: function (e) {
        if ("suc" == e.data.status) {
            var t = e.data.msg;
            "0" == t ? ($("#authForm").attr("action", "/api/oauth/oauth/authent"), $("#authForm").submit()) : location.href = e.data.redirect_uri
        } else {
            var i = e.data.type;
            "error" == i ? location.href = "/outview/auth/err" : ($("#othErrMsg").text(e.data.msg), $("#oth-err").show(), l())
        }
    }, error: function () {
        $("#othErrMsg").text("服务异常，请稍后再试！"), $("#oth-err").show(), l()
    }})
});

// ... ...

function passwordLength() {
    var e = "";
    if (this.checkInstall())try {
        var t = document.getElementById(this.settings.pgeId);
        1 == this.osBrowser || 3 == this.osBrowser ? e = t.output3 : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(3) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output3())
    } catch (i) {
        e = 0
    } else e = 0;
    return e
}