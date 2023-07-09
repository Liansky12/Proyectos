const express = require('express');
const app = express();
require('events').EventEmitter.defaultMaxListeners = 20;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pagweb.html');
});
let port = process.env.PORT || 3000;
app.listen(port);

require('dotenv').config();

//const { OpusEncoder } = require('@discordjs/opus');

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
//const encoder = new OpusEncoder(48000, 2);

const fs = require('fs');
const Discord = require('discord.js');
const AntiSpam = require('discord-anti-spam');


const client = new Discord.Client(/*{
	ws: { properties: { $browser: 'Discord Android' } }
}*/);
require('discord-buttons')(client);

client.snipes = new Map();

client.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

let prefix = process.env.prefix;

// ---------------- ESTADO ----------------
function presence() {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: `¡Feliz Aniversario!`,
            type: 'PLAYING'
        }
    });
}
client.on('ready', () => {
    console.log('BOT Listo! :3');
    presence();
});
// ----------------------------------------

// ----------------------------------------

client.on('message', message => antiSpam.message(message));
const antiSpam = new AntiSpam({
    warnThreshold: 5, // Si sobrepasa esa cantidad se enviara una advertencia
    muteThreshold: 6,
    maxInterval: 5, //En los segundos que esta hay es considerado spam (EDITABLE).
    warnMessage: '**¡{@user} está inundando el chat! D:**', // Este mensaje advierte al usuario
    muteMessage: '**{user_tag}** ha sido Silenciada/o',
    maxDuplicatesWarning: 7, //
    exemptPermissions: ['ADMINISTRATOR'], // El usuario con el permiso de ADMINISTRADOR automaticamente bypassea esto
    ignoreBots: true, //
    verbose: true, //
    ignoredUsers: [], //
    removeMessages: true //
});

// ----------------------------------------

// ----------------------------------------


// ----------------------------------------


