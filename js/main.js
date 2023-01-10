$(".hamburg").click(function () {
  $("#nav-straight").show("slow");
});

$(".hamburg-close").click(function () {
  $("#nav-straight").hide("slow");
});

// $("li").click(function () {
//   $("#nav-straight").hide("slow");
// });

$(".add-cart-btn").click(function () {
  $(".pop-up-content").show();
  $(".blur-bg").show();
});

$(".close ").click(function () {
  $(".pop-up-content").hide();
  $(".blur-bg").hide();
});

$(".fin-popUp").click(function () {
  $(".pop-up-content").hide();
  $(".blur-bg").hide();
  alert("item successfully add to cart");
});

function change_popUpImg(btn, bgImg) {
  $(btn).click(function () {
    $(".popImg").html(bgImg);
  });
}

change_popUpImg("#backpack-02-btn", "<img src='./img/p-backpack02.jpg'>");
change_popUpImg("#backpack-01-btn", "<img src='./img/p-backpack01.png'>");
change_popUpImg("#backpack-03-btn", "<img src='./img/p-backpack03.png'>");
change_popUpImg("#drink-01-btn", "<img src='./img/p-drink01.jpg'>");
change_popUpImg("#shirt-01-btn", "<img src='./img/p-shirt01.png'>");
change_popUpImg("#bed-01-btn", "<img src='./img/p-bed01.png'>");

function change_popUpName(btn, bgName) {
  $(btn).click(function () {
    $(".popName").text(bgName);
  });
}

change_popUpName("#backpack-02-btn", "Backpack for Catto");
change_popUpName("#backpack-01-btn", "Backpack for Doggo");
change_popUpName("#backpack-03-btn", "Outdoor Tent");
change_popUpName("#drink-01-btn", "Drinking Kit");
change_popUpName("#shirt-01-btn", "Hoodie");
change_popUpName("#bed-01-btn", "Outdoor Transport Bag");

function change_popUpPrice(btn, bgPrice) {
  $(btn).click(function () {
    $(".popPrice").text(bgPrice);
  });
}

change_popUpPrice("#backpack-02-btn", "$200");
change_popUpPrice("#backpack-01-btn", "$300");
change_popUpPrice("#backpack-03-btn", "$400");
change_popUpPrice("#drink-01-btn", "$100");
change_popUpPrice("#shirt-01-btn", "$150");
change_popUpPrice("#bed-01-btn", "$500");

function change_popUpDesc(btn, bgDesc) {
  $(btn).click(function () {
    $(".popDesc").text(bgDesc);
  });
}

change_popUpDesc(
  "#backpack-02-btn",
  "Backpack suitable for kittens and small size cats."
);
change_popUpDesc(
  "#backpack-01-btn",
  "Backpack suitable for small size dogs and big cats."
);
change_popUpDesc("#backpack-03-btn", "Outdoor tent for dogs, waterproof.");
change_popUpDesc("#drink-01-btn", "Drinking kit with built-in cup design.");
change_popUpDesc(
  "#shirt-01-btn",
  "Waterproof hoodie raincoat,breathable material."
);
change_popUpDesc("#bed-01-btn", "Portable pet transport bag.");

$(".count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult").val();
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});

$(".fin-popUp").click(function () {
  $("#addResult").val("1");
  $(".numSoldCircle").show();
  $(".numSoldCircle").css("display", " flex");
});

var count = 0;
$(".fin-popUp").on("click", function () {
  count++;
  $(".numSold").text(count);
});
