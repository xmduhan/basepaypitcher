// ... ...
$("#otherLoginButtn").click(function () {
    h()
})

// ... ...

var PGEdit_IE32_CLASSID = "3A2C8BC3-5B68-4AE5-81D6-6DC378708F3E",
    PGEdit_IE32_CAB = "PassGuardCtrl.cab#version=1,0,2,1",
    PGEdit_IE32_EXE = "PassGuardSetupIE.exe",
    PGEdit_IE64_CLASSID = "206F48A0-61BB-48C8-B54C-7700B7923CFD",
    PGEdit_IE64_CAB = "PassGuardX64.cab#version=1,0,0,9",
    PGEdit_IE64_EXE = "PassGuardSetupX64.exe",
    PGEdit_FF = "PassGuardSetupFF.exe",
    PGEdit_Linux32 = "",
    PGEdit_Linux64 = "",
    PGEdit_FF_VERSION = "2.0.9.2",
    PGEdit_Linux_VERSION = "",
    PGEdit_MacOs = "PassGuardCtrl.dmg",
    PGEdit_MacOs_VERSION = "1.0.0.3",
    PGEdit_MacOs_Safari = "PassGuardSafari.dmg",
    PGEdit_MacOs_Safari_VERSION = "1.0.0.1",
    UPEdit_Update = "1";

//  获取所有的plugin的列表,很可能就是这个密码卫士插件
navigator.plugins.length  目前发现29项
navigator.plugins[15]
Plugin { 0: MimeType, application/x-pass-guard: MimeType, description: "PassGuard®™ 密码卫士插件 Version:2.0.9.2", filename: "npPassGuard.dll", version: "2.0.9.2", name: "PassGuard", length: 1 }


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