// ---------------- MENSAJES ----------------
client.on('message', message => {
    if (message.content.startsWith('GG')) {
        message.channel.send('¡Bien Jugado!');
    } else if (message.content.startsWith(prefix + 'sleep')) {
        message.channel.send(`:zzz: Ya es hora de mimir :3`);
    } else if (message.content.startsWith(prefix + 'uwu')) {
        message.channel.send('https://c.tenor.com/h339xLnDaVQAAAAM/egoz-uwu.gif');
    } else if (message.content.startsWith('piña')) {
        message.channel.send('sandia');
    } else if (message.content.startsWith(prefix + 'tag')) {
        message.channel.send(`${message.author}`);
    } else if (message.content.startsWith(prefix + 'clown')) {
        message.channel.send(':clown:');
    } else if (message.content.startsWith(prefix + 'paz')) {
        message.channel.send(
            `${message.author} ha pedido calma y amor en el servidor. :dove: `
        );
    } else if (message.content.startsWith(prefix + 'iluvu')) {
        message.channel.send(`Te quiero ${message.author} :3 :heart: `);
    } else if (message.content.startsWith(prefix + 'biblia')) {
        message.channel.send(
            'Preparense para el extenso texto que se viene. <:eyes01:719282956035686401>');
    } else if (message.content.startsWith(prefix + 'ping')) {
        return message.channel.send(Math.floor(client.ping) + ' ms');
    } else if (message.content.startsWith(prefix + 'dpv')) {
        return message.channel.send(':v');
    } else if (
        message.content.startsWith(prefix + 'cancel <@!531954008802197515>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854870120694546452/IMG_0363.PNG'
        );
    } else if (
        message.content.startsWith(prefix + 'cancel <@!677549789172203520>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854870108659515432/IMG_0364.PNG'
        );
    } else if (
        message.content.startsWith(prefix + 'cancel <@!677880215782817825>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854870112283394048/IMG_0365.PNG'
        );
    } else if (
        message.content.startsWith(prefix + 'cancel <@!605551718016745473>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854870115501080606/IMG_0367.PNG'
        );
    } else if (
        message.content.startsWith(prefix + 'cancel <@!668119046893469728>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854870113492926474/IMG_0366.PNG'
        );
    } else if (
        message.content.startsWith(prefix + 'cancel <@!741466889242279997>')
    ) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/829820463538241606/854878233673990184/IMG_0368.large.JPG'
        );
    } else if (message.content.startsWith('fowbdEkwkwkeen')) {
        for (let i = 0; i < 10; i++) {
            message.channel.send(
                `<@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520> <@677549789172203520>`
            );
        }

    } else if (message.content.startsWith(prefix + 'simp')) {
        return message.channel.send(
            'https://cdn.discordapp.com/attachments/779176712730443778/789911819728060416/USER_SCOPED_TEMP_DATA_orca-image-759888021-1.jpg'
        );
    } else if (message.content.startsWith(prefix + 'what')) {
        const channel = client.channels.cache.get('852983682461073418');
        return channel.send(
            `:warning: <@531954008802197515> Ahora tiene el rol <@&752236610531229726>.`
        );
    } else if (message.content.startsWith(prefix + 'bc')) {
        return message.channel.send(`<a:bongocat:719282954295312536>`);
    } else if (message.content.startsWith(prefix + 'poki')) {
        return message.channel.send(`<a:poki10fps:829820237841956884>`);
    } else if (message.content.startsWith('fbi')) {
        return message.channel.send(`<a:fbi_openup:719282968593432648>`);
        /*} else if (message.content.startsWith(prefix + 'aseguere')) {
          const channel = client.channels.cache.get('920072640981512264');
          return channel.send(
            `Alguien me invocó? :D`
          ); */
    } else if (message.content.startsWith(prefix + 'army')) {
        const channel = client.channels.cache.get('852983682461073418');
        return channel.send(
            `<a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952> <a:peepo_army:861451563930877952>`
        );
    } else if (message.content.startsWith(prefix + `q`)) {
        var rpts = [
            ' Sí',
            ' No',
            ' ¿Por qué?',
            ' Por favor',
            ' Tal vez',
            ' No sé',
            ' Definitivamente?',
            ' ¡Claro! ',
            ' Sí ',
            ' No ',
            ' Por supuesto! ',
            ' Por supuesto que no '
        ];
        if (!message) return message.reply(`Escribe una pregunta por favor.`);
        message.channel.send(
            `${message.author}` + rpts[Math.floor(Math.random() * rpts.length)]
        );
    } else if (message.content.startsWith(prefix + 'imgstaff')) {
        const channel = client.channels.cache.get('852983682461073418');
        return channel.send(
            `https://cdn.discordapp.com/attachments/829820463538241606/860185660555657236/11be5286fbdede12b5be5a59dc1d5526.png`
        );
    } else if (message.content.startsWith(prefix + 'support')) {
        message.channel.send('https://cdn.discordapp.com/attachments/829820463538241606/860185660555657236/11be5286fbdede12b5be5a59dc1d5526.png');
        message.channel.send(`<a:gears:991773271735414894> **Grupo Local de Moderación** <@668119046893469728> <@677880215782817825>`);

    } else if (message.content.startsWith(prefix + '&3wweE')) {
        const channel = client.channels.cache.get('719032304043032601');
        return channel.send(
            '<@605551718016745473> ' +
            `https://media.giphy.com/media/4N5vB4aErlVtVsywBw/giphy.gif`
        );
        // } else if (message.content.startsWith('<@668119046893469728>')) {
        // return message.channel.send('Suerte si te responde jaja');
        // } else if (message.content.startsWith('<!668119046893469728>')) {
        // return message.channel.send('Suerte si te responde jaja');
    } else if (message.content.startsWith(prefix + 'respondsuggest')) {
        const channel = client.channels.cache.get('719032304043032601');
        return channel.send('Gracias por tu interés en el servidor, tu sugerencia será evaluado por el GLM');
    } else if (message.content.startsWith(prefix + 'navidad')) {
        message.delete()
        message.channel.send('@everyone')
        return message.channel.send('https://cdn.discordapp.com/attachments/829820463538241606/1055871593697517669/istockphoto-1354399003-612x612.jpg');
    } else if (message.content.startsWith(prefix + '3rdA')) {
        message.delete()
        return message.channel.send('https://media.discordapp.net/attachments/861788523362648095/1114945204122820698/Diseno_sin_titulo.png');
    } else if (message.content.startsWith(prefix + 'newyear')) {
        message.delete()
        return message.channel.send('https://media.discordapp.net/attachments/829820463538241606/1058730430343426108/giphy.gif');
    }
});
// -----------------------------------------

// -----------------------------------------

