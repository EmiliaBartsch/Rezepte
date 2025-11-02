class meal {
  constructor(image, name, zeit, aufwand, link, calories, zubereitung, season, rating, zutaten) {
    this.image = image;
    this.name = name;
    this.zeit = zeit;
    this.aufwand = aufwand;
    this.link = link;
    this.calories = calories;
    this.zubereitung = zubereitung;
    this.season = season;
    this.rating = rating;
    this.zutaten = zutaten;
 }

  static rating = class {
    constructor(emi, tri, gab, tho) {
      this.emi = emi;
      this.tri = tri;
      this.gab = gab;
      this.tho = tho;
    }
  };

  static zutaten = class {
    constructor(main, other) {
      this.main = main;
      this.other = other;
    }
  }
}

//winter: kohl, pastinake, rotkohl, kürbis, wirsing
//sommer: spargel, rhabarbar, bärlauch, zucchini, aubergine, 
//Generates a meal with the set attributes
const mealsArray = [
  new meal("pictures/ofengemüse_sabine.jpeg", "Ofengemüse", "40", "mittel", "https://www.chefkoch.de/rezepte/309291111454441/Buntes-Ofengemuese.html", "400", "backen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("kartoffeln", ["brokkoli", "zucchini", "paprika", "süßkartoffel"])
  ), 
    new meal("pictures/asia-noodles-stir-fry.webp", "Asia Nudeln mit Gemüse", "20", "mittel", "https://biancazapatka.com/de/asia-nudeln-gemuese-nudelpfanne/#recipe", "540", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("pasta", ["brokkoli"])
  ), 
    new meal("pictures/Bami-Goreng.webp", "Bami Goreng", "20", "gering", "https://www.reishunger.de/rezepte/rezept/3381/veganes-bami-goreng-mit-tofu-und-gemuse", "400", "kochen", "all",
    new meal.rating("4", "4", "4", "4"),
    new meal.zutaten("pasta", ["brokkoli", "paprika"])
  ), 
    new meal("pictures/tomaten-bulgursalat.webp", "Bulgursalat", "60", "mittel", "https://www.gaumenfreundin.de/bulgursalat-rezept-zum-grillen/", "600", "kalt", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("anderes", ["tomate", "zucchini"])
  ), 
    new meal("pictures/Mie-Nudeln-Erdnusssauce.jpg", "Cremige Mie-Nudel Pfanne mit Chili-Miso-Erdnusssauce", "20", "mittel", "https://lenaeats.com/chili-miso-erdnusspfanne/", "1000", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("pasta", [" "])
  ), 
    new meal("pictures/gefüllte-parika.jpeg", "Gefüllte Paprika mit Reis, Tomaten und veganem Hack", "60", "hoch", "https://www.lecker.de/gefuellte-paprika-mit-hackfleisch-4145.html", "400", "backen", "all",
    new meal.rating("2", "4", "4", "4"),
    new meal.zutaten("reis", ["paprika", "hack", "fleisch"])
  ), 
    new meal("pictures/Gnocchi-Auflauf.webp", "Gnocchi Auflauf mit Hackfleisch & Lauch", "40", "mittel", "https://emmikochteinfach.de/gnocchi-auflauf-mit-hackfleisch-und-lauch/", "700", "backen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("anderes", ["gnocchi"])
  ), 
    new meal("pictures/Gnocchi-Pfanne.webp", "Gnocchi Pfanne", "20", "mittel", "https://emmikochteinfach.de/gnocchi-pfanne/", "500", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("anderes", ["gnocchi"])
  ), 
    new meal("pictures/karamellisierter_lauch_hirse.jpg", "Karamellisierter Lauch mit Cacio-e-Pepe-Hirse", "35", "gering", "https://www.eat-this.org/karamellisierter-lauch-mit-cacio-e-pepe-hirse/#recipe", "900", "backen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("anderes", ["hirse", "lauch", "kichererbsen"])
  ), 
    new meal("pictures/veganes-soja-chicken-korma.jpg", "Indisches Soja Korma mit Reis", "55", "hoch", "https://easyveggie.de/asiatisch/indisches-soja-korma-mit-reis/", "500", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("reis", [" "])
  ),
    new meal("pictures/käse-lauch-suppe.jpeg", "Käse-Lauch-Suppe mit Hackfleisch", "55", "mittel", "https://www.einfachkochen.de/rezepte/kaese-lauch-suppe-mit-hackfleisch", "650", "kochen", "winter",
    new meal.rating("5", "2", "4", "3"),
    new meal.zutaten("anderes", ["lauch"])
  ),
  new meal("pictures/linsenbolognese.webp", "Linsenbolognese mit Tagliatelle", "45", "mittel", "https://eatsmarter.de/rezepte/linsenbolognese-mit-tagliatelle", "500", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("pasta", ["linsen"])
  ),

new meal("pictures/rotes-linsen-dal.webp", "Rotes Linsen Dal mit Reis", "25", "mittel", "https://biancazapatka.com/de/rotes-linsen-dal/", "500", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
  new meal.zutaten("reis", ["linsen", "indisch"])
),
new meal("pictures/salat.jpg", "Salat", "25", "gering", "", "450", "kalt", "summer",
    new meal.rating("4", "4", "5", "3"),
    new meal.zutaten("gemuese", ["gurke", "tomate", "salat", "feta"])
  ),
new meal("pictures/nudelsalat.jpeg", "Nudelsalat", "25", "gering", "https://kochkarussell.com/italienischer-nudelsalat-einfach/", "400", "kalt", "summer",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("pasta", ["tomate"])
  ),
new meal("pictures/cabonara.jpeg", "Spaghetti Carbonara", "30", "mittel", "https://www.eatbetter.de/rezepte/vegane-spaghetti-carbonara-soo-wuerzig-cremig-lecker", "750", "kochen", "all",
    new meal.rating("5", "3", "4", "2"),
    new meal.zutaten("pasta", ["speck"])
  ),
new meal("pictures/tacos.jpg", "Tacos mit Hack", "30", "gering", "https://www.einfachkochen.de/rezepte/vegane-tacos-einfach-so-wuerzig", "700", "kochen", "all",
    new meal.rating("4", "4", "5", "3"),
    new meal.zutaten("anderes", ["mais", "hack", "tacos", "mexikanisch"])
  ),
new meal("pictures/veganes-thai-curry.webp", "Veganes Thai-Curry", "30 ", "hoch", "https://biancazapatka.com/de/veganes-thai-curry/", "800", "kochen", "all",
    new meal.rating("3", "4", "4", "2"),
    new meal.zutaten("reis", ["asiatisch"])
  ),
new meal("pictures/wok-nudeln.webp", "Wok Nudeln mit Gemüse", "20", "gering", "https://www.gaumenfreundin.de/wok-nudeln/", "450", "kochen", "all",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("pasta", ["brokkoli", "paprika", "bohnen", "asiatisch"])
  ),
new meal("pictures/zitronenspaghetti.webp", "Zitronenspaghetti mit Kräutergarnelen", "30", "gering", "https://www.chefkoch.de/rezepte/1885101306529623/Zitronenspaghetti-mit-Kraeutergarnelen.html", "600", "kochen", "all",
    new meal.rating("4", "2", "4", "4"),
    new meal.zutaten("pasta", ["garnelen"])
  ),
new meal("pictures/ramen.webp", "Ramen", "45", "mittel", "https://www.zuckerjagdwurst.com/de/rezepte/vegane-miso-ramen-suppe-mit-raeuchertofu", "500", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("pasta", ["lauch", "asiatisch"])
  ),
new meal("pictures/Maultaschen-Gemuese-Pfanne.webp", "Maultaschen-Pfanne mit Gemüse", "25", "gering", "https://www.gaumenfreundin.de/maultaschen-pfanne/", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("anderes", ["maultaschen", "brokkoli", "paprika"])
  ),
new meal("pictures/kuerbissuppe.webp", "Kürbissuppe mit Croutons", "50", "mitte", "https://biancazapatka.com/de/cremige-kuerbissuppe/", "450", "kochen", "winter",
    new meal.rating("3", "3", "3", "2"),
    new meal.zutaten("anderes", ["kürbis"])
  ),
new meal("pictures/quinoa-frikadelle.webp", "Quinoa-Frikadelle mit Senfdip und Kartoffelstampf", "40", "mittel", "https://www.chefkoch.de/rezepte/3818861580989837/Quinoa-Frikadelle-mit-Senfdip-gebackener-Kartoffelstampf-und-Spinat-Salat.html/", "800", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", ["quinoa", "kartoffel"])
  ),
new meal("pictures/gemuesesuppe.jpeg", "Gemüsesuppe mit Schmand", "20", "gering", "https://www.gaumenfreundin.de/gemuesesuppe-mit-tk-gemuese/", "700", "kochen", "winter",
    new meal.rating("4", "2", "5", "3"),
    new meal.zutaten("gemuese", ["kartoffel", "karotte", "möhre", "erbsen"])
  ),
new meal("pictures/bauernfruehstueck.webp", "Bauernfrühstück", "20", "mittel", "https://www.chefkoch.de/rezepte/3478211518282258/Buntes-veganes-Bauernfruehstueck.html", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("kartoffeln", ["speck"])
  ),
new meal("pictures/bratkartoffeln.jpg", "Bratkartoffeln", "15", "gering", "https://www.chefkoch.de/rezepte/2415101381392072/Braune-oder-karamellisierte-Kartoffeln.html", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/broeselnudeln.jpeg", "Brösenudeln", "20", "gering", "https://www.kuechengoetter.de/rezepte/spaghetti-mit-brotbroeseln-27815", "450", "kochen", "all",
    new meal.rating("3", "4", "4", "4"),
    new meal.zutaten("pasta", ["tomaten"])
  ),
new meal("pictures/sandwich.jpg", "Club Sandwichs", "25", "gering", "https://www.einfachkochen.de/rezepte/new-york-club-sandwich-originalrezept", "450", "kalt", "summer",
    new meal.rating("4", "5", "4", "5"),
    new meal.zutaten("anderes", ["salat"])
  ),
new meal("pictures/crispy-tofu-curry.jpg", "Crispy Tofu Curry madame", "50", "hoch", "https://www.madamecuisine.de/crispy-tofu-curry/", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("reis", ["tofu", "asiatisch"])
  ),
new meal("pictures/Erdnuss-Topf.webp", "Erdnuss Hänchen Topf affrikanische Art", "45", "mittel", "https://emmikochteinfach.de/erdnuss-haehnchen-topf-afrikanische-art/", "450", "kochen", "winter",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("reis", ["soja", "tofu"])
  ),
new meal("pictures/faecherkartoffeln.jpg", "Fächerkartoffeln mit Lachs/Schnitzel", "60", "gering", "https://www.einfachkochen.de/rezepte/faecherkartoffeln-knusprig-aus-dem-backofen", "450", "backen", "all",
    new meal.rating("3", "5", "3", "3"),
    new meal.zutaten("kartoffeln", ["fisch", "lachs"])
  ),
/*new meal("pictures/broetchen.avif", "Grünkernbrötchen mit Tomate, Gurke, Paprika und Quark", "20", "mittel", "https://cookidoo.de/recipes/recipe/de-DE/r133126", "450", "kalt", "all",
    new meal.rating("3", "5", "4", "3"),
    new meal.zutaten("anderes", ["tomate"])
  ),*/
new meal("pictures/kartoffelgratin.jpg", "Kartoffelgratin mit Lachs", "70", "mittel", "https://www.eat-this.org/das-einfachste-vegane-kartoffelgratin/#recipe", "450", "backen", "winter",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("kartoffeln", ["fisch", "lachs"])
  ),
new meal("pictures/kartoffeln-schnitzel.png", "Kartoffeln mit Sauce Hollandaise", "25", "gering", "https://www.ichkoche.at/spargel-richtig-kochen-rezept-6729", "450", "kochen", "all",
    new meal.rating("4", "4", "3", "4"),
    new meal.zutaten("kartoffeln", ["erbsen", "bohnen", "brokkoli", "fisch", "lachs", "schnitzel", "spargel"])
  ),
new meal("pictures/kaesespaetzle.jpg", "Käsespätzle mit Röstzwiebeln", "30", "mittel", "https://www.einfachkochen.de/rezepte/vegane-kaesespaetzle", "450", "kochen", "all",
    new meal.rating("4", "3", "3", "2"),
    new meal.zutaten("anderes", ["spätzle"])
  ),

new meal("pictures/quiche.webp", "Quiche Lorraine", "60", "hoch", "https://www.zuckerjagdwurst.com/de/rezepte/vegane-quiche-lorraine", "450", "backen", "all",
    new meal.rating("5", "1", "4", "3"),
    new meal.zutaten("anderes", ["lauch", "speck", "tofu"])
  ),
new meal("pictures/aglio-e-olio.webp", "Spaghetti aglio e olio", "20", "gering", "https://emmikochteinfach.de/spaghetti-aglio-e-olio/", "450", "kochen", "all",
    new meal.rating("3", "4", "4", "3"),
    new meal.zutaten("pasta", [" "])
  ),
new meal("pictures/petersilienwurzel-pesto.webp", "Spaghetti mit Petersilienwurzelpesto", "35", "gering", "https://www.lecker.de/spaghetti-mit-petersilienwurzel-pesto-67296.html", "450", "kochen", "winter",
    new meal.rating("4", "3", "3", "5"),
    new meal.zutaten("pasta", ["petersilienwurzel"])
  ),
new meal("pictures/spaetzle.jpg", "Spätzle (mit Lachs und Erbsen)", "30", "mittel", "https://biancazapatka.com/de/vegane-kaese-spaetzle/", "450", "kochen", "all",
    new meal.rating("3", "4", "3", "3"),
    new meal.zutaten("anderes", ["spätzle", "erbsen"])
  ),
new meal("pictures/spaetzlepfanne.webp", "Spätzlepfanne mit Hack, lauch und Röstzwiebeln", "20", "mittel", "https://www.chefkoch.de/rezepte/535331150466829/Spaetzlepfanne-mit-Hackfleisch-und-Lauch.html", "450", "kochen", "all",
    new meal.rating("5", "4", "3", "3"),
    new meal.zutaten("anderes", ["spätzle", "hack", "lauch"])
  ),
new meal("pictures/suesskartoffel-curry.jpg", "Süßkartoffel-Karotten-Curry mit Erdnüssen und Reis", "60", "mittel", "https://www.chefkoch.de/rezepte/2592421407098932/Suesskartoffel-Curry-mit-Kokos-Erdnuss-Sosse.html", "450", "kochen", "all",
    new meal.rating("4", "5", "4", "3"),
    new meal.zutaten("reis", [" "])
  ),
new meal("pictures/gebackene-suesskartoffeln.webp", "Süßkartoffel mit Avocado-Paprika-Creme", "80", "mittel", "https://www.chefkoch.de/rezepte/2725361425059942/Gebackene-Suesskartoffeln-mit-Avocado-Paprika-Creme.html", "960", "backen", "all",
    new meal.rating("5", "3", "4", "3"),
    new meal.zutaten("anderes", [" "])
  ),
new meal("pictures/Kaese-Lauch-Nudeln.jpg", "Russischer Hackfleischtopf", "35", "mittel", "https://www.chefkoch.de/rezepte/2229861357239819/Russischer-Hackfleischtopf-vegan.html", "450", "kochen", "winter",
    new meal.rating("4", "4", "4", "4"),
    new meal.zutaten("pasta", ["lauch"])
  ),
new meal("pictures/ofenkartoffeln-cream.webp", "Ofenkartoffeln mit Quark und Hänchen, Tomaten", "75", "gering", "https://www.lecker.de/feuerhaehnchen-ofenkartoffel-zum-feierabend-76934.html", "450", "backen", "all",
    new meal.rating("3", "4", "4", "4"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/petersilienwurzelcremesuppe.webp", "Petersilienwurzelcremesuppe", "45", "gering", "https://www.chefkoch.de/rezepte/2121961341694075/Petersilienwurzelcremesuppe-mit-Raeucherlachs.html", "450", "kochen", "winter",
    new meal.rating("4", "2", "4", "3"),
    new meal.zutaten("gemuese", [" "])
  ),
new meal("pictures/suskartoffelpfanne.webp", "After-Work-Süßkartoffelpfanne", "30", "gering", "https://www.lecker.de/after-work-suesskartoffelpfanne-70529.html", "450", "kochen", "winter",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("kartoffeln", ["mexikanisch"])
  ),

new meal("pictures/asia-nudelpfanne.jpeg", "Asia-Nudel-Pfanne mit (veganem) Hackfleisch", "30", "mittel", "https://marleyspoon.at/menu/55617-asia-nudelpfanne-mit-gemischtem-hack-und-gruenen-bohnen?srsltid=AfmBOopyZoA3vvBy-_TmzJxp5aP9qYNxv7roRbE-hD92QGjshFZrEmmi", "880", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("pasta", ["karotte", "möhre", "bohnen", "lauchzwiebel"])
  ),
new meal("pictures/brokkoli-suppe.webp", "Brokkoli-Kartoffel-Suppe mit Pinienkernen", "30", "mittel", "https://www.hellofresh.de/recipes/brokkoli-kartoffel-suppe-mit-pinienkernen-65859b32600988fb9c06982a", "450", "kochen", "winter",
    new meal.rating("4", "2", "3", "3"),
    new meal.zutaten("gemuese", [" "])
  ),
new meal("pictures/champignon-brokkoli-pfanne.webp", "Champignon-Brokkoli-Pfanne auf Reisnudeln", "45", "gering", "https://www.now-vegan.de/rezepte/champignon-brokkoli-pfanne-auf-reisnudeln-und-tempeh/", "450", "kochen", "all",
    new meal.rating("4", "1", "4", "3"),
    new meal.zutaten("pasta", ["lauch", "tempeh", "tofu", "asiatich"])
  ),
new meal("pictures/chili-con-sojaschnetzel.webp", "Chili con Sojaschnetzel", "45", "mittel", "https://www.chefkoch.de/rezepte/733691176102085/Chili-con-Sojaschnetzel.html", "350", "kochen", "winter",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("reis", ["bohnen", "mexikanisch"])
  ),
new meal("pictures/sesam-nudeln.webp", "Chinesische Sesam Nudeln", "15", "gering", "https://biancazapatka.com/de/chinesische-sesam-nudeln/", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("pasta", ["paprika", "brokkoli", "frühlingszwiebeln", "kichererbsen", "karotte", "möhre", "asiatisch"])
  ),
new meal("pictures/Couscous-Salat.webp", "Couscous-Salat", "20", "gering", "https://emmikochteinfach.de/couscous-salat-rezept-schnell-und-einfach/#wprm-recipe-container-29512", "450", "kalt", "summer",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", ["couscous", "paprika"])
  ),
new meal("pictures/Cremige-Linguine-mit-Edamame.jpg", "Linguine mit Edamame und Spinat", "20", "gering", "https://veganworld.de/recipe/cremig-koestlich-linguine-mit-edamame-und-spinat/", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "4"),
    new meal.zutaten("pasta", [" "])
  ),
new meal("pictures/cremige_polenta.jpg", "Cremige Polenta mit Austernpilzen", "20", "mittel", "https://www.eat-this.org/cremige-polenta-mit-austernpilzen/#recipe", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "3"),
    new meal.zutaten("anderes", ["polenta", "frühlingszwiebel"])
  ),