// --- 控件封装
navigator.userAgent.indexOf("MSIE") < 0 && navigator.plugins.refresh(), function (e) {
    e.pge = function (t) {
        this.settings = e.extend(!0, {}, e.pge.defaults, t), this.init()
    }, e.extend(e.pge, {defaults: {pgePath: "./ocx/", pgeId: "", pgeEdittype: 0, pgeEreg1: "", pgeEreg2: "", pgeMaxlength: 12, pgeTabindex: 2, pgeClass: "ocx_style", pgeInstallClass: "ocx_style", pgeOnkeydown: "", pgeFontName: "", pgeFontSize: "", tabCallback: "", pgeBackColor: "", pgeForeColor: ""}, prototype: {init: function () {
        this.pgeDownText = "请点此安装控件", this.osBrowser = this.checkOsBrowser(), this.pgeVersion = this.getVersion(), this.isInstalled = this.checkInstall()
    }, checkOsBrowser: function () {
        var e;
        return"Win32" == navigator.platform || "Windows" == navigator.platform ? navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("msie") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("trident") > 0 ? navigator.userAgent.indexOf("ARM") > 0 ? (e = 9, this.pgeditIEExe = "") : (e = 1, this.pgeditIEClassid = PGEdit_IE32_CLASSID, this.pgeditIECab = PGEdit_IE32_CAB, this.pgeditIEExe = PGEdit_IE32_EXE) : (e = 2, this.pgeditFFExe = PGEdit_FF) : "Win64" == navigator.platform ? navigator.userAgent.indexOf("Windows NT 6.2") > 0 || navigator.userAgent.indexOf("windows nt 6.2") > 0 ? (e = 1, this.pgeditIEClassid = PGEdit_IE32_CLASSID, this.pgeditIECab = PGEdit_IE32_CAB, this.pgeditIEExe = PGEdit_IE32_EXE) : navigator.userAgent.indexOf("MSIE") > 0 || navigator.userAgent.indexOf("msie") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("trident") > 0 ? (e = 3, this.pgeditIEClassid = PGEdit_IE64_CLASSID, this.pgeditIECab = PGEdit_IE64_CAB, this.pgeditIEExe = PGEdit_IE64_EXE) : (e = 2, this.pgeditFFExe = PGEdit_FF) : navigator.userAgent.indexOf("Linux") > 0 ? (navigator.userAgent.indexOf("_64") > 0 ? (e = 4, this.pgeditFFExe = PGEdit_Linux64) : (e = 5, this.pgeditFFExe = PGEdit_Linux32), navigator.userAgent.indexOf("Android") > 0 && (e = 7)) : navigator.userAgent.indexOf("Macintosh") > 0 && (navigator.userAgent.indexOf("Safari") > 0 && (navigator.userAgent.indexOf("Version/5.1") > 0 || navigator.userAgent.indexOf("Version/5.2") > 0 || navigator.userAgent.indexOf("Version/6") > 0) ? (e = 8, this.pgeditFFExe = PGEdit_MacOs_Safari) : navigator.userAgent.indexOf("Firefox") > 0 || navigator.userAgent.indexOf("Chrome") > 0 ? (e = 6, this.pgeditFFExe = PGEdit_MacOs) : navigator.userAgent.indexOf("Opera") >= 0 && (navigator.userAgent.indexOf("Version/11.6") > 0 || navigator.userAgent.indexOf("Version/11.7") > 0) ? (e = 6, this.pgeditFFExe = PGEdit_MacOs) : navigator.userAgent.indexOf("Safari") >= 0 && (navigator.userAgent.indexOf("Version/4.0") > 0 || navigator.userAgent.indexOf("Version/5.0") > 0) ? (e = 6, this.pgeditFFExe = PGEdit_MacOs) : (e = 0, this.pgeditFFExe = "")), e
    }, getpgeHtml: function () {
        if (1 == this.osBrowser || 3 == this.osBrowser)return'<span id="' + this.settings.pgeId + '_pge" style="z-index: 1;display:none;width:135px !important; height:19px !important;"><OBJECT ID="' + this.settings.pgeId + '" CLASSID="CLSID:' + this.pgeditIEClassid + '" codebase="' + this.settings.pgePath + this.pgeditIECab + '" onkeydown="if(13==event.keyCode || 27==event.keyCode)' + this.settings.pgeOnkeydown + ';" onfocus="' + this.settings.pgeOnfocus + '" tabindex="' + this.settings.pgeTabindex + '" class="' + this.settings.pgeClass + '"><param name="edittype" value="' + this.settings.pgeEdittype + '"><param name="maxlength" value="' + this.settings.pgeMaxlength + '"><param name="input2" value="' + this.settings.pgeEreg1 + '"><param name="input3" value="' + this.settings.pgeEreg2 + '"></OBJECT></span><span id="' + this.settings.pgeId + '_down" class="' + this.settings.pgeInstallClass + '" style="text-align:center;display:none;"><a href="' + this.settings.pgePath + this.pgeditIEExe + '">' + this.pgeDownText + "</a></span>";
        if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) {
            var e = '<embed ID="' + this.settings.pgeId + '"  maxlength="' + this.settings.pgeMaxlength + '" input_2="' + this.settings.pgeEreg1 + '" input_3="' + this.settings.pgeEreg2 + '" edittype="' + this.settings.pgeEdittype + '" type="application/x-pass-guard" tabindex="' + this.settings.pgeTabindex + '" class="' + this.settings.pgeClass + '" ';
            return void 0 != this.settings.pgeOnkeydown && "" != this.settings.pgeOnkeydown && (e += ' input_1013="' + this.settings.pgeOnkeydown + '"'), void 0 != this.settings.tabCallback && "" != this.settings.tabCallback && (e += " input_1009=\"document.getElementById('" + this.settings.tabCallback + "').focus()\""), void 0 != this.settings.pgeFontName && "" != this.settings.pgeFontName && (e += ' FontName="' + this.settings.pgeFontName + '"'), void 0 != this.settings.pgeFontSize && "" != this.settings.pgeFontSize && (e += " FontSize=" + Number(this.settings.pgeFontSize)), e += " >"
        }
        return 6 == this.osBrowser ? '<embed ID="' + this.settings.pgeId + '" input2="' + this.settings.pgeEreg1 + '" input3="' + this.settings.pgeEreg2 + '" input4="' + Number(this.settings.pgeMaxlength) + '" input0="' + Number(this.settings.pgeEdittype) + '" type="application/microdone-passguard-plugin" version="' + PGEdit_MacOs_VERSION + '" tabindex="' + this.settings.pgeTabindex + '" class="' + this.settings.pgeClass + '">' : 8 == this.osBrowser ? '<embed ID="' + this.settings.pgeId + '" input2="' + this.settings.pgeEreg1 + '" input3="' + this.settings.pgeEreg2 + '" input4="' + Number(this.settings.pgeMaxlength) + '" input0="' + Number(this.settings.pgeEdittype) + '" type="application/microdone-passguard-safari-plugin" version="' + PGEdit_MacOs_Safari_VERSION + '" tabindex="' + this.settings.pgeTabindex + '" class="' + this.settings.pgeClass + '">' : '<div id="' + this.settings.pgeId + '_down" class="' + this.settings.pgeInstallClass + '" style="text-align:center;">暂不支持此浏览器</div>'
    }, getDownHtml: function () {
        return 1 == this.osBrowser || 3 == this.osBrowser ? '<span id="' + this.settings.pgeId + '_down" class="' + this.settings.pgeInstallClass + '" style="text-align:center;"><a href="' + this.settings.pgePath + this.pgeditIEExe + '">' + this.pgeDownText + "</a></span>" : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? '<span id="' + this.settings.pgeId + '_down" class="' + this.settings.pgeInstallClass + '" style="text-align:center;"><a href="' + this.settings.pgePath + this.pgeditFFExe + '">' + this.pgeDownText + "</a></span>" : '<div id="' + this.settings.pgeId + '_down" class="' + this.settings.pgeInstallClass + '" style="text-align:center;">暂不支持此浏览器</div>'
    }, load: function () {
        if (this.checkInstall()) {
            if (2 == this.osBrowser) {
                if (this.pgeVersion != PGEdit_FF_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
            } else if (4 == this.osBrowser || 5 == this.osBrowser) {
                if (this.pgeVersion != PGEdit_Linux_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
            } else if (6 == this.osBrowser) {
                if (this.pgeVersion != PGEdit_MacOs_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
            } else if (8 == this.osBrowser && this.pgeVersion != PGEdit_MacOs_Safari_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml();
            return this.getpgeHtml()
        }
        return this.getDownHtml()
    }, generate: function () {
        if (2 == this.osBrowser) {
            if (0 == this.isInstalled)return document.write(this.getDownHtml());
            if (this.pgeVersion != PGEdit_FF_VERSION && 1 == UPEdit_Update)return this.setDownText(), document.write(this.getDownHtml())
        } else if (4 == this.osBrowser || 5 == this.osBrowser) {
            if (0 == this.isInstalled)return document.write(this.getDownHtml());
            if (this.pgeVersion != PGEdit_Linux_VERSION && 1 == UPEdit_Update)return this.setDownText(), document.write(this.getDownHtml())
        } else if (6 == this.osBrowser) {
            if (0 == this.isInstalled)return document.write(this.getDownHtml());
            if (this.pgeVersion != PGEdit_MacOs_VERSION && 1 == UPEdit_Update)return this.setDownText(), document.write(this.getDownHtml())
        } else if (8 == this.osBrowser) {
            if (0 == this.isInstalled)return document.write(this.getDownHtml());
            if (this.pgeVersion != PGEdit_MacOs_Safari_VERSION && 1 == UPEdit_Update)return this.setDownText(), document.write(this.getDownHtml())
        }
        return document.write(this.getpgeHtml())
    }, innerGenerate: function () {
        if (2 == this.osBrowser) {
            if (0 == this.isInstalled)return this.getDownHtml();
            if (this.pgeVersion != PGEdit_FF_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
        } else if (4 == this.osBrowser || 5 == this.osBrowser) {
            if (0 == this.isInstalled)return this.getDownHtml();
            if (this.pgeVersion != PGEdit_Linux_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
        } else if (6 == this.osBrowser) {
            if (0 == this.isInstalled)return this.getDownHtml();
            if (this.pgeVersion != PGEdit_MacOs_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
        } else if (8 == this.osBrowser) {
            if (0 == this.isInstalled)return this.getDownHtml();
            if (this.pgeVersion != PGEdit_MacOs_Safari_VERSION && 1 == UPEdit_Update)return this.setDownText(), this.getDownHtml()
        }
        return this.getpgeHtml()
    }, pwdclear: function () {
        if (this.checkInstall()) {
            var e = document.getElementById(this.settings.pgeId);
            e.ClearSeCtrl()
        }
    }, pwdSetSk: function (e) {
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser ? t.input1 = e : (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser) && t.input(1, e)
        } catch (i) {
        }
    }, pwdResultHash: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.output : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(7) : 6 == this.osBrowser || 8 == this.osBrowser
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, pwdResult: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.output1 : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(7) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output1())
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, machineNetwork: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.GetIPMacList() : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? (t.package = 0, e = t.output(9)) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output7(0))
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, machineDisk: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.GetNicPhAddr(1) : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? (t.package = 0, e = t.output(11)) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output7(2))
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, machineCPU: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.GetNicPhAddr(2) : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? (t.package = 0, e = t.output(10)) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output7(1))
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, pwdSimple: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.output44 : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(13) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output10())
        } catch (i) {
            e = ""
        } else e = "";
        return e
    }, pwdValid: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? t.output1 && (e = t.output5) : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(5) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output5())
        } catch (i) {
            e = 1
        } else e = 1;
        return e
    }, pwdHash: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.output2 : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(2) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output2())
        } catch (i) {
            e = 0
        } else e = 0;
        return e
    }, pwdLength: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            1 == this.osBrowser || 3 == this.osBrowser ? e = t.output3 : 2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser ? e = t.output(3) : (6 == this.osBrowser || 8 == this.osBrowser) && (e = t.get_output3())
        } catch (i) {
            e = 0
        } else e = 0;
        return e
    }, pwdStrength: function () {
        var e = 0;
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            if (1 == this.osBrowser || 3 == this.osBrowser)var i = t.output3, n = t.output4; else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser)var i = t.output(3), n = t.output(4); else if (6 == this.osBrowser || 8 == this.osBrowser)var i = t.get_output3(), n = t.get_output4();
            e = 0 == i ? 0 : 7 > i ? 1 : n > 1 && 3 > n && i > 6 ? 2 : 3 == n && i >= 6 ? 3 : 1
        } catch (a) {
            e = 0
        } else e = 0;
        return e
    }, checkInstall: function () {
        try {
            if (1 == this.osBrowser) {
                new ActiveXObject("PassGuardCtrl.PassGuard.1")
            } else if (2 == this.osBrowser || 4 == this.osBrowser || 5 == this.osBrowser || 6 == this.osBrowser || 8 == this.osBrowser) {
                var e = new Array;
                if (6 == this.osBrowser)var t = navigator.plugins["PassGuard 1G"].description; else if (8 == this.osBrowser)var t = navigator.plugins["PassGuard Safari 1G"].description; else var t = navigator.plugins.PassGuard.description;
                if (t.indexOf(":") > 0) {
                    e = t.split(":");
                    {
                        e[1]
                    }
                } else;
            } else if (3 == this.osBrowser) {
                new ActiveXObject("PassGuardX64.PassGuard.1")
            }
        } catch (i) {
            return!1
        }
        return!0
    }, getVersion: function () {
        try {
            if (navigator.userAgent.indexOf("MSIE") < 0) {
                var e = new Array;
                if (6 == this.osBrowser)var t = navigator.plugins["PassGuard 1G"].description; else if (8 == this.osBrowser)var t = navigator.plugins["PassGuard Safari 1G"].description; else var t = navigator.plugins.PassGuard.description;
                if (t.indexOf(":") > 0) {
                    e = t.split(":");
                    var i = e[1]
                } else var i = ""
            }
            return i
        } catch (n) {
            return""
        }
    }, setColor: function () {
        var e = "";
        if (this.checkInstall())try {
            var t = document.getElementById(this.settings.pgeId);
            void 0 != this.settings.pgeBackColor && "" != this.settings.pgeBackColor && (t.BackColor = this.settings.pgeBackColor), void 0 != this.settings.pgeForeColor && "" != this.settings.pgeForeColor && (t.ForeColor = this.settings.pgeForeColor)
        } catch (i) {
            e = ""
        } else e = ""
    }, setDownText: function () {
        void 0 != this.pgeVersion && "" != this.pgeVersion && (this.pgeDownText = "请点此升级控件")
    }, pgInitialize: function () {
        if (this.checkInstall()) {
            (1 == this.osBrowser || 3 == this.osBrowser) && e("#" + this.settings.pgeId + "_pge").show();
            var t = document.getElementById(this.settings.pgeId);
            void 0 != this.settings.pgeBackColor && "" != this.settings.pgeBackColor && (t.BackColor = this.settings.pgeBackColor), void 0 != this.settings.pgeForeColor && "" != this.settings.pgeForeColor && (t.ForeColor = this.settings.pgeForeColor)
        } else(1 == this.osBrowser || 3 == this.osBrowser) && e("#" + this.settings.pgeId + "_down").show()
    }}})
}
(jQuery);