{

    client.on("messageReactionAdd", async (reaction, user) => {
        //Función principal. Se llamará a este mismo cuando queramos agregar el rol al miembro
        let addMemberRole = async roleId => {
            //Buscamos el rol
            let role = reaction.message.guild.roles.cache.get(roleId);
            //Buscamos el miembro.
            let member = reaction.message.guild.members.cache.get(user.id) || (user.id ? await reaction.message.guild.members.fetch(user.id).catch(err => { }) : undefined);
            if (role && member) {
                //Vemos si el bot tiene permisos.
                if (!member.guild.me.hasPermission("MANAGE_ROLES")) return member.send("I don't have permissions, sorry Contact your server administrator.");
                //Agregamos el rol.
                member.roles.add(role, "Reaction-role");
                if (reaction.message.id === "862545371817312266" && reaction.emoji.name === "+1") addMemberRole("862170960782426144");
            }
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        //Prácticamente lo mismo sólo que removiendo el rol en la función

        let removeMemberRole = async roleId => {
            let role = reaction.message.guild.roles.cache.get(roleId);
            let member = reaction.message.guild.members.cache.get(user.id) || (user.id ? await reaction.message.guild.members.fetch(user.id).catch(err => { }) : undefined);
            if (role && member) {
                if (!member.guild.me.hasPermission("MANAGE_ROLES")) return member.send("I don't have permissions, sorry Contact your server administrator.");
                //Removemos el rol.
                member.roles.remove(role, "Reaction-role");
                if (reaction.message.id === "862545371817312266" && reaction.emoji.name === "+1") removeMemberRole("862170960782426144");
            }
        }
    });

};

// -----------------------------------------


// ---------------- VARIOS MENSAJES RESP 1 ----------------
client.on('message', msg => {
    if (msg.author.bot == client.user) {
        return;
    }
    let message = msg.content.toLowerCase();
    if (
        message.startsWith('hola') ||
        message.startsWith('hi') ||
        message.startsWith('Hola')
    ) {
        msg.channel.reply('¡Hola que tal! :D');
    } else if (
        message.startsWith('adios') ||
        message.startsWith('adiós') ||
        message.startsWith('Adios') ||
        message.startsWith('Adiós') ||
        message.startsWith('Bye') ||
        message.startsWith('bye') ||
        message.startsWith('Bai') ||
        message.startsWith('bai')
    ) {
        msg.channel.send('¡Hasta luego!');
    } else if (
        message.startsWith(prefix + `f`) ||
        message.startsWith(prefix + `F`)
    ) {
        msg.channel.send(`<:superf:719282950826491927>`);
    } else if (
        message.startsWith('Buenos días') ||
        message.startsWith('buenos días') ||
        message.startsWith('Buenos dias') ||
        message.startsWith('buenos dias') ||
        message.startsWith('wenos dias')
    ) {
        msg.channel.send(`¡Buenos días ${msg.author}! :D`);
    }
});
// ---------------------------------------------------

// ---------------- MENSAJES RANDOMS ----------------
client.on('message', message => {
    let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    var Mensajes = [
        `¿En qué puedo ayudarte ${message.author}?`,
        'Qué Querés',
        'Nostoi'
    ];
    var aleatorio = Math.floor(Math.random() * Mensajes.length);
    if (message.content.match(RegMention)) {
        message.channel.send(Mensajes[aleatorio]);
    }
});
// --------------------------------------------------


// ---------------- MENSAJES PROHIBIDOS ----------------
client.on("message", (message) => {
    if (message.content.includes('ass')
        || message.content.includes('tetas')
        || message.content.includes('Tetas')
        || message.content.includes('chucha')
        || message.content.includes('Chucha')
        || message.content.includes('asshole')
        || message.content.includes('Asshole')
        || message.content.includes('mamahuevo')
        || message.content.includes('Mamahuevo')
        || message.content.includes('Tetas')
        || message.content.includes('droga')
        || message.content.includes('Droga')
        || message.content.includes('nigga')
        || message.content.includes('gilipollas')
        || message.content.includes('puto')
        || message.content.includes('gay')
        || message.content.includes('shit')
        || message.content.includes('pene')
        || message.content.includes('polla')
        || message.content.includes('fuck')
        || message.content.includes('mierda')
        || message.content.includes('vagina')
        || message.content.includes('puta')
        || message.content.includes('joder')
        || message.content.includes('Putito')
        || message.content.includes('putito')
        || message.content.includes('Joder')
        || message.content.includes('ass')
        || message.content.includes('Ass')
        || message.content.includes('Pene')
        || message.content.includes('Vagina')
        || message.content.includes('Shit')
        || message.content.includes('Polla')
        || message.content.includes('Gay')
        || message.content.includes('Puta')
        || message.content.includes('PUTA')
        || message.content.includes('pito')
        || message.content.includes('CULEADO')
        || message.content.includes('culeado')
        || message.content.includes('GAY')
        || message.content.includes('follar')
        || message.content.includes('miErda')
        || message.content.includes('folla')
        || message.content.includes('FOLLA')
        || message.content.includes('asshole')
        || message.content.includes('Nigga')
        || message.content.includes('nigga')
    ) {
        message.delete()
    }
});
// ----------------------------------------------------- 


/* ---------------- DM ----------------
client.on("message", message => {
  const user = client.users.cache.get('668119046893469728');
  if(message.content.startsWith(prefix + "Liansky")){
      user.send('<:uwu:740267741738696706>')
  }
});

client.on("message", message => {
  const user = client.users.cache.get('531954008802197515');
  if(message.content.startsWith(prefix + "dm")){
      user.send('Chúpame la corneta')
  }
});
// ------------------------------------ */

// ---------------- PREGUNTAS ----------------
client.on('message', msg => {
    if (msg.author == client.user) {
        return;
    }
    let message = msg.content.toLowerCase();
    if (message.includes('cual es mi apodo?')) {
        msg.channel.send(` ¡Tu apodo es ${msg.author}! :D`);
    }
});
// -------------------------------------------

// ---------------- AUTO ROL ----------------
client.on('message', message => {
    if (message.content.startsWith(prefix + '+xdeTteq%3cFR')) {
        const member = message.member.roles.remove('752300953046220810');
    } else if (message.content.startsWith(prefix + 'unblocked')) {
        const role = client.guildRoles.find('752300953046220810');
        const member = message.mentions.members.first();
        member.roles.remove(role);
    }
});
// ------------------------------------------

// ---------------- IMÁGENES Y GIFS ----------------
client.on('message', message => {
    if (message.content.startsWith('sad')) {
        const img = new Discord.MessageAttachment(
            'https://i2.wp.com/the-avocado.org/wp-content/uploads/2020/07/sad-anime.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('dance')) {
        const img = new Discord.MessageAttachment(
            'https://tenor.com/view/girl-gif-18493602.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('7u7')) {
        const img = new Discord.MessageAttachment(
            'https://cdn.discordapp.com/attachments/763395967751684096/775834568808595476/1474664056_tumblr_od1ujm5Z7n1s5f9ado1_500.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith(prefix + 'urss')) {
        const img = new Discord.MessageAttachment(
            'https://acegif.com/wp-content/gif/soviet-flag-6.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('te quiero')) {
        const img = new Discord.MessageAttachment(
            'https://art.ngfiles.com/images/1192000/1192891_realmp3beatz_geometry-dash-lick-cat-gif.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('<3')) {
        const img = new Discord.MessageAttachment(
            'https://cdn.discordapp.com/attachments/775737296250994718/776991152670769192/102421724_3136911386369879_1511188195713130801_n.png'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('loli')) {
        const img = new Discord.MessageAttachment(
            'https://k62.kn3.net/taringa/C/2/1/A/1/1/ningen_sucker/750.gif'
        );
        message.channel.send(img);
    } else if (message.content.startsWith('hey')) {
        const img = new Discord.MessageAttachment(
            'https://i.kym-cdn.com/entries/icons/facebook/000/032/896/Screen_Shot_2020-02-19_at_2.16.43_PM.jpg'
        );
        message.channel.send(img);
    }
});
// -------------------------------------------------

// ---------------- EMBEDS ----------------
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'embed01')) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Título Prueba de Mensaje Embed')
            .setColor(0xff0000)
            .setDescription('Descripción de Prueba')
            .addField(
                'Subtitulo 01 de Prueba',
                'Descripción de Subtítulo 01 de Prueba',
                true
            )
            .addField(
                'Subtítulo 02 de Prueba',
                'Descripción de Subtítulo 02 de Prueba',
                true
            )
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(
                'https://images-ext-2.discordapp.net/external/IhSJbs1lmmnd9VHPbBqOyHkJwTXcy0c2NHdoX0VMB3s/https/cdn.weeb.sh/images/ByFHOIXvW.gif'
            )
            .setImage(
                'https://regionps.com/wp-content/uploads/2020/03/Demon-Slayer-Kimetsu-no-Yaiba.jpg'
            )
            .setFooter(
                'Subido por ' + message.member.displayName,
                message.author.avatarURL()
            )
            .setTimestamp()
            .setURL('https://es.wikipedia.org/wiki/Among_Us');
        message.channel.send(embed);
    } else if (message.content.startsWith(prefix + 'among')) {
        const channel = client.channels.cache.get('752020671844057098');
        const embed = new Discord.MessageEmbed()
            .setTitle('Among Us')
            .setColor(0xff0000)
            .setDescription(
                'Nueva versión de Among Us **v2020.12.9** para **Windows**.'
            )
            .addField(
                'Descarga',
                'https://drive.google.com/file/d/1KuyuHczwzHqx2-Su7Imul2EwkTS04H-c/view?usp=sharing'
            )
            .setThumbnail(
                'https://imagenes.milenio.com/HlGmVfy45GgAzcKVNFlTNbRUp4Y=/958x596/https://www.milenio.com/uploads/media/2020/09/22/popular-videojuego-presento-falla-regiones_0_0_1200_747.jpg'
            )
            .setImage(
                'https://static.elcorreo.com/www/multimedia/202009/28/media/Among-Us.jpg'
            )
            .setFooter(
                'Subido por ' + message.member.displayName,
                message.author.avatarURL()
            )
            .setTimestamp()
            .setURL('https://es.wikipedia.org/wiki/Among_Us');
        channel.send(embed);
    } else if (message.content.startsWith(prefix + 'pino')) {
        const embed = new Discord.MessageEmbed()
            .setTitle(
                `La berenjena de ${message.member.displayName} mide ${Math.floor(
                    Math.random() * (20 + 1)
                )} centímetros`
            )
            .setColor('RAMDOM')
            .setDescription('Alta Espada posees')
            .setFooter(message.member.displayName, message.author.avatarURL())
            .setTimestamp();
        message.channel.send(embed);
    } else if (message.content.startsWith(prefix + 'dado')) {
        const embed = new Discord.MessageEmbed()
            .setTitle(
                `${message.member.displayName
                } ha lanzado un dado y ha sacado un ${Math.floor(
                    Math.random() * (6 + 1)
                )}.`
            )
            .setColor('RANDOM')
            .setDescription('La suerte no existe... es aleatoria.')
            .setFooter(message.member.displayName, message.author.avatarURL());
        message.channel.send(embed);
    } else if (message.content.startsWith(prefix + 'maincra')) {
        const channel = client.channels.cache.get('752020671844057098');
        const embed = new Discord.MessageEmbed()
            .setTitle('Minecraft Pocket Edition')
            .setColor(0xff0000)
            .setDescription('Minecraft PE **Versions** para **Andorid**.')
            .addField(
                'Descarga',
                'https://drive.google.com/drive/folders/16bymYWQUazLjEXv_C1wPlPLglQctZTpH?usp=sharing'
            )
            .setThumbnail(
                'https://images-na.ssl-images-amazon.com/images/I/512dVKB22QL._AC_UL600_SR600,600_.png'
            )
            .setImage(
                'https://www.internetmatters.org/wp-content/uploads/2018/01/Minecraft-image.jpg'
            )
            .setFooter(
                'Subido por ' + message.member.displayName,
                message.author.avatarURL()
            )
            .setTimestamp()
            .setURL('https://es.wikipedia.org/wiki/Minecraft');
        message.channel.send(embed);
    } else if (message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Yukine II')
            .setColor(0xccccff)
            .addField(
                'Información del bot',
                '**© Yukine II Bot** creado y programado en JavaScript/Node.js por Liansky y alojado en **Replit.com**.\n\nEl Logotipo y nombre son extraidos de la animación japonesa *<Noragami>*; propiedad y derechos de *<Adachikota>*.\n\nSin reclamaciones de copyright por uso **no comercial**, según la Ley de Derechos de Autor.'
            )
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/829820463538241606/857423581671718952/yukinehd-removebg-preview.png'
            )
            .setFooter(
                'Solicitado por ' + message.member.displayName,
                message.author.avatarURL()
            )
            .setTimestamp()
            .setURL('https://liansky.tk/yukine');
        message.channel.send(embed);
        /* }else
  if(message.content.startsWith(prefix+"event")){
    const embed = new Discord.MessageEmbed()
      .setTitle("Horarios del Evento Final de la Temporada 4")
      .setColor('0x5B2C6F')
      .setDescription('16:00 horas **Perú**'+"\n"+"18:00 horas **Chile**")
      .setImage("https://cdn2.unrealengine.com/14br-junior-key-art-motd-1920x1080-nomnom-1920x1080-598740931.jpg")
    message.channel.send(embed);
    */
    } else if (message.content.startsWith(prefix + 'web')) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Página Oficial de Yukine II`)
            .setColor('0xCCCCFF')
            .setDescription('https://liansky.tk/yukine');
        message.channel.send(embed);
    } else if (message.content.startsWith(prefix + 'newPrefix')) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Prefijo cambiado  / => *`)
            .setColor('0xCCCCFF');
        message.channel.send(embed);

        /*
        } else if (message.content.startsWith(prefix + 'newbanner')) {
          const embed = new Discord.MessageEmbed()
            .setTitle(`¡Nuevo Banner en el Servidor!`)
            .setColor('0xCCCCFF')
            .setImage(
              'https://cdn.discordapp.com/attachments/829820463538241606/861423956832681994/PicsArt_05-14-01.08.16.png'
            )
            .setFooter(
              'Autor Original -Patience#2942',
              'https://cdn.discordapp.com/avatars/531954008802197515/5bc2fe390e770300985f8cda323cc8ad.png?size=512'
            );
          message.channel.send(embed);
        } else if (message.content === prefix+'addrol') {
          const member = message.member;
        
        //Creamos un embed
        const embed = new Discord.MessageEmbed() 
      .setTitle('Auto Rol')
      .setDescription(`Reacciona para añadir un rol secreto`)
      
      const enviado = await message.channel.send(embed)
      
      // El bot añade el/los emojis
      await enviado.react('👍')
      
      // Obtiene el emoji reaccionado y la ID del usuario
      let webRol = (reaction) => reaction.emoji.name === '👍';
      
      // Después de un tiempo se cancela y no deja añad
      const wR = enviado.createReactionCollector(webRol);
      // Enviamos el mensaje y le damos en este caso un rol
      wR.on('collect', async r => {
          member.roles.add('862170960782426144');
      }) 
      
        } else if (message.content === prefix+'embedautorol') {
          const embed = new Discord.MessageEmbed()
            .setTitle(`Reacciona para tener un nuevo rol y desbloquear un canal secreto`)
            .setColor('0xCCCCFF');
          message.channel.send(embed); */
    }
});