new meal("pictures/orzotto.webp", "Cremiges Orzotto mit Babyspinat", "40", "mittel", "https://www.klaraida.de/rezepte/orzotto-one-pot-gericht-mit-babyspinat", "450", "kochen", "all",
    new meal.rating("4", "3", "3", "3"),
    new meal.zutaten("anderes", ["orzo", "tomaten"])
  ),
new meal("pictures/chickpea-salad.jpg", "Curry Chickpea Salad", "25", "gering", "https://www.feastingathome.com/curry-chickpea-salad/#tasty-recipes-34428-jump-target", "450", "kalt", "summer",
    new meal.rating("4", "3", "4", "2"),
    new meal.zutaten("gemuese", ["kichererbsen", "salat"])
  ),
new meal("pictures/deftiges-jackfruit-gulasch.webp", "Deftiges Jackfruit Gulasch", "85", "hoch", "https://www.chefkoch.de/rezepte/4074881636627212/Deftiges-Jackfruit-Gulasch.html", "450", "kochen", "all",
    new meal.rating("4", "2", "3", "2"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/Erbsen-Bratlinge.webp", "Erbsenbratlinge", "30", "mittel", "https://emmikochteinfach.de/erbsen-bratlinge-mit-raeucherlachs/", "590", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", [" "])
  ),
new meal("pictures/falafel-wrap.webp", "Falafel Wrap", "30", "gering", "https://www.rewe.de/rezepte/falafel-salat-wrap/", "450", "kalt", "all",
    new meal.rating("5", "4", "4", "4"),
    new meal.zutaten("anderes", ["salat", "tomaten", "paprika", "mais", "tofu"])
  ),
new meal("pictures/fruehlingsrollen.jpg", "Frühlingsrollen", "40", "mittel", "https://www.eat-this.org/vegane-fruehlingsrollen/#recipe", "450", "kochen", "summer",
    new meal.rating("4", "3", "3", "3"),
    new meal.zutaten("andere", ["kohl", "karotte", "möhre", "sellerie", "sprossen", "asiatisch"])
  ),
new meal("pictures/polenta-schnitten.webp", "Gebratene Polenta-Schnitten an Tomaten-Sugo", "30", "mittel", "https://www.madamecuisine.de/gebratene-polenta-schnitten-an-tomaten-sugo/", "450", "kochen", "all",
    new meal.rating("3", "3", "4", "3"),
    new meal.zutaten("anderes", [" "])
  ),
new meal("pictures/brotcrumble.avif", "Gemüseauflauf mit Brotcrumble", "80", "mittel", "https://www.rewe.de/rezepte/gemueseauflauf-brotcrumble/", "450", "backen", "all",
    new meal.rating("3", "3", "4", "4"),
    new meal.zutaten("kartoffeln", ["süßkartoffel", "tofu", "wirsing"])
  ),
new meal("pictures/gruener-spargel-mit-gnocchi-und-pesto.webp", "Grüner Spargel mit Gnocchi und Pesto", "25", "gering", "https://www.chefkoch.de/rezepte/1433711248253966/Gruener-Spargel-mit-Gnocchi-und-Pesto.html", "450", "kochen", "summer",
    new meal.rating("4", "3", "4", "2"),
    new meal.zutaten("anderes", ["gnocchi", "speck", "pinienkerne"])
  ),
new meal("pictures/Gruenkernbratlinge.webp", "Grünkernbratlinge", "30", "mittel", "https://www.gaumenfreundin.de/gruenkernbratlinge/#rezept", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "4"),
    new meal.zutaten("anderes", ["karotte", "pilze", "champignons"])
  ),