// -- id=_ocx_password3 表示用密码登录时的密码安全控件
_ocx_password5 = document.getElementById("_ocx_password3")


// 火狐浏览器id = 5
5 == this.osBrowser
// 火狐浏览器下获取控件的版本信息
navigator.plugins.PassGuard.description
// --以下代码可以登录界面中的密码框内容
_ocx_password3 = document.getElementById("_ocx_password3")

// pwdclear 清除密码框中的密码
_ocx_password3.ClearSeCtrl()
// pwdSetSk 其中e代表调用/api/security/getRandomString返回的随机码
_ocx_password3.input(1, e)
// pwdResultHash 获取密码的结果的hash值
_ocx_password3.output(7)
// pwdResult 获取密码的结果值,注意这和获取密码hash值是同一个方法
_ocx_password3.output(7)
// machineNetwork 猜测是获取网卡的mac地址
_ocx_password3.output(9)
// machineDisk 猜测是获取磁盘的标识
_ocx_password3.output(11)
// machineCPU 猜测是获取cpuid的
_ocx_password3.output(10)
// pwdSimple 难道是获取原始密码??
_ocx_password3.output(13)
// pwdValid 检查密码是否有效
_ocx_password3.output(5)
// pwdHash 密码本身的hash值
_ocx_password3.output(2)
// pwdLength 得到密码的长度
_ocx_password3.output(3)
// pwdStrength 密码的强度
_ocx_password3.output(3),_ocx_password3.output(4) // 并做了相应处理
// checkInstall 检查控件是否安装
navigator.plugins.PassGuard.description // 并做了相应处理
// getVersion 获取控件的版本
navigator.plugins.PassGuard.description // 并做了相应处理
// setColor 改变控件的颜色
_ocx_password3.ForeColor    // 前景色
_ocx_password3.BackColor    // 背景色

// 这几个方法功能未知但应该有
output(1)
output(6)
output(8)
output(12)




// --这个控件id表示着另一个控件
_ocx_password4 = document.getElementById("_ocx_password4")
_ocx_password4.GetNicPhAddr(2)