client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
        const informacion = new Discord.MessageEmbed();
        informacion.setAuthor('Yukine II', client.user.displayAvatarURL());
        informacion.setTitle(
            'Comandos y Funciones',
            message.author.displayAvatarURL()
        );
        informacion.setDescription(
            'Estos son los comandos no ocultos que se han programado para Yukine II'
        );
        informacion.addField(
            '```*avatar + tag```',
            `Menciona a alguien para ver su icono de usuario`,
            true
        );
        informacion.addField('```*bc```', `Bongocat`, true);
        informacion.addField('```*biblia```', `Mucho texto`, true);
        informacion.addField('```*bot```', `Info del bot`, true);
        informacion.addField(
            '```*cancel + tag```',
            `Cancela a alguien por lo que hizo`,
            true
        );
        informacion.addField('```*clown```', `Payaso`, true);
        informacion.addField('```*dado```', `Lanza un dado`, true);
        informacion.addField(
            '```*dpv```',
            `Yukine no pertenece ahí, no te confundas`,
            true
        );
        informacion.addField('```*iluvu```', `Yukine envía un lindo corazón`, true);
        informacion.addField(
            '```*paz```',
            `Usa esto cuando el chat empieze a arder`,
            true
        );
        informacion.addField(
            '```*ping```',
            `Este comando puede estar corrompido, mejor no lo uses`,
            true
        );
        informacion.addField(
            '```*pino```',
            `Muestra el tamaño de tu Berenjena al servidor`,
            true
        );
        informacion.addField(
            '```*poki```',
            `Este comando no es nada simpeante`,
            true
        );
        informacion.addField(
            '```*say + text```',
            `Por dios, el bot ahora expresa palabras propias`,
            true
        );
        informacion.addField(
            '```*simp```',
            `Dile a alguien lo SIMPático que es`,
            true
        );
        informacion.addField('```*sleep```', `Recuerda dormir tus 8 horas`, true);
        informacion.addField('```*support```', `Ayuda del staff`, true);
        informacion.addField(
            '```*tag```',
            `Yukine te menciona. No preguntes porque`,
            true
        );
        informacion.addField(
            '```*urss```',
            `Bandera de la Unión de Repúblicas Socialistas Soviéticas`,
            true
        );
        informacion.addField('```*web```', `Pagina web`, true);
        informacion.addField(
            '```@Yukine II```',
            `Invoca al mejor bot del servidor`,
            true
        );
        informacion.setFooter(
            `Solicitado por ` +
            message.member.displayName +
            `, usa #❓soporte si necesitas ayuda`,
            message.author.avatarURL()
        );
        informacion.setTimestamp();
        informacion.setColor(0xccccff);
        message.channel.send({ embed: informacion });
    }
});


