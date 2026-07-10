
function switchPanel(panelId) {
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
    document.getElementById(panelId).classList.add('active');
}

function playGame() {
    var version = document.getElementById('version-dropdown').value;
    var url = ""; 

    
    if (version === "1.8.8") {
        url = "https://cdn.esm.sh/gh/vidio-boy/Eaglercraft1.8.8@959ba7c/eaglercraft.1.8.8.html";
    }
    if (version === "1.12.2") {
        url = "https://esm.sh/gh/tonydsas/eaglercraftoffline/Eaglercraft_1.12_Offline_en_US.html";
    }
    if (version === "1.5.2") {
        url = "https://esm.sh/gh/daditto2012/eaglercraft-versions/Minecraft%201.5.2.html";
    }
    if (version === "1.12forge") {
        url = "https://esm.sh/gh/zaka13alt/idk@5dd8a80/math/m.html";
    }
    if (version === "1.21.11new") {
        url = "https://quiet-apricot-magpie.myfilebase.com/ipfs/QmWX25RNw3DCvhKodj9dKrqWtHUsNM2mTQdoxAJbXjkT5F";
    }
    if (version === "b1.8.1") {
        url = "https://esm.sh/gh/zaka13alt/idk@c9d5dc2/math/b1.8.1.html";
    }
    if (version === "1.2.5") {
        url = "https://esm.sh/gh/zaka13alt/idk@c9d5dc2/math/1.2.5.html";
    }
    if (version === "1.16.5") {
        url = "https://eaglercraft-1-16-5-gamma.vercel.app/play.html";
    }
     if (version === "b1.7.3") {
        url = "https://esm.sh/gh/zaka13alt/idk/math/b1.7.3.html";
    }

    var iframeContainer = document.getElementById('game-iframe-container');
    var gameFrame = document.getElementById('game-frame');
    
   
    gameFrame.src = url;
    iframeContainer.style.display = 'block';

    
    setTimeout(function() {
        document.getElementById('launcher-container').style.display = 'none';
        gameFrame.focus();
    }, 50);
}

function closeGame() {
    var gameFrame = document.getElementById('game-frame');
    gameFrame.src = "about:blank";

    document.getElementById('game-iframe-container').style.display = 'none';
    document.getElementById('launcher-container').style.display = 'flex';
}