new meal("pictures/kartoffeltaschen.webp", "Kartoffeltaschen mit Spinat-Frischkäse-Füllung", "120", "mittel", "https://www.zuckerjagdwurst.com/de/rezepte/vegane-kartoffeltaschen-mit-spinat-frischkaese-fuellung", "450", "kochen", "all",
    new meal.rating("4", "4", "3", "3"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/hirse-gemuse.jpg", "Hirse-Gemüse-Pfanne", "55", "mittel", "https://www.einfachkochen.de/rezepte/hirse-gemuese-pfanne-super-wuerzig-leicht?portions=4", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", ["karotten", "paprika", "frühlingszwiebeln", "tomaten"])
  ),
new meal("pictures/kohlrabi_kartoffel_gratin.jpg", "Kohlrabi-Kartoffel-Gratin", "70", "mittel", "https://mangoldmuskat.de/kartoffel-gratin-vegan/", "450", "backen", "all",
    new meal.rating("3", "2", "4", "3"),
    new meal.zutaten("kartoffeln", ["tofu"])
  ),
new meal("pictures/kichererbsen-zucchini-pfanne.webp", "Kichererbsen-Zucchini-Pfanne", "40", "mittel", "https://www.madamecuisine.de/kichererbsen-zucchini-pfanne/", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "4"),
    new meal.zutaten("reis", ["champignons", "pilze"])
  ),