// ---------------------------------------


// ---------------------------------------
const disbut = require('discord-buttons');
const rol = '843275884852805672'; // ID del rol a agregar

client.on('message', async (message) => {
    if (message.content === prefix + 'button') {
        let btn = new disbut.MessageButton() // Creamos nuestro boton
            .setLabel(`¿?`) // Le colocare de texto "Dame click"
            .setStyle("green") // Le pondre color gris
            .setID('roles') // ID roles
        console.log(btn)
        await message.channel.send(`Haz click aquí para obtener un rol secreto`, btn); // Enviamos el mensaje
    }
});

client.on('clickButton', async (boton) => {
    if (boton.id == 'roles') { // Si la ID del boton es la misma que la ID que hemos puesto enviamos un mensaje
        await boton.think(true); // Este efecto me gusta porque lo que hace es que pone a pensar al bot
        boton.clicker.member.roles.add(rol)

        setTimeout(() => {
            boton.reply.edit(`${boton.clicker.user.tag}, se te ha aï¿½adido el rol correctamente`)
        }, 1000);

    }
});

// ---------------------------------------


// ---------------------------------------

client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Bienvenida/o a The Escuadron`)
        .setColor('0xCCCCFF')
        .setDescription(
            `${member.user} No te olvides de pasar por \n<#719032902532202578>`
        )
        .setThumbnail(
            member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 })
        )
        .setImage(
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/welcome-video-design-template-6ef541fd151da84baea3a60a489d6a9c_screen.jpg?ts=1577643382'
        );

    client.channels.cache.get('852983682461073418').send(embed);
});
// ---------------------------------------

