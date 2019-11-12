function setPattern(tip, pic) {
  document.getElementById("txtMobile").placeholder = tip;
  document.getElementById("imgFlag").src = pic;
}

var regExp, msg;

function countryChanged() {
  var countryName = document.getElementById("lstCountries").value;
  switch (countryName) {
    case "india":
      setPattern(
        "India calling code +91 & 10 digits",
        "../images/indflagicon.png");
      regExp = /\+91[0-9]{10}/;
      msg = "Please use +91 & 10 digits";
      break;

    case "usa":
      setPattern(
        "USA calling code +001 & 6 digits",
        "../Images/usaflagicon.png"
      );
      regExp = /\+001[0-9]{6}/;
      msg = "Please use +001 & 6 digits";
      break;

    case "uk":
      setPattern("UK calling code +44 & 5 digits", "../Images/ukflagicon.png");
      regExp = /\+44[0-9]{5}/;
      msg = "Please use +44 & 5 digits";
      break;
  }
}

function verifyMobile() {
  var mobile = document.getElementById("txtMobile").value;
  if (mobile.match(regExp)) {
    document.write("Registered Successfully");
  }
  else {
    document.getElementById("lblError").style.display ="block";
    document.getElementById("msg").innerHTML = msg;
  }
}

function bodyLoad() {
  document.getElementById("lblError").style.display = "none";
}

function closeClick() {
  bodyLoad();
}