new meal("pictures/blumenkohl-schnitzel.jpg", "Knusprige Blumenkohlschnitzel", "50", "mittel", "https://elavegan.com/de/blumenkohl-schnitzel/#recipe", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "3"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/lemon-pasta.webp", "Lemon-Pasta mit Zuckerschoten-Dukkah", "25", "gering", "https://www.lecker.de/lemon-pasta-mit-zuckerschoten-dukkah-83865.html", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("pasta", ["frischkäse", "rucola"])
  ),
new meal("pictures/Maronensuppe.webp", "Maronensuppe", "25", "gering", "https://mangoldmuskat.de/maronensuppe-crostini/#recipe", "450", "kochen", "winter",
    new meal.rating("4", "2", "4", "2"),
    new meal.zutaten("anderes", ["kartoffeln"])
  ),
new meal("pictures/One-Pot-Quinoa.webp", "One Pot Quinoa", "35", "mittel", "https://www.gaumenfreundin.de/one-pot-quinoa-mit-spinat-und-suesskartoffeln/#rezept", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", ["süßkartoffel", "spinat", "avocado", "feta"])
  ),
new meal("pictures/pasta-weiße-bohnen.webp", "Pasta mit cremiger Soße aus weißen Bohnen und knusprigem Panko-Topping", "30", "mittel", "https://www.zuckerjagdwurst.com/de/rezepte/pasta-mit-cremiger-sosse-aus-weissen-bohnen-und-semmelbroesel-topping", "450", "kochen", "all",
    new meal.rating("3", "3", "3", "3"),
    new meal.zutaten("pasta", ["brösel", "zitrone"])
  ),