// ---------------------------------------

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/);
    function getUserFromMention(mention) {
        if (!mention) return;

        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);

            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }

            return client.users.cache.get(mention);
        }
    }
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(prefix + 'avatar')) {
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply(
                    'Por favor, menciona a alguine para ver su avatar'
                );
            }

            return message.channel.send(
                `Avatar de ${user.username}: ${user.displayAvatarURL({
                    dynamic: true
                })}`
            );
        }

        return message.channel.send(
            `${message.author.username}, tu avatar: ${message.author.displayAvatarURL(
                { dynamic: true }
            )}`
        );
    }
});

// ---------------------------------------

// ---------------------------------------

client.on('message', message => {
    if (message.content === '*react') {
        message.react('😄');
    } else if (message.content === '*react-custom') {
        message.react('396548322053062656');
    } else if (message.content === '*fruits') {
        message
            .react('🍎')
            .then(() => message.react('🍊'))
            .then(() => message.react('🍇'))
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});

// ----------------------------------------

// ----------------------------------------

client.on('message', async message => {
    if (message.author.bot) return;
    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'say') {
        let permisos = message.channel.permissionsFor(message.member);

        message.channel.send(args.join(' '), {
            disableMentions: permisos.has('MENTION_EVERYONE') ? 'none' : 'everyone'
        });
    }
});

