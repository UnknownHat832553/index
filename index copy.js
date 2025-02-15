require("dotenv").config();
const Discord = require("discord.js-selfbot-v13");

const client = new Discord.Client({
    checkUpdate: false
});

const token = process.env.TOKEN; // ดึงค่าโทเคนจาก .env
const texts = [ 
    "𝐈'𝐦 𝐚 𝐏𝐬𝐲𝐜𝐡𝐨𝐩𝐚𝐭𝐡."
];

client.on("ready", async () => {
    console.log("Doing.. ");
    var text = ": ";
    var now_text = "";
    var now = 0;
    var at = 0;
    setInterval(() => {
        if (at == texts.length) {
            text = ": "+texts[0];
            at = 0;
        }
        if (now == text.length) { 
            now = 0;
            now_text = "";
            at++;
            text = ": "+texts[at];
        }
        text = ": "+texts[at];
        now_text += text[now];
        client.settings.setCustomStatus({
            text: now_text,
            expires: null,
        });
        now++;
    }, 50);
});

client.login(token);