new meal("pictures/amatriciana-style.jpeg", "Pasta mit Tofu Amatriciana-Style", "35", "mittel", "https://marleyspoon.de/menu/424543-pasta-mit-tofu-amatriciana-style-vegan-mit-austernpilzen-und-petersilie", "830", "backen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("pasta", ["austernpilze", "tofu"])
  ),
new meal("pictures/zitronen-kapern-spaghetti.webp", "Pikante Zitronen - Kapern Spaghetti", "20", "gering", "https://www.chefkoch.de/rezepte/1778441287735728/Pikante-Zitronen-Kapern-Spaghetti.html", "570", "kochen", "all",
    new meal.rating("4", "3", "4", "4"),
    new meal.zutaten("pasta", [" "])
  ),
/*new meal("pictures/sesam-tempeh.jpeg", "Sesam-Tempeh auf Brokkoli-Nudeln", "35", "mittel", "https://marleyspoon.at/menu/80901-sesam-tempeh-auf-brokkoli-nudeln-mit-cremiger-erdnusssauce", "1000", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("pasta", ["brokkoli", "tempeh", "tofu", "champignons", "pilze"])
  ), zu viele cals*/
new meal("pictures/sommerrollen.webp", "Sommerrollen mit Erdnussdip", "50", "mittel", "https://www.rewe.de/rezepte/sommerrollen-mit-erdnussdip/", "450", "kalt", "summer",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("anderes", ["karotte", "paprika", "salat", "tofu", "asiatisch"])
  ),