// ----------------------------------------

// ----------------------------------------

client.on('message', async message => {

    if (message.content.startsWith(prefix + 'join')) {
        const connection = await message.member.voice.channel.join();
        message.channel.send('**Ya me uní al canal de voz** :thumbsup:');


    } else if (message.content.startsWith(prefix + 'play WML')) {
        const fs = require('fs');
        const connection = await message.member.voice.channel.join();
        connection.play(fs.createReadStream('Wish Me Luck.ogg'), {
            type: 'ogg/opus'
        });
        message.channel.send(' :arrow_forward: ``Wallows - Wish Me Luck``');
    } else if (message.content.startsWith(prefix + 'play LTDO')) {
        const fs = require('fs');
        const connection = await message.member.voice.channel.join();
        connection.play(fs.createReadStream('Leave The Door Open.ogg'), {
            type: 'ogg/opus'
        });
    } else if (message.content.startsWith(prefix + 'play Tokyo')) {
        const fs = require('fs');
        message.channel.send(' :arrow_forward: ``Leat eq - Tokyo``');
        const connection = await message.member.voice.channel.join();
        connection.play(fs.createReadStream('Tokyo.ogg'), { type: 'ogg/opus' });
    } else if (message.content.startsWith(prefix + 'play Dynamite')) {
        const fs = require('fs');
        const connection = await message.member.voice.channel.join();
        connection.play(fs.createReadStream('Dynamite.ogg'), { type: 'ogg/opus' });
        message.channel.send(' :arrow_forward: ``BTS - Dynamite``');


    } else if (message.content.startsWith(prefix + 'leave')) {
        const connection = await message.member.voice.channel.join();
        connection.disconnect();
        message.channel.send('**Listo, ya me desconecté del canal de voz** :thumbsup:')
    }
});

