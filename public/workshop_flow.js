document.addEventListener("DOMContentLoaded", function () {
    const compu_equip_window = document.getElementById("compu-equip-window");
    const audio_equip_window = document.getElementById("audio-equip-window");  
    const tronics_equip_window = document.getElementById("tronics-equip-window");
    const mech_equip_window = document.getElementById("mech-equip-window");
    const wood_equip_window = document.getElementById("wood-equip-window");
    const cnc_equip_window = document.getElementById("cnc-equip-window");
    const audio_projects_window = document.getElementById("audio-project-window");
    const tronics_projects_window = document.getElementById("tronics-project-window");
    const mech_projects_window = document.getElementById("mech-project-window");
    const wood_projects_window = document.getElementById("wood-project-window");
    const cnc_projects_window = document.getElementById("cnc-project-window"); 
   //kinda button in here
    const compu_equip = document.getElementById("compu-equip");
    const audio_equip = document.getElementById("audio-equip");
    const tronics_equip = document.getElementById("tronics-equip");
    const mecha_equip = document.getElementById("mech-equip");
    const wood_equip = document.getElementById("wood-equip");
    const cnc_equip = document.getElementById("cnc-equip");
    const audio_projects = document.getElementById("audio-projects");
    const tronics_projects = document.getElementById("tronics-projects");
    const mecha_projects = document.getElementById("mech-projects");
    const wood_projects = document.getElementById("wood-projects");
    const cnc_projects = document.getElementById("cnc-projects");


    if (compu_equip) {
        compu_equip.addEventListener("click", function compuEquip() {
            if (compu_equip_window.style.display === "none") {
                compu_equip_window.style.display = "block";
            }
        });
    }
    if (audio_equip) {
        audio_equip.addEventListener("click", function audioEquip() {
            if (audio_equip_window.style.display === "none") {
                audio_equip_window.style.display = "block";
            }
            if (audio_equip_window.style.display === "block") {
                audio_projects_window.style.display = "none";
            }
        });
    }
    if (tronics_equip) {
        tronics_equip.addEventListener("click", function tronicsEquip() {
            if (tronics_equip_window.style.display === "none") {
                tronics_equip_window.style.display = "block";
            }
            if (tronics_equip_window.style.display === "block") {
                tronics_projects_window.style.display = "none";
            }
        });
    }
    if (mecha_equip) {
        mecha_equip.addEventListener("click", function mechaEquip() {
            if (mech_equip_window.style.display === "none") {
                mech_equip_window.style.display = "block";
            }
            if (mech_equip_window.style.display === "block") {
                mech_projects_window.style.display = "none";
            }
        });
    }
    if (wood_equip) {
        wood_equip.addEventListener("click", function woodEquip() {
            if (wood_equip_window.style.display === "none") {
                wood_equip_window.style.display = "block";
            }
            if (wood_equip_window.style.display === "block") {
                wood_projects_window.style.display = "none";
            }
        });
    }
    if (cnc_equip) {
        cnc_equip.addEventListener("click", function cncEquip() {
            if (cnc_equip_window.style.display === "none") {
                cnc_equip_window.style.display = "block";
            }
            if (cnc_equip_window.style.display === "block") {
                cnc_projects_window.style.display = "none";
            }
        });
    }
    if (audio_projects) {
        audio_projects.addEventListener("click", function audioProjects() {
            if (audio_projects_window.style.display === "none") {
                audio_projects_window.style.display = "block";
            }
            if (audio_projects_window.style.display === "block") {
                audio_equip_window.style.display = "none";
            }
        });
    }
    if (tronics_projects) {
        tronics_projects.addEventListener("click", function tronicsProjects() {
            if (tronics_projects_window.style.display === "none") {
                tronics_projects_window.style.display = "block";
            }
            if (tronics_projects_window.style.display === "block") {
                tronics_equip_window.style.display = "none";
            }
        });
    }
    if (mecha_projects) {
        mecha_projects.addEventListener("click", function mechaProjects() {
            if (mech_projects_window.style.display === "none") {
                mech_projects_window.style.display = "block";
            }
            if (mech_projects_window.style.display === "block") {
                mech_equip_window.style.display = "none";
            }
        });
    }
    if (wood_projects) {
        wood_projects.addEventListener("click", function woodProjects() {
            if (wood_projects_window.style.display === "none") {
                wood_projects_window.style.display = "block";
            }
            if (wood_projects_window.style.display === "block") {
                wood_equip_window.style.display = "none";
            }
        });
    }
    if (cnc_projects) {
        cnc_projects.addEventListener("click", function cncProjects() {
            if (cnc_projects_window.style.display === "none") {
                cnc_projects_window.style.display = "block";
            }
            if (cnc_projects_window.style.display === "block") {
                cnc_equip_window.style.display = "none";
            }
        });
    }

    




});