new meal("pictures/spanische-kirchererbsen-spinat.jpg", "Spanische Kichererbsen mit Spinat - Garbanzos Con Espinacas", "15", "mittel", "https://www.eat-this.org/spanische-kichererbsen-mit-spinat/#recipe", "450", "kochen", "all",
    new meal.rating("4", "2", "3", "3"),
    new meal.zutaten("anderes", ["nüsse", "brot"])
  ),
new meal("pictures/Gnocchi-Spitzkohl-Pfanne-Rezept.webp", "Spitzkohl-Pfanne mit Gnocchi", "30", "mittel", "https://www.gaumenfreundin.de/spitzkohl-pfanne-mit-gnocchi-ziegenkaese-datteln-und-walnuessen/", "450", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("anderes", [" "])
  ),

new meal("pictures/suesskartoffel-pueree.jpg", "Süßkartoffelpüree", "25", "mittel", "https://www.aline-made.com/de/suesskartoffelpueree-vegan/#recipe", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/bordelaise.webp", "Tofu à la Bordelaise mit Zitronen-Senf-Soße, Kartoffeln und Erbsen", "45", "mittel", "https://www.zuckerjagdwurst.com/de/rezepte/tofu-a-la-bordelaise-mit-zitronensosse-kartoffeln-erbsen", "450", "backen", "all",
    new meal.rating("4", "3", "4", "2"),
    new meal.zutaten("kartoffeln", [" "])
  ),
