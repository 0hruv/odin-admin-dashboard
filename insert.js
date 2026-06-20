


let svg_arr = ["svg/star-plus-outline.svg","svg/eye-plus-outline.svg","svg/source-fork.svg"];

let heading_arr = [ 
  "Aang: The Avatar",
  "Katara: Waterbender",
  "Sokka: The Idea Guy",
  "Toph: Blind Bandit",
  "Zuko: Fire Prince",
  "Suki: Kyoshi Warrior"]

let projectTexts = [
  "The optimistic, peace-loving Avatar. When he isn't dodging duties to go penguin sledding, he's mastering the elements.",
  "The compassionate and fierce heart of the group. She is a master waterbender, a brilliant healer, and the responsible mom of the team who keeps everyone completely focused.",
  "The non-bending tactical genius and sarcasm expert. He relies on his trusty boomerang and instincts.",
  "The greatest earthbender in the world. She uses seismic sense to see her surroundings, invented metalbending, and loves punching Sokka in the arm.",
  "The intense firebender with a complicated past. He joined the team to teach Aang and restore his lost honor.",
  "The highly skilled warrior from Kyoshi Island. She is a master of hand-to-hand combat, an inspiring leader, and absolute proof you don't need bending."
];

let grid = document.getElementById("projects")


for (let i = 0 ; i < 6 ; i++)
{
    let card = document.createElement("div");
    card.className = "project-card";
    
    let heading = document.createElement("h4");
    heading.className = "card-heading";
    heading.textContent = heading_arr[i];

    let undertext = document.createElement("div");
    undertext.className = "card-text";
    undertext.textContent = projectTexts[i];

    let imgcontainer = document.createElement("div");
    imgcontainer.className= "lower-container";

    for (let j = 0 ; j < 3 ; j++)
    {
        let img = document.createElement("img");
        img.src = svg_arr[j];

        imgcontainer.appendChild(img);
    }

    card.appendChild(heading);
    card.appendChild(undertext);
    card.appendChild(imgcontainer);

    grid.appendChild(card);

}
