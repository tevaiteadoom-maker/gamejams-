import kaplay from "kaplay";
// import "kaplay/global"; // décommente si tu veux utiliser les fonctions sans le préfixe k.

// Crée une seule instance de Kaplay
const k = kaplay({
  width: 640,
  height: 360,
  background: [0, 0, 0],
});

// Charger les ressources
k.loadRoot("./"); // utile pour Itch.io plus tard
k.loadSprite("bean", "sprites/bean.png");

// Ajouter un sprite à l'écran
k.add([
  k.pos(120, 80),
  k.sprite("bean"),
]);

// Ajouter un effet au clic
k.onClick(() => k.addKaboom(k.mousePos()));

// Ajouter du texte
k.add([
  k.text("Hello Kaplay 👋", { size: 32 }),
  k.pos(200, 160),
]);

// Ajouter un texte quand on appuie sur la barre espace
k.onKeyPress("space", () => {
  k.add([
    k.text("SPACE!", { size: 24 }),
    k.pos(250, 220),
  ]);
});
