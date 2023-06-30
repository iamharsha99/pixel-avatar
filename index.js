function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var ar=[".sleeves",".shirt",".pant",".sock",".shoe"];
  for(var i=0;i<ar.length;i++)
  {

    document.querySelector(ar[i]).style.backgroundColor=getRandomColor();
  }
  var skinColors = [
    "#F8D9D0", // Lightest
    "#F3C8BA",
    "#EABFAD",
    "#DAAE99",
    "#C69784",
    "#B58872",
    "#A27761",
    "#896B5A",
    "#6D5448",
    "#593E37"  // Darkest
  ];
  function getRandomSkinColor() {
    var randomIndex = Math.floor(Math.random() * skinColors.length);
    return skinColors[randomIndex];
  }
  var s=getRandomSkinColor();
  for(var i=0;i<2;i++)
  {
    document.querySelectorAll(".skin")[i].style.backgroundColor=s;
  }