new meal("pictures/flammkuchen.jpg", "Vegane Flammkuchen-Rösti", "30", "mittel", "https://www.eat-this.org/veganes-flammkuchen-roesti/#recipe", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("anderes", ["speck", "kartoffel"])
  ),
new meal("pictures/protein-bowl.avif", "Vegane Protein-Bowl", "40", "mittel", "https://www.rewe.de/rezepte/vegane-protein-bowl/", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("anderes", ["quinoa", "linsen", "brokkoli", "kichererbsen", "tempeh", "tofu"])
  ),
new meal("pictures/moehren-quiche.avif", "Vegane Möhren-Spinat-Quiche", "135", "mittel", "https://www.rewe.de/rezepte/vegane-moehren-spinat-quiche/", "450", "backen", "all",
    new meal.rating("4", "2", "4", "2"),
    new meal.zutaten("anderes", ["karotte", "tofu"])
  ),
new meal("pictures/spinatknoedel.webp", "Vegane Spinatknödel mit Pilzen und Walnüssen", "60", "mittel", "https://filiale.kaufland.de/rezepte/rezeptsuche/rezept.vegane-spinatknoedel-pilzen-walnuessen.r_id=Recipe_9662884.html", "520", "kochen", "all",
    new meal.rating("4", "3", "4", "3"),
    new meal.zutaten("kartoffeln", ["champignons", "austernpilze", "kräuterseitlinge"])
  ),