// ------------------------------------------ 


// ----------------- SNIPE ------------------

client.on("messageDelete", (message) => {

    //este es el evento messageDelete se activa cuando un mensaje es eliminado.

    client.snipes.set(message.channel.id, {
        content: message.content,
        delete: message.author,
        canal: message.channel
    });
    /*
    content = Contenido del mensaje eliminado
    delete = seria de quien fue escrito el mensaje
    canal = canal donde se elmino, pero como se nota hay dos
    el primer message.channel.id almacenara en el objeto Map la id del canal donde se elimino el mensaje, y el segundo seria utilizado en el comando Opcional
    */

});

client.on("message", (message) => {
    //el evento message
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    //Si el autor del mensaje es el bot O el mensaje no comienza con el prefix retorna nada

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    //definimos los argumentos y cmd obtendra un elemento que sera nuestro comando

    if (cmd === "snipe") {

        const channel = message.mentions.channels.first() || message.channel;

        //en esta constante definimos un canal mencionado y si no el canal donde se ejecuto el cmd

        const msg = client.snipes.get(channel.id);
        //en esta constante definimos nuestro client.snipes que es nuestro objeto Map, con el metodo .get() tratamos de ver si channel.id(id del canal) esta dentro del Map  
        if (!msg) {
            message.channel.send(`⚠️ No se ha borrado ningún mensaje recientemente :)`)
                .then(m => m.delete({ timeout: 5000 }));
            //Si no lo esta mandamos este mensaje ^    
        } else {

            const main = new Discord.MessageEmbed()
                .setColor("0xCCCCFF")
                .setAuthor(`${msg.delete.tag}`, msg.delete.displayAvatarURL())
                .addField("Canal", `<#${msg.canal.id}>`)
                .setDescription(`${msg.content}`)
            message.channel.send(main);
        }
    }

});

// ------------------------------------------

// ------------------------------------------

client.on('message', async message => {
    if (message.content.startsWith(prefix + 'test-covid')) { //definimos el nombre del comando

        let rpts = [":warning: **A dado positivo al test de COVID-19!** :warning: ", ":partying_face: **A dado negativo al test de COVID-19!** :partying_face: "] //aqui ponemos las opciones que pueden salir en este caso negativo o positivo

        let mencionado = message.mentions.users.first(); //esto es para que el comando funcione con las menciones

        if (!mencionado) return message.reply(`tienes que mencionar a una persona`) //la respuesta que dira el bot si no hemos cumplido con el requisito de mencionar a algún usuario

        const embedDatos = new Discord.MessageEmbed() //creamos el embed
            .setTitle(`Resultado del test de coronavirus del usuario **${mencionado.username}**`)
            .setDescription(rpts[Math.floor(Math.random() * rpts.length)]); //aqui ponemos en uso los resultados que pusimos anteriormente que son el positivo y el negativo

        message.channel.send({ embed: embedDatos });
    }
});
// ------------------------------------------


// ---------------- STOP BOT ----------------
client.on('message', message => {
    if (message.content.startsWith('$&kill')) {
        process.exit();
    }
});
// ------------------------------------------

client.login(process.env.token);