new meal("pictures/nussbraten.jpg", "Veganer Nussbraten mit geschmortem Lauch und Pilzen", "90", "hoch", "https://www.eat-this.org/veganer-nussbraten-mit-geschmortem-lauch-und-pilzen/#recipe", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "3"),
    new meal.zutaten("kartoffeln", ["lauch", "tofu"])
  ),
new meal("pictures/schupfnudel-auflauf.jpg", "Veganer Schupfnudelauflauf mit Wirsing und Lauch", "35", "mittel", "https://www.eat-this.org/veganer-schupfnudelauflauf-mit-wirsing-und-lauch/#recipe", "450", "backen", "all",
    new meal.rating("4", "3", "3", "3"),
    new meal.zutaten("pasta", [" "])
  ),
new meal("pictures/shepherd-pie.jpg", "Veganer Shepherd’s Pie", "55", "mittel", "https://biancazapatka.com/de/veganer-shepherds-pie-mit-linsen/#recipe", "450", "kochen", "all",
    new meal.rating("4", "2", "4", "2"),
    new meal.zutaten("anderes", ["karotte", "erbsen", "kartoffeln", "sellerie", "hack"])
  ),
new meal("pictures/geschnetzeltes-vegan.webp", "Zürcher Geschnetzeltes mit Spätzle (Vegan).", "25", "mittel", "https://biancazapatka.com/de/veganes-geschnetzeltes/#recipe", "450", "kochen", "all",
    new meal.rating("4", "4", "4", "3"),
    new meal.zutaten("anderes", ["soja", "champignons", "pilze"])
  ),

];

