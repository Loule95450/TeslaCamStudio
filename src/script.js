const i18n = {
    en: {
        pageTitle: "TeslaCam Studio",
        headerTitle: "TeslaCam Studio",
        toggleSidebar: "Toggle Sidebar",
        toggleTheme: "Toggle Theme",
        toggleLanguage: "Passer en français",
        drivingRecords: "Driving Records",
        date: "Date",
        eventType: "Event Type",
        allTypes: "All Types",
        recentClips: "Recent Clips",
        savedClips: "Saved Clips",
        sentryClips: "Sentry Clips",
        noRecordsFound: "No records found",
        selectFolder: "Select Folder",
        selectFiles: "Select Files",
        helpStep1: "Insert your Tesla USB drive into your PC",
        helpStep2: "Select or drag the 'TeslaCam' directory from the drive",
        helpStep1IOS: "Copy TeslaCam videos to your iPad/iPhone",
        helpStep2IOS: "Select the video files (e.g., 2024-01-15_12-30-00-front.mp4)",
        helpNote: "Note: This tool does not upload your data. All processing happens locally.",
        mapModalTitle: "View on Map",
        googleMap: "Google Maps",
        revealFile: "Show Path",
        downloadFile: "Download",
        filePathAlertTitle: "Current Video File Path",
        copiedToClipboard: "Copied to clipboard",
        noFilePath: "Could not determine file path for the active camera.",
        selectDate: "Select Date",
        minutes: "minutes",
        preview: "Preview",
        noSignal: "No Signal",
        front: "Front",
        back: "Back",
        left: "Left",
        right: "Right",
        leftPillar: "Left Pillar",
        rightPillar: "Right Pillar",
        play: "Play",
        pause: "Pause",
        toggleDay: "Switch to Day Mode",
        toggleNight: "Switch to Night Mode",
        invalidFolder: "This does not appear to be a valid TeslaCam directory. Please ensure you select the 'TeslaCam' directory which contains subfolders like RecentClips, SavedClips, etc.",
        clipVideo: "Clip Video",
        confirmClip: "Confirm Clip Range",
        exportClip: "Export Video Clip",
        clipDuration: "Duration:",
        clipStartTime: "Start Time:",
        clipEndTime: "End Time:",
        selectCameras: "Select Cameras:",
        addTimestamp: "Add Timestamp Watermark",
        addMetadata: "Add Driving Data Overlay",
        mergeVideos: "Merge as Grid Video",
        startExport: "Start Export",
        cancel: "Cancel",
        preparing: "Preparing...",
        processing: "Processing...",
        exporting: "Exporting...",
        complete: "Complete!",
        selectClipRange: "Select clip range on progress bar first",
        selectAtLeastOneCamera: "Please select at least one camera",
        exportFailed: "Export failed: ",
        metadata: "Drive Data",
        driveStats: "Drive Stats",
        loadingMetadata: "Loading...",
        noMetadata: "No metadata found",
        speed: "Speed",
        gear: "Gear",
        steering: "Steering",
        accelerator: "Accelerator",
        brake: "Brake",
        brakeApplied: "Applied",
        brakeNotApplied: "Not applied",
        blinker: "Blinker",
        autopilot: "Autopilot",
        gps: "GPS",
        heading: "Heading",
        acceleration: "Acceleration",
        gearPark: "Park",
        gearDrive: "Drive",
        gearReverse: "Reverse",
        gearNeutral: "Neutral",
        blinkerLeft: "Left",
        blinkerRight: "Right",
        blinkerBoth: "Hazard",
        blinkerOff: "Off",
        autopilotNone: "None",
        autopilotSelfDriving: "FSD",
        autopilotAutosteer: "Autosteer",
        autopilotTACC: "TACC",
        moreOptions: "More Options",
        metadataDetail: "Details",
        vehicleStatus: "Vehicle Status",
        drivingAssist: "Driving Assist",
        locationInfo: "Location Info",
        motionData: "Motion Data",
        latitude: "Latitude",
        longitude: "Longitude",
        accelX: "Accel X",
        accelY: "Accel Y",
        accelZ: "Accel Z",
        exportMetadata: "Export CSV",
        exportMetadataSuccess: "Metadata exported successfully",
        exportMetadataNoData: "No metadata available to export",
        grid6: "6-Grid",
        grid4: "4-Grid",
        legacy: "Picture-in-Picture",
        loadingFFmpeg: "Loading FFmpeg repair module...",
        readingVideo: "Reading video file...",
        repairingVideo: "Repairing video metadata...",
        savingVideo: "Saving repaired video...",
        encoding: "Encoding...",
        fastExporting: "Fast Exporting...",
        ffmpegFastExporting: "FFmpeg Fast Exporting...",
        ffmpegMergingGrid: "FFmpeg Merging Grid Video...",
        generatingOverlays: "Generating metadata overlays...",
        generatingOverlay: "Generating overlay",
        volumeEmpty: "Nothing is mounted at /teslacam, or the folder is empty. Note that Docker silently creates an empty directory when the host path in your volume mapping does not exist, so check that path first.",
        volumeForbidden: "The volume is mounted but the container cannot read it. Find the folder's owner with: stat -c '%u:%g' /path/to/TeslaCam - then set PUID and PGID to those numbers in the container's environment. Do not use Docker's user: setting: it stops nginx from starting.",
        volumeWrongFolder: "The mounted folder is not a TeslaCam folder: it has no RecentClips, SavedClips or SentryClips inside. Found instead:",
        volumeNoClips: "The TeslaCam folder was found, but it contains no clips.",
        volumeUnreachable: "Could not read /teslacam. The container may not be serving the volume.",
        volumeSource: "Reading from the mounted volume",
        discovering: "Looking for clips...",
        liveMap: "Map",
        liveMapToggle: "Show the route on a map",
        liveMapNoFix: "This clip carries no GPS position.",
        liveMapOffline: "The map needs an internet connection for its tiles.",
        encryptedTitle: "This clip is encrypted",
        encryptedBody: "Since vehicle software 2026.20 your Tesla encrypts dashcam footage on the USB drive by default. The keys are held by Tesla against your account, not stored on the drive, so no local player can open these files.",
        encryptedFixNew: "For future recordings: turn off Controls > Safety > Encrypt Dashcam Recordings in the car.",
        encryptedFixExisting: "For clips you already have: decrypt them at dashcam.tesla.com, then copy the decrypted files back to this folder.",
        encryptedBadge: "Encrypted",
        tokenPrompt: "Paste a token from dashcam.tesla.com to decrypt these clips.",
        tokenPlaceholder: "Paste the token here",
        tokenSave: "Use this token",
        tokenOk: "Token accepted, valid until",
        tokenBad: "Token refused:",
        tokenHelp: "Sign in at dashcam.tesla.com, open DevTools, and copy the ROCP_token value from Local Storage.",
        decryptedBadge: "Decrypted",
        decryptedTitle: "Encrypted by the car, decrypted on the fly by this server",
        hideEncrypted: "Hide encrypted clips",
        hideClip: "Hide this clip",
        showHidden: "hidden - show all",
        showHiddenOne: "hidden - show all",
        noRecordsHidden: "Every clip here is hidden by your filters."
    },
    fr: {
        pageTitle: "TeslaCam Studio",
        headerTitle: "TeslaCam Studio",
        toggleSidebar: "Afficher/masquer le panneau",
        toggleTheme: "Changer de thème",
        toggleLanguage: "Switch to English",
        drivingRecords: "Enregistrements",
        date: "Date",
        eventType: "Type d'événement",
        allTypes: "Tous les types",
        recentClips: "Clips récents",
        savedClips: "Clips sauvegardés",
        sentryClips: "Mode Sentinelle",
        noRecordsFound: "Aucun enregistrement trouvé",
        selectFolder: "Choisir un dossier",
        selectFiles: "Choisir des fichiers",
        helpStep1: "Branchez la clé USB de votre Tesla sur votre ordinateur",
        helpStep2: "Sélectionnez ou glissez le dossier « TeslaCam » de la clé",
        helpStep1IOS: "Copiez les vidéos TeslaCam sur votre iPad/iPhone",
        helpStep2IOS: "Sélectionnez les fichiers vidéo (ex. 2024-01-15_12-30-00-front.mp4)",
        helpNote: "Note : cet outil n'envoie aucune donnée. Tout le traitement se fait en local.",
        mapModalTitle: "Voir sur la carte",
        googleMap: "Google Maps",
        revealFile: "Afficher le chemin",
        downloadFile: "Télécharger",
        filePathAlertTitle: "Chemin du fichier vidéo actuel",
        copiedToClipboard: "Copié dans le presse-papiers",
        noFilePath: "Impossible de déterminer le chemin du fichier pour la caméra active.",
        selectDate: "Choisir une date",
        minutes: "minutes",
        preview: "Aperçu",
        noSignal: "Pas de signal",
        front: "Avant",
        back: "Arrière",
        left: "Gauche",
        right: "Droite",
        leftPillar: "Montant gauche",
        rightPillar: "Montant droit",
        play: "Lecture",
        pause: "Pause",
        toggleDay: "Passer en mode jour",
        toggleNight: "Passer en mode nuit",
        invalidFolder: "Ce dossier ne semble pas être un dossier TeslaCam valide. Vérifiez que vous avez sélectionné le dossier « TeslaCam » contenant les sous-dossiers RecentClips, SavedClips, etc.",
        clipVideo: "Découper la vidéo",
        confirmClip: "Confirmer la plage",
        exportClip: "Exporter l'extrait",
        clipDuration: "Durée :",
        clipStartTime: "Début :",
        clipEndTime: "Fin :",
        selectCameras: "Caméras :",
        addTimestamp: "Ajouter l'horodatage",
        addMetadata: "Incruster les données de conduite",
        mergeVideos: "Fusionner en mosaïque",
        startExport: "Lancer l'export",
        cancel: "Annuler",
        preparing: "Préparation...",
        processing: "Traitement...",
        exporting: "Export...",
        complete: "Terminé !",
        selectClipRange: "Sélectionnez d'abord une plage sur la barre de progression",
        selectAtLeastOneCamera: "Sélectionnez au moins une caméra",
        exportFailed: "Échec de l'export : ",
        metadata: "Données",
        driveStats: "Statistiques",
        loadingMetadata: "Chargement...",
        noMetadata: "Aucune métadonnée",
        speed: "Vitesse",
        gear: "Rapport",
        steering: "Volant",
        accelerator: "Accélérateur",
        brake: "Frein",
        brakeApplied: "Enfoncé",
        brakeNotApplied: "Relâché",
        blinker: "Clignotant",
        autopilot: "Autopilot",
        gps: "GPS",
        heading: "Cap",
        acceleration: "Accélération",
        gearPark: "Parking",
        gearDrive: "Marche avant",
        gearReverse: "Marche arrière",
        gearNeutral: "Point mort",
        blinkerLeft: "Gauche",
        blinkerRight: "Droite",
        blinkerBoth: "Warnings",
        blinkerOff: "Éteint",
        autopilotNone: "Aucun",
        autopilotSelfDriving: "FSD",
        autopilotAutosteer: "Autosteer",
        autopilotTACC: "TACC",
        moreOptions: "Plus d'options",
        metadataDetail: "Détails",
        vehicleStatus: "État du véhicule",
        drivingAssist: "Aide à la conduite",
        locationInfo: "Localisation",
        motionData: "Données de mouvement",
        latitude: "Latitude",
        longitude: "Longitude",
        accelX: "Accél. X",
        accelY: "Accél. Y",
        accelZ: "Accél. Z",
        exportMetadata: "Exporter CSV",
        exportMetadataSuccess: "Métadonnées exportées",
        exportMetadataNoData: "Aucune métadonnée à exporter",
        grid6: "Mosaïque 6",
        grid4: "Mosaïque 4",
        legacy: "Incrustation",
        loadingFFmpeg: "Chargement du module de réparation FFmpeg...",
        readingVideo: "Lecture du fichier vidéo...",
        repairingVideo: "Réparation des métadonnées vidéo...",
        savingVideo: "Enregistrement de la vidéo réparée...",
        encoding: "Encodage...",
        fastExporting: "Export rapide...",
        ffmpegFastExporting: "Export rapide FFmpeg...",
        ffmpegMergingGrid: "Fusion de la mosaïque FFmpeg...",
        generatingOverlays: "Génération des incrustations...",
        generatingOverlay: "Génération de l'incrustation",
        volumeEmpty: "Rien n'est monté sur /teslacam, ou le dossier est vide. Attention : quand le chemin hôte du volume n'existe pas, Docker crée silencieusement un dossier vide et le monte. Vérifiez ce chemin en premier.",
        volumeForbidden: "Le volume est monté mais le conteneur ne peut pas le lire. Trouvez le propriétaire du dossier avec : stat -c '%u:%g' /chemin/vers/TeslaCam - puis renseignez PUID et PGID avec ces nombres dans l'environnement du conteneur. N'utilisez pas le réglage user: de Docker : il empêche nginx de démarrer.",
        volumeWrongFolder: "Le dossier monté n'est pas un dossier TeslaCam : il ne contient ni RecentClips, ni SavedClips, ni SentryClips. Trouvé à la place :",
        volumeNoClips: "Le dossier TeslaCam a été trouvé, mais il ne contient aucun clip.",
        volumeUnreachable: "Impossible de lire /teslacam. Le conteneur ne sert peut-être pas le volume.",
        volumeSource: "Lecture depuis le volume monté",
        discovering: "Recherche des clips...",
        liveMap: "Carte",
        liveMapToggle: "Afficher le trajet sur une carte",
        liveMapNoFix: "Ce clip ne contient aucune position GPS.",
        liveMapOffline: "La carte a besoin d'une connexion internet pour ses tuiles.",
        encryptedTitle: "Ce clip est chiffré",
        encryptedBody: "Depuis la version 2026.20 du logiciel véhicule, votre Tesla chiffre par défaut les vidéos sur la clé USB. Les clés sont détenues par Tesla et liées à votre compte, elles ne sont pas sur la clé : aucun lecteur local ne peut donc ouvrir ces fichiers.",
        encryptedFixNew: "Pour les prochains enregistrements : désactivez Commandes > Sécurité > Chiffrer les enregistrements de la Dashcam dans la voiture.",
        encryptedFixExisting: "Pour les clips déjà enregistrés : déchiffrez-les sur dashcam.tesla.com, puis recopiez les fichiers déchiffrés dans ce dossier.",
        encryptedBadge: "Chiffré",
        tokenPrompt: "Collez un token de dashcam.tesla.com pour déchiffrer ces clips.",
        tokenPlaceholder: "Collez le token ici",
        tokenSave: "Utiliser ce token",
        tokenOk: "Token accepté, valide jusqu'au",
        tokenBad: "Token refusé :",
        tokenHelp: "Connectez-vous sur dashcam.tesla.com, ouvrez les DevTools, et copiez la valeur ROCP_token du Local Storage.",
        decryptedBadge: "Déchiffré",
        decryptedTitle: "Chiffré par la voiture, déchiffré à la volée par ce serveur",
        hideEncrypted: "Masquer les clips chiffrés",
        hideClip: "Masquer ce clip",
        showHidden: "masqués - tout afficher",
        showHiddenOne: "masqué - tout afficher",
        noRecordsHidden: "Tous les clips sont masqués par vos filtres."
    }
};

const CAMERA_I18N_KEYS = {
    front: 'front',
    left_pillar: 'leftPillar',
    right_pillar: 'rightPillar',
    back: 'back',
    left: 'left',
    right: 'right'
};

function cameraLabel(camera, lang) {
    const key = CAMERA_I18N_KEYS[camera];
    return key ? (i18n[lang] || i18n.en)[key] : null;
}

function getFileUrl(file) {
    // Served from the mounted Docker volume: the file *is* an URL. An encrypted
    // clip is fetched from the sidecar, which streams it decrypted.
    if (file instanceof VolumeFile) {
        return file.useDecrypt ? file.decryptUrl : file.url;
    }
    return URL.createObjectURL(file);
}

class MetadataOverlayGenerator {
    constructor() {
        // Gear mapping
        this.gearMap = {
            'GEAR_PARK': 'P',
            'GEAR_DRIVE': 'D',
            'GEAR_REVERSE': 'R',
            'GEAR_NEUTRAL': 'N'
        };
        
        // Autopilot mapping
        this.autopilotMap = {
            'NONE': '',
            'SELF_DRIVING': 'FSD',
            'AUTOSTEER': 'AP',
            'TACC': 'TACC'
        };
        
        // Preload the brake-pedal icon
        this.brakeIconLoaded = false;
        this.brakeIconImg = null;
        this.loadBrakeIcon();
        
        // Colors for FFmpeg (hex format)
        this.colors = {
            white: 'ffffff',
            gray: '808080',
            green: '52c41a',
            red: 'ff4d4f',
            blue: '1890ff',
            orange: 'ffa500',
            dimGray: '606060'
        };
        
        // Icon size for overlay
        this.iconSize = 28;
        this.iconSpacing = 8;
        
        // Cache for generated PNG icons
        this.iconCache = new Map();
    }
    
    /**
     * Get font file path based on operating system
     */
    getFontPath() {
        if (typeof navigator !== 'undefined') {
            if (navigator.userAgent.includes('Windows')) {
                return "C\\\\:/Windows/Fonts/msyh.ttc";
            } else if (navigator.userAgent.includes('Mac')) {
                // Escape spaces for FFmpeg filter
                return "/System/Library/Fonts/Hiragino\\ Sans\\ GB.ttc";
            } else {
                return "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf";
            }
        }
        return "";
    }
    
    /**
     * Generate SVG icon as data URL
     */
    getSvgDataUrl(svgContent) {
        const encoded = encodeURIComponent(svgContent);
        return `data:image/svg+xml,${encoded}`;
    }
    
    /**
     * Create SVG for left blinker arrow
     */
    createBlinkerLeftSvg(active, size = 28) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.3)';
        const stroke = active ? '#52c41a' : 'rgba(255,255,255,0.5)';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
            <path d="M20 8 L6 24 L20 40 L20 30 L42 30 L42 18 L20 18 Z" 
                  fill="${color}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
        </svg>`;
    }
    
    /**
     * Create SVG for right blinker arrow
     */
    createBlinkerRightSvg(active, size = 28) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.3)';
        const stroke = active ? '#52c41a' : 'rgba(255,255,255,0.5)';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
            <path d="M28 8 L42 24 L28 40 L28 30 L6 30 L6 18 L28 18 Z" 
                  fill="${color}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>
        </svg>`;
    }
    
    /**
     * Create SVG for brake icon
     */
    createBrakeSvg(active, size = 28) {
        const color = active ? '#ff4d4f' : 'rgba(255,255,255,0.4)';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
            <circle cx="24" cy="24" r="20" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="24" cy="24" r="10" fill="none" stroke="${color}" stroke-width="2"/>
            <circle cx="24" cy="24" r="3" fill="${color}"/>
            <path d="M8 14 C2 18, 2 30, 8 34" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
        </svg>`;
    }
    
    /**
     * Create SVG for accelerator/throttle icon
     */
    createAcceleratorSvg(percent, size = 28) {
        const fillHeight = (percent / 100) * 20;
        const yPos = 26 - fillHeight;
        const color = percent > 0 ? '#73d13d' : 'rgba(255,255,255,0.4)';
        const fillRect = percent > 0 ? `<rect x="10" y="${yPos}" width="12" height="${fillHeight}" rx="2" fill="#73d13d" opacity="0.9"/>` : '';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">
            <rect x="8" y="4" width="16" height="24" rx="3" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
            <path d="M18 8 L13 16 L16 16 L14 24 L19 15 L16 15 L18 8 Z" fill="${color}"/>
            ${fillRect}
        </svg>`;
    }
    
    /**
     * Create SVG for autopilot/steering wheel icon
     */
    createAutopilotSvg(active, size = 28) {
        const color = active ? '#1890ff' : 'rgba(255,255,255,0.6)';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
            <circle cx="32" cy="32" r="26" fill="none" stroke="${color}" stroke-width="4"/>
            <circle cx="32" cy="32" r="8" fill="${color}"/>
            <rect x="6" y="29" width="17" height="6" rx="2" fill="${color}"/>
            <rect x="41" y="29" width="17" height="6" rx="2" fill="${color}"/>
            <rect x="29" y="41" width="6" height="17" rx="2" fill="${color}"/>
        </svg>`;
    }
    
    /**
     * Convert SVG to PNG using Canvas and return as base64
     */
    async svgToPngBase64(svgContent, size = 28) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            const img = new Image();
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            img.onload = () => {
                ctx.drawImage(img, 0, 0, size, size);
                URL.revokeObjectURL(url);
                // Get PNG as base64 (without data:image/png;base64, prefix)
                const dataUrl = canvas.toDataURL('image/png');
                const base64 = dataUrl.split(',')[1];
                resolve(base64);
            };
            
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error('Failed to load SVG'));
            };
            
            img.src = url;
        });
    }
    
    /**
     * Generate a complete metadata overlay PNG for a single frame
     * Uses bucket values for display to match the state key
     * Returns PNG as Uint8Array
     */
    /**
     * Generate a static background PNG for the overlay bar
     */
    async generateBackgroundPng() {
        const barWidth = 460;
        const barHeight = 65;
        const canvas = document.createElement('canvas');
        canvas.width = barWidth;
        canvas.height = barHeight;
        const ctx = canvas.getContext('2d');
        
        // Glassmorphism effect background (less transparent)
        ctx.save();
        const gradient = ctx.createLinearGradient(0, 0, 0, barHeight);
        gradient.addColorStop(0, 'rgba(20, 20, 20, 0.5)');
        gradient.addColorStop(1, 'rgba(5, 5, 5, 0.55)');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(0, 0, barWidth, barHeight, 16);
        } else {
            const r = 16;
            ctx.moveTo(r, 0); ctx.lineTo(barWidth - r, 0); ctx.quadraticCurveTo(barWidth, 0, barWidth, r);
            ctx.lineTo(barWidth, barHeight - r); ctx.quadraticCurveTo(barWidth, barHeight, barWidth - r, barHeight);
            ctx.lineTo(r, barHeight); ctx.quadraticCurveTo(0, barHeight, 0, barHeight - r);
            ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
        }
        ctx.fill();
        ctx.restore();
        
        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                blob.arrayBuffer().then(buffer => {
                    resolve({ data: new Uint8Array(buffer), width: barWidth, height: barHeight });
                });
            }, 'image/png');
        });
    }

    /**
     * Generate a complete metadata overlay PNG for a single frame
     * Returns an object { data: Uint8Array, width, height }
     */
    async generateMetadataOverlayPng(data) {
        // We use a fixed height for the bar - increased size
        const barHeight = 65;
        const barWidth = 460;
        const iconSize = 30;

        // Get values with fallbacks
        const speedKmh = Math.round((data.vehicleSpeedMps || 0) * 3.6);
        const speedDisplay = speedKmh >= 150 ? '150+' : `${speedKmh}`;
        const speedText = `${speedDisplay} km/h`;
        
        const gear = this.gearMap[data.gearState] || '--';
        const gearText = `[${gear}]`;
        
        // Autopilot state for steering wheel color
        const autopilotState = data.autopilotState || 'NONE';
        
        // Accelerator: use 10% bucket for both display and icon to match state key
        const accelPercent = Math.round(data.acceleratorPedalPosition || 0);
        const accelBucket = Math.floor(accelPercent / 10) * 10;
        
        // Steering angle: use 10° bucket to match state key
        const steeringAngle = Math.round(data.steeringWheelAngle || 0);
        const steeringBucket = Math.round(steeringAngle / 10) * 10;

        // Create actual canvas for drawing
        const canvas = document.createElement('canvas');
        canvas.width = barWidth;
        canvas.height = barHeight;
        const ctx = canvas.getContext('2d');
        
        // NO BACKGROUND DRAWN HERE - IT WILL BE OVERLAID SEPARATELY IN FFMPEG

        // Draw items (Using FIXED COORDINATES to prevent jittering)
        ctx.font = 'bold 24px Arial, sans-serif';
        ctx.textBaseline = 'middle';
        const yCenter = barHeight / 2;
        
        // Layout: Speed -> Gear -> Blinkers -> Brake -> Accel -> Steering Wheel
        
        // Speed (Fixed area, right-aligned at 125)
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'right';
        ctx.fillText(speedText, 125, yCenter);
        
        // Gear (Fixed at 145)
        ctx.textAlign = 'left';
        let gearColor = '#ffffff';
        if (gear === 'D') gearColor = '#52c41a';
        else if (gear === 'R') gearColor = '#ff4d4f';
        ctx.fillStyle = gearColor;
        ctx.fillText(gearText, 145, yCenter);

        // Blinkers (Tightened gaps)
        try { this.drawLeftArrow(ctx, 200, yCenter, iconSize, data.blinkerOnLeft); } catch (e) { console.error('[drawLeftArrow]', e); }
        try { this.drawRightArrow(ctx, 240, yCenter, iconSize, data.blinkerOnRight); } catch (e) { console.error('[drawRightArrow]', e); }

        // Brake (Fixed at 290)
        try { this.drawBrakeIcon(ctx, 290, yCenter, iconSize, data.brakeApplied); } catch (e) { console.error('[drawBrakeIcon]', e); }

        // Accel / Power (Fixed at 340)
        // Use bucket value for icon fill (10% granularity), no percentage text
        try { this.drawAcceleratorIcon(ctx, 340, yCenter, iconSize, accelBucket); } catch (e) { console.error('[drawAcceleratorIcon]', e); }

        // Steering Wheel (Fixed at 390) - color based on autopilot state
        try { this.drawSteeringWheelIcon(ctx, 390, yCenter, iconSize, steeringBucket, autopilotState); } catch (e) { console.error('[drawSteeringWheelIcon]', e); }
        
        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Failed to create PNG blob'));
                    return;
                }
                blob.arrayBuffer().then(buffer => {
                    resolve({ data: new Uint8Array(buffer), width: barWidth, height: barHeight });
                }).catch(reject);
            }, 'image/png');
        });
    }
    
    // Draw left arrow icon using Canvas
    drawLeftArrow(ctx, x, y, size, active) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.2)';
        const shadowColor = active ? 'rgba(82, 196, 26, 0.4)' : 'transparent';
        
        ctx.save();
        if (active) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = shadowColor;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        const halfSize = size / 2;
        // More stylish arrow
        ctx.moveTo(x + size * 0.9, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 1.1, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 1.1, y - halfSize * 0.8);
        ctx.lineTo(x + size * 0.1, y);
        ctx.lineTo(x + halfSize * 1.1, y + halfSize * 0.8);
        ctx.lineTo(x + halfSize * 1.1, y + halfSize * 0.4);
        ctx.lineTo(x + size * 0.9, y + halfSize * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    
    // Draw right arrow icon using Canvas
    drawRightArrow(ctx, x, y, size, active) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.2)';
        const shadowColor = active ? 'rgba(82, 196, 26, 0.4)' : 'transparent';
        
        ctx.save();
        if (active) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = shadowColor;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        const halfSize = size / 2;
        // More stylish arrow
        ctx.moveTo(x + size * 0.1, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 0.9, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 0.9, y - halfSize * 0.8);
        ctx.lineTo(x + size * 0.9, y);
        ctx.lineTo(x + halfSize * 0.9, y + halfSize * 0.8);
        ctx.lineTo(x + halfSize * 0.9, y + halfSize * 0.4);
        ctx.lineTo(x + size * 0.1, y + halfSize * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    
    // Draw autopilot icon (steering wheel)
    drawAutopilotIcon(ctx, x, y, size) {
        ctx.save();
        ctx.strokeStyle = '#1890ff';
        ctx.fillStyle = '#1890ff';
        ctx.lineWidth = 2.5;
        const r = size / 2 - 2;
        const cx = x + size / 2;
        const cy = y;
        
        // Outer circle with glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(24, 144, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        
        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Spokes (more like a Tesla steering wheel)
        ctx.beginPath();
        ctx.moveTo(cx - r + 3, cy);
        ctx.lineTo(cx - 4, cy);
        ctx.moveTo(cx + 4, cy);
        ctx.lineTo(cx + r - 3, cy);
        ctx.moveTo(cx, cy + 4);
        ctx.lineTo(cx, cy + r - 3);
        ctx.stroke();
        ctx.restore();
    }
    
    // Draw accelerator icon (rectangle with fill level like web version)
    drawAcceleratorIcon(ctx, x, y, size, percent) {
        const active = percent > 0;
        
        ctx.save();
        
        // Rectangle dimensions
        const rectWidth = size * 0.6;
        const rectHeight = size * 0.9;
        const rectX = x + (size - rectWidth) / 2;
        const rectY = y - rectHeight / 2;
        const cornerRadius = 3;
        
        // Draw outer rectangle border
        ctx.strokeStyle = active ? '#52c41a' : 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(rectX, rectY, rectWidth, rectHeight, cornerRadius);
        } else {
            // Fallback for older browsers
            ctx.moveTo(rectX + cornerRadius, rectY);
            ctx.lineTo(rectX + rectWidth - cornerRadius, rectY);
            ctx.quadraticCurveTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius);
            ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
            ctx.quadraticCurveTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - cornerRadius, rectY + rectHeight);
            ctx.lineTo(rectX + cornerRadius, rectY + rectHeight);
            ctx.quadraticCurveTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius);
            ctx.lineTo(rectX, rectY + cornerRadius);
            ctx.quadraticCurveTo(rectX, rectY, rectX + cornerRadius, rectY);
        }
        ctx.stroke();
        
        // Draw fill level from bottom
        if (active && percent > 0) {
            const fillHeight = (percent / 100) * (rectHeight - 4);
            const fillY = rectY + rectHeight - 2 - fillHeight;
            
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(82, 196, 26, 0.5)';
            ctx.fillStyle = '#52c41a';
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(rectX + 2, fillY, rectWidth - 4, fillHeight, Math.min(cornerRadius - 1, 2));
            } else {
                ctx.rect(rectX + 2, fillY, rectWidth - 4, fillHeight);
            }
            ctx.fill();
        }
        
        // Draw small lightning bolt icon inside (smaller, at top)
        const boltSize = size * 0.35;
        const boltX = x + size / 2;
        const boltY = rectY + boltSize / 2 + 3;
        ctx.fillStyle = active ? '#ffffff' : 'rgba(255,255,255,0.4)';
        ctx.beginPath();
        ctx.moveTo(boltX + boltSize * 0.1, boltY - boltSize * 0.4);
        ctx.lineTo(boltX - boltSize * 0.15, boltY + boltSize * 0.05);
        ctx.lineTo(boltX + boltSize * 0.02, boltY + boltSize * 0.05);
        ctx.lineTo(boltX - boltSize * 0.1, boltY + boltSize * 0.4);
        ctx.lineTo(boltX + boltSize * 0.15, boltY - boltSize * 0.05);
        ctx.lineTo(boltX - boltSize * 0.02, boltY - boltSize * 0.05);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
    
    // Preload the brake-pedal SVG icon
    loadBrakeIcon() {
        const svgContent = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M821.394 861.482H200.242c-23.709 0-44.013-20.191-45.124-44.975 0 0-30.555-129.896-30.044-166.228 0.325-23.102 15.23-164.3 15.23-164.3 2.449-27.739 18.019-48.258 42.686-48.258h646.233c24.667 0 44.357 21.769 43.759 48.258l14.579 163.622-22.043 166.906c-0.56 24.784-20.414 44.975-44.124 44.975z m24.716-358.364l0.292-10.498c0.23-8.275-6.452-15.059-14.85-15.059H186.497c-8.397 0-14.828 6.784-14.291 15.059l0.681 10.498c0.534 8.232 7.802 14.954 16.153 14.954h641.472c8.35 0 15.37-6.722 15.598-14.954z m8.739 81.304l0.296-10.264c0.233-8.091-6.628-14.724-15.248-14.724H177.735c-8.62 0-15.226 6.633-14.681 14.724l0.691 10.264c0.542 8.049 7.999 14.622 16.571 14.622H838.84c8.574 0 15.777-6.572 16.009-14.622z m6.172 79.506l0.298-10.038c0.235-7.912-6.747-14.399-15.516-14.399H172.234c-8.769 0-15.494 6.487-14.945 14.399l0.695 10.038c0.545 7.872 8.126 14.3 16.847 14.3h669.91c8.721 0 16.047-6.428 16.28-14.3z m-14.901 77.765l0.282-9.819c0.222-7.74-6.466-14.085-14.863-14.085H186.526c-8.397 0-14.841 6.345-14.322 14.085l0.659 9.819c0.517 7.701 7.772 13.989 16.123 13.989h641.548c8.351 0 15.365-6.288 15.586-13.989z m-8.749 76.081l0.267-9.608c0.21-7.573-6.189-13.781-14.222-13.781H206.385c-8.033 0-14.202 6.208-13.711 13.781l0.623 9.608c0.489 7.535 7.425 13.688 15.415 13.688h613.751c7.99 0.001 14.698-6.152 14.908-13.688z m1.869-378.856l36.038-94.167 21.623-119.775H785.183L752.749 356.56l-118.926 82.358H839.24z" fill="#ffffff"/></svg>`;
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        this.brakeIconImg = new Image();
        this.brakeIconImg.onload = () => {
            this.brakeIconLoaded = true;
            URL.revokeObjectURL(url);
        };
        this.brakeIconImg.src = url;
    }
    
    // Draw brake icon (brake pedal shape from SVG image)
    drawBrakeIcon(ctx, x, y, size, active) {
        ctx.save();
        
        try {
            if (active) {
                ctx.shadowBlur = 6;
                ctx.shadowColor = 'rgba(255, 77, 79, 0.5)';
            }
            
            // Draw the icon, centred, at a larger size
            const iconSize = size * 1.5;
            const iconX = x + (size - iconSize) / 2;
            const iconY = y - iconSize / 2;
            
            // Draw the SVG path with Path2D
            const color = active ? '#ff4d4f' : 'rgba(255,255,255,0.2)';
            ctx.fillStyle = color;
            
            // SVG viewBox is 0 0 1024 1024; the path actually spans about x:140-880, y:162-861
            // Offset it so the path ends up centred
            const svgSize = 1024;
            const pathWidth = 880 - 140; // ~740
            const pathHeight = 861 - 162; // ~699
            const pathCenterX = 140 + pathWidth / 2; // ~510
            const pathCenterY = 162 + pathHeight / 2; // ~511
            
            const scale = iconSize / svgSize;
            
            // Move the path centre onto the icon centre
            ctx.translate(iconX + iconSize / 2, iconY + iconSize / 2);
            ctx.scale(scale, scale);
            ctx.translate(-pathCenterX, -pathCenterY);
            
            const path = new Path2D('M821.394 861.482H200.242c-23.709 0-44.013-20.191-45.124-44.975 0 0-30.555-129.896-30.044-166.228 0.325-23.102 15.23-164.3 15.23-164.3 2.449-27.739 18.019-48.258 42.686-48.258h646.233c24.667 0 44.357 21.769 43.759 48.258l14.579 163.622-22.043 166.906c-0.56 24.784-20.414 44.975-44.124 44.975z m24.716-358.364l0.292-10.498c0.23-8.275-6.452-15.059-14.85-15.059H186.497c-8.397 0-14.828 6.784-14.291 15.059l0.681 10.498c0.534 8.232 7.802 14.954 16.153 14.954h641.472c8.35 0 15.37-6.722 15.598-14.954z m8.739 81.304l0.296-10.264c0.233-8.091-6.628-14.724-15.248-14.724H177.735c-8.62 0-15.226 6.633-14.681 14.724l0.691 10.264c0.542 8.049 7.999 14.622 16.571 14.622H838.84c8.574 0 15.777-6.572 16.009-14.622z m6.172 79.506l0.298-10.038c0.235-7.912-6.747-14.399-15.516-14.399H172.234c-8.769 0-15.494 6.487-14.945 14.399l0.695 10.038c0.545 7.872 8.126 14.3 16.847 14.3h669.91c8.721 0 16.047-6.428 16.28-14.3z m-14.901 77.765l0.282-9.819c0.222-7.74-6.466-14.085-14.863-14.085H186.526c-8.397 0-14.841 6.345-14.322 14.085l0.659 9.819c0.517 7.701 7.772 13.989 16.123 13.989h641.548c8.351 0 15.365-6.288 15.586-13.989z m-8.749 76.081l0.267-9.608c0.21-7.573-6.189-13.781-14.222-13.781H206.385c-8.033 0-14.202 6.208-13.711 13.781l0.623 9.608c0.489 7.535 7.425 13.688 15.415 13.688h613.751c7.99 0.001 14.698-6.152 14.908-13.688z m1.869-378.856l36.038-94.167 21.623-119.775H785.183L752.749 356.56l-118.926 82.358H839.24z');
            ctx.fill(path);
        } catch (err) {
            console.error('[drawBrakeIcon] Error:', err);
        }
        
        ctx.restore();
    }
    
    // Draw steering wheel icon with rotation and autopilot color (matches web version)
    drawSteeringWheelIcon(ctx, x, y, size, angle, autopilotState) {
        // Determine color based on autopilot state
        let color = 'rgba(255,255,255,0.9)'; // Default: white
        let shadowColor = 'transparent';
        
        if (autopilotState === 'SELF_DRIVING') {
            color = '#52c41a'; // Green for full self-driving
            shadowColor = 'rgba(82, 196, 26, 0.5)';
        } else if (autopilotState === 'AUTOSTEER' || autopilotState === 'TACC') {
            color = '#1890ff'; // Blue for autopilot/TACC
            shadowColor = 'rgba(24, 144, 255, 0.5)';
        }
        
        ctx.save();
        
        // Apply shadow for active states
        if (shadowColor !== 'transparent') {
            ctx.shadowBlur = 6;
            ctx.shadowColor = shadowColor;
        }
        
        // Move to center of icon and rotate
        const cx = x + size / 2;
        const cy = y;
        ctx.translate(cx, cy);
        ctx.rotate((angle * Math.PI) / 180);
        
        // Scale factor: SVG viewBox is 64x64, we scale to fit 'size'
        const scale = size / 64;
        const r = 28 * scale; // outer ring radius (from SVG: r="28")
        const hubR = 9 * scale; // hub radius (from SVG: r="9")
        const strokeWidth = 5 * scale;
        const spokeHeight = 8 * scale;
        const spokeWidth = 19 * scale;
        const spokeRx = 2 * scale;
        
        // Draw outer ring (steering wheel rim)
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw center hub circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(0, 0, hubR, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw three spokes as rounded rectangles (like web SVG)
        ctx.fillStyle = color;
        
        // Left spoke: rect x="4" y="28" width="19" height="8" (centered at y=32)
        // In our coordinate system (centered at 0,0): x from -28 to -9, y from -4 to +4
        const leftSpokeX = -r - strokeWidth / 2;
        const leftSpokeY = -spokeHeight / 2;
        this.drawRoundedRect(ctx, leftSpokeX, leftSpokeY, spokeWidth, spokeHeight, spokeRx);
        ctx.fill();
        
        // Right spoke: rect x="41" y="28" width="19" height="8"
        // In our coordinate system: x from +9 to +28, y from -4 to +4
        const rightSpokeX = r - spokeWidth + strokeWidth / 2;
        const rightSpokeY = -spokeHeight / 2;
        this.drawRoundedRect(ctx, rightSpokeX, rightSpokeY, spokeWidth, spokeHeight, spokeRx);
        ctx.fill();
        
        // Bottom spoke: rect x="28" y="41" width="8" height="19"
        // In our coordinate system: x from -4 to +4, y from +9 to +28
        const bottomSpokeX = -spokeHeight / 2;
        const bottomSpokeY = hubR;
        this.drawRoundedRect(ctx, bottomSpokeX, bottomSpokeY, spokeHeight, spokeWidth, spokeRx);
        ctx.fill();
        
        ctx.restore();
    }
    
    // Helper: draw rounded rectangle
    drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, y, width, height, radius);
        } else {
            // Fallback for older browsers
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }
    }
    
    /**
     * Generate unique key for metadata state (for caching overlay PNGs)
     */
    getMetadataStateKey(data) {
        // Real speed (1 km/h granularity)
        const speedKmh = Math.round((data.vehicleSpeedMps || 0) * 3.6);
        
        const gear = this.gearMap[data.gearState] || '--';
        
        // Accelerator bucket: 10% granularity (0, 10, 20, ..., 100) to reduce unique states
        // while maintaining reasonable visual accuracy
        const accelPercent = Math.round(data.acceleratorPedalPosition || 0);
        const accelBucket = Math.floor(accelPercent / 10) * 10;
        
        // Steering angle bucket: 10° granularity to reduce unique states
        const steeringAngle = Math.round(data.steeringWheelAngle || 0);
        const steeringBucket = Math.round(steeringAngle / 10) * 10;
        
        return `${speedKmh}_${gear}_${data.blinkerOnLeft ? 1 : 0}_${data.blinkerOnRight ? 1 : 0}_${data.autopilotState || 'NONE'}_${accelBucket}_${data.brakeApplied ? 1 : 0}_${steeringBucket}`;
    }
    
    /**
     * Get display values from state key
     */
    parseStateKey(key) {
        const parts = key.split('_');
        return {
            speedBucket: parseInt(parts[0]),
            gear: parts[1],
            blinkerLeft: parts[2] === '1',
            blinkerRight: parts[3] === '1',
            autopilotState: parts[4],
            accelBucket: parseInt(parts[5]),
            brakeApplied: parts[6] === '1',
            steeringBucket: parseInt(parts[7] || '0')
        };
    }
    
}

// ============================================================
// ASS Subtitle Generator for FFmpeg Metadata Overlay (Fallback)
// ============================================================
class AssSubtitleGenerator {
    constructor() {
        // ASS style constants
        this.styles = {
            // Style for metadata display at bottom center
            metadata: {
                name: 'Metadata',
                fontName: 'Microsoft YaHei',  // Will be overridden based on OS
                fontSize: 26,
                primaryColor: '&H00FFFFFF',   // White
                outlineColor: '&H00000000',   // Black outline
                backColor: '&H80000000',      // Semi-transparent black background
                bold: 1,
                outline: 2,
                shadow: 0,
                alignment: 2,  // Bottom center
                marginV: 25
            }
        };
        
        // Gear mapping
        this.gearMap = {
            'GEAR_PARK': 'P',
            'GEAR_DRIVE': 'D',
            'GEAR_REVERSE': 'R',
            'GEAR_NEUTRAL': 'N'
        };
        
        // Autopilot mapping
        this.autopilotMap = {
            'NONE': '',
            'SELF_DRIVING': 'FSD',
            'AUTOSTEER': 'AP',
            'TACC': 'TACC'
        };
        
        // ASS colors in BGR format (&HBBGGRR)
        this.colors = {
            white: '&H00FFFFFF',
            gray: '&H00808080',
            green: '&H001AC452',      // #52C41A
            red: '&H004F4DFF',         // #FF4D4F
            blue: '&H00FF9018',        // #1890FF
            orange: '&H0000A5FF',      // #FFA500
            dimGray: '&H00606060'
        };
    }
    
    /**
     * Get font name based on operating system
     */
    getFontName() {
        if (typeof navigator !== 'undefined') {
            if (navigator.userAgent.includes('Windows')) {
                return 'Microsoft YaHei';
            } else if (navigator.userAgent.includes('Mac')) {
                return 'Hiragino Sans GB';
            }
        }
        return 'Arial';
    }
    
    /**
     * Generate ASS header with styles
     * @param {number} width - Video width
     * @param {number} height - Video height
     * @returns {string} ASS header
     */
    generateHeader(width = 1920, height = 1080) {
        const fontName = this.getFontName();
        const style = this.styles.metadata;
        
        return `[Script Info]
Title: TeslaCam Metadata Overlay
ScriptType: v4.00+
PlayResX: ${width}
PlayResY: ${height}
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: ${style.name},${fontName},${style.fontSize},${style.primaryColor},${style.primaryColor},${style.outlineColor},${style.backColor},${style.bold},0,0,0,100,100,0,0,3,${style.outline},${style.shadow},${style.alignment},10,10,${style.marginV},1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;
    }
    
    /**
     * Format time for ASS (H:MM:SS.cc format)
     * @param {number} seconds - Time in seconds
     * @returns {string} Formatted time string
     */
    formatAssTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        const cs = Math.floor((seconds % 1) * 100);
        return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
    }
    
    /**
     * Create colored text with ASS tags
     * @param {string} text - Text content
     * @param {string} color - ASS color
     * @returns {string} Colored text with ASS tags
     */
    colorText(text, color) {
        return `{\\c${color}}${text}{\\c${this.colors.white}}`;
    }
    
    /**
     * Format metadata to display text with colors (no ASS drawing, reliable text only)
     * @param {Object} data - Metadata object
     * @param {string} lang - Language code ('en' or 'fr')
     * @returns {string} Formatted display text with ASS color commands
     */
    formatMetadataText(data, lang = 'en') {
        if (!data) return '';
        
        const parts = [];
        const c = this.colors;
        
        // Speed
        const speedKmh = Math.round((data.vehicleSpeedMps || 0) * 3.6);
        parts.push(`${speedKmh} km/h`);
        
        // Gear with color
        const gear = this.gearMap[data.gearState] || '--';
        let gearColor = c.white;
        if (gear === 'D') gearColor = c.green;
        else if (gear === 'R') gearColor = c.red;
        parts.push(this.colorText(`[${gear}]`, gearColor));
        
        // Blinkers using simple arrow symbols with colors
        // Left blinker: use colored arrow
        const leftArrow = data.blinkerOnLeft 
            ? this.colorText('◄', c.green)
            : this.colorText('◄', c.dimGray);
        // Right blinker
        const rightArrow = data.blinkerOnRight 
            ? this.colorText('►', c.green)
            : this.colorText('►', c.dimGray);
        parts.push(leftArrow);
        parts.push(rightArrow);
        
        // Autopilot (if active)
        const autopilot = this.autopilotMap[data.autopilotState] || '';
        if (autopilot && data.autopilotState !== 'NONE') {
            parts.push(this.colorText(`@${autopilot}`, c.blue));
        }
        
        // Accelerator with lightning symbol and percentage
        const accelPercent = Math.round(data.acceleratorPedalPosition || 0);
        if (accelPercent > 0) {
            parts.push(this.colorText(`↑${accelPercent}%`, c.green));
        } else {
            parts.push(this.colorText('↑', c.dimGray));
        }
        
        // Brake with symbol
        if (data.brakeApplied) {
            parts.push(this.colorText('●BRAKE', c.red));
        } else {
            parts.push(this.colorText('○', c.dimGray));
        }
        
        return parts.join('  ');
    }
    
    /**
     * Generate a single dialogue line for ASS
     * @param {number} startTime - Start time in seconds
     * @param {number} endTime - End time in seconds
     * @param {string} text - Text to display
     * @returns {string} ASS dialogue line
     */
    generateDialogue(startTime, endTime, text) {
        const start = this.formatAssTime(startTime);
        const end = this.formatAssTime(endTime);
        // Escape special ASS characters
        const escapedText = text.replace(/\\/g, '\\\\').replace(/\{/g, '\\{').replace(/\}/g, '\\}');
        return `Dialogue: 0,${start},${end},Metadata,,0,0,0,,${escapedText}`;
    }
    
    /**
     * Generate complete ASS subtitle file content from metadata
     * @param {Array} allMetadata - Array of segment metadata from loadMetadataForSegments
     * @param {Array} clipSegments - Array of clip segments with timing info
     * @param {string} lang - Language code
     * @param {number} width - Video width
     * @param {number} height - Video height
     * @returns {string} Complete ASS file content
     */
    generateAssContent(allMetadata, clipSegments, lang = 'en', width = 1920, height = 1080) {
        let content = this.generateHeader(width, height);
        const dialogues = [];
        
        // Track accumulated time across segments
        let accumulatedTime = 0;
        
        for (let segIdx = 0; segIdx < clipSegments.length; segIdx++) {
            const clipSeg = clipSegments[segIdx];
            const segmentMetadata = allMetadata.find(m => m.segmentIndex === segIdx);
            
            if (!segmentMetadata || !segmentMetadata.metadata || segmentMetadata.metadata.length === 0) {
                accumulatedTime += clipSeg.clipDuration;
                continue;
            }
            
            const metadata = segmentMetadata.metadata;
            const clipStart = clipSeg.clipStart;
            const clipEnd = clipSeg.clipEnd;
            
            // Filter metadata within clip range and generate dialogues
            for (let i = 0; i < metadata.length; i++) {
                const item = metadata[i];
                const itemTime = item.time;
                
                // Skip if outside clip range
                if (itemTime < clipStart || itemTime > clipEnd) continue;
                
                // Calculate relative time in output video
                const relativeStart = accumulatedTime + (itemTime - clipStart);
                
                // Find end time (next metadata item or segment end)
                let relativeEnd;
                if (i + 1 < metadata.length && metadata[i + 1].time <= clipEnd) {
                    relativeEnd = accumulatedTime + (metadata[i + 1].time - clipStart);
                } else {
                    relativeEnd = accumulatedTime + (clipEnd - clipStart);
                }
                
                // Ensure minimum duration of 0.1s
                if (relativeEnd - relativeStart < 0.1) {
                    relativeEnd = relativeStart + 0.1;
                }
                
                const text = this.formatMetadataText(item.data, lang);
                if (text) {
                    dialogues.push(this.generateDialogue(relativeStart, relativeEnd, text));
                }
            }
            
            accumulatedTime += clipSeg.clipDuration;
        }
        
        content += dialogues.join('\n');
        return content;
    }
    
    /**
     * Generate ASS file for single camera export
     * @param {Array} allMetadata - Metadata array
     * @param {Array} clipSegments - Clip segments
     * @param {string} lang - Language
     * @returns {string} ASS content
     */
    generateForSingleCamera(allMetadata, clipSegments, lang = 'en') {
        return this.generateAssContent(allMetadata, clipSegments, lang, 1920, 1080);
    }
    
    /**
     * Generate ASS file for grid video export
     * @param {Array} allMetadata - Metadata array
     * @param {Array} clipSegments - Clip segments
     * @param {number} cameraCount - Number of cameras in grid
     * @param {string} lang - Language
     * @returns {string} ASS content
     */
    generateForGrid(allMetadata, clipSegments, cameraCount, lang = 'en') {
        // Calculate grid dimensions
        let width, height;
        if (cameraCount <= 2) {
            width = 1920;
            height = 540;
        } else if (cameraCount <= 4) {
            width = 1920;
            height = 1080;
        } else {
            width = 2880;
            height = 1080;
        }
        
        return this.generateAssContent(allMetadata, clipSegments, lang, width, height);
    }
}

// Global instance for ASS generation
// Global instances for metadata overlay generation
const assSubtitleGenerator = new AssSubtitleGenerator();
const metadataOverlayGenerator = new MetadataOverlayGenerator();

class MetadataManager {
    constructor(viewer) {
        this.viewer = viewer;
        this.protoRoot = null;
        this.SeiMetadata = null;
        this.currentMetadata = []; // Array of metadata objects for the current segment
        this.isLoading = false;
        this.detailModalOpen = false;
        this.lastDetailData = null;
        
        this.dom = {
            switchBtn: document.getElementById('metaSwitchBtn'),
            detailBtn: document.getElementById('metaDetailBtn'),
            statsOverlay: document.getElementById('metaDetailOverlay'),
            closeStatsBtn: document.getElementById('closeStatsBtn'),
            statsTitle: document.getElementById('statsTitle'),
            loading: document.getElementById('metadataLoading'),
            empty: document.getElementById('metadataEmpty'),
            items: document.getElementById('metadataItems'),
            stats: {
                speed: document.getElementById('statsSpeed'),
                gear: document.getElementById('statsGear'),
                steering: document.getElementById('statsSteering'),
                accelerator: document.getElementById('statsAccelerator'),
                brake: document.getElementById('statsBrake'),
                blinker: document.getElementById('statsBlinker'),
                autopilot: document.getElementById('statsAutopilot'),
                gps: document.getElementById('statsGPS'),
                heading: document.getElementById('statsHeading'),
                accel: document.getElementById('statsAccel')
            }
        };
        
        this.initializeProtobuf();
        this.bindEvents();
    }
    
    async initializeProtobuf() {
        try {
            if (typeof protobuf === 'undefined') {
                console.warn("[MetadataManager] protobuf.js not loaded yet, retrying in 1s");
                setTimeout(() => this.initializeProtobuf(), 1000);
                return;
            }
            this.protoRoot = await protobuf.load("dashcam.proto");
            this.SeiMetadata = this.protoRoot.lookupType("SeiMetadata");
            console.log("[MetadataManager] Protobuf initialized");
        } catch (err) {
            console.error("[MetadataManager] Failed to load protobuf:", err);
        }
    }
    
    bindEvents() {
        // Toggle from header button
        if (this.dom.switchBtn) {
            this.dom.switchBtn.addEventListener('click', () => {
                const isCollapsed = Boolean(this.collapsed);
                this.setCollapsed(!isCollapsed);
            });
        }

        // Stats overlay button click (toggle)
        if (this.dom.detailBtn) {
            this.dom.detailBtn.addEventListener('click', () => {
                this.toggleStatsOverlay();
            });
        }

        // Close stats overlay
        if (this.dom.closeStatsBtn) {
            this.dom.closeStatsBtn.addEventListener('click', () => {
                this.hideStatsOverlay();
            });
        }

        // Stats overlay draggable logic
        this.initStatsOverlayDrag();

    }


    setCollapsed(collapsed) {
        // The driving overlay replaced the old panel, so this is what the
        // "Drive Data" button shows and hides now.
        const overlay = document.getElementById('seiOverlay');
        if (overlay) {
            overlay.classList.toggle('sei-overlay--hidden', collapsed);
            overlay.setAttribute('aria-hidden', String(collapsed));
        }
        this.collapsed = collapsed;
        if (this.dom.switchBtn) this.dom.switchBtn.classList.toggle('active', !collapsed);
    }

    async loadMetadata(file) {
        if (!this.SeiMetadata) {
            console.warn("[MetadataManager] Protobuf not ready, skipping metadata load");
            return;
        }
        
        this.isLoading = true;
        this.updateUIStatus();
        this.currentMetadata = [];
        
        try {
            let buffer;
            if (file instanceof File) {
                buffer = await file.arrayBuffer();
            } else if (file && typeof file.arrayBuffer === 'function') {
                buffer = await file.arrayBuffer();
            } else if (file && file.path) {
                const response = await fetch(getFileUrl(file));
                buffer = await response.arrayBuffer();
            } else {
                console.warn("[MetadataManager] Unknown file type for metadata loading");
                return;
            }

            const parser = new DashcamMP4(buffer);
            const rawMetadata = parser.parseMetadata();
            
            this.currentMetadata = rawMetadata.map(item => {
                try {
                    const decoded = this.SeiMetadata.decode(item.data);
                    return {
                        time: item.time,
                        data: this.SeiMetadata.toObject(decoded, { enums: String, longs: String })
                    };
                } catch (e) {
                    console.warn("[MetadataManager] Failed to decode SEI item:", e);
                    return null;
                }
            }).filter(Boolean);
            
            console.log(`[MetadataManager] Loaded ${this.currentMetadata.length} metadata points`);
            
            // Auto expand panel if metadata is loaded
            if (this.currentMetadata.length > 0 && this.dom.panel.classList.contains('collapsed')) {
                this.setCollapsed(false);
            }
        } catch (err) {

            console.error("[MetadataManager] Error parsing metadata:", err);
            this.currentMetadata = [];
        } finally {
            this.isLoading = false;
            this.updateUIStatus();
            if (!document.getElementById('liveMap')?.hidden) this.setMapTrack(this.currentMetadata);
        }
    }
    
    /**
     * Drive the overlay that sits on the picture.
     *
     * Deliberately mirrors what Tesla's own viewer shows, and nothing more:
     * gear, brake, blinkers, speed, steering angle, accelerator travel, and an
     * Autopilot banner when it is engaged. The detailed panel keeps the rest.
     */

    /**
     * Live map of where the clip was filmed.
     *
     * Metadata carries a position per sample, so the whole clip is a track and
     * the playhead is a point on it. Leaflet is only created the first time the
     * map is opened: building it for every event would cost tiles nobody looks
     * at.
     */
    ensureMap() {
        if (this.map || typeof L === 'undefined') return this.map || null;
        const canvas = document.getElementById('liveMapCanvas');
        if (!canvas) return null;

        this.map = L.map(canvas, {
            attributionControl: true,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            touchZoom: false,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap',
        }).addTo(this.map);

        this.mapTrack = L.polyline([], { color: '#f0b350', weight: 3, opacity: 0.85 }).addTo(this.map);
        this.mapMarker = L.marker([0, 0], {
            icon: L.divIcon({ className: '', html: '<div class="live-map-marker"></div>', iconSize: [14, 14] }),
        }).addTo(this.map);
        return this.map;
    }

    /** Feed the map the track of the event being played. */
    setMapTrack(samples) {
        const points = (samples || [])
            .map((s) => s.data)
            .filter((d) => d && Number.isFinite(+d.latitudeDeg) && Number.isFinite(+d.longitudeDeg)
                        && (+d.latitudeDeg !== 0 || +d.longitudeDeg !== 0))
            .map((d) => [+d.latitudeDeg, +d.longitudeDeg]);

        this.mapPoints = points;
        const empty = document.getElementById('liveMapEmpty');
        const canvas = document.getElementById('liveMapCanvas');
        const hasFix = points.length > 0;
        if (empty) {
            empty.hidden = hasFix;
            empty.textContent = i18n[this.viewer.currentLanguage].liveMapNoFix;
        }
        if (canvas) canvas.style.display = hasFix ? '' : 'none';
        if (!hasFix || !this.ensureMap()) return;

        this.mapTrack.setLatLngs(points);
        this.map.fitBounds(this.mapTrack.getBounds(), { padding: [16, 16], maxZoom: 16 });
        this.mapMarker.setLatLng(points[0]);
        // Leaflet measures the container on creation; it was hidden then.
        setTimeout(() => this.map.invalidateSize(), 0);
    }

    updateMapPosition(d) {
        if (!this.map || !this.mapPoints || !this.mapPoints.length) return;
        const lat = +d.latitudeDeg, lon = +d.longitudeDeg;
        if (!Number.isFinite(lat) || !Number.isFinite(lon) || (lat === 0 && lon === 0)) return;
        this.mapMarker.setLatLng([lat, lon]);
        if (!this.map.getBounds().pad(-0.25).contains([lat, lon])) this.map.panTo([lat, lon]);
    }

    toggleMap(show) {
        const panel = document.getElementById('liveMap');
        const btn = document.getElementById('mapToggleBtn');
        if (!panel) return;
        const visible = show === undefined ? panel.hidden : show;
        panel.hidden = !visible;
        if (btn) btn.classList.toggle('active', visible);
        try { localStorage.setItem('liveMap', visible ? '1' : '0'); } catch { /* private mode */ }
        if (visible) {
            this.setMapTrack(this.currentMetadata);
            if (this.map) setTimeout(() => this.map.invalidateSize(), 0);
        }
    }

    updateDrivingOverlay(d) {
        const o = this.sei || (this.sei = {
            root: document.getElementById('seiOverlay'),
            gear: document.getElementById('seiGear'),
            brake: document.getElementById('seiBrake'),
            left: document.getElementById('seiLeftSignal'),
            right: document.getElementById('seiRightSignal'),
            speed: document.getElementById('seiSpeed'),
            unit: document.getElementById('seiSpeedUnit'),
            steering: document.getElementById('seiSteering'),
            accel: document.getElementById('seiAccelerator'),
            accelFill: document.getElementById('seiAccelFill'),
            autopilot: document.getElementById('seiAutopilot'),
        });
        if (!o.root) return;

        if (!o.unit.dataset.bound) {
            o.unit.dataset.bound = '1';
            o.unit.onclick = () => {
                this.speedUnit = this.speedUnit === 'mph' ? 'kmh' : 'mph';
                try { localStorage.setItem('speedUnit', this.speedUnit); } catch { /* private mode */ }
            };
            try { this.speedUnit = localStorage.getItem('speedUnit') || 'kmh'; } catch { this.speedUnit = 'kmh'; }
        }

        if (this.collapsed) return;
        o.root.classList.remove('sei-overlay--hidden');
        o.root.setAttribute('aria-hidden', 'false');

        const kmh = (d.vehicleSpeedMps || 0) * 3.6;
        const mph = this.speedUnit === 'mph';
        o.speed.textContent = String(Math.round(mph ? kmh * 0.621371 : kmh));
        o.unit.textContent = mph ? 'mph' : 'km/h';

        const gears = { GEAR_PARK: 'P', GEAR_DRIVE: 'D', GEAR_REVERSE: 'R', GEAR_NEUTRAL: 'N' };
        o.gear.textContent = gears[d.gearState] || '-';

        o.brake.classList.toggle('sei-brake--active', Boolean(d.brakeApplied));
        o.brake.classList.toggle('sei-brake--inactive', !d.brakeApplied);

        const hazard = d.blinkerOnLeft && d.blinkerOnRight;
        o.left.classList.toggle('sei-blinker--inactive', !(d.blinkerOnLeft || hazard));
        o.right.classList.toggle('sei-blinker--inactive', !(d.blinkerOnRight || hazard));

        o.steering.style.transform = `rotate(${(d.steeringWheelAngle || 0).toFixed(1)}deg)`;

        // Tesla reports the pedal as a fraction; older clips use 0-100.
        const raw = d.acceleratorPedalPosition || 0;
        const pedal = Math.max(0, Math.min(100, raw <= 1 ? raw * 100 : raw));
        o.accelFill.style.height = `${pedal.toFixed(0)}%`;
        o.accel.classList.toggle('sei-accel--inactive', pedal < 1);

        const ap = d.autopilotState;
        const engaged = ap && ap !== 'NONE' && ap !== 'UNKNOWN';
        // TACC only holds the speed; the car is not steering, so the wheel
        // stays neutral. Only Autosteer and FSD take the wheel.
        const steering = ap === 'AUTOSTEER' || ap === 'SELF_DRIVING';

        o.autopilot.hidden = !engaged;
        if (engaged) {
            const t = i18n[this.viewer.currentLanguage];
            const names = { SELF_DRIVING: t.autopilotSelfDriving, AUTOSTEER: t.autopilotAutosteer, TACC: t.autopilotTACC };
            o.autopilot.textContent = names[ap] || ap;
        }
        o.steering.classList.toggle('sei-steering-icon--autosteer', steering);
    }

    hideDrivingOverlay() {
        const root = document.getElementById('seiOverlay');
        if (root) {
            root.classList.add('sei-overlay--hidden');
            root.setAttribute('aria-hidden', 'true');
        }
    }

    updateUIStatus() {
        if (!this.dom.loading) return;
        this.dom.loading.style.display = this.isLoading ? 'block' : 'none';
        this.dom.empty.style.display = (!this.isLoading && this.currentMetadata.length === 0) ? 'block' : 'none';
        this.dom.items.style.display = (!this.isLoading && this.currentMetadata.length > 0) ? 'flex' : 'none';
    }
    
    updateDisplay(currentTime) {
        if (this.currentMetadata.length === 0) return;

        // The sample closest to, but not after, the playhead.
        let bestMatch = this.currentMetadata[0];
        for (const sample of this.currentMetadata) {
            if (sample.time > currentTime) break;
            bestMatch = sample;
        }
        if (!bestMatch || !bestMatch.data) return;

        const d = bestMatch.data;
        this.updateDrivingOverlay(d);
        this.updateMapPosition(d);

        this.lastDetailData = d;
        if (this.detailModalOpen) this.updateStatsDisplay(d);
    }

    toggleStatsOverlay() {
        if (this.detailModalOpen) {
            this.hideStatsOverlay();
        } else {
            this.showStatsOverlay();
        }
    }
    
    showStatsOverlay() {
        if (!this.dom.statsOverlay) return;
        this.dom.statsOverlay.classList.add('show');
        this.detailModalOpen = true;
        
        // Update title based on language
        const lang = this.viewer.currentLanguage;
        if (this.dom.statsTitle) {
            this.dom.statsTitle.textContent = i18n[lang].driveStats;
        }
        
        // Update with latest data
        if (this.lastDetailData) {
            this.updateStatsDisplay(this.lastDetailData);
        }
    }
    
    hideStatsOverlay() {
        if (!this.dom.statsOverlay) return;
        this.dom.statsOverlay.classList.remove('show');
        this.detailModalOpen = false;
    }
    
    initStatsOverlayDrag() {
        if (!this.dom.statsOverlay) return;
        
        let isDragging = false;
        let offsetX, offsetY;
        
        const onMouseDown = (e) => {
            if (e.button !== 0) return;
            
            isDragging = true;
            this.dom.statsOverlay.classList.add('dragging');
            
            const rect = this.dom.statsOverlay.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            
            e.preventDefault();
        };
        
        const onMouseMove = (e) => {
            if (!isDragging) return;
            
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
            
            // Boundary checks
            const panelRect = this.dom.statsOverlay.getBoundingClientRect();
            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - panelRect.width));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - panelRect.height));
            
            this.dom.statsOverlay.style.left = `${newLeft}px`;
            this.dom.statsOverlay.style.top = `${newTop}px`;
        };
        
        const onMouseUp = () => {
            isDragging = false;
            this.dom.statsOverlay.classList.remove('dragging');
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        
        // Touch support for mobile
        const onTouchStart = (e) => {
            if (e.touches.length !== 1) return;
            
            isDragging = true;
            this.dom.statsOverlay.classList.add('dragging');
            
            const touch = e.touches[0];
            const rect = this.dom.statsOverlay.getBoundingClientRect();
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', onTouchEnd);
        };
        
        const onTouchMove = (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            e.preventDefault();
            
            const touch = e.touches[0];
            let newLeft = touch.clientX - offsetX;
            let newTop = touch.clientY - offsetY;
            
            const panelRect = this.dom.statsOverlay.getBoundingClientRect();
            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - panelRect.width));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - panelRect.height));
            
            this.dom.statsOverlay.style.left = `${newLeft}px`;
            this.dom.statsOverlay.style.top = `${newTop}px`;
        };
        
        const onTouchEnd = () => {
            isDragging = false;
            this.dom.statsOverlay.classList.remove('dragging');
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
        
        this.dom.statsOverlay.addEventListener('mousedown', onMouseDown);
        this.dom.statsOverlay.addEventListener('touchstart', onTouchStart, { passive: true });
    }
    
    updateStatsDisplay(d) {
        const lang = this.viewer.currentLanguage;
        const s = this.dom.stats;
        if (!s.speed) return;
        
        // Speed
        const speedKmh = (d.vehicleSpeedMps || 0) * 3.6;
        s.speed.textContent = `${speedKmh.toFixed(1)} km/h`;
        
        // Gear
        const gearMap = {
            'GEAR_PARK': 'P',
            'GEAR_DRIVE': 'D',
            'GEAR_REVERSE': 'R',
            'GEAR_NEUTRAL': 'N'
        };
        s.gear.textContent = gearMap[d.gearState] || '--';
        
        // Steering
        const steeringAngle = d.steeringWheelAngle || 0;
        s.steering.textContent = `${steeringAngle.toFixed(1)}°`;
        
        // Accelerator
        const accelPercent = d.acceleratorPedalPosition || 0;
        s.accelerator.textContent = `${accelPercent.toFixed(1)}%`;
        
        // Brake
        s.brake.textContent = d.brakeApplied 
            ? ('Applied') 
            : ('Released');
        s.brake.className = 'stats-value' + (d.brakeApplied ? ' highlight-red' : '');
        
        // Blinker
        const blinkerLeft = d.blinkerOnLeft || false;
        const blinkerRight = d.blinkerOnRight || false;
        if (blinkerLeft && blinkerRight) {
            s.blinker.textContent = 'Hazard';
            s.blinker.className = 'stats-value highlight-yellow';
        } else if (blinkerLeft) {
            s.blinker.textContent = '← Left';
            s.blinker.className = 'stats-value highlight-green';
        } else if (blinkerRight) {
            s.blinker.textContent = 'Right →';
            s.blinker.className = 'stats-value highlight-green';
        } else {
            s.blinker.textContent = 'Off';
            s.blinker.className = 'stats-value';
        }
        
        // Autopilot
        const apMap = {
            'NONE': 'None',
            'SELF_DRIVING': 'FSD',
            'AUTOSTEER': 'Autosteer',
            'TACC': 'TACC'
        };
        s.autopilot.textContent = apMap[d.autopilotState] || d.autopilotState || '--';
        s.autopilot.className = 'stats-value' + (d.autopilotState && d.autopilotState !== 'NONE' ? ' highlight-blue' : '');
        
        // GPS
        if (typeof d.latitudeDeg === 'number' && typeof d.longitudeDeg === 'number') {
            s.gps.textContent = `${d.latitudeDeg.toFixed(6)}, ${d.longitudeDeg.toFixed(6)}`;
        } else {
            s.gps.textContent = '--';
        }
        
        // Heading
        s.heading.textContent = typeof d.headingDeg === 'number' ? `${d.headingDeg.toFixed(1)}°` : '--';
        
        // Acceleration (combined)
        if (typeof d.linearAccelerationMps2X === 'number') {
            s.accel.textContent = `X:${d.linearAccelerationMps2X.toFixed(2)} Y:${d.linearAccelerationMps2Y.toFixed(2)} Z:${d.linearAccelerationMps2Z.toFixed(2)}`;
        } else {
            s.accel.textContent = '--';
        }
    }
    
    clear() {
        this.currentMetadata = [];
        this.lastDetailData = null;
        this.hideStatsOverlay();
        this.updateUIStatus();
    }
}

// --- Device Detection ---
function isIOSDevice() {
    // Detect iOS/iPadOS (including Chrome on iPad which uses WebKit)
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
           (navigator.userAgent.includes('CriOS')) || // Chrome on iOS
           (navigator.userAgent.includes('Mobile') && navigator.maxTouchPoints > 1);
}

function supportsDirectoryPicker() {
    // Check if webkitdirectory is actually supported and works
    const input = document.createElement('input');
    return 'webkitdirectory' in input && !isIOSDevice();
}

// Check if File System Access API is supported (for persistent directory handle)
function supportsFileSystemAccess() {
    return 'showDirectoryPicker' in window && !isIOSDevice();
}

// --- IndexedDB helpers for storing directory handle ---
const DB_NAME = 'TeslaCamPlayerDB';
const DB_VERSION = 1;
const STORE_NAME = 'directoryHandles';

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
    });
}

async function saveDirectoryHandle(handle) {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await new Promise((resolve, reject) => {
            const request = store.put({ id: 'lastDirectory', handle });
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
        db.close();
        console.log('[IndexedDB] Directory handle saved');
    } catch (e) {
        console.warn('[IndexedDB] Failed to save directory handle:', e);
    }
}

async function getDirectoryHandle() {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const result = await new Promise((resolve, reject) => {
            const request = store.get('lastDirectory');
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
        db.close();
        return result?.handle || null;
    } catch (e) {
        console.warn('[IndexedDB] Failed to get directory handle:', e);
        return null;
    }
}

async function clearDirectoryHandle() {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await new Promise((resolve, reject) => {
            const request = store.delete('lastDirectory');
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
        db.close();
        console.log('[IndexedDB] Directory handle cleared');
    } catch (e) {
        console.warn('[IndexedDB] Failed to clear directory handle:', e);
    }
}
// --- End IndexedDB helpers ---

// --- End Device Detection ---


class VideoListComponent {
    constructor(elementId, eventHandler, viewer) {
        this.container = document.getElementById(elementId);
        this.eventHandler = eventHandler;
        this.viewer = viewer;
        if (!this.container) {
            throw new Error(`Element with id "${elementId}" not found.`);
        }
    }

    render(events) {
        const lang = this.viewer.currentLanguage;
        const translations = i18n[lang];
        this.container.innerHTML = '';
        if (!events || events.length === 0) {
            // Until discovery finishes, "no clips" is not yet true: saying
            // "plug in your USB drive" and then replacing it with a list is
            // worse than showing that we are still looking.
            if (this.viewer.discovering) {
                this.container.innerHTML =
                    `<div class="empty-state is-loading"><span class="spinner" aria-hidden="true"></span>` +
                    `<p>${translations.discovering}</p></div>`;
            } else if (this.viewer.allFiles.length > 0) {
                this.container.innerHTML = `<div class="empty-state"><p>${translations.noRecordsFound}</p></div>`;
            } else {
                this.viewer.showInitialHelpMessage();
            }
            return;
        }
        const fragment = document.createDocumentFragment();
        events.forEach(event => {
            const card = this.createVideoCard(event);
            if (card) fragment.appendChild(card);
        });
        this.container.appendChild(fragment);
    }

    createVideoCard(event) {
        if (!event || !event.segments || event.segments.length === 0) return null;
        const firstSegment = event.segments[0];
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.eventId = event.eventId;
        
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'video-thumbnail';
        if (event.thumbFile) {
            const img = document.createElement('img');
            img.src = getFileUrl(event.thumbFile);
            img.alt = 'Preview';
            img.loading = 'lazy';
            img.onload = () => URL.revokeObjectURL(img.src);
            // Tesla encrypts thumb.png with a key section its own viewer cannot
            // read either, so a thumbnail is not guaranteed. Fall back to the
            // first frame of the clip, which is the picture anyway.
            img.onerror = () => this.renderFrameThumbnail(event, thumbnailDiv, img);
            thumbnailDiv.appendChild(img);
        } else {
            this.renderPlaceholder(event, thumbnailDiv);
        }
        const durationDiv = document.createElement('div');
        durationDiv.className = 'video-duration';
        durationDiv.textContent = `${event.segments.length} ${i18n[this.viewer.currentLanguage].minutes}`;
        thumbnailDiv.appendChild(durationDiv);
        card.appendChild(thumbnailDiv);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'video-info';
        const startTime = this.parseTimestamp(event.startTime);
        const timeString = startTime.toLocaleString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        let cityHtml = '';
        if (event.city && event.lat && event.lon) {
            const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
            cityHtml = `<span class="city-link" data-lat="${event.lat}" data-lon="${event.lon}">${locationText}</span> `;
        } else if (event.city) {
            const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
            cityHtml = `${locationText} `;
        }

        const eventTypeLabel = this.getEventTypeLabel(event.eventType);
        const t = i18n[this.viewer.currentLanguage];

        infoDiv.innerHTML = `
            <div class="video-time">
                <span class="video-type-tag" title="${eventTypeLabel}" aria-label="${eventTypeLabel}">${this.getEventTypeIcon(event.eventType)}</span>${event.encrypted ? `<span class="encrypted-badge${event.decryptable ? ' is-decrypted' : ''}" title="${event.decryptable ? t.decryptedTitle : t.encryptedTitle}">${event.decryptable ? t.decryptedBadge : t.encryptedBadge}</span>` : ''}<button type="button" class="hide-clip-btn" title="${t.hideClip}" aria-label="${t.hideClip}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button>
                ${cityHtml}${timeString}
            </div>
        `;
        card.appendChild(infoDiv);
        
        // Attach event listener to the card, but check for city-link target
        card.onclick = (e) => {
            const hideBtn = e.target.closest('.hide-clip-btn');
            if (hideBtn) {
                e.stopPropagation();
                this.viewer.hideClip(event.eventId);
                return;
            }
            if (e.target.classList.contains('city-link')) {
                e.stopPropagation(); // Prevent card click from firing
                this.viewer.showMapModal(e.target.dataset.lat, e.target.dataset.lon);
            } else {
                this.eventHandler(event.eventId);
            }
        };

        return card;
    }

    renderPlaceholder(event, container) {
        container.querySelector('img')?.remove();
        const placeholder = document.createElement('div');
        placeholder.className = 'no-thumb';
        placeholder.innerHTML =
            `<svg class="icon" aria-hidden="true"><use href="#i-film-strip"/></svg>${this.getEventTypeLabel(event.eventType)}`;
        container.prepend(placeholder);
    }

    /**
     * Grab the first frame of a clip and use it as the preview.
     *
     * Only runs when the stored thumbnail is unusable, and only once the card
     * is on screen: with a hundred events, decoding every clip up front would
     * be pointless work.
     */
    renderFrameThumbnail(event, container, img) {
        const segment = event.segments && event.segments[0];
        const file = segment && segment.files &&
            (segment.files.front || Object.values(segment.files).find(f => f && f.name.endsWith('.mp4')));
        if (!file) return this.renderPlaceholder(event, container);

        const draw = () => {
            const video = document.createElement('video');
            video.muted = true;
            video.preload = 'metadata';
            video.crossOrigin = 'anonymous';
            const done = (ok) => {
                video.removeAttribute('src');
                video.load();
                if (!ok) this.renderPlaceholder(event, container);
            };
            video.onloadeddata = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth || 320;
                    canvas.height = video.videoHeight || 240;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    img.onerror = null;
                    img.src = canvas.toDataURL('image/jpeg', 0.7);
                    done(true);
                } catch {
                    done(false);
                }
            };
            video.onerror = () => done(false);
            video.src = getFileUrl(file);
        };

        if (!('IntersectionObserver' in window)) return draw();
        const observer = new IntersectionObserver((entries) => {
            if (entries.some(e => e.isIntersecting)) {
                observer.disconnect();
                draw();
            }
        }, { rootMargin: '200px' });
        observer.observe(container);
    }

    /* The tag used to render `label.split(' ')[0]`, which worked only because
       every label began with an emoji. With the emoji gone that printed a
       truncated word ("Mode", "Clips"), so the glyph is now a real icon. */
    getEventTypeIcon(type) {
        const icons = {
            RecentClips: 'clock-counter-clockwise',
            SavedClips: 'bookmark-simple',
            SentryClips: 'shield-check'
        };
        const name = icons[type] || 'film-strip';
        return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
    }

    getEventTypeLabel(type) {
        const lang = this.viewer.currentLanguage;
        return i18n[lang][type.charAt(0).toLowerCase() + type.slice(1)] || type;
    }

    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
}

class MultiCameraPlayer {
    constructor() {
        this.players = {
            front: document.getElementById('front-player'),
            back: document.getElementById('back-player'),
            left: document.getElementById('left-player'),
            right: document.getElementById('right-player'),
            left_pillar: document.getElementById('left-pillar-player'),
            right_pillar: document.getElementById('right-pillar-player')
        };
        this.playerContainers = {
            front: document.getElementById('front-container'),
            back: document.getElementById('back-container'),
            left: document.getElementById('left-container'),
            right: document.getElementById('right-container'),
            left_pillar: document.getElementById('left-pillar-container'),
            right_pillar: document.getElementById('right-pillar-container')
        };
        this.currentUrls = { front: null, back: null, left: null, right: null, left_pillar: null, right_pillar: null };
        this.activeCamera = 'front';
        this.layoutMode = 'grid4'; // Default to 4-Grid
        this.isPlaying = false;
        this.isSeeking = false;
        this.playbackRate = 1.0;
        this.lastSyncTime = 0;
        
        // Start label loop
        this.startRenderLoop();
    }
    
    // Start render loop for labels
    startRenderLoop() {
        if (this.renderLoopRunning) return;
        this.renderLoopRunning = true;
        this.renderLoop();
    }

    renderLoop() {
        const isGrid = ['grid', 'grid4'].includes(this.layoutMode);
        
        if (isGrid) {
            // Check active views to determine layout
            const views = this.layoutMode === 'grid' ?
                ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'] : // 6-grid (grid)
                ['front', 'back', 'left', 'right']; // 4-grid (grid4)

            // Iterate over each view container and add/update labels
            views.forEach(camera => {
                const container = this.playerContainers[camera];
                if (container) {
                     let label = container.querySelector('.camera-label');
                     if (!label) {
                         label = document.createElement('div');
                         label.className = 'camera-label';
                         // Style is handled in CSS, but ensure it exists
                         label.style.position = 'absolute';
                         label.style.top = '10px';
                         label.style.left = '10px';
                         label.style.color = 'white';
                         label.style.backgroundColor = 'rgba(0,0,0,0.5)';
                         label.style.padding = '5px 10px';
                         label.style.fontSize = '14px';
                         label.style.pointerEvents = 'none';
                         label.style.zIndex = '10';
                         container.appendChild(label);
                     }
                     // Set localized text (Simple check for window.viewer global or fallback)
                     // Note: We access window.viewer carefully
                     const lang = (window.viewer && window.viewer.currentLanguage) || 'en';
                     label.innerText = cameraLabel(camera, lang) || camera;
                     label.style.display = 'block';
                }
            });
            
             // Hide labels for inactive cameras in the grid
             Object.keys(this.playerContainers).forEach(key => {
                 if (!views.includes(key)) {
                     const container = this.playerContainers[key];
                     if (container) {
                        const label = container.querySelector('.camera-label');
                        if (label) label.style.display = 'none';
                     }
                 }
             });

        } else {
             // Single/Legacy view mode: Revert to CSS control (Single hidden by opacity, Legacy PIP shown by opacity)
             Object.values(this.playerContainers).forEach(container => {
                 if (container) {
                    const label = container.querySelector('.camera-label');
                    if (label) label.style.display = '';
                 }
             });
        }

        requestAnimationFrame(() => this.renderLoop());
    }

    setLayout(mode) {
        this.layoutMode = mode;
        this.updateLayout();
    }

    setCamera(camera) {
        if (this.players[camera]) {
            this.activeCamera = camera;
            this.updateLayout();
        }
    }

    updateLayout() {
        const playerArea = document.getElementById('playerArea');
        if (!playerArea) return;

        // Reset Player Area Classes
        playerArea.classList.remove('grid-view', 'grid4-view', 'legacy-view', 'single-view');

        // Reset Container Classes
        const positionClasses = ['pos-top-left', 'pos-top-right', 'pos-bottom-left', 'pos-bottom-right'];
        Object.keys(this.playerContainers).forEach(key => {
            const container = this.playerContainers[key];
            if (!container) return;
            container.classList.remove('is-main', 'is-pip', 'hidden', 'is-grid', 'is-active-single', ...positionClasses);
            container.style.display = ''; // Reset inline display
        });

        // Apply Logic based on Layout Mode
        if (this.layoutMode === 'grid') {
            playerArea.classList.add('grid-view');
            Object.values(this.playerContainers).forEach(c => { if(c) c.classList.add('is-grid'); });
        } 
        else if (this.layoutMode === 'grid4') {
            playerArea.classList.add('grid4-view');
            Object.keys(this.playerContainers).forEach(key => {
                const c = this.playerContainers[key];
                if (!c) return;
                // Only Front, Back, Left, Right are standard grid4
                if (['front', 'back', 'left', 'right'].includes(key)) {
                    c.classList.add('is-grid');
                } else {
                    // Pillars are hidden via CSS for grid4-view, but we can ensure it
                }
            });
        }
        else if (this.layoutMode === 'single') {
            playerArea.classList.add('single-view');
            const activeC = this.playerContainers[this.activeCamera];
            if (activeC) activeC.classList.add('is-active-single');
        }
        else if (this.layoutMode === 'legacy') {
            playerArea.classList.add('legacy-view');
            
            const layouts = {
                front: { back: 'top-right', left: 'bottom-left', right: 'bottom-right' },
                back: { front: 'top-left', left: 'bottom-left', right: 'bottom-right' },
                left: { front: 'top-left', back: 'top-right', right: 'bottom-right' },
                right: { front: 'top-left', back: 'top-right', left: 'bottom-left' },
                left_pillar: { front: 'top-left', back: 'top-right', left: 'bottom-left' },
                right_pillar: { front: 'top-left', back: 'top-right', right: 'bottom-right' }
            };
            const pipMapping = layouts[this.activeCamera] || {};

            Object.keys(this.playerContainers).forEach(key => {
                const container = this.playerContainers[key];
                if (!container) return;

                if (key === this.activeCamera) {
                    container.classList.add('is-main');
                } else if (pipMapping[key]) {
                    container.classList.add('is-pip', `pos-${pipMapping[key]}`);
                } else {
                    container.classList.add('is-pip', 'hidden');
                }
            });
        }
    }

    // Deprecated but kept for compatibility if needed, aliased to setCamera + Single Mode
    setActive(cameraType) {
        if (['grid', 'grid4', 'legacy'].includes(cameraType)) {
            this.setLayout(cameraType);
        } else {
            this.setCamera(cameraType);
            this.setLayout('single');
        }
    }

    async loadSegmentForAllCameras(segment) {
        this.cleanup();
        const cameras = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
        let activeCount = 0;

        for (const camera of cameras) {
            const file = segment.files[camera];
            const player = this.players[camera];
            const cameraView = this.playerContainers[camera];

            if (file && player) {
                activeCount++;
                this.currentUrls[camera] = getFileUrl(file);
                player.src = this.currentUrls[camera];
                // Re-apply the rate here as cleanup() / .src change resets the player state.
                player.defaultPlaybackRate = this.playbackRate;
                player.playbackRate = this.playbackRate;
                if(cameraView) cameraView.classList.remove('error', 'empty');
            } else {
                if (player) player.src = '';
                if(cameraView) cameraView.classList.add('empty');
            }
        }

        // Adjust Grid Layout based on active cameras
        // Logic removed: User explicitly selects layout now.
        
        await this.waitForAllVideosLoaded();

        // Load SEI metadata from front camera
        if (segment.files['front'] && window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.loadMetadata(segment.files['front']);
        } else if (window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.clear();
        }
    }


    async waitForAllVideosLoaded() {
        const loadPromises = Object.values(this.players).filter(p => p.src).map(player =>
            new Promise((resolve) => {
                if (player.readyState >= 2) resolve();
                else {
                    player.addEventListener('loadeddata', resolve, { once: true });
                    player.addEventListener('error', resolve, { once: true });
                }
            })
        );
        await Promise.all(loadPromises);
    }

    async syncAllPlayers() {
        if (this.isSeeking) return;

        const now = performance.now();
        if (now - this.lastSyncTime < 100) { // Throttle to max 10 times per second
            return;
        }
        this.lastSyncTime = now;

        const mainPlayer = this.players[this.activeCamera];
        if (!mainPlayer || !mainPlayer.src) return;
        const currentTime = mainPlayer.currentTime;

        // Update metadata display
        if (window.viewer && window.viewer.metadataManager) {
            window.viewer.metadataManager.updateDisplay(currentTime);
        }

        Object.keys(this.players).forEach(key => {
            if (key !== this.activeCamera && this.players[key] && this.players[key].src) {
                const player = this.players[key];
                if (Math.abs(player.currentTime - currentTime) > 0.1) {
                    player.currentTime = currentTime;
                }
            }
        });
    }

    async playAll() {
        const playPromises = Object.values(this.players).filter(p => p.src).map(p => p.play().catch(e => console.warn('Play failed:', e)));
        await Promise.all(playPromises);
    }

    pauseAll() {
        Object.values(this.players).forEach(p => { if (p.src) p.pause(); });
    }

    seekAll(time) {
        this.isSeeking = true;
        Object.values(this.players).forEach(p => { if (p.src) p.currentTime = time; });
        setTimeout(() => { this.isSeeking = false; }, 100);
    }

    cleanup() {
        this.pauseAll();
        Object.values(this.players).forEach(player => {
            player.src = '';
            player.removeAttribute('src');
            player.load();
        });
        Object.keys(this.currentUrls).forEach(key => {
            if (this.currentUrls[key]) {
                URL.revokeObjectURL(this.currentUrls[key]);
                this.currentUrls[key] = null;
            }
        });
    }

    setPlaybackRate(rate) {
        this.playbackRate = rate;
        Object.values(this.players).forEach(p => {
            if (p) {
                p.defaultPlaybackRate = rate;
                p.playbackRate = rate;
            }
        });
    }
}

class ContinuousVideoPlayer {
    constructor(multiCameraPlayer) {
        this.multiCameraPlayer = multiCameraPlayer;
        this.currentEvent = null;
        this.currentSegmentIndex = 0;
        this.totalDuration = 0;
        this.segmentDurations = [];
        this.segmentStartTimes = [];
        this.isTransitioning = false;
        this.bindEvents();
    }

    bindEvents() {
        const refPlayer = this.multiCameraPlayer.players.front;
        if (!refPlayer) return;
        refPlayer.addEventListener('ended', () => { if (!this.isTransitioning) this.playNextSegment(); });
        refPlayer.addEventListener('timeupdate', () => this.multiCameraPlayer.syncAllPlayers());
    }

    async calculateEventDurations(event) {
        if (!event.segments || event.segments.length === 0) {
            event.totalDuration = 0;
            event.segmentDurations = [];
            event.segmentStartTimes = [];
            return;
        }
        const getVideoDuration = (file) => new Promise((resolve) => {
            if (!file) { resolve(60); return; }
            const video = document.createElement('video');
            const url = getFileUrl(file);
            const cleanup = () => {
                video.onloadedmetadata = null;
                video.onerror = null;
                video.src = '';
                URL.revokeObjectURL(url);
            };
            video.preload = 'metadata';
            video.onloadedmetadata = () => {
                const duration = video.duration;
                cleanup();
                resolve(isFinite(duration) ? duration : 60);
            };
            video.onerror = () => { cleanup(); resolve(60); };
            video.src = url;
        });
        const segmentCount = event.segments.length;
        const durations = new Array(segmentCount).fill(60);
        if (segmentCount > 0) {
            const lastSegment = event.segments[segmentCount - 1];
            const repFile = lastSegment.files.front || lastSegment.files.back || lastSegment.files.left || lastSegment.files.right || lastSegment.files.left_pillar || lastSegment.files.right_pillar;
            durations[segmentCount - 1] = await getVideoDuration(repFile);
        }
        event.segmentDurations = [];
        event.segmentStartTimes = [];
        let accumulatedTime = 0;
        for (let i = 0; i < segmentCount; i++) {
            event.segmentStartTimes[i] = accumulatedTime;
            const segmentDuration = durations[i];
            event.segmentDurations[i] = segmentDuration;
            accumulatedTime += segmentDuration;
        }
        event.totalDuration = accumulatedTime;
    }

    async loadEvent(event) {
        this.currentEvent = event;
        this.currentSegmentIndex = 0;
        this.segmentDurations = event.segmentDurations || [];
        this.segmentStartTimes = event.segmentStartTimes || [];
        this.totalDuration = event.totalDuration || 0;
        await this.loadSegment(0);
    }

    async loadSegment(index) {
        if (!this.currentEvent || index < 0 || index >= this.currentEvent.segments.length) return;
        this.currentSegmentIndex = index;
        const segment = this.currentEvent.segments[index];
        await this.multiCameraPlayer.loadSegmentForAllCameras(segment);
    }

    async playNextSegment() {
        if (this.currentSegmentIndex < this.currentEvent.segments.length - 1) {
            this.isTransitioning = true;
            await this.loadSegment(this.currentSegmentIndex + 1);
            await this.multiCameraPlayer.playAll();
            this.isTransitioning = false;
        } else {
            console.log("All segments played.");
            this.multiCameraPlayer.pauseAll();
        }
    }

    getCurrentTime() {
        if (!this.currentEvent) return 0;
        const segmentStartTime = this.segmentStartTimes[this.currentSegmentIndex] || 0;
        const activePlayer = this.multiCameraPlayer.players[this.multiCameraPlayer.activeCamera];
        const segmentCurrentTime = activePlayer ? activePlayer.currentTime : 0;
        return segmentStartTime + segmentCurrentTime;
    }

    async seekToTime(targetTime) {
        if (!this.currentEvent) return;
        let targetSegmentIndex = 0;
        for (let i = 0; i < this.segmentStartTimes.length; i++) {
            if (targetTime >= this.segmentStartTimes[i]) targetSegmentIndex = i;
            else break;
        }
        const segmentStartTime = this.segmentStartTimes[targetSegmentIndex];
        const segmentTime = targetTime - segmentStartTime;
        if (targetSegmentIndex !== this.currentSegmentIndex) {
            await this.loadSegment(targetSegmentIndex);
        }
        this.multiCameraPlayer.seekAll(segmentTime);
    }

    getTotalDuration() { return this.totalDuration; }
}

class ModernVideoControls {
    constructor(continuousPlayer, viewer) {
        this.continuousPlayer = continuousPlayer;
        this.multiCameraPlayer = continuousPlayer.multiCameraPlayer;
        this.viewer = viewer;
        this.player = this.multiCameraPlayer.players.front;
        this.container = document.getElementById('playerArea');
        this.totalDuration = 0;
        this.isPlaying = false;
        this.isDragging = false;
        this.wasPlaying = false;
        this.currentEventStartTime = null;
        
        // Clip selection state
        this.clipStartTime = null;
        this.clipEndTime = null;
        this.isDraggingClipStart = false;
        this.isDraggingClipEnd = false;
        this.clipModeActive = false;
        
        this.hideControlsTimer = null;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        if (!this.container) return;
        this.overlay = this.container.querySelector('#videoControlsOverlay');
        this.playPauseBtn = this.container.querySelector('#playPauseBtn');
        this.playPauseIcon = this.container.querySelector('#playPauseIcon');
        this.progressContainer = this.container.querySelector('#progressContainer');
        this.progressPlayed = this.container.querySelector('#progressPlayed');
        this.progressHandle = this.container.querySelector('#progressHandle');
        this.videoTimeDisplay = this.container.querySelector('#videoTimeDisplay');
        this.timePreview = this.container.querySelector('#timePreview');
        this.realTimeClock = document.getElementById('realTimeClock');
        this.speedControl = this.container.querySelector('#speedControl');
        this.speedBtn = this.container.querySelector('#speedBtn');
        this.speedOptions = this.container.querySelector('.speed-options');
        
        // Speed graph elements
        this.speedGraphContainer = this.container.querySelector('#speedGraphContainer');
        this.speedGraphCanvas = this.container.querySelector('#speedGraphCanvas');
        
        // Clip elements
        this.clipBtn = this.container.querySelector('#clipBtn');
        this.confirmClipBtn = this.container.querySelector('#confirmClipBtn');
        this.clipSelection = this.container.querySelector('#clipSelection');
        this.clipStartHandle = this.container.querySelector('#clipStartHandle');
        this.clipEndHandle = this.container.querySelector('#clipEndHandle');
        this.viewSwitcher = this.container.querySelector('#viewSwitcher');
    }

    bindEvents() {
        if (this.viewSwitcher) {
            this.viewSwitcher.addEventListener('click', (e) => {
                const btn = e.target.closest('.view-btn');
                if (btn && btn.dataset.view) {
                    this.viewer.switchCamera(btn.dataset.view);
                }
            });
        }

        if (this.playPauseBtn) this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

        if (this.progressContainer) {
            this.progressContainer.addEventListener('mousedown', (e) => this.startDrag(e));
            document.addEventListener('mousemove', (e) => this.onDrag(e));
            document.addEventListener('mouseup', (e) => this.stopDrag(e));

            this.progressContainer.addEventListener('mousemove', (e) => {
                if (!this.isDragging && !this.isDraggingClipStart && !this.isDraggingClipEnd) this.showTimePreview(e);
            });
            this.progressContainer.addEventListener('mouseleave', () => {
                if (!this.isDragging && !this.isDraggingClipStart && !this.isDraggingClipEnd) this.hideTimePreview();
            });
        }
        
        // Clip handle events
        if (this.clipStartHandle) {
            this.clipStartHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.isDraggingClipStart = true;
                this.wasPlaying = this.multiCameraPlayer.isPlaying;
                if (this.wasPlaying) this.multiCameraPlayer.pauseAll();
            });
        }
        
        if (this.clipEndHandle) {
            this.clipEndHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.isDraggingClipEnd = true;
                this.wasPlaying = this.multiCameraPlayer.isPlaying;
                if (this.wasPlaying) this.multiCameraPlayer.pauseAll();
            });
        }
        
        // Clip button
        if (this.clipBtn) {
            this.clipBtn.addEventListener('click', () => {
                if (!this.clipModeActive) {
                    // Enter clip mode
                    this.toggleClipMode();
                } else {
                    // Exit clip mode
                    this.toggleClipMode();
                }
            });
        }
        
        // Confirm clip button
        if (this.confirmClipBtn) {
            this.confirmClipBtn.addEventListener('click', () => {
                this.viewer.showClipModal();
            });
        }

        if (this.player) {
            this.player.addEventListener('timeupdate', () => {
                if (!this.isDragging) this.updateProgress();
            });
            this.player.addEventListener('play', () => this.updatePlayState(true));
            this.player.addEventListener('pause', () => this.updatePlayState(false));
        }

        if (this.container) {
            const resetTimer = () => this.resetHideTimer();
            this.container.addEventListener('mousemove', resetTimer);
            this.container.addEventListener('click', resetTimer);
            this.container.addEventListener('touchstart', resetTimer);
            this.container.addEventListener('mouseenter', resetTimer);
            this.container.addEventListener('mouseleave', () => {
                // If playing, hide immediately on mouse leave (standard behavior)
                // But keep showing if paused or interacting
                if (this.isPlaying && !this.isDragging && !this.speedControl?.classList.contains('active')) {
                    this.hideControls();
                }
            });
        }

        if (this.speedBtn) {
            this.speedBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.speedControl.classList.toggle('active');
            });
        }

        if (this.speedOptions) {
            this.speedOptions.addEventListener('click', (e) => {
                e.stopPropagation();
                if (e.target.dataset.speed) {
                    this.setSpeed(parseFloat(e.target.dataset.speed));
                    this.speedControl.classList.remove('active');
                }
            });
        }

        document.addEventListener('click', (e) => {
            if (this.speedControl && this.speedControl.classList.contains('active') && !this.speedControl.contains(e.target)) {
                this.speedControl.classList.remove('active');
            }
        });
        
        // Handle resize for speed graph redraw
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (this.lastSpeedGraphData) {
                    this.drawSpeedGraph(this.lastSpeedGraphData.metadata, this.lastSpeedGraphData.durations);
                }
            }, 100);
        });
    }
    
    updateViewSwitcherUI(cameraType) {
        if (!this.viewSwitcher) return;
        this.viewSwitcher.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === cameraType);
        });
    }

    updatePillarButtons(show) {
        if (!this.viewSwitcher) return;
        
        // Always show Pillar Buttons (User Request)
        const pillarBtns = this.viewSwitcher.querySelectorAll('[data-view="left_pillar"], [data-view="right_pillar"]');
        pillarBtns.forEach(btn => {
            btn.style.display = 'flex';
        });

        // Always show 6-Grid Button
        const grid6Btn = this.viewSwitcher.querySelector('[data-view="grid"]');
        if (grid6Btn) {
            grid6Btn.style.display = 'flex';
        }
    }

    toggleClipMode() {
        this.clipModeActive = !this.clipModeActive;
        
        if (this.clipModeActive) {
            // Enter clip mode - pause video first
            if (this.multiCameraPlayer.isPlaying) {
                this.multiCameraPlayer.pauseAll();
                this.updatePlayState(false);
            }
            
            // Initialize selection
            const currentTime = this.continuousPlayer.getCurrentTime();
            const duration = this.totalDuration;
            
            // Set default selection: current time ± 30 seconds (or bounds)
            this.clipStartTime = Math.max(0, currentTime - 30);
            this.clipEndTime = Math.min(duration, currentTime + 30);
            
            this.updateClipSelection();
            this.clipSelection.classList.add('active');
            this.clipStartHandle.classList.add('active');
            this.clipEndHandle.classList.add('active');
            this.clipBtn.style.color = '#007bff';
            
            // Show confirm button, hide clip button
            if (this.confirmClipBtn) {
                this.confirmClipBtn.style.display = 'block';
            }
        } else {
            // Exit clip mode
            this.clipSelection.classList.remove('active');
            this.clipStartHandle.classList.remove('active');
            this.clipEndHandle.classList.remove('active');
            this.clipBtn.style.color = '';
            this.clipStartTime = null;
            this.clipEndTime = null;
            
            // Hide confirm button
            if (this.confirmClipBtn) {
                this.confirmClipBtn.style.display = 'none';
            }
        }
    }
    
    updateClipSelection() {
        if (!this.clipStartTime && this.clipStartTime !== 0) return;
        if (!this.clipEndTime) return;
        
        const startPercent = (this.clipStartTime / this.totalDuration) * 100;
        const endPercent = (this.clipEndTime / this.totalDuration) * 100;
        const widthPercent = endPercent - startPercent;
        
        this.clipSelection.style.left = `${startPercent}%`;
        this.clipSelection.style.width = `${widthPercent}%`;
        
        this.clipStartHandle.style.left = `${startPercent}%`;
        this.clipEndHandle.style.left = `${endPercent}%`;
    }

    setTotalDuration(duration) {
        this.totalDuration = duration || 0;
        this.updateProgress();
    }

    async togglePlayPause() {
        if (!this.multiCameraPlayer.isPlaying) await this.multiCameraPlayer.playAll();
        else this.multiCameraPlayer.pauseAll();
    }

    startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        this.wasPlaying = this.multiCameraPlayer.isPlaying;
        if (this.wasPlaying) {
            this.multiCameraPlayer.pauseAll();
        }
        this.timePreview.classList.remove('show');
    }

    onDrag(e) {
        if (this.isDraggingClipStart) {
            e.preventDefault();
            const rect = this.progressContainer.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const newTime = pos * this.totalDuration;
            
            // Don't let start go past end
            if (newTime < this.clipEndTime) {
                this.clipStartTime = newTime;
                this.updateClipSelection();
            }
            return;
        }
        
        if (this.isDraggingClipEnd) {
            e.preventDefault();
            const rect = this.progressContainer.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const newTime = pos * this.totalDuration;
            
            // Don't let end go before start
            if (newTime > this.clipStartTime) {
                this.clipEndTime = newTime;
                this.updateClipSelection();
            }
            return;
        }
        
        if (!this.isDragging) return;
        e.preventDefault();
        const rect = this.progressContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        
        const currentTime = pos * this.totalDuration;

        this.progressPlayed.style.width = `${pos * 100}%`;
        this.progressHandle.style.left = `${pos * 100}%`;
        this.videoTimeDisplay.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(this.totalDuration)}`;
    }

    async stopDrag(e) {
        if (this.isDraggingClipStart || this.isDraggingClipEnd) {
            this.isDraggingClipStart = false;
            this.isDraggingClipEnd = false;
            if (this.wasPlaying) {
                await this.multiCameraPlayer.playAll();
            }
            return;
        }
        
        if (!this.isDragging) return;
        this.isDragging = false;

        const rect = this.progressContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

        if (this.totalDuration > 0) {
            const targetTime = pos * this.totalDuration;
            
            this.progressPlayed.style.width = `${pos * 100}%`;
            this.progressHandle.style.left = `${pos * 100}%`;
            this.videoTimeDisplay.textContent = `${this.formatTime(targetTime)} / ${this.formatTime(this.totalDuration)}`;

            await this.continuousPlayer.seekToTime(targetTime);
        }

        if (this.wasPlaying) {
            await this.multiCameraPlayer.playAll();
        }
    }

    showTimePreview(e) {
        const rect = this.progressContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const pos = Math.max(0, Math.min(1, mouseX / rect.width));
        const time = pos * this.totalDuration;
        this.timePreview.style.left = `${pos * 100}%`;
        this.timePreview.querySelector('.time-preview-time').textContent = this.formatTime(time);
        this.timePreview.classList.add('show');
    }

    hideTimePreview() {
        this.timePreview.classList.remove('show');
        this.updateProgress();
    }

    updateProgress() {
        const currentTime = this.continuousPlayer.getCurrentTime();
        if (this.totalDuration > 0) {
            const progress = (currentTime / this.totalDuration) * 100;
            this.progressPlayed.style.width = `${progress}%`;
            this.progressHandle.style.left = `${progress}%`;
        }
        this.updateTimeDisplay();
        this.updateRealTimeClock();
    }

    setEventStartTime(startTime) {
        this.currentEventStartTime = startTime ? this.parseTimestamp(startTime) : null;
        this.updateRealTimeClock();
    }

    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }

    updateRealTimeClock() {
        if (!this.realTimeClock) return;

        const currentEvent = this.continuousPlayer.currentEvent;
        if (!currentEvent) {
            this.realTimeClock.classList.remove('visible');
            return;
        }
        
        // Show the clock when there's an event
        this.realTimeClock.classList.add('visible');

        try {
            let newTime;
            const activePlayer = this.multiCameraPlayer.players[this.multiCameraPlayer.activeCamera];
            const segmentTime = activePlayer ? activePlayer.currentTime : 0;

            if (currentEvent.eventType === 'RecentClips') {
                const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
                const segment = currentEvent.segments[currentSegmentIndex];
                const activeCameraFile = segment.files[this.multiCameraPlayer.activeCamera];

                if (activeCameraFile && activeCameraFile.name) {
                    const timestampMatch = activeCameraFile.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (timestampMatch) {
                        const segmentStartTime = this.parseTimestamp(timestampMatch[0]);
                        if (segmentStartTime) {
                            newTime = new Date(segmentStartTime.getTime());
                            newTime.setSeconds(newTime.getSeconds() + segmentTime);
                        }
                    }
                }
            } 
            
            // Fallback or default behavior for Sentry/Saved and if RecentClips logic fails
            if (!newTime) {
                if (!this.currentEventStartTime) {
                    this.realTimeClock.classList.remove('visible');
                    return;
                }
                newTime = new Date(this.currentEventStartTime.getTime());
                const totalElapsedTime = this.continuousPlayer.getCurrentTime();
                newTime.setSeconds(newTime.getSeconds() + totalElapsedTime);
            }

            const locale = this.viewer.currentLanguage === 'fr' ? 'fr-FR' : 'en-CA';
            this.realTimeClock.textContent = newTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).replace(/\//g, '-').replace(',', '');

        } catch (e) {
            this.realTimeClock.textContent = 'Error';
            console.error("Error updating real-time clock:", e);
        }
    }

    updatePlayState(playing) {
        this.isPlaying = playing;
        this.multiCameraPlayer.isPlaying = playing;
        this.playPauseIcon.src = playing ? 'assets/icons/pause.svg' : 'assets/icons/play.svg';
        this.playPauseIcon.alt = i18n[this.viewer.currentLanguage][playing ? 'pause' : 'play'];
        
        this.resetHideTimer();

        const revealBtn = this.viewer.dom.revealFileBtn;
        if (revealBtn) {
            revealBtn.disabled = playing || !this.viewer.currentEvent;
        }
        const downloadBtn = this.viewer.dom.downloadFileBtn;
        if (downloadBtn) {
            downloadBtn.disabled = playing || !this.viewer.currentEvent;
        }
        
        // Enable/disable metadata button
        const metadataBtn = this.viewer.dom.metadataSwitchBtn;
        if (metadataBtn) {
            metadataBtn.disabled = !this.viewer.currentEvent;
        }
        
        // Enable/disable metadata detail button
        const metadataDetailBtn = document.getElementById('metaDetailBtn');
        if (metadataDetailBtn) {
            metadataDetailBtn.disabled = !this.viewer.currentEvent;
        }
        
        // Enable/disable export metadata button
        const exportMetadataBtn = document.getElementById('exportMetadataBtn');
        if (exportMetadataBtn) {
            exportMetadataBtn.disabled = !this.viewer.currentEvent;
        }
        
        // Enable/disable clip button
        if (this.clipBtn) {
            this.clipBtn.disabled = !this.viewer.currentEvent;
            this.clipBtn.title = i18n[this.viewer.currentLanguage].clipVideo;
        }
        
        // Update confirm clip button title
        if (this.confirmClipBtn) {
            this.confirmClipBtn.title = i18n[this.viewer.currentLanguage].confirmClip;
        }
    }

    updateTimeDisplay() {
        const current = this.formatTime(this.continuousPlayer.getCurrentTime());
        const total = this.formatTime(this.totalDuration);
        this.videoTimeDisplay.textContent = `${current} / ${total}`;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '--:--';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    showControls() {
        this.overlay.classList.add('show');
        if (this.container) {
            this.container.classList.remove('hide-cursor');
        }
    }

    hideControls() {
        // Don't hide if paused, speed menu is open, or dragging
        if (!this.isPlaying ||
            this.speedControl?.classList.contains('active') || 
            this.isDragging || 
            this.isDraggingClipStart || 
            this.isDraggingClipEnd) {
            return;
        }
        this.overlay.classList.remove('show');
        if (this.container) {
            this.container.classList.add('hide-cursor');
        }
    }
    
    resetHideTimer() {
        this.showControls();
        
        if (this.hideControlsTimer) {
            clearTimeout(this.hideControlsTimer);
            this.hideControlsTimer = null;
        }

        if (this.isPlaying) {
            this.hideControlsTimer = setTimeout(() => {
                this.hideControls();
            }, 3000); // 3 seconds auto-hide
        }
    }

    setSpeed(rate) {
        this.multiCameraPlayer.setPlaybackRate(rate);
        this.speedBtn.textContent = `${rate.toFixed(1)}x`;
        
        this.speedOptions.querySelectorAll('div').forEach(div => {
            div.classList.remove('active');
        });
        const activeOption = this.speedOptions.querySelector(`[data-speed="${rate.toFixed(1)}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    addEventMarkers(event) {
        if (!this.progressContainer) return;
        // Clear previous markers
        this.progressContainer.querySelectorAll('.event-marker').forEach(m => m.remove());

        if (!event.eventTimestamp || !event.startTime || !this.totalDuration) {
            return;
        }

        try {
            const eventTime = new Date(event.eventTimestamp);
            const videoStartTime = this.parseTimestamp(event.startTime);
            
            const timeOffset = (eventTime.getTime() - videoStartTime.getTime()) / 1000;

            if (timeOffset >= 0 && timeOffset <= this.totalDuration) {
                const positionPercent = (timeOffset / this.totalDuration) * 100;
                
                const marker = document.createElement('div');
                marker.className = 'event-marker';
                marker.style.left = `${positionPercent}%`;
                marker.title = `Event: ${eventTime.toLocaleTimeString()}`;
                this.progressContainer.appendChild(marker);
            }
        } catch (e) {
            console.error("Error creating event marker:", e);
        }
    }
    
    /**
     * Draw speed graph based on metadata for the entire event
     * @param {Array} allSegmentsMetadata - Array of metadata arrays for each segment
     * @param {Array} segmentDurations - Duration of each segment
     */
    drawSpeedGraph(allSegmentsMetadata, segmentDurations) {
        if (!this.speedGraphCanvas || !this.speedGraphContainer) return;
        
        // Store data for resize redraw
        this.lastSpeedGraphData = { metadata: allSegmentsMetadata, durations: segmentDurations };
        
        if (!allSegmentsMetadata || allSegmentsMetadata.length === 0) {
            this.speedGraphContainer.classList.remove('visible');
            return;
        }
        
        const canvas = this.speedGraphCanvas;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size for high DPI
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        
        const width = rect.width;
        const height = rect.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Collect all speed data with normalized time
        const speedData = [];
        let totalDuration = 0;
        
        for (let i = 0; i < allSegmentsMetadata.length; i++) {
            const segmentMeta = allSegmentsMetadata[i];
            const segmentDuration = segmentDurations[i] || 60;
            const segmentStartTime = totalDuration;
            
            if (segmentMeta && segmentMeta.length > 0) {
                for (const item of segmentMeta) {
                    const speedKmh = (item.data?.vehicleSpeedMps || 0) * 3.6;
                    const timeInEvent = segmentStartTime + (item.time || 0);
                    speedData.push({ time: timeInEvent, speed: speedKmh });
                }
            }
            totalDuration += segmentDuration;
        }
        
        if (speedData.length < 2 || totalDuration === 0) {
            this.speedGraphContainer.classList.remove('visible');
            return;
        }
        
        // Sort by time
        speedData.sort((a, b) => a.time - b.time);
        
        // Find max speed for scaling
        const maxSpeed = Math.max(...speedData.map(d => d.speed), 1);
        const padding = { top: 2, bottom: 4 };
        const graphHeight = height - padding.top - padding.bottom;
        
        // Create gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(66, 165, 245, 0.5)');
        gradient.addColorStop(1, 'rgba(66, 165, 245, 0.05)');
        
        // Draw filled area
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let i = 0; i < speedData.length; i++) {
            const x = (speedData[i].time / totalDuration) * width;
            const y = height - padding.bottom - (speedData[i].speed / maxSpeed) * graphHeight;
            
            if (i === 0) {
                ctx.lineTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        // Close the path
        const lastX = (speedData[speedData.length - 1].time / totalDuration) * width;
        ctx.lineTo(lastX, height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw the line on top
        ctx.beginPath();
        for (let i = 0; i < speedData.length; i++) {
            const x = (speedData[i].time / totalDuration) * width;
            const y = height - padding.bottom - (speedData[i].speed / maxSpeed) * graphHeight;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.strokeStyle = 'rgba(66, 165, 245, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        this.speedGraphContainer.classList.add('visible');
    }
    
    clearSpeedGraph() {
        if (!this.speedGraphCanvas || !this.speedGraphContainer) return;
        const ctx = this.speedGraphCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.speedGraphCanvas.width, this.speedGraphCanvas.height);
        this.speedGraphContainer.classList.remove('visible');
        this.lastSpeedGraphData = null;
    }
}

// WebM Duration Fixer
// webm files produced by MediaRecorder lack correct duration metadata
// This class repairs the duration by parsing and patching the EBML structure
class WebmDurationFixer {
    constructor() {
        // EBML Element IDs
        this.EBML_ID = 0x1A45DFA3;
        this.SEGMENT_ID = 0x18538067;
        this.INFO_ID = 0x1549A966;
        this.DURATION_ID = 0x4489;
        this.TIMECODE_SCALE_ID = 0x2AD7B1;
        this.CLUSTER_ID = 0x1F43B675;
        this.TIMECODE_ID = 0xE7;
    }

    async fixDuration(blob, durationMs) {
        console.log('[WebmFixer] Starting duration fix, blob size:', blob.size, 'duration:', durationMs, 'ms');
        
        try {
            const buffer = await blob.arrayBuffer();
            const view = new DataView(buffer);
            
            // Locate the Segment and Info elements
            const segmentInfo = this.findElement(view, 0, this.SEGMENT_ID);
            if (!segmentInfo) {
                console.warn('[WebmFixer] Segment not found, returning original blob');
                return blob;
            }
            
            const infoInfo = this.findElement(view, segmentInfo.dataStart, this.INFO_ID);
            if (!infoInfo) {
                console.warn('[WebmFixer] Info not found, returning original blob');
                return blob;
            }
            
            // Find TimecodeScale (default 1000000 ns = 1 ms)
            let timecodeScale = 1000000;
            const timecodeScaleInfo = this.findElement(view, infoInfo.dataStart, this.TIMECODE_SCALE_ID, infoInfo.dataStart + infoInfo.dataSize);
            if (timecodeScaleInfo) {
                timecodeScale = this.readUint(view, timecodeScaleInfo.dataStart, timecodeScaleInfo.dataSize);
            }
            
            // With no duration supplied, derive it from the last Cluster's Timecode
            if (!durationMs || durationMs <= 0) {
                durationMs = this.calculateDurationFromClusters(view, segmentInfo.dataStart);
            }
            
            if (!durationMs || durationMs <= 0) {
                console.warn('[WebmFixer] Could not determine duration, returning original blob');
                return blob;
            }
            
            // Convert milliseconds to WebM time units
            const durationWebm = (durationMs * 1000000) / timecodeScale;
            
            // Look for an existing Duration element
            const durationInfo = this.findElement(view, infoInfo.dataStart, this.DURATION_ID, infoInfo.dataStart + infoInfo.dataSize);
            
            if (durationInfo) {
                // Duration already present - patch it in place
                console.log('[WebmFixer] Duration element found, modifying in place');
                const newBuffer = buffer.slice(0);
                const newView = new DataView(newBuffer);
                this.writeFloat64(newView, durationInfo.dataStart, durationWebm);
                const fixedBlob = new Blob([newBuffer], { type: 'video/webm' });
                console.log('[WebmFixer] Duration fixed successfully');
                return fixedBlob;
            } else {
                // No Duration element - insert one
                console.log('[WebmFixer] Duration element not found, inserting new element');
                return this.insertDurationElement(buffer, infoInfo, durationWebm);
            }
        } catch (error) {
            console.error('[WebmFixer] Error fixing duration:', error);
            return blob;
        }
    }
    
    // Compute total duration from the Cluster Timecodes
    calculateDurationFromClusters(view, segmentStart) {
        let maxTimecode = 0;
        let offset = segmentStart;
        const endOffset = view.byteLength;
        
        while (offset < endOffset - 4) {
            const clusterInfo = this.findElement(view, offset, this.CLUSTER_ID, endOffset);
            if (!clusterInfo) break;
            
            // Find the Timecode inside the Cluster
            const timecodeInfo = this.findElement(view, clusterInfo.dataStart, this.TIMECODE_ID, clusterInfo.dataStart + Math.min(clusterInfo.dataSize, 100));
            if (timecodeInfo) {
                const timecode = this.readUint(view, timecodeInfo.dataStart, timecodeInfo.dataSize);
                if (timecode > maxTimecode) {
                    maxTimecode = timecode;
                }
            }
            
            offset = clusterInfo.dataStart + clusterInfo.dataSize;
        }
        
        // Add some slack (roughly the length of the last cluster)
        return maxTimecode > 0 ? maxTimecode + 1000 : 0;
    }
    
    // Insert the Duration element into Info
    insertDurationElement(buffer, infoInfo, durationWebm) {
        // Duration element: ID (2 bytes) + Size (1 byte) + Float64 (8 bytes) = 11 bytes
        const durationElementSize = 11;
        const durationElement = new Uint8Array(durationElementSize);
        const durationView = new DataView(durationElement.buffer);
        
        // Write the Duration ID (0x4489)
        durationElement[0] = 0x44;
        durationElement[1] = 0x89;
        // Write Size (8 bytes for float64)
        durationElement[2] = 0x88; // VINT for 8
        // Write the Float64 value
        durationView.setFloat64(3, durationWebm, false);
        
        // Allocate the new buffer
        const insertPosition = infoInfo.dataStart;
        const newBuffer = new Uint8Array(buffer.byteLength + durationElementSize);
        
        // Copy everything before the insertion point
        newBuffer.set(new Uint8Array(buffer, 0, insertPosition), 0);
        // Insert the Duration element
        newBuffer.set(durationElement, insertPosition);
        // Copy everything after the insertion point
        newBuffer.set(new Uint8Array(buffer, insertPosition), insertPosition + durationElementSize);
        
        // Update the size of the Info element
        this.updateElementSize(newBuffer, infoInfo.sizeStart, infoInfo.sizeLength, infoInfo.dataSize + durationElementSize);
        
        const fixedBlob = new Blob([newBuffer], { type: 'video/webm' });
        console.log('[WebmFixer] Duration element inserted, new size:', fixedBlob.size);
        return fixedBlob;
    }
    
    // Update an element size (VINT encoded)
    updateElementSize(buffer, sizeStart, sizeLength, newSize) {
        // Simple implementation: only fixed-length size updates are supported
        const view = new DataView(buffer.buffer);
        if (sizeLength === 1) {
            buffer[sizeStart] = 0x80 | newSize;
        } else if (sizeLength === 2) {
            buffer[sizeStart] = 0x40 | (newSize >> 8);
            buffer[sizeStart + 1] = newSize & 0xFF;
        } else if (sizeLength === 3) {
            buffer[sizeStart] = 0x20 | (newSize >> 16);
            buffer[sizeStart + 1] = (newSize >> 8) & 0xFF;
            buffer[sizeStart + 2] = newSize & 0xFF;
        } else if (sizeLength === 4) {
            buffer[sizeStart] = 0x10 | (newSize >> 24);
            buffer[sizeStart + 1] = (newSize >> 16) & 0xFF;
            buffer[sizeStart + 2] = (newSize >> 8) & 0xFF;
            buffer[sizeStart + 3] = newSize & 0xFF;
        }
    }
    
    // Find an EBML element
    findElement(view, startOffset, targetId, endOffset) {
        endOffset = endOffset || view.byteLength;
        let offset = startOffset;
        
        while (offset < endOffset - 4) {
            const { id, idLength } = this.readVintId(view, offset);
            if (idLength === 0) break;
            
            const sizeStart = offset + idLength;
            const { value: size, length: sizeLength } = this.readVint(view, sizeStart);
            if (sizeLength === 0) break;
            
            const dataStart = sizeStart + sizeLength;
            
            if (id === targetId) {
                return {
                    offset,
                    idLength,
                    sizeStart,
                    sizeLength,
                    dataStart,
                    dataSize: size
                };
            }
            
            // For container elements (Segment, Info) do not skip the contents
            if (id === this.SEGMENT_ID || id === this.INFO_ID) {
                offset = dataStart;
            } else {
                offset = dataStart + size;
            }
        }
        
        return null;
    }
    
    // Read a VINT ID
    readVintId(view, offset) {
        if (offset >= view.byteLength) return { id: 0, idLength: 0 };
        
        const first = view.getUint8(offset);
        let idLength = 1;
        let id = first;
        
        if (first >= 0x80) {
            idLength = 1;
        } else if (first >= 0x40) {
            idLength = 2;
        } else if (first >= 0x20) {
            idLength = 3;
        } else if (first >= 0x10) {
            idLength = 4;
        } else {
            return { id: 0, idLength: 0 };
        }
        
        for (let i = 1; i < idLength; i++) {
            id = (id << 8) | view.getUint8(offset + i);
        }
        
        return { id, idLength };
    }
    
    // Read a VINT size
    readVint(view, offset) {
        if (offset >= view.byteLength) return { value: 0, length: 0 };
        
        const first = view.getUint8(offset);
        let length = 1;
        let value = first;
        
        if (first >= 0x80) {
            length = 1;
            value = first & 0x7F;
        } else if (first >= 0x40) {
            length = 2;
            value = first & 0x3F;
        } else if (first >= 0x20) {
            length = 3;
            value = first & 0x1F;
        } else if (first >= 0x10) {
            length = 4;
            value = first & 0x0F;
        } else if (first >= 0x08) {
            length = 5;
            value = first & 0x07;
        } else if (first >= 0x04) {
            length = 6;
            value = first & 0x03;
        } else if (first >= 0x02) {
            length = 7;
            value = first & 0x01;
        } else if (first >= 0x01) {
            length = 8;
            value = 0;
        } else {
            return { value: 0, length: 0 };
        }
        
        for (let i = 1; i < length; i++) {
            value = (value << 8) | view.getUint8(offset + i);
        }
        
        return { value, length };
    }
    
    // Read an unsigned integer
    readUint(view, offset, length) {
        let value = 0;
        for (let i = 0; i < length; i++) {
            value = (value << 8) | view.getUint8(offset + i);
        }
        return value;
    }
    
    // Write a Float64
    writeFloat64(view, offset, value) {
        view.setFloat64(offset, value, false); // big-endian
    }
}

// Global WebM Duration Fixer instance (singleton)
const webmDurationFixer = new WebmDurationFixer();

// Video Clip Processor using Canvas API
class VideoClipProcessor {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.mediaRecorder = null;
        this.recordingStartTime = null;
        this.ffmpegFixerLoaded = false;
        this.ffmpeg = null;
        // SVG icon cache for metadata overlay
        this.metadataIcons = null;
        this.iconsLoaded = false;
        this.ffmpegChild = null;
        this.isCancelled = false;
    }

    cancelExport() {
        console.warn('[VideoClipProcessor] Cancelling export...');
        this.isCancelled = true;
        if (this.ffmpegChild) {
            try {
                this.ffmpegChild.kill();
                console.log('[VideoClipProcessor] FFmpeg process killed');
            } catch (e) {
                console.error('[VideoClipProcessor] Failed to kill FFmpeg process:', e);
            }
            this.ffmpegChild = null;
        }
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            try {
                this.mediaRecorder.stop();
            } catch (e) {}
        }
    }

    /**
     * Create SVG icon as Image object
     * @param {string} svgContent - SVG markup string
     * @param {number} size - Icon size in pixels
     * @returns {Promise<HTMLImageElement>}
     */
    createSvgIcon(svgContent, size = 24) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            img.onload = () => {
                URL.revokeObjectURL(url);
                resolve(img);
            };
            img.onerror = (e) => {
                URL.revokeObjectURL(url);
                reject(e);
            };
            img.src = url;
        });
    }

    /**
     * Load all metadata icons for video export
     */
    async loadMetadataIcons() {
        if (this.iconsLoaded && this.metadataIcons) {
            return this.metadataIcons;
        }

        const iconSize = 24;
        
        // SVG definitions for each icon
        const svgDefs = {
            // Left blinker arrow (green when active)
            blinkerLeft: (active) => `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${iconSize}" height="${iconSize}">
                    <path d="M20 8 L6 24 L20 40 L20 30 L42 30 L42 18 L20 18 Z" 
                          fill="${active ? '#52c41a' : 'rgba(255,255,255,0.3)'}" 
                          stroke="${active ? '#52c41a' : 'rgba(255,255,255,0.5)'}" 
                          stroke-width="2" stroke-linejoin="round"/>
                </svg>`,
            // Right blinker arrow (green when active)
            blinkerRight: (active) => `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${iconSize}" height="${iconSize}">
                    <path d="M28 8 L42 24 L28 40 L28 30 L6 30 L6 18 L28 18 Z" 
                          fill="${active ? '#52c41a' : 'rgba(255,255,255,0.3)'}" 
                          stroke="${active ? '#52c41a' : 'rgba(255,255,255,0.5)'}" 
                          stroke-width="2" stroke-linejoin="round"/>
                </svg>`,
            // Brake icon (brake pedal - red when active)
            brake: (active) => `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="${iconSize}" height="${iconSize}">
                    <path d="M821.394 861.482H200.242c-23.709 0-44.013-20.191-45.124-44.975 0 0-30.555-129.896-30.044-166.228 0.325-23.102 15.23-164.3 15.23-164.3 2.449-27.739 18.019-48.258 42.686-48.258h646.233c24.667 0 44.357 21.769 43.759 48.258l14.579 163.622-22.043 166.906c-0.56 24.784-20.414 44.975-44.124 44.975z m24.716-358.364l0.292-10.498c0.23-8.275-6.452-15.059-14.85-15.059H186.497c-8.397 0-14.828 6.784-14.291 15.059l0.681 10.498c0.534 8.232 7.802 14.954 16.153 14.954h641.472c8.35 0 15.37-6.722 15.598-14.954z m8.739 81.304l0.296-10.264c0.233-8.091-6.628-14.724-15.248-14.724H177.735c-8.62 0-15.226 6.633-14.681 14.724l0.691 10.264c0.542 8.049 7.999 14.622 16.571 14.622H838.84c8.574 0 15.777-6.572 16.009-14.622z m6.172 79.506l0.298-10.038c0.235-7.912-6.747-14.399-15.516-14.399H172.234c-8.769 0-15.494 6.487-14.945 14.399l0.695 10.038c0.545 7.872 8.126 14.3 16.847 14.3h669.91c8.721 0 16.047-6.428 16.28-14.3z m-14.901 77.765l0.282-9.819c0.222-7.74-6.466-14.085-14.863-14.085H186.526c-8.397 0-14.841 6.345-14.322 14.085l0.659 9.819c0.517 7.701 7.772 13.989 16.123 13.989h641.548c8.351 0 15.365-6.288 15.586-13.989z m-8.749 76.081l0.267-9.608c0.21-7.573-6.189-13.781-14.222-13.781H206.385c-8.033 0-14.202 6.208-13.711 13.781l0.623 9.608c0.489 7.535 7.425 13.688 15.415 13.688h613.751c7.99 0.001 14.698-6.152 14.908-13.688z m1.869-378.856l36.038-94.167 21.623-119.775H785.183L752.749 356.56l-118.926 82.358H839.24z" fill="${active ? '#ff4d4f' : 'rgba(255,255,255,0.3)'}"/>
                </svg>`,
            // Accelerator/throttle icon (green fill based on percentage)
            accelerator: (percent) => {
                const fillHeight = (percent / 100) * 20;
                const yPos = 26 - fillHeight;
                const color = percent > 0 ? '#73d13d' : 'rgba(255,255,255,0.4)';
                return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${iconSize}" height="${iconSize}">
                    <rect x="8" y="4" width="16" height="24" rx="3" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
                    <path d="M18 8 L13 16 L16 16 L14 24 L19 15 L16 15 L18 8 Z" fill="${color}"/>
                    ${percent > 0 ? `<rect x="10" y="${yPos}" width="12" height="${fillHeight}" rx="2" fill="#73d13d" opacity="0.9"/>` : ''}
                </svg>`;
            },
            // Autopilot/steering wheel icon (blue when active)
            autopilot: (active) => `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${iconSize}" height="${iconSize}">
                    <circle cx="32" cy="32" r="26" fill="none" stroke="${active ? '#1890ff' : 'rgba(255,255,255,0.6)'}" stroke-width="4"/>
                    <circle cx="32" cy="32" r="8" fill="${active ? '#1890ff' : 'rgba(255,255,255,0.6)'}"/>
                    <rect x="6" y="29" width="17" height="6" rx="2" fill="${active ? '#1890ff' : 'rgba(255,255,255,0.6)'}"/>
                    <rect x="41" y="29" width="17" height="6" rx="2" fill="${active ? '#1890ff' : 'rgba(255,255,255,0.6)'}"/>
                    <rect x="29" y="41" width="6" height="17" rx="2" fill="${active ? '#1890ff' : 'rgba(255,255,255,0.6)'}"/>
                </svg>`
        };

        // Pre-generate common icon states
        this.metadataIcons = {
            blinkerLeftActive: await this.createSvgIcon(svgDefs.blinkerLeft(true), iconSize),
            blinkerLeftInactive: await this.createSvgIcon(svgDefs.blinkerLeft(false), iconSize),
            blinkerRightActive: await this.createSvgIcon(svgDefs.blinkerRight(true), iconSize),
            blinkerRightInactive: await this.createSvgIcon(svgDefs.blinkerRight(false), iconSize),
            brakeActive: await this.createSvgIcon(svgDefs.brake(true), iconSize),
            brakeInactive: await this.createSvgIcon(svgDefs.brake(false), iconSize),
            autopilotActive: await this.createSvgIcon(svgDefs.autopilot(true), iconSize),
            autopilotInactive: await this.createSvgIcon(svgDefs.autopilot(false), iconSize),
            // Generate accelerator icons for 0%, 25%, 50%, 75%, 100%
            accel0: await this.createSvgIcon(svgDefs.accelerator(0), iconSize),
            accel25: await this.createSvgIcon(svgDefs.accelerator(25), iconSize),
            accel50: await this.createSvgIcon(svgDefs.accelerator(50), iconSize),
            accel75: await this.createSvgIcon(svgDefs.accelerator(75), iconSize),
            accel100: await this.createSvgIcon(svgDefs.accelerator(100), iconSize),
            iconSize
        };

        this.iconsLoaded = true;
        return this.metadataIcons;
    }

    /**
     * Get accelerator icon based on percentage
     */
    getAcceleratorIcon(percent) {
        if (!this.metadataIcons) return null;
        if (percent <= 0) return this.metadataIcons.accel0;
        if (percent <= 25) return this.metadataIcons.accel25;
        if (percent <= 50) return this.metadataIcons.accel50;
        if (percent <= 75) return this.metadataIcons.accel75;
        return this.metadataIcons.accel100;
    }

    formatBytes(bytes) {
        if (typeof bytes !== 'number') return 'n/a';
        const MB = 1024 * 1024;
        if (bytes < MB) return `${bytes.toFixed(0)} B`;
        return `${(bytes / MB).toFixed(2)} MB`;
    }

    logMemory(label, extra = {}) {
        try {
            const mem = performance?.memory;
            const payload = {
                ...extra,
            };
            if (mem) {
                payload.usedJSHeapSize = this.formatBytes(mem.usedJSHeapSize);
                payload.totalJSHeapSize = this.formatBytes(mem.totalJSHeapSize);
                payload.jsHeapSizeLimit = this.formatBytes(mem.jsHeapSizeLimit);
            }
            console.log(`[Mem][Grid] ${label}`, payload);
        } catch (err) {
            console.warn('logMemory failed', err);
        }
    }
    
    // Clean up resources to prevent memory leaks
    cleanup() {
        console.log('[VideoClipProcessor] Cleaning up resources...');

        
        // Clear canvas
        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        // Reset canvas size to minimal to free GPU memory
        if (this.canvas) {
            this.canvas.width = 1;
            this.canvas.height = 1;
            this.canvas = null;
        }
        this.ctx = null;
        
        // Clear media recorder
        if (this.mediaRecorder) {
            if (this.mediaRecorder.state !== 'inactive') {
                try {
                    this.mediaRecorder.stop();
                } catch (e) {
                    // Ignore errors when stopping
                }
            }
            this.mediaRecorder = null;
        }
        
        this.recordingStartTime = null;
        
        console.log('[VideoClipProcessor] Cleanup completed');
    }


    // IndexedDB cache for FFmpeg WASM files
    static FFMPEG_CACHE_DB = 'FFmpegWASMCache';
    static FFMPEG_CACHE_STORE = 'files';
    static FFMPEG_CACHE_VERSION = '0.12.6'; // Update when upgrading FFmpeg version
    
    async openCacheDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(VideoClipProcessor.FFMPEG_CACHE_DB, 1);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(VideoClipProcessor.FFMPEG_CACHE_STORE)) {
                    db.createObjectStore(VideoClipProcessor.FFMPEG_CACHE_STORE, { keyPath: 'url' });
                }
            };
        });
    }
    
    async getCachedFile(db, url) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([VideoClipProcessor.FFMPEG_CACHE_STORE], 'readonly');
            const store = transaction.objectStore(VideoClipProcessor.FFMPEG_CACHE_STORE);
            const request = store.get(url);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }
    
    async setCachedFile(db, url, data, mimeType) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([VideoClipProcessor.FFMPEG_CACHE_STORE], 'readwrite');
            const store = transaction.objectStore(VideoClipProcessor.FFMPEG_CACHE_STORE);
            const request = store.put({ 
                url, 
                data, 
                mimeType, 
                version: VideoClipProcessor.FFMPEG_CACHE_VERSION,
                timestamp: Date.now() 
            });
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }
    
    async toBlobURLWithCache(url, mimeType, progressCallback) {
        try {
            const db = await this.openCacheDB();
            const cached = await this.getCachedFile(db, url);
            
            // Check if cached and version matches
            if (cached && cached.version === VideoClipProcessor.FFMPEG_CACHE_VERSION && cached.data) {
                console.log(`[FFmpeg] Loading from cache: ${url.split('/').pop()}`);
                const blob = new Blob([cached.data], { type: mimeType });
                db.close();
                return URL.createObjectURL(blob);
            }
            
            // Download and cache
            console.log(`[FFmpeg] Downloading: ${url.split('/').pop()}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            const data = new Uint8Array(arrayBuffer);
            
            // Save to cache
            try {
                await this.setCachedFile(db, url, data, mimeType);
                console.log(`[FFmpeg] Cached: ${url.split('/').pop()}`);
            } catch (cacheError) {
                console.warn('[FFmpeg] Failed to cache file:', cacheError);
            }
            
            db.close();
            return URL.createObjectURL(new Blob([arrayBuffer], { type: mimeType }));
        } catch (error) {
            // Fallback to direct download without caching
            console.warn('[FFmpeg] Cache failed, downloading directly:', error);
            const response = await fetch(url);
            const blob = await response.blob();
            return URL.createObjectURL(new Blob([await blob.arrayBuffer()], { type: mimeType }));
        }
    }

    async loadFFmpeg(progressCallback) {
        if (this.ffmpeg && this.ffmpegLoaded) return this.ffmpeg;
        
        // Dynamically load FFmpeg WASM library if not already loaded
        let FFmpegLib = window.FFmpegWASM || window.FFmpeg;
        
        if (!FFmpegLib) {
            progressCallback?.('Loading FFmpeg library...');
            console.log('[FFmpeg] Dynamically loading FFmpeg WASM library...');
            
            try {
                // Try ESM import first - much better for cross-origin and avoids UMD chunk issues
                // Use version 0.12.6 to match core
                const module = await import('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/+esm');
                FFmpegLib = module;
                console.log('[FFmpeg] FFmpeg library loaded via ESM');
            } catch (esmError) {
                console.warn('[FFmpeg] ESM import failed, falling back to UMD script tag:', esmError);
                // Fallback to the UMD script tag if ESM fails
                await new Promise((resolve, reject) => {
                    const script = document.createElement('script');
                    // Use 0.12.6 for better compatibility with core 0.12.6
                    script.src = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.min.js';
                    script.onload = resolve;
                    script.onerror = () => reject(new Error('Failed to load FFmpeg library via script tag'));
                    document.head.appendChild(script);
                });
                FFmpegLib = window.FFmpegWASM || window.FFmpeg;
            }

            if (!FFmpegLib) {
                throw new Error('FFmpeg WASM library failed to initialize');
            }
        }

        const { FFmpeg } = FFmpegLib;
        
        if (!this.ffmpeg) {
            this.ffmpeg = new FFmpeg();
            
            this.ffmpeg.on('log', ({ message }) => {
                console.log('[FFmpeg]', message);
            });
            
            // Use arrow function to capture 'this' and access current progress callback
            this.ffmpeg.on('progress', ({ progress, time }) => {
                 // progress is 0-1
                 if (this.ffmpegProgressCallback) {
                     this.ffmpegProgressCallback(`Encoding... ${(progress * 100).toFixed(0)}%`);
                 }
            });
        }

        // Check if multi-threading is supported (requires COOP/COEP headers)
        const supportsMultiThread = typeof SharedArrayBuffer !== 'undefined';
        const useMultiThread = supportsMultiThread; // Re-enabled with scale optimization
        
        if (useMultiThread) {
            progressCallback?.('Loading FFmpeg multi-threaded core...');
            console.log('[FFmpeg] Loading FFmpeg WASM core (multi-threaded)...');
        } else {
            progressCallback?.('Loading FFmpeg core...');
            console.log('[FFmpeg] Loading FFmpeg WASM core (single-threaded)...');
        }
        
        const startTime = performance.now();
        
        // Load from CDN for web version
        // Use unpkg CDN for ffmpeg core files
        // Must use toBlobURL to convert remote scripts to Blob URLs to bypass CORS Worker restrictions
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        const baseURLMT = 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/umd';
        
        try {
            if (useMultiThread) {
                // Multi-threaded version - faster but requires COOP/COEP headers
                progressCallback?.('Loading FFmpeg core files (from local cache)...');
                const [coreURL, wasmURL, workerURL] = await Promise.all([
                    this.toBlobURLWithCache(`${baseURLMT}/ffmpeg-core.js`, 'text/javascript', progressCallback),
                    this.toBlobURLWithCache(`${baseURLMT}/ffmpeg-core.wasm`, 'application/wasm', progressCallback),
                    this.toBlobURLWithCache(`${baseURLMT}/ffmpeg-core.worker.js`, 'text/javascript', progressCallback),
                ]);
                progressCallback?.('Initializing FFmpeg...');
                await this.ffmpeg.load({ coreURL, wasmURL, workerURL });
                this.ffmpegMultiThread = true;
            } else {
                // Single-threaded version - more stable
                progressCallback?.('Loading FFmpeg core files (from local cache)...');
                const [coreURL, wasmURL] = await Promise.all([
                    this.toBlobURLWithCache(`${baseURL}/ffmpeg-core.js`, 'text/javascript', progressCallback),
                    this.toBlobURLWithCache(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm', progressCallback),
                ]);
                progressCallback?.('Initializing FFmpeg...');
                await this.ffmpeg.load({ coreURL, wasmURL });
                this.ffmpegMultiThread = false;
            }
        } catch (mtError) {
            // If multi-thread fails, fallback to single-thread
            if (useMultiThread) {
                console.warn('[FFmpeg] Multi-thread load failed, falling back to single-thread:', mtError);
                progressCallback?.('Multi-threading unavailable, falling back to single thread...');
                const [coreURL, wasmURL] = await Promise.all([
                    this.toBlobURLWithCache(`${baseURL}/ffmpeg-core.js`, 'text/javascript', progressCallback),
                    this.toBlobURLWithCache(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm', progressCallback),
                ]);
                await this.ffmpeg.load({ coreURL, wasmURL });
                this.ffmpegMultiThread = false;
            } else {
                throw mtError;
            }
        }
        
        this.ffmpegLoaded = true;
        const loadTime = ((performance.now() - startTime) / 1000).toFixed(1);
        console.log(`[FFmpeg] FFmpeg WASM loaded successfully in ${loadTime}s (multi-thread: ${this.ffmpegMultiThread})`);
        return this.ffmpeg;
    }
    
    // Fix WebM metadata using FFmpeg WASM (for streamed files)
    async fixWebmWithFFmpeg(fileHandle, progressCallback) {
        try {
            progressCallback?.('Loading FFmpeg repair module...');
            const ffmpeg = await this.loadFFmpeg(progressCallback);
            
            // Read the file content
            progressCallback?.('Reading video file...');
            const file = await fileHandle.getFile();
            const inputData = new Uint8Array(await file.arrayBuffer());
            
            // Write to FFmpeg virtual filesystem
            await ffmpeg.writeFile('input.webm', inputData);
            
            // Run FFmpeg to remux (copy streams, fix metadata)
            progressCallback?.('Repairing video metadata...');
            await ffmpeg.exec([
                '-i', 'input.webm',
                '-c', 'copy',
                '-y',
                'output.webm'
            ]);
            
            // Read the fixed file
            const outputData = await ffmpeg.readFile('output.webm');
            
            // Clean up FFmpeg virtual filesystem
            try {
                await ffmpeg.deleteFile('input.webm');
                await ffmpeg.deleteFile('output.webm');
            } catch (e) {
                console.warn('[FFmpeg] Cleanup warning:', e);
            }
            
            // Write back to the original file
            progressCallback?.('Saving repaired video...');
            const writable = await fileHandle.createWritable();
            await writable.write(outputData);
            await writable.close();
            
            console.log('[FFmpeg] WebM metadata fixed successfully');
            return true;
        } catch (error) {
            console.error('[FFmpeg] Failed to fix WebM metadata:', error);
            return false;
        }
    }
    
    // Helper function to fetch file as Uint8Array (replaces @ffmpeg/util fetchFile)
    async fetchFileAsUint8Array(file) {
        if (file instanceof File) {
            return new Uint8Array(await file.arrayBuffer());
        } else if (file instanceof Blob) {
            return new Uint8Array(await file.arrayBuffer());
        } else if (typeof file === 'string') {
            // URL or path
            const response = await fetch(file);
            return new Uint8Array(await response.arrayBuffer());
        } else if (file instanceof Uint8Array) {
            return file;
        }
        throw new Error('Unsupported file type');
    }

    async processWithFFmpegWasm(clipSegments, cameras, startTime, endTime, addTimestamp, mergeGrid, eventStartTime, progressCallback, fileHandle = null) {
        // Set the progress callback for FFmpeg events
        this.ffmpegProgressCallback = progressCallback;
        
        const ffmpeg = await this.loadFFmpeg(progressCallback);
        
        // Track all temporary files to ensure cleanup
        const allCreatedFiles = [];
        
        // Prepare writable stream if available
        let writable = null;
        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Create writable stream failed, fallback to memory mode", e);
             }
        }
        
        try {
            // Sort cameras for grid layout consistency
            let sortedCameras = cameras;
            if (mergeGrid) {
                 const order = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
                 sortedCameras = cameras.sort((a, b) => {
                     const idxA = order.indexOf(a);
                     const idxB = order.indexOf(b);
                     return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
                 });
            }

            // Load Font if needed (once)
            let fontFile = null;
            if (addTimestamp) {
                progressCallback?.('Loading fonts...');
                try {
                     const fontUrl = 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf';
                     const fontData = await this.fetchFileAsUint8Array(fontUrl);
                     await ffmpeg.writeFile('font.ttf', fontData);
                     fontFile = 'font.ttf';
                     allCreatedFiles.push('font.ttf');
                } catch (e) {
                     console.warn('Font load failed, timestamp disabled', e);
                     addTimestamp = false;
                }
            }

            // Process each segment sequentially to save memory
            // Use TS (MPEG-TS) for intermediate segments as it's streamable
            const tsBlobs = [];
            
            for (let i = 0; i < clipSegments.length; i++) {
                const seg = clipSegments[i];
                const segmentFiles = []; // Files for this segment only
                
                progressCallback?.(`Processing segment ${i + 1}/${clipSegments.length}...`);
                
                const cameraInputs = {};
                
                // 1. Write input files for this segment
                for (const cam of sortedCameras) {
                    const file = seg.segment.files[cam];
                    if (!file) continue;
                    
                    const filename = `s${i}_${cam}.mp4`;
                    const data = await this.fetchFileAsUint8Array(file);
                    
                    await ffmpeg.writeFile(filename, data);
                    segmentFiles.push(filename);
                    if (!cameraInputs[cam]) cameraInputs[cam] = [];
                    cameraInputs[cam].push(filename);
                    
                    // Allow GC
                    data = null;
                }
                
                // 2. Build filter graph for this segment
                let filterComplex = '';
                let inputIdx = 0;
                const cameraStreamNames = [];
                
                // Calculate timestamp for this segment
                let segmentTimestampStr = '';
                if (addTimestamp) {
                    // Base timestamp from file or fallback
                    const firstCam = sortedCameras[0];
                    const firstFile = seg.segment.files[firstCam];
                    const fileName = firstFile?.name || (firstFile?.path ? firstFile.path.split(/[/\\]/).pop() : null);
                    const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    
                    let segBaseTime;
                    if (fullTimestampMatch) {
                        segBaseTime = this.parseTimestamp(fullTimestampMatch[1]);
                    } else {
                        segBaseTime = this.parseTimestamp(seg.timestamp);
                    }
                    
                    // Add clipStart offset
                    const currentSegTime = new Date(segBaseTime.getTime() + seg.clipStart * 1000);
                    
                    segmentTimestampStr = currentSegTime.toLocaleString('en-CA', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit', second: '2-digit',
                        hour12: false
                    }).replace(/\//g, '-');
                }

                // Build inputs and filters
                for (const cam of sortedCameras) {
                    if (!cameraInputs[cam]) continue;
                    
                    // Since we process one segment, there is only one file per camera here
                    const inputFile = cameraInputs[cam][0];
                    const inputStream = `[${inputIdx}:v]`;
                    inputIdx++;
                    
                    const trimmedStream = `[v_${cam}_trimmed]`;
                    // Use segment-specific clip duration
                    const duration = seg.clipEnd - seg.clipStart;
                    
                    filterComplex += `${inputStream}trim=start=${seg.clipStart}:duration=${duration},setpts=PTS-STARTPTS${trimmedStream};`;
                    cameraStreamNames.push({ name: trimmedStream, cam });
                }
                
                let finalStream = '';
                
                if (mergeGrid && cameraStreamNames.length > 1) {
                    // Grid logic
                    const scaledStreams = [];
                    for (const {name, cam} of cameraStreamNames) {
                        const scaledName = `[v_${cam}_scaled]`;
                        filterComplex += `${name}scale=960:540${scaledName};`;
                        scaledStreams.push(scaledName);
                    }
                    
                    const count = scaledStreams.length;
                    let stackLayout = '';
                    if (count === 4) stackLayout = '0_0|w0_0|0_h0|w0_h0';
                    else if (count === 2) stackLayout = '0_0|w0_0';
                    else if (count === 3) stackLayout = '0_0|w0_0|0_h0';
                    else if (count === 6) stackLayout = '0_0|w0_0|w0+w1_0|0_h0|w0_h0|w0+w1_h0';
                    else stackLayout = '0_0';
                    
                    finalStream = `[v_grid]`;
                    filterComplex += `${scaledStreams.join('')}xstack=inputs=${count}:layout=${stackLayout}${finalStream};`;
                } else {
                    finalStream = cameraStreamNames[0].name;
                }
                
                // Add timestamp
                if (addTimestamp && fontFile) {
                    const stampedStream = `[v_final]`;
                    const escapedTimestamp = segmentTimestampStr.replace(/:/g, '\\:');
                    const drawText = `drawtext=fontfile=${fontFile}:text='${escapedTimestamp}':x=w-text_w-20:y=20:fontsize=48:fontcolor=white:box=1:boxcolor=black@0.5`;
                    
                    filterComplex += `${finalStream}${drawText}${stampedStream}`;
                    finalStream = stampedStream;
                }
                
                if (filterComplex.endsWith(';')) filterComplex = filterComplex.slice(0, -1);
                
                const args = [];
                // Add inputs
                for (const cam of sortedCameras) {
                    if (cameraInputs[cam]) args.push('-i', cameraInputs[cam][0]);
                }
                
                args.push('-filter_complex', filterComplex);
                args.push('-map', finalStream);
                
                // Encoding settings
                // Use MPEG-TS for intermediate segments
                args.push('-c:v', 'libx264', '-preset', 'ultrafast');
                // Cap bitrate to control file size and memory usage (4Mbps is sufficient for dashboard)
                args.push('-b:v', '4000k', '-maxrate', '4000k', '-bufsize', '8000k');
                args.push('-crf', '28'); // Slightly better quality than 32, but bitrate cap will control size
                args.push('-g', '48', '-bf', '0', '-pix_fmt', 'yuv420p');
                args.push('-f', 'mpegts'); // Output as TS
                
                const tempOutName = `temp_out_${i}.ts`;
                args.push(tempOutName);
                
                console.log(`[FFmpeg] Processing segment ${i}`, args.join(' '));
                await ffmpeg.exec(args);
                
                // Read temp file to JS memory
                const segData = await ffmpeg.readFile(tempOutName);
                
                if (writable) {
                     // Streaming write to disk directly
                     progressCallback?.(`Writing to disk (segment ${i + 1})...`);
                     await writable.write(segData);
                } else {
                     // Convert to Blob immediately
                     const segBlob = new Blob([segData.buffer], { type: 'video/mp2t' });
                     tsBlobs.push(segBlob);
                }
                
                // Clean up WASM memory
                await ffmpeg.deleteFile(tempOutName);
                
                // CLEANUP INPUTS IMMEDIATELY
                for (const f of segmentFiles) {
                    await ffmpeg.deleteFile(f);
                }
                
                // Explicitly nullify
                data = null; 
            }
            
            if (writable) {
                 await writable.close();
                 this.ffmpegProgressCallback = null;
                 // Return empty blob to satisfy signature, but with saved: true
                 return new Blob([], { type: 'video/mp2t' });
            }
            
            // 3. Concat all segments (Memory Mode Fallback)
            progressCallback?.('Merging segments...');
            
            try {
                const allTsBlob = new Blob(tsBlobs, { type: 'video/mp2t' });
                
                // Only try to remux if small enough
                const MAX_SAFE_SIZE = 500 * 1024 * 1024; // Lower limit to 500MB
                if (allTsBlob.size > MAX_SAFE_SIZE) {
                    console.warn('[FFmpeg] Total size too large, returning TS file');
                    return allTsBlob;
                }

                const allTsBuffer = await allTsBlob.arrayBuffer();
                const allTsUint8 = new Uint8Array(allTsBuffer);
                
                await ffmpeg.writeFile('all.ts', allTsUint8);
                allCreatedFiles.push('all.ts');
                
                progressCallback?.('Muxing MP4...');
                const args = [
                    '-i', 'all.ts',
                    '-c', 'copy',
                    '-movflags', '+faststart',
                    'output.mp4'
                ];
                
                await ffmpeg.exec(args);
                const finalOutputData = await ffmpeg.readFile('output.mp4');
                allCreatedFiles.push('output.mp4');
                
                const blob = new Blob([finalOutputData.buffer], { type: 'video/mp4' });
                
                // Final cleanup
                for (const f of allCreatedFiles) {
                    try { await ffmpeg.deleteFile(f); } catch {}
                }
                
                this.ffmpegProgressCallback = null;
                return blob;
                
            } catch (remuxError) {
                console.warn('[FFmpeg] MP4 Remux failed, falling back to TS:', remuxError);
                const finalBlob = new Blob(tsBlobs, { type: 'video/mp2t' });
                for (const f of allCreatedFiles) {
                    try { await ffmpeg.deleteFile(f); } catch {}
                }
                this.ffmpegProgressCallback = null;
                return finalBlob; 
            }

        } catch (e) {
            console.error('FFmpeg WASM Error:', e);
            if (writable) {
                 try { await writable.close(); } catch {}
            }
            this.ffmpegProgressCallback = null;
            // Attempt cleanup
            for (const f of allCreatedFiles) {
                try { await ffmpeg.deleteFile(f); } catch {}
            }
            throw new Error('Browser export failed: ' + e.message + "\\nTry Chrome, or switch to the local application mode.");
        }
    }

    initCanvas(width, height) {
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
        }
        this.canvas.width = width;
        this.canvas.height = height;
    }
    
    






    async processClip(segments, cameras, startTime, endTime, addTimestamp, addMetadata, mergeGrid, eventStartTime, progressCallback, language = 'en', fileHandle = null, metadataManager = null) {
        try {
            // Reset cancellation state
            this.isCancelled = false;
            // Store language for use in processing methods
            this.currentLanguage = language;
            this.metadataManager = metadataManager;
            // Calculate which segments are needed
            const clipSegments = this.getSegmentsForTimeRange(segments, startTime, endTime);
            
            if (clipSegments.length === 0) {
                throw new Error('No valid video segments found');
            }

            // Everything runs in the browser: canvas capture when the result can
            // be streamed straight to a file handle, ffmpeg.wasm otherwise.
            if (fileHandle) {
                 progressCallback?.('Using streaming export mode (Canvas)...');
                 
                 // Grid-merge path
                 if (mergeGrid && cameras.length > 1) {
                     const result = await this.createGridVideoFromSegments(
                        clipSegments,
                        cameras,
                        startTime,
                        endTime,
                        addTimestamp,
                        addMetadata,
                        eventStartTime,
                        progressCallback,
                        fileHandle
                    );
                    // result may be a Blob or { saved: true, blob: ... }
                    const blob = result.saved ? result.blob : result;
                    const saved = !!result.saved;
                    return [{ camera: 'grid', blob: blob, saved: saved }];
                 } else {
                     // Single-camera path
                     const results = [];
                     for (const camera of cameras) {
                         const result = await this.processVideoWithTimestamp(
                            clipSegments, 
                            camera, 
                            startTime, 
                            endTime, 
                            addTimestamp,
                            addMetadata,
                            eventStartTime,
                            progressCallback,
                            fileHandle
                        );
                        const blob = result.saved ? result.blob : result;
                        const saved = !!result.saved;
                        results.push({ camera, blob: blob, saved: saved });
                     }
                     return results;
                 }
            }

            // 3. If merging as grid, process all cameras together (Canvas method)
            if (mergeGrid && cameras.length > 1) {
                progressCallback?.('Merging grid video...');
                const gridBlob = await this.createGridVideoFromSegments(
                    clipSegments,
                    cameras,
                    startTime,
                    endTime,
                    addTimestamp,
                    addMetadata,
                    eventStartTime,
                    progressCallback
                );
                return [{ camera: 'grid', blob: gridBlob }];
            }
            
            // 5. Otherwise, process each camera individually (Canvas method - fallback)
            const results = [];
            
            for (const camera of cameras) {
                progressCallback?.(`Processing ${camera} camera...`);
                
                const videoBlob = await this.processVideoWithTimestamp(
                    clipSegments, 
                    camera, 
                    startTime, 
                    endTime, 
                    addTimestamp,
                    addMetadata,
                    eventStartTime,
                    progressCallback
                );
                
                results.push({ camera, blob: videoBlob });
            }
            
            return results;
            
        } catch (error) {
            console.error('Video processing error:', error);
            throw error;
        } finally {
            // Clean up canvas and media recorder resources
            this.cleanup();
        }
    }
    
    
    
    getSegmentsForTimeRange(allSegments, startTime, endTime) {
        const result = [];
        let accumulatedTime = 0;
        
        for (let i = 0; i < allSegments.length; i++) {
            const segment = allSegments[i];
            const segmentDuration = segment.duration || 60; // Default 60s
            const segmentStart = accumulatedTime;
            const segmentEnd = accumulatedTime + segmentDuration;
            
            // Check if this segment overlaps with our clip range
            if (segmentEnd > startTime && segmentStart < endTime) {
                const clipStart = Math.max(0, startTime - segmentStart);
                const clipEnd = Math.min(segmentDuration, endTime - segmentStart);
                
                result.push({
                    segment,
                    segmentIndex: i,
                    clipStart,
                    clipEnd,
                    clipDuration: clipEnd - clipStart,
                    timestamp: segment.timestamp,
                    absoluteStart: segmentStart
                });
            }
            
            accumulatedTime += segmentDuration;
            
            if (accumulatedTime >= endTime) break;
        }
        
        return result;
    }
    
    async processVideoWithTimestamp(clipSegments, camera, totalStartTime, totalEndTime, addTimestamp, addMetadata, eventStartTime, progressCallback, fileHandle = null) {
        if (clipSegments.length === 0) {
            throw new Error('No video segments available');
        }
        
        progressCallback?.(`Processing ${camera} camera (${clipSegments.length} segments)...`);
        
        // Load metadata for all segments if addMetadata is enabled
        let allMetadata = [];
        if (addMetadata && this.metadataManager) {
            progressCallback?.('Loading driving data...');
            allMetadata = await this.loadMetadataForSegments(clipSegments, camera, progressCallback);
            // Load SVG icons for metadata overlay
            await this.loadMetadataIcons();
        }
        
        
        // First pass: get video dimensions from first segment (load and release immediately)
        let canvasWidth = 0;
        let canvasHeight = 0;
        const firstVideoFile = clipSegments[0].segment.files[camera];
        if (firstVideoFile) {
            const tempVideo = document.createElement('video');
            tempVideo.muted = true;
            tempVideo.crossOrigin = 'anonymous';
            tempVideo.src = getFileUrl(firstVideoFile);
            await new Promise((resolve, reject) => {
                tempVideo.onloadedmetadata = resolve;
                tempVideo.onerror = reject;
            });
            canvasWidth = tempVideo.videoWidth;
            canvasHeight = tempVideo.videoHeight;
            // Release immediately
            URL.revokeObjectURL(tempVideo.src);
            tempVideo.src = '';
            tempVideo.load();
        }
        
        // Initialize canvas
        this.initCanvas(canvasWidth, canvasHeight);
        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const clipSegment of clipSegments) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder with fixed framerate
        const stream = this.canvas.captureStream(FPS);
        
        // Try VP9 first, fallback to VP8 if not supported
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond: 3000000 // Reduced to 3 Mbps for lower memory footprint
        });
        
        // Use streaming approach - write chunks to array and periodically clear
        const chunks = [];
        let totalChunkSize = 0;
        let writable = null;
        
        // Write queue system to avoid Promise chain memory leaks
        const writeQueue = [];
        let writeQueueSize = 0;
        let isWriting = false;
        
        const processWriteQueue = async () => {
            if (isWriting) return;
            isWriting = true;
            
            while (writeQueue.length > 0) {
                const blob = writeQueue.shift();
                if (!blob) {
                    continue;
                }
                writeQueueSize -= blob.size || 0;
                try {
                    await writable.write(blob);
                } catch (err) {
                    console.error('Write error:', err);
                }
            }
            
            isWriting = false;
        };
        
        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Writable creation failed", e);
             }
        }
        
        this.mediaRecorder.ondataavailable = (e) => {
            const size = e?.data ? e.data.size : 0;
            if (size > 0) {
                if (writable) {
                    writeQueue.push(e.data);
                    writeQueueSize += size;
                    if (writeQueueSize > 50 * 1024 * 1024) {
                        this.logMemory('writeQueue > 50MB', {
                            writeQueueSize: this.formatBytes(writeQueueSize),
                            totalChunkSize: this.formatBytes(totalChunkSize),
                            chunksBuffered: chunks.length,
                        });
                    }
                    processWriteQueue();
                } else {
                    chunks.push(e.data);
                }
                totalChunkSize += size;
            }
        };

        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = async () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', totalChunkSize);
                if (writable) {
                     await writable.close();
                     // Return result indicating saved
                     resolve({ saved: true, blob: new Blob([], { type: 'video/webm' }) });
                } else {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    console.log('Created blob, size:', blob.size);
                    // Clear chunks array to free memory
                    chunks.length = 0;
                    resolve(blob);
                }
            };
        });
        
        // Start recording - smaller timeslice helps reduce internal buffering
        this.mediaRecorder.start(250);
        const recordingStartTime = performance.now();
        
        // Process segments one at a time (streaming approach to reduce memory)
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < clipSegments.length; i++) {
            const clipSegment = clipSegments[i];
            const videoFile = clipSegment.segment.files[camera];
            
            if (!videoFile) {
                throw new Error(`No video file available for the ${camera} camera in segment ${i + 1}`);
            }
            
            progressCallback?.(`Loading segment ${i + 1}/${clipSegments.length}...`);
            
            // Load video for this segment only
            const video = document.createElement('video');
            video.muted = true;
            video.crossOrigin = 'anonymous';
            
            video.src = getFileUrl(videoFile);
            
            await new Promise((resolve, reject) => {
                video.onloadedmetadata = resolve;
                video.onerror = reject;
            });
            
            // Calculate timestamp for this segment - extract full timestamp from filename
            const fileName = videoFile?.name || (videoFile?.path ? videoFile.path.split(/[/\\]/).pop() : null);
            const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
            
            let segmentTime;
            if (fullTimestampMatch) {
                segmentTime = this.parseTimestamp(fullTimestampMatch[1]);
            } else {
                segmentTime = this.parseTimestamp(clipSegment.timestamp);
            }
            
            const segmentEndTime = clipSegment.clipEnd;
            
            // Adjust clipStart if it exceeds video duration
            const actualClipStart = Math.min(clipSegment.clipStart, video.duration);
            // Adjust clipEnd based on actual video duration
            const actualEndTime = Math.min(segmentEndTime, video.duration);
            
            // Calculate timestamp based on actual clip start
            const segmentStartTimestamp = new Date(segmentTime.getTime() + actualClipStart * 1000);
            
            // Skip this segment if clipStart is already past video duration
            if (actualClipStart >= video.duration) {
                console.warn(`Segment ${i + 1}: clipStart (${clipSegment.clipStart}) exceeds video duration (${video.duration}), skipping`);
                // Release video resources
                URL.revokeObjectURL(video.src);
                video.src = '';
                video.load();
                continue;
            }
            
            console.log(`Processing single camera segment ${i + 1}/${clipSegments.length}:`, {
                clipStart: clipSegment.clipStart,
                actualClipStart,
                clipEnd: clipSegment.clipEnd,
                segmentEndTime,
                actualEndTime,
                videoDuration: video.duration,
                actualDuration: actualEndTime - actualClipStart
            });
            
            // Seek to clip start position
            video.currentTime = actualClipStart;
            await new Promise((resolve) => {
                video.onseeked = resolve;
            });
            
            if (hasVideoFrameCallback) {
                // Use requestVideoFrameCallback for precise frame capture
                await new Promise((resolve) => {
                    let lastFrameTime = -1;
                    let resolved = false;
                    
                    const captureFrame = (now, metadata) => {
                        if (resolved) return;
                        
                        if (video.currentTime >= actualEndTime + 0.05 || video.ended) {
                            resolved = true;
                            video.pause();
                            resolve();
                            return;
                        }
                        
                        if (metadata.mediaTime !== lastFrameTime) {
                            lastFrameTime = metadata.mediaTime;
                            
                            this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                            
                            if (addTimestamp) {
                                const currentTime = new Date(segmentStartTimestamp.getTime() + (video.currentTime - actualClipStart) * 1000);
                                const timeString = currentTime.toLocaleString('en-CA', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: false
                                }).replace(/\//g, '-');
                                
                                this.drawTimestamp(timeString);
                            }
                            
                            // Draw metadata overlay if enabled
                            if (addMetadata && allMetadata.length > 0) {
                                const metadataData = this.getMetadataAtTime(allMetadata, i, video.currentTime);
                                this.drawMetadata(metadataData, this.currentLanguage);
                            }
                            
                            processedFrames++;
                            
                            if (processedFrames % 30 === 0) {
                                const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                                progressCallback?.(`Processing ${camera}: ${progress}%`);
                            }
                        }
                        
                        if (!resolved) {
                            video.requestVideoFrameCallback(captureFrame);
                        }
                    };
                    
                    video.onended = () => {
                        if (!resolved) {
                            resolved = true;
                            video.pause();
                            resolve();
                        }
                    };
                    
                    video.requestVideoFrameCallback(captureFrame);
                    video.play();
                });
            } else {
                // Fallback: play and sample at FPS (avoid per-frame seeking which can explode memory)
                const frameInterval = 1000 / FPS;
                
                await new Promise((resolve) => {
                    let resolved = false;
                    
                    const stop = () => {
                        if (resolved) return;
                        resolved = true;
                        video.pause();
                        resolve();
                    };
                    
                    const tick = () => {
                        if (resolved) return;
                        
                        const t = video.currentTime;
                        if (t >= actualEndTime - 0.02 || video.ended) {
                            stop();
                            return;
                        }
                        
                        this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
                        
                        if (addTimestamp) {
                            const currentTime = new Date(segmentStartTimestamp.getTime() + (t - actualClipStart) * 1000);
                            const timeString = currentTime.toLocaleString('en-CA', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false
                            }).replace(/\//g, '-');
                            
                            this.drawTimestamp(timeString);
                        }
                        
                        // Draw metadata overlay if enabled
                        if (addMetadata && allMetadata.length > 0) {
                            const metadataData = this.getMetadataAtTime(allMetadata, i, t);
                            this.drawMetadata(metadataData, this.currentLanguage);
                        }
                        
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`Processing ${camera}: ${progress}%`);
                        }
                        
                        setTimeout(tick, frameInterval);
                    };
                    
                    video.play().then(() => tick()).catch(() => tick());
                });
            }
            
            // Release video resources immediately after processing this segment
            video.pause();
            URL.revokeObjectURL(video.src);
            video.src = '';
            video.load();
            
            // Allow GC
            if (i % 5 === 0) {
                 await new Promise(r => setTimeout(r, 100));
            }

            console.log(`Segment ${i + 1} completed, memory released`);
            this.logMemory(`segment done ${i + 1}/${clipSegments.length}`, {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }

        
        // Ensure all writes are finished before stopping
        if (writable) {
            while (isWriting || writeQueue.length > 0) {
                await new Promise(r => setTimeout(r, 100));
            }
        }
        
        // Stop recording
        await new Promise(resolve => setTimeout(resolve, 500));
        this.mediaRecorder.stop();
        
        const result = await recordingComplete;
        
        const calculatedDuration = (processedFrames / FPS) * 1000;
        const recordingEndTime = performance.now();
        const realTimeDuration = recordingEndTime - recordingStartTime;
        console.log(`[Single Video Export] Recording completed. Expected: ${totalDuration * 1000}ms, Calculated: ${calculatedDuration}ms, RealTime: ${realTimeDuration}ms, Frames: ${processedFrames}`);
        
        // Clean up canvas and stream
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        
        if (result.saved) {
            // For streamed files, try to use FFmpeg to fix metadata
            // If FFmpeg fails, the video is still playable (just without accurate duration)
            if (fileHandle) {
                try {
                    const fixed = await this.fixWebmWithFFmpeg(fileHandle, progressCallback);
                    if (!fixed) {
                        console.warn('[Grid Video Export] FFmpeg metadata fix failed, video may have inaccurate duration');
                        progressCallback?.('Video saved (metadata repair skipped)');
                    }
                } catch (e) {
                    console.warn('[Grid Video Export] FFmpeg metadata fix error:', e);
                    progressCallback?.('Video saved (metadata repair skipped)');
                }
            }
            return result;
        }

        progressCallback?.('Repairing video metadata...');
        const fixedBlob = await webmDurationFixer.fixDuration(result, calculatedDuration);
        
        return fixedBlob;
    }
    
    async createGridVideoFromSegments(clipSegments, cameras, totalStartTime, totalEndTime, addTimestamp, addMetadata, eventStartTime, progressCallback, fileHandle = null) {
        progressCallback?.(`Preparing grid video (${clipSegments.length} segments)...`);
        
        // Load metadata for all segments if addMetadata is enabled
        let allMetadata = [];
        if (addMetadata && this.metadataManager) {
            progressCallback?.('Loading driving data...');
            // Use front camera for metadata (it's the same for all cameras)
            allMetadata = await this.loadMetadataForSegments(clipSegments, cameras[0], progressCallback);
            // Load SVG icons for metadata overlay
            await this.loadMetadataIcons();
        }
        
        
        // First pass: get video dimensions from first segment (load and release immediately)
        let canvasWidth = 0;
        let canvasHeight = 0;
        const firstVideoFile = clipSegments[0].segment.files[cameras[0]];
        if (firstVideoFile) {
            const tempVideo = document.createElement('video');
            tempVideo.muted = true;
            tempVideo.crossOrigin = 'anonymous';
            tempVideo.src = getFileUrl(firstVideoFile);
            await new Promise((resolve, reject) => {
                tempVideo.onloadedmetadata = resolve;
                tempVideo.onerror = reject;
            });
            canvasWidth = tempVideo.videoWidth;
            canvasHeight = tempVideo.videoHeight;
            URL.revokeObjectURL(tempVideo.src);
            tempVideo.src = '';
            tempVideo.load();
        }
        
        const videoCount = cameras.length;
        
        // Calculate grid layout and sort order
        let gridCols, gridRows;
        let sortOrder;

        if (videoCount > 4) {
            gridCols = 3; 
            gridRows = 2;
            sortOrder = ['left_pillar', 'front', 'right_pillar', 'left', 'back', 'right'];
        } else {
            sortOrder = ['front', 'back', 'left', 'right', 'left_pillar', 'right_pillar'];
            if (videoCount === 1) {
                gridCols = 1; gridRows = 1;
            } else if (videoCount === 2) {
                gridCols = 2; gridRows = 1;
            } else {
                gridCols = 2; gridRows = 2;
            }
        }

        const sortedCameras = cameras.sort((a, b) => {
            const idxA = sortOrder.indexOf(a);
            const idxB = sortOrder.indexOf(b);
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
        });

        // Target output resolution: 1920x1080 (scales each cell to fit)
        const targetWidth = 1920;
        const targetHeight = 1080;
        const cellWidth = Math.floor(targetWidth / gridCols);
        const cellHeight = Math.floor(targetHeight / gridRows);
        const gridCanvasWidth = targetWidth;
        const gridCanvasHeight = targetHeight;
        
        // Initialize canvas
        this.initCanvas(gridCanvasWidth, gridCanvasHeight);

        
        // Calculate total duration
        const FPS = 30;
        let totalDuration = 0;
        for (const clipSegment of clipSegments) {
            totalDuration += clipSegment.clipDuration;
        }
        const totalFrames = Math.ceil(totalDuration * FPS);
        
        // Setup MediaRecorder
        const stream = this.canvas.captureStream(FPS);
        
        // Dynamic bitrate based on grid cell count
        // Optimize bitrate to reduce memory usage: ~2.5Mbps per camera is sufficient
        const gridCellCount = gridCols * gridRows;
        const videoBitsPerSecond = Math.min(2500000 * gridCellCount, 15000000);
        
        let mimeType = 'video/webm;codecs=vp9';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'video/webm;codecs=vp8';
        }
        
        console.log(`Grid export: ${gridCols}x${gridRows}, ${gridCanvasWidth}x${gridCanvasHeight}, ${videoBitsPerSecond / 1000000} Mbps, codec: ${mimeType}, total frames: ${totalFrames}`);
        this.logMemory('grid init', {
            gridSize: `${gridCols}x${gridRows}`,
            canvasSize: `${gridCanvasWidth}x${gridCanvasHeight}`,
            bitrateMbps: (videoBitsPerSecond / 1000000).toFixed(2),
        });
        
        this.mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            videoBitsPerSecond
        });

        
        const chunks = [];
        let totalChunkSize = 0;
        let writable = null;
        
        // Write queue system to avoid Promise chain memory leaks
        const writeQueue = [];
        let writeQueueSize = 0;
        let isWriting = false;
        
        const processWriteQueue = async () => {
            if (isWriting) return;
            isWriting = true;
            
            while (writeQueue.length > 0) {
                const blob = writeQueue.shift();
                if (!blob) {
                    continue;
                }
                writeQueueSize -= blob.size || 0;
                try {
                    await writable.write(blob);
                } catch (err) {
                    console.error('Write error:', err);
                }
            }
            
            isWriting = false;
        };


        if (fileHandle) {
             try {
                 writable = await fileHandle.createWritable();
             } catch(e) {
                 console.warn("Writable creation failed", e);
             }
        }
        
        this.mediaRecorder.ondataavailable = (e) => {
            const size = e?.data ? e.data.size : 0;
            if (size > 0) {
                if (writable) {
                    writeQueue.push(e.data);
                    writeQueueSize += size;
                    if (writeQueueSize > 50 * 1024 * 1024) {
                        this.logMemory('writeQueue > 50MB', {
                            writeQueueSize: this.formatBytes(writeQueueSize),
                            totalChunkSize: this.formatBytes(totalChunkSize),
                            chunksBuffered: chunks.length,
                        });
                    }
                    processWriteQueue();
                } else {
                    chunks.push(e.data);
                }
                totalChunkSize += size;
            }
        };

        
        const recordingComplete = new Promise((resolve) => {
            this.mediaRecorder.onstop = async () => {
                console.log('MediaRecorder stopped, chunks count:', chunks.length, 'total size:', totalChunkSize);
                if (writable) {
                     await writable.close();
                     resolve({ saved: true, blob: new Blob([], { type: 'video/webm' }) });
                } else {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    console.log('Created blob, size:', blob.size);
                    chunks.length = 0;
                    resolve(blob);
                }
            };
        });
        
        // Start recording - smaller timeslice helps reduce internal buffering
        this.mediaRecorder.start(250);
        const recordingStartTime = performance.now();
        
        // Position mapping for grid
        const cameraPositions = {};
        sortedCameras.forEach((cam, index) => {
            cameraPositions[cam] = {
                x: index % gridCols,
                y: Math.floor(index / gridCols)
            };
        });
        
        // Process segments one at a time (streaming approach)
        let processedFrames = 0;
        const hasVideoFrameCallback = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
        
        for (let i = 0; i < clipSegments.length; i++) {
            const clipSegment = clipSegments[i];
            
            progressCallback?.(`Loading segment ${i + 1}/${clipSegments.length}...`);
            
            // Load videos for this segment only
            const videos = {};
            for (const camera of cameras) {
                const videoFile = clipSegment.segment.files[camera];
                if (!videoFile) continue;
                
                const video = document.createElement('video');
                video.muted = true;
                video.crossOrigin = 'anonymous';
                
                video.src = getFileUrl(videoFile);
                
                await new Promise((resolve, reject) => {
                    video.onloadedmetadata = resolve;
                    video.onerror = reject;
                });
                
                videos[camera] = video;
            }
            
            if (Object.keys(videos).length === 0) {
                throw new Error(`No video file available for segment ${i + 1}`);
            }

            const videoCountLoaded = Object.keys(videos).length;
            this.logMemory(`segment start ${i + 1}/${clipSegments.length}`, {
                videoCountLoaded,
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
            
            // Calculate timestamp for this segment
            const firstCam = sortedCameras[0];

            const videoFile = clipSegment.segment.files[firstCam];
            const fileName = videoFile?.name || (videoFile?.path ? videoFile.path.split(/[/\\]/).pop() : null);
            const fullTimestampMatch = fileName?.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
            
            let segmentTime;
            if (fullTimestampMatch) {
                segmentTime = this.parseTimestamp(fullTimestampMatch[1]);
            } else {
                segmentTime = this.parseTimestamp(clipSegment.timestamp);
            }
            
            const segmentEndTime = clipSegment.clipEnd;
            
            const videoEntries = Object.entries(videos);
            const firstVideo = videoEntries[0][1];
            
            // Adjust clipStart if it exceeds video duration
            const actualClipStart = Math.min(clipSegment.clipStart, firstVideo.duration);
            // Adjust clipEnd based on actual video duration
            const actualEndTime = Math.min(segmentEndTime, firstVideo.duration);
            
            // Calculate timestamp based on actual clip start
            const segmentStartTimestamp = new Date(segmentTime.getTime() + actualClipStart * 1000);
            
            // Skip this segment if clipStart is already past video duration
            if (actualClipStart >= firstVideo.duration) {
                console.warn(`Grid segment ${i + 1}: clipStart (${clipSegment.clipStart}) exceeds video duration (${firstVideo.duration}), skipping`);
                // Release video resources
                for (const video of Object.values(videos)) {
                    URL.revokeObjectURL(video.src);
                    video.src = '';
                    video.load();
                }
                continue;
            }
            
            console.log(`Processing segment ${i + 1}/${clipSegments.length}:`, {
                clipStart: clipSegment.clipStart,
                actualClipStart,
                clipEnd: clipSegment.clipEnd,
                clipDuration: clipSegment.clipDuration,
                segmentEndTime,
                actualEndTime,
                videoDuration: firstVideo.duration,
                actualDuration: actualEndTime - actualClipStart
            });
            
            // Seek all videos to clip start position with timeout
            const seekWithTimeout = (video, targetTime, timeout = 5000) => {
                return new Promise((resolve) => {
                    // If already at target position (within tolerance), resolve immediately
                    if (Math.abs(video.currentTime - targetTime) < 0.1) {
                        video.playbackRate = 1.0;
                        resolve();
                        return;
                    }
                    
                    const timeoutId = setTimeout(() => {
                        console.warn(`[Grid] Seek timeout for video, forcing continue`);
                        video.onseeked = null;
                        resolve();
                    }, timeout);
                    
                    video.onseeked = () => {
                        clearTimeout(timeoutId);
                        video.onseeked = null;
                        resolve();
                    };
                    
                    video.playbackRate = 1.0;
                    video.currentTime = targetTime;
                });
            };
            
            await Promise.all(Object.values(videos).map(video => 
                seekWithTimeout(video, actualClipStart)
            ));
            
            const segmentDuration = actualEndTime - actualClipStart;
            const segmentFrameCount = Math.ceil(segmentDuration * FPS);
            console.log(`Segment ${i + 1}: clipStart=${clipSegment.clipStart}, actualEndTime=${actualEndTime}, segmentDuration=${segmentDuration}s, expectedFrames=${segmentFrameCount}`);
            
        const renderFrame = (videoTime) => {
            // Clear canvas
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(0, 0, gridCanvasWidth, gridCanvasHeight);
            
            // 2x2 special case: scale to fit without cropping; the two tiles on a row are joined
                    // horizontally and the pair is centred, so they touch with no outer gap
            const is2x2 = gridCols === 2 && gridRows === 2;

            if (is2x2) {
                const layout = videoEntries.map(([camera, video]) => {
                    const pos = cameraPositions[camera] || { x: 0, y: 0 };
                    const x = pos.x * cellWidth;
                    const y = pos.y * cellHeight;
                    const srcW = video.videoWidth || cellWidth;
                    const srcH = video.videoHeight || cellHeight;
                    const scale = Math.min(cellWidth / srcW, cellHeight / srcH); // contain: no cropping
                    const drawW = Math.ceil(srcW * scale);
                    const drawH = Math.ceil(srcH * scale);
                    return { camera, video, x, y, row: pos.y, drawW, drawH };
                });

                // Row by row, two per row: total width <= 1920, row centred, tiles flush
                const rows = new Map();
                for (const item of layout) {
                    if (!rows.has(item.row)) rows.set(item.row, []);
                    rows.get(item.row).push(item);
                }

                for (const [, items] of rows) {
                    items.sort((a, b) => a.x - b.x); // left-to-right order
                    const totalW = items.reduce((sum, it) => sum + it.drawW, 0);
                    const startX = Math.floor((gridCanvasWidth - totalW) / 2);
                    let cursorX = startX;
                    for (const item of items) {
                        const offsetX = cursorX;
                        const offsetY = item.y + Math.floor((cellHeight - item.drawH) / 2);
                        this.ctx.drawImage(item.video, offsetX, offsetY, item.drawW, item.drawH);
                        cursorX += item.drawW;

                        // Draw camera label (auto width)
                        const labelX = offsetX + 4;
                        const labelY = item.y + 4;
                        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                        this.ctx.font = 'bold 12px Arial, sans-serif';
                        const lang = this.currentLanguage || 'en';
                        const labelText = cameraLabel(item.camera, lang) || item.camera.toUpperCase();
                        const textW = this.ctx.measureText(labelText).width;
                        const padX = 6;
                        const padY = 4;
                        const boxW = Math.ceil(textW + padX * 2);
                        const boxH = 20 + padY * 0; // 20px is tall enough for a 12px font
                        this.ctx.fillRect(labelX, labelY, boxW, boxH);
                        this.ctx.fillStyle = '#fff';
                        this.ctx.fillText(labelText, labelX + padX, labelY + 14);

                    }
                }
            } else {

            // Draw each camera view (contain: keep aspect, center inside cell)
            for (const [camera, video] of videoEntries) {
                const pos = cameraPositions[camera] || { x: 0, y: 0 };
                const x = pos.x * cellWidth;
                const y = pos.y * cellHeight;

                const srcW = video.videoWidth || cellWidth;
                const srcH = video.videoHeight || cellHeight;
                const scale = Math.min(cellWidth / srcW, cellHeight / srcH); // contain: no cropping
                const drawW = Math.ceil(srcW * scale);
                const drawH = Math.ceil(srcH * scale);

                const offsetX = x + Math.floor((cellWidth - drawW) / 2);
                const offsetY = y + Math.floor((cellHeight - drawH) / 2);
                
                this.ctx.drawImage(video, offsetX, offsetY, drawW, drawH);

                
                // Draw camera label (auto width)
                const labelX = x + 4;
                const labelY = y + 4;
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                this.ctx.font = 'bold 12px Arial, sans-serif';
                
                const lang = this.currentLanguage || 'en';
                const labelText = cameraLabel(camera, lang) || camera.toUpperCase();
                const textW = this.ctx.measureText(labelText).width;
                const padX = 6;
                const padY = 4;
                const boxW = Math.ceil(textW + padX * 2);
                const boxH = 20 + padY * 0;
                this.ctx.fillRect(labelX, labelY, boxW, boxH);
                this.ctx.fillStyle = '#fff';
                this.ctx.fillText(labelText, labelX + padX, labelY + 14);




            }
            }



            
            // Draw timestamp if needed
            if (addTimestamp) {
                const currentTime = new Date(segmentStartTimestamp.getTime() + (videoTime - actualClipStart) * 1000);
                const timeString = currentTime.toLocaleString('en-CA', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(/\//g, '-');
                
                this.ctx.font = 'bold 20px Arial, sans-serif';
                const textWidth = this.ctx.measureText(timeString).width;
                const padding = 10;
                const boxWidth = textWidth + padding * 2;
                const boxHeight = 32;

                // Place it in the top-right cell, inside the top-right padding
                const topRightCell = videoEntries.reduce((acc, [cam]) => {
                    const pos = cameraPositions[cam] || { x: 0, y: 0 };
                    if (!acc) return { cam, pos };
                    if (pos.x > acc.pos.x || (pos.x === acc.pos.x && pos.y < acc.pos.y)) {
                        return { cam, pos };
                    }
                    return acc;
                }, null);
                const targetX = topRightCell ? topRightCell.pos.x * cellWidth : gridCanvasWidth - cellWidth;
                const targetY = topRightCell ? topRightCell.pos.y * cellHeight : 0;
                const margin = 16; // base inset
                // Shift left by half the text width so long timestamps sit further inside
                const extraLeft = textWidth / 2;
                const tsX = targetX + cellWidth - boxWidth - margin - extraLeft;
                const tsY = targetY + margin;


                
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                this.ctx.fillRect(tsX, tsY, boxWidth, boxHeight);
                this.ctx.fillStyle = '#fff';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(timeString, tsX + boxWidth - padding, tsY + 24);


                this.ctx.textAlign = 'left';

            }
            
            // Draw metadata overlay if enabled (at bottom center of grid)
            if (addMetadata && allMetadata.length > 0) {
                const metadataData = this.getMetadataAtTime(allMetadata, i, videoTime);
                this.drawMetadata(metadataData, this.currentLanguage);
            }


        };


            
            if (hasVideoFrameCallback) {
                await new Promise((resolve) => {
                    let resolved = false;
                    const masterVideo = firstVideo;
                    let lastFrameTime = Date.now();
                    let stuckCheckInterval = null;
                    
                    const stopAll = () => {
                        if (resolved) return;
                        resolved = true;
                        if (stuckCheckInterval) clearInterval(stuckCheckInterval);
                        for (const video of Object.values(videos)) {
                            video.pause();
                        }
                        resolve();
                    };
                    
                    // Check if video is stuck (no frame for 10 seconds)
                    stuckCheckInterval = setInterval(() => {
                        if (resolved) {
                            clearInterval(stuckCheckInterval);
                            return;
                        }
                        if (Date.now() - lastFrameTime > 10000) {
                            console.warn(`[Grid] Video playback stuck, forcing continue. currentTime=${masterVideo.currentTime}, targetEnd=${actualEndTime}`);
                            stopAll();
                        }
                    }, 2000);
                    
                    const onFrame = () => {
                        if (resolved) return;
                        lastFrameTime = Date.now();
                        
                        const t = masterVideo.currentTime;
                        if (t >= actualEndTime - 0.02 || masterVideo.ended) {
                            stopAll();
                            return;
                        }
                        
                        // Light sync: if other cameras drift too much, correct occasionally
                        // Skip videos that have ended or if target time exceeds their duration
                        for (const video of Object.values(videos)) {
                            if (video === masterVideo) continue;
                            if (video.ended || t >= video.duration) continue; // Skip ended videos
                            if (Math.abs(video.currentTime - t) > 0.15) {
                                video.currentTime = Math.min(t, video.duration - 0.1);
                            }
                        }
                        
                        renderFrame(t);
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`Processing grid: ${progress}%`);
                        }
                        
                        masterVideo.requestVideoFrameCallback(onFrame);
                    };
                    
                    Promise.all(Object.values(videos).map(v => v.play().catch((e) => {
                        console.warn('[Grid] Video play failed:', e);
                        return null;
                    })))
                        .then(() => {
                            if (!resolved) {
                                masterVideo.requestVideoFrameCallback(onFrame);
                            }
                        })
                        .catch((e) => {
                            console.error('[Grid] Failed to start video playback:', e);
                            stopAll();
                        });
                });
            } else {
                // Fallback: play and sample at FPS without per-frame seeking
                await new Promise((resolve) => {
                    let resolved = false;
                    const masterVideo = firstVideo;
                    const frameInterval = 1000 / FPS;
                    let lastTickTime = Date.now();
                    let stuckCheckInterval = null;
                    
                    const stopAll = () => {
                        if (resolved) return;
                        resolved = true;
                        if (stuckCheckInterval) clearInterval(stuckCheckInterval);
                        for (const video of Object.values(videos)) {
                            video.pause();
                        }
                        resolve();
                    };
                    
                    // Check if video is stuck (no tick for 10 seconds)
                    stuckCheckInterval = setInterval(() => {
                        if (resolved) {
                            clearInterval(stuckCheckInterval);
                            return;
                        }
                        if (Date.now() - lastTickTime > 10000) {
                            console.warn(`[Grid] Video playback stuck (fallback mode), forcing continue`);
                            stopAll();
                        }
                    }, 2000);
                    
                    const tick = () => {
                        if (resolved) return;
                        lastTickTime = Date.now();
                        const t = masterVideo.currentTime;
                        if (t >= actualEndTime - 0.02 || masterVideo.ended) {
                            stopAll();
                            return;
                        }
                        renderFrame(t);
                        processedFrames++;
                        
                        if (processedFrames % 30 === 0) {
                            const progress = Math.min(100, Math.round((processedFrames / totalFrames) * 100));
                            progressCallback?.(`Processing grid: ${progress}%`);
                        }
                        setTimeout(tick, frameInterval);
                    };
                    
                    Promise.all(Object.values(videos).map(v => v.play().catch((e) => {
                        console.warn('[Grid] Video play failed (fallback):', e);
                        return null;
                    })))
                        .then(() => {
                            if (!resolved) {
                                tick();
                            }
                        })
                        .catch((e) => {
                            console.error('[Grid] Failed to start video playback (fallback):', e);
                            stopAll();
                        });
                });
            }
            
            // Release video resources immediately after processing this segment
            for (const key of Object.keys(videos)) {
                const video = videos[key];
                video.pause();
                URL.revokeObjectURL(video.src);
                video.src = '';
                video.load(); // Detach source
                videos[key] = null;
            }
            
            // Explicitly force garbage collection pause if processing many segments
            if (i % 5 === 0) {
                 await new Promise(r => setTimeout(r, 100));
            }
            
            console.log(`Segment ${i + 1} completed, memory released`);
            this.logMemory(`segment done ${i + 1}/${clipSegments.length}`, {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }

        
        // Ensure all writes are finished before stopping
        if (writable) {
            // Wait for queue to drain
            while (isWriting || writeQueue.length > 0) {
                await new Promise(r => setTimeout(r, 100));
            }
            this.logMemory('write queue drained', {
                writeQueueSize: this.formatBytes(writeQueueSize),
                totalChunkSize: this.formatBytes(totalChunkSize),
                chunksBuffered: chunks.length,
                writeQueueItems: writeQueue.length,
            });
        }


        // Stop recording
        await new Promise(resolve => setTimeout(resolve, 500));
        this.mediaRecorder.stop();
        
        const result = await recordingComplete;
        
        const calculatedDuration = (processedFrames / FPS) * 1000;
        const recordingEndTime = performance.now();
        const realTimeDuration = recordingEndTime - recordingStartTime;
        console.log(`[Grid Video Export] Recording completed. Expected: ${totalDuration * 1000}ms, Calculated: ${calculatedDuration}ms, RealTime: ${realTimeDuration}ms, Frames: ${processedFrames}`);
        this.logMemory('recording stopped', {
            writeQueueSize: this.formatBytes(writeQueueSize),
            totalChunkSize: this.formatBytes(totalChunkSize),
            chunksBuffered: chunks.length,
            writeQueueItems: writeQueue.length,
        });
        
        // Clean up canvas and stream
        if (stream) {

            stream.getTracks().forEach(track => track.stop());
        }
        
        if (result.saved) {
            // For streamed files, try to use FFmpeg to fix metadata
            // If FFmpeg fails, the video is still playable (just without accurate duration)
            if (fileHandle) {
                try {
                    const fixed = await this.fixWebmWithFFmpeg(fileHandle, progressCallback);
                    if (!fixed) {
                        console.warn('[Grid Video Export] FFmpeg metadata fix failed, video may have inaccurate duration');
                        progressCallback?.('Video saved (metadata repair skipped)');
                    }
                } catch (e) {
                    console.warn('[Grid Video Export] FFmpeg metadata fix error:', e);
                    progressCallback?.('Video saved (metadata repair skipped)');
                }
            }
            return result;
        }

        progressCallback?.('Repairing video metadata...');
        const fixedBlob = await webmDurationFixer.fixDuration(result, calculatedDuration);
        
        return fixedBlob;
    }
    
    drawTimestamp(timeString) {
        // Dynamic scaling
        const referenceWidth = 2896;
        const scale = this.canvas.width / referenceWidth;
        
        const fontSize = Math.round(28 * scale);
        const padding = 15 * scale;
        const boxHeight = 40 * scale;
        const margin = 20 * scale;
        
        // Measure text width
        this.ctx.font = `bold ${fontSize}px Arial, sans-serif`;
        const textWidth = this.ctx.measureText(timeString).width;
        const boxWidth = textWidth + padding * 2;
        const x = this.canvas.width - boxWidth - margin;
        const y = margin;
        
        // Draw background (top-right corner)
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        this.ctx.fillRect(x, y, boxWidth, boxHeight);
        
        // Draw text
        this.ctx.fillStyle = '#fff';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(timeString, x + padding, y + boxHeight / 2);
    }
    
    // Load metadata for all segments
    async loadMetadataForSegments(clipSegments, camera, progressCallback = null) {
        const allMetadata = [];
        
        for (let i = 0; i < clipSegments.length; i++) {
            if (this.isCancelled) throw new Error('Export cancelled');
            if (progressCallback) {
                progressCallback(`Reading video data ${i + 1}/${clipSegments.length}...`);
            }
            const clipSegment = clipSegments[i];
            const videoFile = clipSegment.segment.files[camera];
            
            if (!videoFile) continue;
            
            try {
                let buffer;
                if (videoFile instanceof File) {
                    buffer = await videoFile.arrayBuffer();
                } else if (videoFile.path || videoFile.name) {
                    const response = await fetch(getFileUrl(videoFile));
                    buffer = await response.arrayBuffer();
                } else {
                    continue;
                }
                
                const parser = new DashcamMP4(buffer);
                const rawMetadata = parser.parseMetadata();
                
                if (this.metadataManager && this.metadataManager.SeiMetadata) {
                    const segmentMetadata = rawMetadata.map(item => {
                        try {
                            const decoded = this.metadataManager.SeiMetadata.decode(item.data);
                            return {
                                time: item.time,
                                segmentIndex: i,
                                data: this.metadataManager.SeiMetadata.toObject(decoded, { enums: String, longs: String })
                            };
                        } catch (e) {
                            return null;
                        }
                    }).filter(Boolean);
                    
                    allMetadata.push({
                        segmentIndex: i,
                        clipStart: clipSegment.clipStart,
                        clipEnd: clipSegment.clipEnd,
                        metadata: segmentMetadata
                    });
                }
            } catch (e) {
                console.warn(`[Metadata] Failed to load metadata for segment ${i}:`, e);
            }
        }
        
        return allMetadata;
    }
    
    // Get metadata for a specific time within a segment
    getMetadataAtTime(allMetadata, segmentIndex, currentTime) {
        const segmentData = allMetadata.find(m => m.segmentIndex === segmentIndex);
        if (!segmentData || !segmentData.metadata || segmentData.metadata.length === 0) {
            return null;
        }
        
        // Find the metadata item closest to current time
        let bestMatch = segmentData.metadata[0];
        for (const item of segmentData.metadata) {
            if (item.time <= currentTime) {
                bestMatch = item;
            } else {
                break;
            }
        }
        
        return bestMatch?.data || null;
    }
    
    // Draw metadata overlay at bottom center with SVG icons
    /**
     * Draw metadata overlay on canvas
     */
    drawMetadata(metadataData, lang = 'en') {
        if (!metadataData) return;
        
        const d = metadataData;
        
        // Dynamic scaling based on reference: 480px width box is "just right" for 2896px width video
        const referenceWidth = 2896;
        const scale = this.canvas.width / referenceWidth;
        
        const barWidth = 480 * scale;
        const barHeight = 65 * scale;
        const iconSize = 30 * scale;
        const borderRadius = 16 * scale;
        const fontSize = 24 * scale;
        
        // Position: Bottom center
        const x = (this.canvas.width - barWidth) / 2;
        const y = this.canvas.height - barHeight - (20 * scale);
        
        // Draw background bar (Glassmorphism effect)
        this.ctx.save();
        const gradient = this.ctx.createLinearGradient(x, y, x, y + barHeight);
        gradient.addColorStop(0, 'rgba(20, 20, 20, 0.3)');
        gradient.addColorStop(1, 'rgba(5, 5, 5, 0.35)');
        this.ctx.fillStyle = gradient;
        
        this.ctx.beginPath();
        if (this.ctx.roundRect) {
            this.ctx.roundRect(x, y, barWidth, barHeight, borderRadius);
        } else {
            const r = borderRadius;
            this.ctx.moveTo(x + r, y);
            this.ctx.lineTo(x + barWidth - r, y);
            this.ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + r);
            this.ctx.lineTo(x + barWidth, y + barHeight - r);
            this.ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth - r, y + barHeight);
            this.ctx.lineTo(x + r, y + barHeight);
            this.ctx.quadraticCurveTo(x, y + barHeight, x, y + barHeight - r);
            this.ctx.lineTo(x, y + r);
            this.ctx.quadraticCurveTo(x, y, x + r, y);
        }
        this.ctx.fill();
        this.ctx.restore();
        
        const yCenter = y + barHeight / 2;
        
        // Speed
        const speedKmh = Math.round((d.vehicleSpeedMps || 0) * 3.6);
        const speedDisplay = speedKmh >= 150 ? '150+' : `${speedKmh}`;
        const speedText = `${speedDisplay} km/h`;
        
        // Gear
        const gearMap = {
            'GEAR_PARK': 'P',
            'GEAR_DRIVE': 'D',
            'GEAR_REVERSE': 'R',
            'GEAR_NEUTRAL': 'N'
        };
        const gear = gearMap[d.gearState] || '--';
        const gearText = `[${gear}]`;
        
        // Steering bucket
        const steeringAngle = Math.round(d.steeringWheelAngle || 0);
        const steeringBucket = Math.round(steeringAngle / 10) * 10;
        const autopilotState = d.autopilotState || 'NONE';
        
        // Accelerator bucket
        const accelPercent = Math.round(d.acceleratorPedalPosition || 0);
        const accelBucket = Math.floor(accelPercent / 10) * 10;
        
        // Draw items (Using SCALED COORDINATES)
        this.ctx.save();
        this.ctx.font = `bold ${fontSize}px Arial, sans-serif`;
        this.ctx.textBaseline = 'middle';
        
        // Speed (Scaled at 125)
        this.ctx.fillStyle = '#ffffff';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(speedText, x + 125 * scale, yCenter);
        
        // Gear (Scaled at 145)
        this.ctx.textAlign = 'left';
        let gearColor = '#ffffff';
        if (gear === 'D') gearColor = '#52c41a';
        else if (gear === 'R') gearColor = '#ff4d4f';
        this.ctx.fillStyle = gearColor;
        this.ctx.fillText(gearText, x + 145 * scale, yCenter);
        
        // Blinkers
        this.drawLeftArrow(this.ctx, x + 200 * scale, yCenter, iconSize, d.blinkerOnLeft);
        this.drawRightArrow(this.ctx, x + 240 * scale, yCenter, iconSize, d.blinkerOnRight);
        
        // Brake (Fixed at 290)
        this.drawBrakeIcon(this.ctx, x + 290 * scale, yCenter, iconSize, d.brakeApplied);
        
        // Accel (Fixed at 340, no percentage text, only icon)
        this.drawAcceleratorIcon(this.ctx, x + 340 * scale, yCenter, iconSize, accelBucket);
        
        // Steering Wheel (Fixed at 390)
        this.drawSteeringWheelIcon(this.ctx, x + 390 * scale, yCenter, iconSize, steeringBucket, autopilotState);
        
        this.ctx.restore();
    }

    // Helper: draw left arrow
    drawLeftArrow(ctx, x, y, size, active) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.2)';
        ctx.save();
        if (active) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(82, 196, 26, 0.4)';
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        const halfSize = size / 2;
        ctx.moveTo(x + size * 0.9, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 1.1, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 1.1, y - halfSize * 0.8);
        ctx.lineTo(x + size * 0.1, y);
        ctx.lineTo(x + halfSize * 1.1, y + halfSize * 0.8);
        ctx.lineTo(x + halfSize * 1.1, y + halfSize * 0.4);
        ctx.lineTo(x + size * 0.9, y + halfSize * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // Helper: draw right arrow
    drawRightArrow(ctx, x, y, size, active) {
        const color = active ? '#52c41a' : 'rgba(255,255,255,0.2)';
        ctx.save();
        if (active) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(82, 196, 26, 0.4)';
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        const halfSize = size / 2;
        ctx.moveTo(x + size * 0.1, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 0.9, y - halfSize * 0.4);
        ctx.lineTo(x + halfSize * 0.9, y - halfSize * 0.8);
        ctx.lineTo(x + size * 0.9, y);
        ctx.lineTo(x + halfSize * 0.9, y + halfSize * 0.8);
        ctx.lineTo(x + halfSize * 0.9, y + halfSize * 0.4);
        ctx.lineTo(x + size * 0.1, y + halfSize * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    // Helper: draw brake icon (brake pedal shape from SVG)
    drawBrakeIcon(ctx, x, y, size, active) {
        const color = active ? '#ff4d4f' : 'rgba(255,255,255,0.4)';
        ctx.save();
        
        try {
            if (active) {
                ctx.shadowBlur = 6;
                ctx.shadowColor = 'rgba(255, 77, 79, 0.5)';
            }
            ctx.fillStyle = color;
            
            // Draw the icon, centred, at a larger size
            const iconSize = size * 1.5;
            const iconX = x + (size - iconSize) / 2;
            const iconY = y - iconSize / 2;
            
            // SVG viewBox is 0 0 1024 1024; the path actually spans about x:140-880, y:162-861
            const svgSize = 1024;
            const pathWidth = 880 - 140;
            const pathHeight = 861 - 162;
            const pathCenterX = 140 + pathWidth / 2;
            const pathCenterY = 162 + pathHeight / 2;
            
            const scale = iconSize / svgSize;
            
            // Move the path centre onto the icon centre
            ctx.translate(iconX + iconSize / 2, iconY + iconSize / 2);
            ctx.scale(scale, scale);
            ctx.translate(-pathCenterX, -pathCenterY);
            
            const path = new Path2D('M821.394 861.482H200.242c-23.709 0-44.013-20.191-45.124-44.975 0 0-30.555-129.896-30.044-166.228 0.325-23.102 15.23-164.3 15.23-164.3 2.449-27.739 18.019-48.258 42.686-48.258h646.233c24.667 0 44.357 21.769 43.759 48.258l14.579 163.622-22.043 166.906c-0.56 24.784-20.414 44.975-44.124 44.975z m24.716-358.364l0.292-10.498c0.23-8.275-6.452-15.059-14.85-15.059H186.497c-8.397 0-14.828 6.784-14.291 15.059l0.681 10.498c0.534 8.232 7.802 14.954 16.153 14.954h641.472c8.35 0 15.37-6.722 15.598-14.954z m8.739 81.304l0.296-10.264c0.233-8.091-6.628-14.724-15.248-14.724H177.735c-8.62 0-15.226 6.633-14.681 14.724l0.691 10.264c0.542 8.049 7.999 14.622 16.571 14.622H838.84c8.574 0 15.777-6.572 16.009-14.622z m6.172 79.506l0.298-10.038c0.235-7.912-6.747-14.399-15.516-14.399H172.234c-8.769 0-15.494 6.487-14.945 14.399l0.695 10.038c0.545 7.872 8.126 14.3 16.847 14.3h669.91c8.721 0 16.047-6.428 16.28-14.3z m-14.901 77.765l0.282-9.819c0.222-7.74-6.466-14.085-14.863-14.085H186.526c-8.397 0-14.841 6.345-14.322 14.085l0.659 9.819c0.517 7.701 7.772 13.989 16.123 13.989h641.548c8.351 0 15.365-6.288 15.586-13.989z m-8.749 76.081l0.267-9.608c0.21-7.573-6.189-13.781-14.222-13.781H206.385c-8.033 0-14.202 6.208-13.711 13.781l0.623 9.608c0.489 7.535 7.425 13.688 15.415 13.688h613.751c7.99 0.001 14.698-6.152 14.908-13.688z m1.869-378.856l36.038-94.167 21.623-119.775H785.183L752.749 356.56l-118.926 82.358H839.24z');
            ctx.fill(path);
        } catch (err) {
            console.error('[drawBrakeIcon Web] Error:', err);
        }
        
        ctx.restore();
    }

    // Helper: draw accelerator icon
    drawAcceleratorIcon(ctx, x, y, size, percent) {
        const active = percent > 0;
        const rectWidth = size * 0.6;
        const rectHeight = size * 0.9;
        const rectX = x + (size - rectWidth) / 2;
        const rectY = y - rectHeight / 2;
        const cornerRadius = 3;
        
        ctx.save();
        ctx.strokeStyle = active ? '#52c41a' : 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        this.drawRoundedRect(ctx, rectX, rectY, rectWidth, rectHeight, cornerRadius);
        ctx.stroke();
        
        if (active) {
            const fillHeight = (percent / 100) * (rectHeight - 4);
            const fillY = rectY + rectHeight - 2 - fillHeight;
            ctx.fillStyle = '#52c41a';
            this.drawRoundedRect(ctx, rectX + 2, fillY, rectWidth - 4, fillHeight, 1);
            ctx.fill();
        }
        ctx.restore();
    }

    // Helper: draw steering wheel icon
    drawSteeringWheelIcon(ctx, x, y, size, angle, autopilotState) {
        let color = 'rgba(255,255,255,0.9)';
        let shadowColor = 'transparent';
        if (autopilotState === 'SELF_DRIVING') {
            color = '#52c41a';
            shadowColor = 'rgba(82, 196, 26, 0.5)';
        } else if (autopilotState === 'AUTOSTEER' || autopilotState === 'TACC') {
            color = '#1890ff';
            shadowColor = 'rgba(24, 144, 255, 0.5)';
        }
        
        ctx.save();
        if (shadowColor !== 'transparent') {
            ctx.shadowBlur = 6;
            ctx.shadowColor = shadowColor;
        }
        
        const cx = x + size / 2;
        const cy = y;
        ctx.translate(cx, cy);
        ctx.rotate((angle * Math.PI) / 180);
        
        const scale = size / 64;
        const r = 28 * scale;
        const hubR = 9 * scale;
        const strokeWidth = 5 * scale;
        const spokeHeight = 8 * scale;
        const spokeWidth = 19 * scale;
        const spokeRx = 2 * scale;
        
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(0, 0, hubR, 0, Math.PI * 2);
        ctx.fill();
        
        // Left spoke
        this.drawRoundedRect(ctx, -r - strokeWidth / 2, -spokeHeight / 2, spokeWidth, spokeHeight, spokeRx);
        ctx.fill();
        // Right spoke
        this.drawRoundedRect(ctx, r - spokeWidth + strokeWidth / 2, -spokeHeight / 2, spokeWidth, spokeHeight, spokeRx);
        ctx.fill();
        // Bottom spoke
        this.drawRoundedRect(ctx, -spokeHeight / 2, hubR, spokeHeight, spokeWidth, spokeRx);
        ctx.fill();
        
        ctx.restore();
    }

    // Helper: draw rounded rectangle
    drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, y, width, height, radius);
        } else {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }
    }

    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
}

class TeslaCamViewer {
    constructor() {
        this.allFiles = [];
        this.eventGroups = [];
        this.currentEvent = null;
        this.currentLanguage = 'en';
        this.currentMapCoordinates = null;
        this.hiddenClips = this.loadHiddenClips();
        this.discovering = true;
        this.flatpickrInstance = null;
        this.videoClipProcessor = new VideoClipProcessor();
        this.metadataManager = new MetadataManager(this);
        this.dom = {
            folderInput: document.getElementById('folderInput'),
            fileInputIOS: document.getElementById('fileInputIOS'),
            selectFolderBtn: document.getElementById('selectFolderBtn'),
            dateFilter: document.getElementById('dateFilter'),
            clearDateBtn: document.getElementById('clearDateBtn'),
            eventFilter: document.getElementById('eventFilter'),
            hideEncrypted: document.getElementById('hideEncrypted'),
            hideEncryptedLabel: document.getElementById('hideEncryptedLabel'),
            showHiddenBtn: document.getElementById('showHiddenBtn'),
            sidebar: document.querySelector('.sidebar'),
            toggleSidebarBtn: document.getElementById('toggleSidebarBtn'),
            openSidebarBtn: document.getElementById('openSidebarBtn'),
            playerArea: document.getElementById('playerArea'),
            overlay: document.getElementById('overlay'),
            themeToggleBtn: document.getElementById('themeToggleBtn'),
            langToggleBtn: document.getElementById('langToggleBtn'),
            mapModal: document.getElementById('mapModal'),
            mapModalTitle: document.getElementById('mapModalTitle'),
            googleMapBtn: document.getElementById('googleMapBtn'),
            closeModalBtn: document.getElementById('closeModalBtn'),
            revealFileBtn: document.getElementById('revealFileBtn'),
            downloadFileBtn: document.getElementById('downloadFileBtn'),
            exportMetadataBtn: document.getElementById('exportMetadataBtn'),
            metadataSwitchBtn: document.getElementById('metaSwitchBtn'),
            mapToggleBtn: document.getElementById('mapToggleBtn'),
            headerLocationDisplay: document.getElementById('headerLocationDisplay'),
            headerMenuBtn: document.getElementById('headerMenuBtn'),
            headerRight: document.getElementById('headerRight'),
            headerActionsGroup: document.getElementById('headerActionsGroup'),
            headerCenterInfo: document.getElementById('headerCenterInfo') || document.querySelector('.header-center-info'),
            mainHeader: document.querySelector('.main-header'),
            // Clip modal elements
            clipModal: document.getElementById('clipModal'),
            clipModalTitle: document.getElementById('clipModalTitle'),
            clipInfo: document.getElementById('clipInfo'),
            clipOptions: document.getElementById('clipOptions'),
            clipDuration: document.getElementById('clipDuration'),
            clipStartTime: document.getElementById('clipStartTime'),
            clipEndTime: document.getElementById('clipEndTime'),
            exportFront: document.getElementById('exportFront'),
            exportBack: document.getElementById('exportBack'),
            exportLeft: document.getElementById('exportLeft'),
            exportRight: document.getElementById('exportRight'),
            exportLeftPillar: document.getElementById('exportLeftPillar'),
            exportRightPillar: document.getElementById('exportRightPillar'),
            addTimestamp: document.getElementById('addTimestamp'),
            mergeVideos: document.getElementById('mergeVideos'),
            clipProgress: document.getElementById('clipProgress'),
            clipProgressBar: document.getElementById('clipProgressBar'),
            clipProgressText: document.getElementById('clipProgressText'),
            startClipBtn: document.getElementById('startClipBtn'),
            cancelClipBtn: document.getElementById('cancelClipBtn'),
            closeClipModalBtn: document.getElementById('closeClipModalBtn'),
            // File path modal elements
            filePathModal: document.getElementById('filePathModal'),
            filePathModalTitle: document.getElementById('filePathModalTitle'),
            filePathInput: document.getElementById('filePathInput'),
            copyPathBtn: document.getElementById('copyPathBtn'),
            copySuccessHint: document.getElementById('copySuccessHint'),
            closeFilePathModalBtn: document.getElementById('closeFilePathModalBtn'),
        };
        this.videoListComponent = new VideoListComponent('fileList', (eventId) => this.playEvent(eventId), this);
        this.multiCameraPlayer = new MultiCameraPlayer();
        this.continuousPlayer = new ContinuousVideoPlayer(this.multiCameraPlayer);
        this.videoControls = new ModernVideoControls(this.continuousPlayer, this);
        this.initializeEventListeners();
        this.initializeFlatpickr();
        this.loadTheme();
        this.loadLanguage();
        this.bootstrapSource();
    }

    /**
     * Decide where the footage comes from.
     *
     * When the app runs in its container the user's TeslaCam folder is mounted
     * at /teslacam, so there is nothing to pick: discover it and load. Only if
     * no volume is mounted do we fall back to the local folder picker.
     */
    async bootstrapSource() {
        this.isVolumeMode = false;
        this.discovering = true;
        this.filterAndRender();
        try {
            await this.discoverSource();
        } finally {
            this.discovering = false;
        }
    }

    async discoverSource() {
        try {
            const result = await loadTeslaCamVolume();

            if (result.status === 'ok') {
                this.isVolumeMode = true;
                document.body.classList.add('volume-mode');
                await this.handleFolderSelection(result.files);
                return;
            }

            // A volume route that answers but holds the wrong thing is still
            // volume mode: showing "plug in your USB drive" would be a lie.
            if (result.status !== 'unreachable') {
                this.isVolumeMode = true;
                document.body.classList.add('volume-mode');
                this.showVolumeProblem(result);
                return;
            }
        } catch (e) {
            console.warn('[volume] discovery failed, falling back to the folder picker:', e);
        }
        this.loadLastTeslaCamPath();
    }

    showVolumeProblem(result) {
        const t = i18n[this.currentLanguage];
        const messages = {
            'forbidden': t.volumeForbidden,
            'empty': t.volumeEmpty,
            'not-teslacam': t.volumeWrongFolder,
            'no-clips': t.volumeNoClips,
            'unreachable': t.volumeUnreachable
        };
        const escape = (v) => String(v).replace(/[&<>"']/g, (c) =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        const found = result.found && result.found.length
            ? `<p class="note"><code>${result.found.map(escape).join('</code>, <code>')}</code></p>`
            : '';
        this.videoListComponent.container.innerHTML =
            `<div class="empty-state help-text">
                <p>${messages[result.status] || t.volumeUnreachable}</p>
                ${found}
            </div>`;
    }

    // Drop stale data and free memory
    cleanupOldData() {
        // Tear down the video players
        if (this.multiCameraPlayer) {
            this.multiCameraPlayer.cleanup();
        }
        
        // Release thumbnail blob URLs
        // Clear references to the old data
        this.allFiles = [];
        this.eventGroups = [];
        this.currentEvent = null;
        
        // Hint at garbage collection (browsers are free to ignore it)
        if (window.gc) {
            window.gc();
        }
        
        console.log('[cleanupOldData] Old data cleaned up');
    }

    initializeEventListeners() {
        const useFileInput = !supportsDirectoryPicker();
        
        this.dom.selectFolderBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Prefer the File System Access API (it supports persistent directory handles)
            if (supportsFileSystemAccess()) {
                await this.selectDirectoryWithFSA();
                return;
            }
            
            if (useFileInput) {
                this.dom.fileInputIOS.click();
            } else {
                this.dom.folderInput.click();
            }
        });
        this.dom.folderInput.addEventListener('change', (e) => this.handleFolderSelection(e.target.files));
        if (this.dom.hideEncrypted) {
            this.dom.hideEncrypted.checked = localStorage.getItem('hideEncrypted') === '1';
            this.dom.hideEncrypted.addEventListener('change', () => {
                localStorage.setItem('hideEncrypted', this.dom.hideEncrypted.checked ? '1' : '0');
                this.filterAndRender();
            });
        }
        if (this.dom.mapToggleBtn) {
            this.dom.mapToggleBtn.addEventListener('click', () => this.metadataManager.toggleMap());
            let wanted = false;
            try { wanted = localStorage.getItem('liveMap') === '1'; } catch { /* private mode */ }
            if (wanted) this.metadataManager.toggleMap(true);
        }
        if (this.dom.showHiddenBtn) {
            this.dom.showHiddenBtn.addEventListener('click', () => this.unhideAllClips());
        }
        this.dom.fileInputIOS.addEventListener('change', (e) => this.handleIOSFileSelection(e.target.files));

        // Drag & Drop Support
        const dropZone = document.body;
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'copy';
            this.dom.sidebar.classList.add('drag-over');
        });
        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.dom.sidebar.classList.remove('drag-over');
        });
        dropZone.addEventListener('drop', (e) => this.handleDrop(e));

        this.dom.eventFilter.addEventListener('change', () => this.filterAndRender());
        this.dom.toggleSidebarBtn.addEventListener('click', () => this.toggleSidebar());
        if (this.dom.openSidebarBtn) {
            this.dom.openSidebarBtn.addEventListener('click', () => this.toggleSidebar(true));
        }
        this.dom.overlay.addEventListener('click', () => this.toggleSidebar(false));
        
        // Mobile swipe gesture support for sidebar
        this.initSwipeGestures();
        
        this.dom.playerArea.addEventListener('click', (e) => {
            const container = e.target.closest('.video-container.is-pip');
            if (container) {
                 this.multiCameraPlayer.setCamera(container.dataset.camera);
            }
        });
        this.dom.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        this.dom.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
        
        if (this.dom.headerMenuBtn) {
            this.dom.headerMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.dom.headerRight.classList.toggle('active');
            });
            
            // Close the menu on an outside click
            document.addEventListener('click', () => {
                if (this.dom.headerRight.classList.contains('active')) {
                    this.dom.headerRight.classList.remove('active');
                }
            });
        }

        document.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));

        window.addEventListener('resize', () => this.handleResize());

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                const isDark = e.matches;
                document.body.classList.toggle('dark-theme', isDark);
                this.updateThemeIcon(isDark);
            }
        });

        // Map Modal Listeners
        this.dom.closeModalBtn.addEventListener('click', () => this.hideMapModal());
        this.dom.mapModal.addEventListener('click', (e) => {
            if (e.target === this.dom.mapModal) {
                this.hideMapModal();
            }
        });
        this.dom.googleMapBtn.addEventListener('click', () => this.openMap());
        this.dom.revealFileBtn.addEventListener('click', () => this.revealCurrentFilePath());
        this.dom.downloadFileBtn.addEventListener('click', () => this.downloadCurrentFile());
        this.dom.exportMetadataBtn.addEventListener('click', () => this.exportMetadataToCSV());
        
        // Clip modal listeners
        this.dom.closeClipModalBtn.addEventListener('click', () => this.hideClipModal());
        this.dom.cancelClipBtn.addEventListener('click', () => this.hideClipModal());
        this.dom.startClipBtn.addEventListener('click', () => this.startClipExport());
        this.dom.clipModal.addEventListener('click', (e) => {
            if (e.target === this.dom.clipModal) {
                this.hideClipModal();
            }
        });
        
        // File path modal listeners
        this.dom.closeFilePathModalBtn.addEventListener('click', () => this.hideFilePathModal());
        this.dom.copyPathBtn.addEventListener('click', () => this.copyFilePath());
        this.dom.filePathModal.addEventListener('click', (e) => {
            if (e.target === this.dom.filePathModal) {
                this.hideFilePathModal();
            }
        });

        // Initial check for header collapse after DOM is ready
        requestAnimationFrame(() => {
            this.checkHeaderCollapse();
        });
    }

    /**
     * Show a toast notification
     * @param {string} message - the message to show
     * @param {string} type - 'success' | 'error' | 'info'
     * @param {number} duration - how long to show it, in ms (default 3000)
     */
    showToast(message, type = 'success', duration = 3000) {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        // Force a reflow so the animation starts
        toast.offsetHeight;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
                if (container.children.length === 0) {
                    container.remove();
                }
            }, 300);
        }, duration);
    }

    initializeFlatpickr() {
        if (!this.dom.dateFilter) return; // Guard clause
        const lang = this.currentLanguage;
        const translations = i18n[lang];
        this.flatpickrInstance = flatpickr(this.dom.dateFilter, {
            dateFormat: "Y-m-d",
            locale: this.currentLanguage === 'fr' ? 'fr' : 'default',
            placeholder: translations.selectDate,
            disableMobile: true, // Force flatpickr on mobile instead of native picker
            onChange: (selectedDates, dateStr, instance) => {
                this.filterAndRender();
                this.updateClearDateButton();
            },
            onReady: (selectedDates, dateStr, instance) => {
                // Guard clause for onReady
                if (instance.calendarContainer) {
                    instance.calendarContainer.classList.add('teslacam-flatpickr');
                }
            }
        });
        
        // Initialize clear date button
        if (this.dom.clearDateBtn) {
            this.dom.clearDateBtn.addEventListener('click', () => this.clearDateFilter());
            this.updateClearDateButton();
        }
    }
    
    clearDateFilter() {
        if (this.flatpickrInstance) {
            this.flatpickrInstance.clear();
            this.filterAndRender();
            this.updateClearDateButton();
        }
    }
    
    updateClearDateButton() {
        if (this.dom.clearDateBtn) {
            const hasValue = this.dom.dateFilter && this.dom.dateFilter.value;
            this.dom.clearDateBtn.classList.toggle('visible', !!hasValue);
        }
    }

    handleGlobalKeydown(e) {
        const activeElement = document.activeElement;
        const isTyping = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable);


        if (e.key === ' ' && !isTyping) {
            e.preventDefault();
            this.videoControls.togglePlayPause();
        }
    }

    handleResize() {
        this.dom.sidebar.style.transition = 'none';
        
        const isCollapsed = this.dom.sidebar.classList.contains('collapsed');
        this.dom.overlay.classList.toggle('active', !isCollapsed && window.innerWidth < 768);

        setTimeout(() => {
            this.dom.sidebar.style.transition = '';
        }, 50);

        // Check if header buttons need to collapse
        this.checkHeaderCollapse();
    }

    checkHeaderCollapse() {
        const mainHeader = this.dom.mainHeader;
        const centerInfo = this.dom.headerCenterInfo;
        const actionsGroup = this.dom.headerActionsGroup;
        const headerRight = this.dom.headerRight;
        
        if (!mainHeader || !centerInfo || !actionsGroup) return;

        // Store current state
        const wasCollapsed = mainHeader.classList.contains('header-collapsed');
        
        // Close dropdown menu during resize to prevent visual glitches
        if (headerRight) {
            headerRight.classList.remove('active');
        }
        
        // Disable transitions and hide actionsGroup during measurement
        mainHeader.style.transition = 'none';
        actionsGroup.style.transition = 'none';
        actionsGroup.style.visibility = 'hidden';
        actionsGroup.style.opacity = '0';
        
        // Temporarily force non-collapsed state to measure true button width
        mainHeader.classList.remove('header-collapsed');
        
        // Force a reflow to get accurate measurements
        void mainHeader.offsetWidth;
        
        // Get bounding rects
        const centerRect = centerInfo.getBoundingClientRect();
        const actionsRect = actionsGroup.getBoundingClientRect();
        
        // Check if there's overlap (with some padding for safety)
        const padding = 16;
        const shouldCollapse = actionsRect.left < (centerRect.right + padding);

        if (shouldCollapse) {
            mainHeader.classList.add('header-collapsed');
        }
        
        // Restore styles after a frame
        requestAnimationFrame(() => {
            mainHeader.style.transition = '';
            actionsGroup.style.transition = '';
            actionsGroup.style.visibility = '';
            actionsGroup.style.opacity = '';
        });
    }

    async handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dom.sidebar.classList.remove('drag-over');

        const items = e.dataTransfer.items;
        if (!items) return;

        const files = [];
        const queue = [];

        // Normalize items to entries
        for (let i = 0; i < items.length; i++) {
            const entry = items[i].webkitGetAsEntry ? items[i].webkitGetAsEntry() : null;
            if (entry) {
                queue.push(entry);
            }
        }

        // Recursive scan
        while (queue.length > 0) {
            const entry = queue.shift();
            if (entry.isFile) {
                try {
                    const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
                    // Manually attach webkitRelativePath based on fullPath
                    // entry.fullPath usually starts with /
                    const relativePath = entry.fullPath.startsWith('/') ? entry.fullPath.slice(1) : entry.fullPath;
                    
                    // We need to define property because webkitRelativePath is read-only
                    Object.defineProperty(file, 'webkitRelativePath', {
                        value: relativePath,
                        writable: false
                    });
                    files.push(file);
                } catch (err) {
                    console.error("Error reading file:", entry.name, err);
                }
            } else if (entry.isDirectory) {
                try {
                    const dirReader = entry.createReader();
                    // readEntries might not return all files at once, need to loop
                    const readEntries = async () => {
                        return new Promise((resolve, reject) => {
                            dirReader.readEntries(resolve, reject);
                        });
                    };
                    
                    let entries;
                    do {
                        entries = await readEntries();
                        for (const childEntry of entries) {
                            queue.push(childEntry);
                        }
                    } while (entries.length > 0);
                } catch (err) {
                     console.error("Error reading directory:", entry.name, err);
                }
            }
        }

        if (files.length > 0) {
            this.handleFolderSelection(files);
        }
    }



    async handleFolderSelection(files) {
        // Drop stale data and free memory
        this.cleanupOldData();
        
        this.allFiles = Array.from(files);
        
        console.log('[handleFolderSelection] Total files:', this.allFiles.length);
        // Log sample paths for debugging

        const hasTeslaCamSubfolders = this.allFiles.some(file => 
            file.webkitRelativePath.includes('RecentClips/') ||
            file.webkitRelativePath.includes('SavedClips/') ||
            file.webkitRelativePath.includes('SentryClips/')
        );
        
        console.log('[handleFolderSelection] hasTeslaCamSubfolders:', hasTeslaCamSubfolders);

        if (!hasTeslaCamSubfolders) {
            alert(i18n[this.currentLanguage].invalidFolder);
            this.dom.folderInput.value = ''; 
            this.allFiles = [];
            this.showInitialHelpMessage();
            return;
        }

        // Must run before processFiles: the whole encrypted tree needs routing
        // through the sidecar, event.json included, or it parses as ciphertext.
        const encryption = await markEncryptedFiles(this.allFiles);

        this.eventGroups = await this.processFiles(this.allFiles);
        await markEncryptedEvents(this.eventGroups, encryption.decryptable);
        console.log('[handleFolderSelection] eventGroups:', this.eventGroups.length);
        this.filterAndRender();
    }

    async handleIOSFileSelection(files) {
        if (!files || files.length === 0) return;
        
        // Convert files to array and add fake webkitRelativePath based on filename
        this.allFiles = Array.from(files).map(file => {
            // TeslaCam filename format: 2024-01-15_12-30-00-front.mp4
            // Create a fake path structure for iOS
            const timestampMatch = file.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})-\d{2}/);
            if (timestampMatch) {
                // Create fake relative path: RecentClips/2024-01-15_12-30/filename.mp4
                const eventFolder = timestampMatch[1].replace(/_/g, '-');
                const fakePath = `RecentClips/${eventFolder}/${file.name}`;
                // Create a new object that mimics the file with webkitRelativePath
                return Object.defineProperty(file, 'webkitRelativePath', {
                    value: fakePath,
                    writable: false
                });
            }
            return file;
        });

        const validFiles = this.allFiles.filter(f => f.webkitRelativePath && f.name.endsWith('.mp4'));
        
        if (validFiles.length === 0) {
            const lang = this.currentLanguage;
            alert('No valid TeslaCam video files found. Please select video files with filename format like "2024-01-15_12-30-00-front.mp4".');
            this.dom.fileInputIOS.value = '';
            this.allFiles = [];
            this.showInitialHelpMessage();
            return;
        }

        // Must run before processFiles: the whole encrypted tree needs routing
        // through the sidecar, event.json included, or it parses as ciphertext.
        const encryption = await markEncryptedFiles(this.allFiles);

        this.eventGroups = await this.processFiles(this.allFiles);
        await markEncryptedEvents(this.eventGroups, encryption.decryptable);
        this.filterAndRender();
    }

    async processFiles(files) {
        const eventMap = new Map();
        const videoFiles = files.filter(f => f.name.endsWith('.mp4'));
        for (const file of videoFiles) {
            const eventType = this.getEventType(file.webkitRelativePath);
            if (eventType === 'Unknown') continue;
            const timestampMatch = file.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})-\d{2}/);
            if (!timestampMatch) continue;
            const eventId = file.webkitRelativePath.substring(0, file.webkitRelativePath.lastIndexOf('/'));
            if (!eventMap.has(eventId)) eventMap.set(eventId, { eventId, eventType, segments: new Map() });
            const event = eventMap.get(eventId);
            const minuteTimestamp = timestampMatch[1];
            if (!event.segments.has(minuteTimestamp)) event.segments.set(minuteTimestamp, { timestamp: minuteTimestamp, files: {} });
            const segment = event.segments.get(minuteTimestamp);
            const cameraType = this.getCameraType(file.name);
            if (cameraType) segment.files[cameraType] = file;
        }

        const jsonFiles = files.filter(f => f.name === 'event.json');
        console.log('[processFiles] Found event.json files:', jsonFiles.length);
        for (const jsonFile of jsonFiles) {
            const eventId = jsonFile.webkitRelativePath.substring(0, jsonFile.webkitRelativePath.lastIndexOf('/'));
            if (eventMap.has(eventId)) {
                try {
                    const textContent = await jsonFile.text();
                    const eventData = JSON.parse(textContent);
                    const eventObj = eventMap.get(eventId);
                    eventObj.city = eventData.city;
                    eventObj.street = eventData.street;
                    eventObj.eventTimestamp = eventData.timestamp;
                    eventObj.lat = eventData.est_lat;
                    eventObj.lon = eventData.est_lon;
                } catch (e) {
                    // Expected while an encrypted event.json cannot be decrypted:
                    // the event still works, it just has no city or coordinates.
                    if (!jsonFile.useDecrypt) {
                        console.warn(`[processFiles] unreadable event.json for ${eventId}: ${e.message}`);
                    }
                }
            }
        }

        const thumbFiles = files.filter(f => f.name === 'thumb.png');
        for(const thumb of thumbFiles) {
            const thumbDir = thumb.webkitRelativePath.substring(0, thumb.webkitRelativePath.lastIndexOf('/'));
            if (eventMap.has(thumbDir)) eventMap.get(thumbDir).thumbFile = thumb;
        }
        return Array.from(eventMap.values()).map(event => {
            event.segments = Array.from(event.segments.values()).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
            if (event.segments.length > 0) {
                // Try to get precise start time from the first file of the first segment
                const firstSegment = event.segments[0];
                const firstFile = Object.values(firstSegment.files)[0];
                if (firstFile) {
                    const match = firstFile.name.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (match) {
                        event.startTime = match[1];
                    } else {
                        event.startTime = firstSegment.timestamp;
                    }
                } else {
                    event.startTime = firstSegment.timestamp;
                }
            }
            return event;
        }).filter(e => e.segments.length > 0).sort((a, b) => b.startTime.localeCompare(a.startTime));
    }

    /* Clips the user has hidden by hand. Kept per browser: it is a view
       preference, not something to write back onto a read-only volume. */
    loadHiddenClips() {
        try {
            return new Set(JSON.parse(localStorage.getItem('hiddenClips') || '[]'));
        } catch {
            return new Set();
        }
    }

    saveHiddenClips() {
        try {
            localStorage.setItem('hiddenClips', JSON.stringify([...this.hiddenClips]));
        } catch { /* private mode, or storage full: the filter just will not persist */ }
    }

    hideClip(eventId) {
        this.hiddenClips.add(eventId);
        this.saveHiddenClips();
        this.filterAndRender();
    }

    unhideAllClips() {
        this.hiddenClips.clear();
        this.saveHiddenClips();
        this.filterAndRender();
    }

    filterAndRender() {
        const dateFilter = this.dom.dateFilter.value;
        const eventFilter = this.dom.eventFilter.value;
        const hideEncrypted = this.dom.hideEncrypted && this.dom.hideEncrypted.checked;

        const filteredEvents = this.eventGroups.filter(event =>
            (!dateFilter || event.startTime.startsWith(dateFilter)) &&
            (!eventFilter || event.eventType === eventFilter) &&
            !(hideEncrypted && event.encrypted) &&
            !this.hiddenClips.has(event.eventId)
        );

        this.updateHiddenCount();
        this.videoListComponent.render(filteredEvents);
    }

    updateHiddenCount() {
        const btn = this.dom.showHiddenBtn;
        if (!btn) return;
        const hidden = this.eventGroups.filter(e => this.hiddenClips.has(e.eventId)).length;
        btn.hidden = hidden === 0;
        const t = i18n[this.currentLanguage];
        btn.textContent = `${hidden} ${hidden === 1 ? t.showHiddenOne : t.showHidden}`;
    }

    async playEvent(eventId) {
        const event = this.eventGroups.find(e => e.eventId === eventId);
        if (!event) return;

        // An encrypted clip is not MP4 at all, so without the decryption
        // sidecar the player would fail with an opaque decode error. Explain
        // instead. With the sidecar it plays like any other clip.
        if (event.encrypted && !event.decryptable) {
            this.showEncryptedNotice();
            return;
        }
        this.hideEncryptedNotice();

        this.currentEvent = event;

        if (this.dom.headerLocationDisplay) {
            if (event.city && event.lat && event.lon) {
                const locationText = event.street ? `${event.city} · ${event.street}` : event.city;
                this.dom.headerLocationDisplay.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-map-pin"/></svg> <span class="city-text">${locationText}</span>`;
                this.dom.headerLocationDisplay.onclick = () => this.showMapModal(event.lat, event.lon);
                this.dom.headerLocationDisplay.style.display = 'block';
            } else {
                this.dom.headerLocationDisplay.innerHTML = '';
                this.dom.headerLocationDisplay.onclick = null;
                this.dom.headerLocationDisplay.style.display = 'none';
            }
        }

        this.dom.playerArea.classList.remove('empty');

        this.videoControls.setEventStartTime(event.startTime);
        
        // Check for pillars and update UI
        const hasPillars = event.segments.some(seg => seg.files.left_pillar || seg.files.right_pillar);
        this.videoControls.updatePillarButtons(hasPillars);

        if (!event.totalDuration || event.totalDuration <= 0) {
            await this.continuousPlayer.calculateEventDurations(event);
        }

        await this.continuousPlayer.loadEvent(event); 
        this.videoControls.setTotalDuration(this.continuousPlayer.getTotalDuration());
        this.videoControls.addEventMarkers(event);
        
        // Load speed graph for entire event (async, don't block playback)
        this.loadSpeedGraphForEvent(event);
        
        // Default to Legacy (PIP) view with Front camera
        this.multiCameraPlayer.setCamera('front');
        this.multiCameraPlayer.setLayout('legacy');
        this.videoControls.updateViewSwitcherUI('legacy');

        await this.multiCameraPlayer.playAll();

        document.querySelectorAll('.video-card.active').forEach(c => c.classList.remove('active'));
        document.querySelector(`.video-card[data-event-id="${eventId}"]`)?.classList.add('active');
        if (window.innerWidth < 768) this.toggleSidebar(false);
    }
    
    /**
     * Load speed data for all segments and draw the speed graph
     */
    async loadSpeedGraphForEvent(event) {
        if (!event || !event.segments || event.segments.length === 0) {
            this.videoControls.clearSpeedGraph();
            return;
        }
        
        try {
            const allSegmentsMetadata = [];
            const segmentDurations = event.segmentDurations || [];
            
            for (let i = 0; i < event.segments.length; i++) {
                const segment = event.segments[i];
                const file = segment.files?.front;
                
                if (!file) {
                    allSegmentsMetadata.push([]);
                    continue;
                }
                
                try {
                    let buffer;
                    if (file instanceof File) {
                        buffer = await file.arrayBuffer();
                    } else if (file && typeof file.arrayBuffer === 'function') {
                        buffer = await file.arrayBuffer();
                    } else if (file && file.path) {
                        const response = await fetch(getFileUrl(file));
                        buffer = await response.arrayBuffer();
                    } else {
                        allSegmentsMetadata.push([]);
                        continue;
                    }
                    
                    const parser = new DashcamMP4(buffer);
                    const rawMetadata = parser.parseMetadata();
                    
                    if (this.metadataManager && this.metadataManager.SeiMetadata) {
                        const segmentMeta = rawMetadata.map(item => {
                            try {
                                const decoded = this.metadataManager.SeiMetadata.decode(item.data);
                                return {
                                    time: item.time,
                                    data: this.metadataManager.SeiMetadata.toObject(decoded, { enums: String, longs: String })
                                };
                            } catch {
                                return null;
                            }
                        }).filter(Boolean);
                        allSegmentsMetadata.push(segmentMeta);
                    } else {
                        allSegmentsMetadata.push([]);
                    }
                } catch (err) {
                    console.warn(`[SpeedGraph] Failed to load metadata for segment ${i}:`, err);
                    allSegmentsMetadata.push([]);
                }
            }
            
            this.videoControls.drawSpeedGraph(allSegmentsMetadata, segmentDurations);
        } catch (err) {
            console.error('[SpeedGraph] Error loading speed graph:', err);
            this.videoControls.clearSpeedGraph();
        }
    }
    
    /**
     * Export all metadata from the current event to a CSV file
     */
    async exportMetadataToCSV() {
        const lang = this.currentLanguage;
        const translations = i18n[lang];
        
        if (!this.currentEvent || !this.currentEvent.segments) {
            alert(translations.exportMetadataNoData);
            return;
        }
        
        try {
            const allMetadata = [];
            const segmentDurations = this.currentEvent.segmentDurations || [];
            let accumulatedTime = 0;
            
            // Parse event start time for timestamp calculation
            let eventStartDate = null;
            
            // Helper function to parse timestamp
            const parseTimestampStr = (timestamp) => {
                if (!timestamp) return null;
                try {
                    // Parse "2024-01-01_12-00-00" or "2024-01-01_12-00" format
                    const [datePart, timePart] = timestamp.split('_');
                    if (datePart && timePart) {
                        // Handle both HH-MM-SS and HH-MM formats
                        const timeComponents = timePart.split('-');
                        let timeStr;
                        if (timeComponents.length >= 3) {
                            // Has seconds: HH-MM-SS
                            timeStr = `${timeComponents[0]}:${timeComponents[1]}:${timeComponents[2]}`;
                        } else if (timeComponents.length === 2) {
                            // No seconds: HH-MM, add :00
                            timeStr = `${timeComponents[0]}:${timeComponents[1]}:00`;
                        } else {
                            return null;
                        }
                        const result = new Date(`${datePart}T${timeStr}`);
                        console.log(`[ExportCSV] Parsed timestamp: "${timestamp}" -> "${datePart}T${timeStr}" -> ${result}`);
                        return result;
                    }
                } catch (e) {
                    console.warn('[ExportCSV] Failed to parse timestamp:', timestamp, e);
                }
                return null;
            };
            
            // Try event.startTime first
            console.log('[ExportCSV] event.startTime:', this.currentEvent.startTime);
            if (this.currentEvent.startTime) {
                eventStartDate = parseTimestampStr(this.currentEvent.startTime);
            }
            
            // Fallback: try to get timestamp from first segment
            if (!eventStartDate || isNaN(eventStartDate.getTime())) {
                const firstSegment = this.currentEvent.segments[0];
                if (firstSegment?.timestamp) {
                    eventStartDate = parseTimestampStr(firstSegment.timestamp);
                } else if (firstSegment?.files?.front) {
                    // Try to extract from filename (e.g., "2024-01-14_21-13-36-front.mp4")
                    const frontFile = firstSegment.files.front;
                    const filename = frontFile.name || frontFile.path?.split(/[/\\]/).pop() || '';
                    const match = filename.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (match) {
                        eventStartDate = parseTimestampStr(match[1]);
                    }
                }
            }
            
            console.log('[ExportCSV] Event start date:', eventStartDate);
            
            // Load metadata from all segments
            for (let i = 0; i < this.currentEvent.segments.length; i++) {
                const segment = this.currentEvent.segments[i];
                const file = segment.files?.front;
                const segmentStartTime = accumulatedTime;
                
                // Get segment-specific timestamp - prioritize filename (has full timestamp with seconds)
                let segmentBaseDate = null;
                
                // First try to extract from filename (most accurate, includes seconds)
                if (file) {
                    const filename = file.name || file.path?.split(/[/\\]/).pop() || '';
                    const match = filename.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2})/);
                    if (match) {
                        segmentBaseDate = parseTimestampStr(match[1]);
                        console.log(`[ExportCSV] Segment ${i} timestamp from filename: ${match[1]}`);
                    }
                }
                
                // Fallback to segment.timestamp if filename parsing failed
                if (!segmentBaseDate && segment.timestamp) {
                    segmentBaseDate = parseTimestampStr(segment.timestamp);
                }
                
                // Final fallback to event start date
                if (!segmentBaseDate) {
                    segmentBaseDate = eventStartDate;
                }
                
                if (file) {
                    try {
                        let buffer;
                        if (file instanceof File) {
                            buffer = await file.arrayBuffer();
                        } else if (file && typeof file.arrayBuffer === 'function') {
                            buffer = await file.arrayBuffer();
                        } else if (file && file.path) {
                            const response = await fetch(getFileUrl(file));
                            buffer = await response.arrayBuffer();
                        }
                        
                        if (buffer) {
                            const parser = new DashcamMP4(buffer);
                            const rawMetadata = parser.parseMetadata();
                            
                            if (this.metadataManager && this.metadataManager.SeiMetadata) {
                                for (const item of rawMetadata) {
                                    try {
                                        const decoded = this.metadataManager.SeiMetadata.decode(item.data);
                                        const data = this.metadataManager.SeiMetadata.toObject(decoded, { enums: String, longs: String });
                                        const eventTime = segmentStartTime + item.time;
                                        
                                        // Calculate actual timestamp using segment-specific base date
                                        let timestamp = '';
                                        if (segmentBaseDate && !isNaN(segmentBaseDate.getTime())) {
                                            // Use item.time (time within segment) + segment base date
                                            const recordTime = new Date(segmentBaseDate.getTime() + item.time * 1000);
                                            timestamp = this.formatDateTimeForCSV(recordTime);
                                        }
                                        
                                        allMetadata.push({
                                            timestamp,
                                            segmentIndex: i,
                                            segmentTime: item.time,
                                            eventTime,
                                            ...data
                                        });
                                    } catch {
                                        // Skip invalid items
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        console.warn(`[ExportCSV] Failed to load metadata for segment ${i}:`, err);
                    }
                }
                
                accumulatedTime += segmentDurations[i] || 60;
            }
            
            if (allMetadata.length === 0) {
                alert(translations.exportMetadataNoData);
                return;
            }
            
            // Define CSV columns (timestamp first)
            const columns = [
                'timestamp',
                'segmentIndex',
                'segmentTime',
                'eventTime',
                'vehicleSpeedMps',
                'speedKmh',
                'gearState',
                'steeringWheelAngle',
                'acceleratorPedalPosition',
                'brakeApplied',
                'blinkerOnLeft',
                'blinkerOnRight',
                'autopilotState',
                'latitudeDeg',
                'longitudeDeg',
                'headingDeg',
                'linearAccelerationMps2X',
                'linearAccelerationMps2Y',
                'linearAccelerationMps2Z'
            ];
            
            // Build CSV content
            const csvLines = [];
            // Always include timestamp in header
            csvLines.push(columns.join(','));
            
            console.log(`[ExportCSV] Building CSV with ${allMetadata.length} records, first item timestamp: "${allMetadata[0]?.timestamp || 'empty'}"`);
            
            for (const item of allMetadata) {
                const speedKmh = ((item.vehicleSpeedMps || 0) * 3.6).toFixed(2);
                const row = columns.map(col => {
                    if (col === 'speedKmh') return speedKmh;
                    if (col === 'timestamp') return item.timestamp || '';
                    const val = item[col];
                    if (val === undefined || val === null) return '';
                    if (typeof val === 'number') return val.toFixed(6);
                    if (typeof val === 'boolean') return val ? 'true' : 'false';
                    // Escape strings with commas or quotes
                    const str = String(val);
                    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                        return `"${str.replace(/"/g, '""')}"`;
                    }
                    return str;
                });
                csvLines.push(row.join(','));
            }
            
            const csvContent = csvLines.join('\n');
            
            // Generate filename with event timestamp
            const eventTime = this.currentEvent.startTime || new Date().toISOString();
            const safeTimestamp = eventTime.replace(/[:\s]/g, '-').replace(/\//g, '-');
            const filename = `tesla_metadata_${safeTimestamp}.csv`;
            
            // Web environment: Try to use File System Access API for save dialog
            if ('showSaveFilePicker' in window) {
                try {
                    const fileHandle = await window.showSaveFilePicker({
                        suggestedName: filename,
                        types: [{
                            description: 'CSV File',
                            accept: { 'text/csv': ['.csv'] }
                        }]
                    });
                    
                    const writable = await fileHandle.createWritable();
                    await writable.write(csvContent);
                    await writable.close();
                    
                    console.log(`[ExportCSV] Exported ${allMetadata.length} metadata records`);
                    return;
                } catch (err) {
                    // User cancelled or API not supported, fall back to download
                    if (err.name === 'AbortError') {
                        console.log('[ExportCSV] User cancelled save dialog');
                        return;
                    }
                    console.warn('[ExportCSV] File System Access API failed, falling back to download:', err);
                }
            }
            
            // Fallback: download the file directly
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            console.log(`[ExportCSV] Exported ${allMetadata.length} metadata records to ${filename}`);
        } catch (err) {
            console.error('[ExportCSV] Error exporting metadata:', err);
            alert(translations.exportFailed + err.message);
        }
    }
    
    /**
     * Format date time for CSV export (YYYY-MM-DD HH:mm:ss)
     */
    formatDateTimeForCSV(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    switchCamera(viewId) {
        if (!this.currentEvent) return;
        
        if (['grid', 'grid4', 'legacy'].includes(viewId)) {
            this.multiCameraPlayer.setLayout(viewId);
        } else {
            this.multiCameraPlayer.setCamera(viewId);
            this.multiCameraPlayer.setLayout('single');
        }
        this.videoControls.updateViewSwitcherUI(viewId);
    }

    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateThemeIcon(isDark);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        let isDark;
        if (savedTheme) {
            isDark = savedTheme === 'dark';
        } else {
            isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        document.body.classList.toggle('dark-theme', isDark);
        this.updateThemeIcon(isDark);
    }

    updateThemeIcon(isDark) {
        if (this.dom.themeToggleBtn) {
            const iconEl = this.dom.themeToggleBtn.querySelector('.btn-icon');
            if (iconEl) {
                iconEl.innerHTML = isDark
                    ? '<svg class="icon" aria-hidden="true"><use href="#i-moon"/></svg>'
                    : '<svg class="icon" aria-hidden="true"><use href="#i-sun"/></svg>';
            } else {
                this.dom.themeToggleBtn.innerHTML = isDark
                    ? '<svg class="icon" aria-hidden="true"><use href="#i-moon"/></svg>'
                    : '<svg class="icon" aria-hidden="true"><use href="#i-sun"/></svg>';
            }
            this.dom.themeToggleBtn.title = i18n[this.currentLanguage][isDark ? 'toggleDay' : 'toggleNight'];
        }
    }

    showInitialHelpMessage() {
        const lang = this.currentLanguage;
        const translations = i18n[lang];
        const useFileInput = !supportsDirectoryPicker();
        
        const step1 = useFileInput ? translations.helpStep1IOS : translations.helpStep1;
        const step2 = useFileInput ? translations.helpStep2IOS : translations.helpStep2;
        
        const helpHtml = `
            <div class="empty-state help-text">
                <ol>
                    <li>${step1}</li>
                    <li>${step2}</li>
                </ol>
                <p class="note">${translations.helpNote}</p>
            </div>
        `;
        this.videoListComponent.container.innerHTML = helpHtml;
    }

    toggleLanguage() {
        const newLang = this.currentLanguage === 'fr' ? 'en' : 'fr';
        this.setLanguage(newLang);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
        // Guard clause for flatpickr instance and its methods
        if (this.flatpickrInstance && typeof this.flatpickrInstance.set === 'function') {
            const isFrench = lang === 'fr';
            this.flatpickrInstance.set('locale', isFrench ? 'fr' : 'default');
            this.flatpickrInstance.redraw();
        }
        // Guard clause for dateFilter element
        if (this.dom.dateFilter) {
            this.dom.dateFilter.placeholder = i18n[lang].selectDate;
        }
        this.updateAllUIText(lang);
    }

    loadLanguage() {
        const savedLang = localStorage.getItem('language');
        let lang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        // Guard against a stale/unknown value left in localStorage
        if (savedLang && i18n[savedLang]) {
            lang = savedLang;
        }
        this.setLanguage(lang);
    }

    async loadLastTeslaCamPath() {
        
        // Web: the directory handle is kept via the File System Access API and IndexedDB
        if (supportsFileSystemAccess()) {
            try {
                const handle = await getDirectoryHandle();
                if (!handle) {
                    console.log('[loadLastTeslaCamPath] No saved directory handle found');
                    return;
                }
                
                console.log('[loadLastTeslaCamPath] Found saved directory handle:', handle.name);
                
                // Request permission (the user may need to re-authorise)
                const permission = await handle.requestPermission({ mode: 'read' });
                if (permission !== 'granted') {
                    console.log('[loadLastTeslaCamPath] Permission denied, clearing saved handle');
                    await clearDirectoryHandle();
                    return;
                }
                
                // Load the directory
                console.log('[loadLastTeslaCamPath] Auto-loading directory from handle...');
                await this.loadDirectoryFromHandle(handle);
            } catch (e) {
                console.warn('[loadLastTeslaCamPath] Failed to load saved directory handle:', e);
                await clearDirectoryHandle();
            }
        } else {
            console.log('[loadLastTeslaCamPath] File System Access API not supported');
        }
    }

    /**
     * Pick a directory with the File System Access API (web build)
     */
    async selectDirectoryWithFSA() {
        try {
            const handle = await window.showDirectoryPicker({
                id: 'teslacam-directory',
                mode: 'read',
                startIn: 'documents'
            });
            
            console.log('[selectDirectoryWithFSA] Selected directory:', handle.name);
            
            // Persist the directory handle in IndexedDB
            await saveDirectoryHandle(handle);
            
            // Load the directory
            await this.loadDirectoryFromHandle(handle);
        } catch (e) {
            if (e.name === 'AbortError') {
                console.log('[selectDirectoryWithFSA] User cancelled');
                return;
            }
            console.error('[selectDirectoryWithFSA] Error:', e);
            this.showToast('Failed to open directory: ' + e.message, 'error');
        }
    }

    /**
     * Load files from a directory handle (web build)
     */
    async loadDirectoryFromHandle(handle) {
        // Show the loading state
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'fsa-loading';
        loadingDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px 40px;border-radius:8px;z-index:9999;';
        loadingDiv.textContent = 'Loading directory...';
        document.body.appendChild(loadingDiv);
        
        try {
            const files = [];
            await this.collectFilesFromHandle(handle, handle.name, files);
            
            console.log('[loadDirectoryFromHandle] Collected files:', files.length);
            
            if (files.length === 0) {
                this.showToast(i18n[this.currentLanguage].invalidFolder, 'error');
                await clearDirectoryHandle();
                return;
            }
            
            // Check for the TeslaCam subfolders
            const hasTeslaCamSubfolders = files.some(file => 
                file.webkitRelativePath.includes('RecentClips/') ||
                file.webkitRelativePath.includes('SavedClips/') ||
                file.webkitRelativePath.includes('SentryClips/')
            );
            
            if (!hasTeslaCamSubfolders) {
                this.showToast(i18n[this.currentLanguage].invalidFolder, 'error');
                await clearDirectoryHandle();
                return;
            }
            
            // Drop the stale data
            this.cleanupOldData();
            
            this.allFiles = files;
            // Must run before processFiles: the whole encrypted tree needs routing
        // through the sidecar, event.json included, or it parses as ciphertext.
        const encryption = await markEncryptedFiles(this.allFiles);

        this.eventGroups = await this.processFiles(this.allFiles);
        await markEncryptedEvents(this.eventGroups, encryption.decryptable);
            console.log('[loadDirectoryFromHandle] eventGroups:', this.eventGroups.length);
            this.filterAndRender();
            
        } finally {
            loadingDiv.remove();
        }
    }

    /**
     * Recursively collect every file in a directory
     */
    async collectFilesFromHandle(dirHandle, basePath, files) {
        for await (const entry of dirHandle.values()) {
            const entryPath = `${basePath}/${entry.name}`;
            
            if (entry.kind === 'file') {
                // Collect videos, thumbnails and event JSON
                if (entry.name.endsWith('.mp4') || entry.name.endsWith('.png') || entry.name.endsWith('.jpg') || entry.name === 'event.json') {
                    try {
                        const file = await entry.getFile();
                        // Attach a webkitRelativePath property
                        Object.defineProperty(file, 'webkitRelativePath', {
                            value: entryPath,
                            writable: false
                        });
                        files.push(file);
                    } catch (e) {
                        console.warn('[collectFilesFromHandle] Failed to get file:', entryPath, e);
                    }
                }
            } else if (entry.kind === 'directory') {
                // Recurse into subdirectories
                await this.collectFilesFromHandle(entry, entryPath, files);
            }
        }
    }


    updateAllUIText(lang) {
        const translations = i18n[lang];
        if (!translations) return;

        document.title = translations.pageTitle;
        
        // Update language toggle button text
        const langIconEl = this.dom.langToggleBtn.querySelector('.btn-icon');
        if (langIconEl) {
            langIconEl.textContent = lang === 'fr' ? 'EN' : 'FR';
        } else {
            this.dom.langToggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
        }
        
        if (this.dom.hideEncryptedLabel) this.dom.hideEncryptedLabel.textContent = translations.hideEncrypted;
        this.updateHiddenCount();
        this.dom.langToggleBtn.title = translations.toggleLanguage;
        this.dom.themeToggleBtn.title = translations.toggleTheme;
        this.dom.toggleSidebarBtn.title = translations.toggleSidebar;
        this.dom.mapModalTitle.textContent = translations.mapModalTitle;
        this.dom.googleMapBtn.textContent = translations.googleMap;
        this.dom.revealFileBtn.title = translations.revealFile;
        this.dom.downloadFileBtn.title = translations.downloadFile;
        this.dom.exportMetadataBtn.title = translations.exportMetadata;
        if (this.dom.headerMenuBtn) {
            this.dom.headerMenuBtn.title = translations.moreOptions;
        }

        document.querySelector('.sidebar-header .header-title span').textContent = translations.headerTitle;
        document.querySelector('.filter-group label[for="dateFilter"]').textContent = translations.date;
        document.querySelector('.filter-group label[for="eventFilter"]').textContent = translations.eventType;
        document.querySelector('#eventFilter option[value=""]').textContent = translations.allTypes;
        document.querySelector('#eventFilter option[value="RecentClips"]').textContent = translations.recentClips;
        document.querySelector('#eventFilter option[value="SavedClips"]').textContent = translations.savedClips;
        document.querySelector('#eventFilter option[value="SentryClips"]').textContent = translations.sentryClips;
        
        const useFileInput = !supportsDirectoryPicker();
        document.querySelector('#selectFolderBtn').textContent = useFileInput ? translations.selectFiles : translations.selectFolder;

        // Update View Switcher and other common labels
        document.querySelectorAll('[data-i18n="front"]').forEach(el => el.textContent = translations.front);
        document.querySelectorAll('[data-i18n="back"]').forEach(el => el.textContent = translations.back);
        document.querySelectorAll('[data-i18n="left"]').forEach(el => el.textContent = translations.left);
        document.querySelectorAll('[data-i18n="right"]').forEach(el => el.textContent = translations.right);
        document.querySelectorAll('[data-i18n="leftPillar"]').forEach(el => el.textContent = translations.leftPillar);
        document.querySelectorAll('[data-i18n="rightPillar"]').forEach(el => el.textContent = translations.rightPillar);
        document.querySelectorAll('[data-i18n="grid6"]').forEach(el => el.textContent = translations.grid6);
        document.querySelectorAll('[data-i18n="grid4"]').forEach(el => el.textContent = translations.grid4);
        document.querySelectorAll('[data-i18n="legacy"]').forEach(el => el.textContent = translations.legacy);

        // Update Metadata Panel and Buttons
        const metadataKeys = [
            'metadata', 'metadataDetail', 'loadingMetadata', 'noMetadata', 'speed', 'gear', 'steering', 
            'accelerator', 'brake', 'blinker', 'autopilot', 'gps', 'heading', 'acceleration',
            'revealFile', 'downloadFile', 'toggleTheme', 'toggleLanguage', 'exportMetadata'
        ];
        metadataKeys.forEach(key => {
            document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
                if (translations[key]) el.textContent = translations[key];
            });
        });

        // Update stats overlay title if open
        const statsTitle = document.getElementById('statsTitle');
        if (statsTitle) {
            statsTitle.textContent = translations.driveStats;
        }

        if (this.allFiles.length === 0) {
            this.showInitialHelpMessage();
        } else {
            this.filterAndRender();
        }
        
        this.videoControls.updatePlayState(this.multiCameraPlayer.isPlaying);
        this.videoControls.updateRealTimeClock();
    }

    toggleSidebar(forceState) {
        let isNowCollapsed;
        if (typeof forceState !== 'undefined') {
            isNowCollapsed = !forceState;
            this.dom.sidebar.classList.toggle('collapsed', isNowCollapsed);
        } else {
            isNowCollapsed = this.dom.sidebar.classList.toggle('collapsed');
        }
        
        document.body.classList.toggle('sidebar-collapsed', isNowCollapsed);
        this.dom.toggleSidebarBtn.classList.toggle('collapsed', isNowCollapsed);
        this.dom.overlay.classList.toggle('active', !isNowCollapsed && window.innerWidth < 768);
        
        // Re-check header collapse after sidebar animation completes
        setTimeout(() => this.checkHeaderCollapse(), 350);
    }

    initSwipeGestures() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const minSwipeDistance = 50;
        const maxVerticalDistance = 100;
        const edgeThreshold = 30; // Edge area for swipe-to-open

        // Swipe on sidebar to close
        this.dom.sidebar.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        this.dom.sidebar.addEventListener('touchend', (e) => {
            if (window.innerWidth >= 768) return; // Only on mobile
            
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // Swipe left to close sidebar
            if (deltaX < -minSwipeDistance && deltaY < maxVerticalDistance) {
                this.toggleSidebar(false);
            }
        }, { passive: true });

        // Swipe from left edge to open sidebar
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            if (window.innerWidth >= 768) return; // Only on mobile
            
            const isCollapsed = this.dom.sidebar.classList.contains('collapsed');
            if (!isCollapsed) return; // Only handle swipe-to-open when sidebar is hidden
            
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // Swipe right from left edge to open sidebar
            if (touchStartX < edgeThreshold && deltaX > minSwipeDistance && deltaY < maxVerticalDistance) {
                this.toggleSidebar(true);
            }
        }, { passive: true });
        
        // Initialize view switcher scroll with mouse wheel support
        this.initViewSwitcherScroll();
    }

    initViewSwitcherScroll() {
        const viewSwitcher = document.getElementById('viewSwitcher');
        if (!viewSwitcher) return;

        // Mouse wheel horizontal scroll
        viewSwitcher.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                viewSwitcher.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    async revealCurrentFilePath() {
        if (this.multiCameraPlayer.isPlaying || !this.continuousPlayer.currentEvent) {
            return;
        }
    
        const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
        const segment = this.continuousPlayer.currentEvent.segments[currentSegmentIndex];
        if (!segment) {
            alert("Could not determine file path.");
            return;
        }
    
        const activeCamera = this.multiCameraPlayer.activeCamera;
        const file = segment.files[activeCamera];
    
        
        // Fallback: show modal with file path for easy copying
        // Prefer absolute path (file.path) if available, otherwise use webkitRelativePath
        const displayPath = file?.path || file?.webkitRelativePath;
        if (displayPath) {
            this.showFilePathModal(displayPath);
        } else {
            this.showToast(i18n[this.currentLanguage].noFilePath || "Could not determine file path for the active camera.", 'error');
        }
    }
    
    showFilePathModal(filePath) {
        const translations = i18n[this.currentLanguage];
        this.dom.filePathModalTitle.textContent = translations.filePathAlertTitle;
        this.dom.filePathInput.value = filePath;
        this.dom.copySuccessHint.classList.remove('show');
        this.dom.filePathModal.style.display = 'flex';
        requestAnimationFrame(() => {
            this.dom.filePathModal.classList.add('show');
        });
        // Select the text for easy copying
        this.dom.filePathInput.select();
    }
    
    hideFilePathModal() {
        this.dom.filePathModal.classList.remove('show');
        setTimeout(() => {
            this.dom.filePathModal.style.display = 'none';
        }, 300);
    }
    
    async copyFilePath() {
        const filePath = this.dom.filePathInput.value;
        const translations = i18n[this.currentLanguage];
        try {
            await navigator.clipboard.writeText(filePath);
            this.dom.copySuccessHint.textContent = translations.copiedToClipboard;
            this.dom.copySuccessHint.classList.add('show');
            setTimeout(() => {
                this.dom.copySuccessHint.classList.remove('show');
            }, 2000);
        } catch (e) {
            // Fallback for older browsers
            this.dom.filePathInput.select();
            document.execCommand('copy');
            this.dom.copySuccessHint.textContent = translations.copiedToClipboard;
            this.dom.copySuccessHint.classList.add('show');
            setTimeout(() => {
                this.dom.copySuccessHint.classList.remove('show');
            }, 2000);
        }
    }

    async downloadCurrentFile() {
        if (this.multiCameraPlayer.isPlaying || !this.continuousPlayer.currentEvent) {
            return;
        }

        const currentSegmentIndex = this.continuousPlayer.currentSegmentIndex;
        const segment = this.continuousPlayer.currentEvent.segments[currentSegmentIndex];
        if (!segment) {
            return;
        }

        const activeCamera = this.multiCameraPlayer.activeCamera;
        const file = segment.files[activeCamera];
        if (!file) {
            return;
        }


        const a = document.createElement('a');
        const url = getFileUrl(file);
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    
    showClipModal() {
        if (!this.videoControls.clipModeActive || 
            this.videoControls.clipStartTime === null || 
            this.videoControls.clipStartTime === undefined || 
            this.videoControls.clipEndTime === null || 
            this.videoControls.clipEndTime === undefined) {
            alert(i18n[this.currentLanguage].selectClipRange);
            return;
        }
        
        const translations = i18n[this.currentLanguage];
        
        // Update modal title and labels
        this.dom.clipModalTitle.textContent = translations.exportClip;
        
        // Update labels
        document.getElementById('selectCamerasLabel').textContent = translations.selectCameras;
        document.getElementById('addTimestampLabel').textContent = translations.addTimestamp;
        document.getElementById('addMetadataLabel').textContent = translations.addMetadata;
        document.getElementById('mergeVideosLabel').textContent = translations.mergeVideos;
        this.dom.startClipBtn.textContent = translations.startExport;
        this.dom.cancelClipBtn.textContent = translations.cancel;
        
        // Update camera labels
        document.querySelectorAll('[data-i18n="front"]').forEach(el => el.textContent = translations.front);
        document.querySelectorAll('[data-i18n="back"]').forEach(el => el.textContent = translations.back);
        document.querySelectorAll('[data-i18n="left"]').forEach(el => el.textContent = translations.left);
        document.querySelectorAll('[data-i18n="right"]').forEach(el => el.textContent = translations.right);
        document.querySelectorAll('[data-i18n="leftPillar"]').forEach(el => el.textContent = translations.leftPillar);
        document.querySelectorAll('[data-i18n="rightPillar"]').forEach(el => el.textContent = translations.rightPillar);
        document.querySelectorAll('[data-i18n="grid6"]').forEach(el => el.textContent = translations.grid6);
        document.querySelectorAll('[data-i18n="grid4"]').forEach(el => el.textContent = translations.grid4);
        document.querySelectorAll('[data-i18n="legacy"]').forEach(el => el.textContent = translations.legacy);

        // Update Metadata Panel
        const metadataKeys = [
            'metadata', 'loadingMetadata', 'noMetadata', 'speed', 'gear', 'steering', 
            'accelerator', 'brake', 'blinker', 'autopilot', 'gps', 'heading', 'acceleration'
        ];
        metadataKeys.forEach(key => {
            document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
                if (translations[key]) el.textContent = translations[key];
            });
        });

        
        // Update clip info labels
        const clipDurationLabel = this.dom.clipDuration.previousElementSibling;
        const clipStartTimeLabel = this.dom.clipStartTime.previousElementSibling;
        const clipEndTimeLabel = this.dom.clipEndTime.previousElementSibling;
        if (clipDurationLabel) clipDurationLabel.textContent = translations.clipDuration;
        if (clipStartTimeLabel) clipStartTimeLabel.textContent = translations.clipStartTime;
        if (clipEndTimeLabel) clipEndTimeLabel.textContent = translations.clipEndTime;
        
        // Calculate duration
        const duration = this.videoControls.clipEndTime - this.videoControls.clipStartTime;
        this.dom.clipDuration.textContent = this.videoControls.formatTime(duration);
        
        // Calculate actual timestamps
        const event = this.continuousPlayer.currentEvent;
        if (event && event.startTime) {
            const startDate = this.parseTimestamp(event.startTime);
            const startTime = new Date(startDate.getTime() + this.videoControls.clipStartTime * 1000);
            const endTime = new Date(startDate.getTime() + this.videoControls.clipEndTime * 1000);
            
            const locale = 'en-CA';
            this.dom.clipStartTime.textContent = startTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            this.dom.clipEndTime.textContent = endTime.toLocaleString(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
        }
        
        // Reset checkboxes
        this.dom.exportFront.checked = true;
        this.dom.exportBack.checked = false;
        this.dom.exportLeft.checked = false;
        this.dom.exportRight.checked = false;
        this.dom.addTimestamp.checked = true;
        this.dom.mergeVideos.checked = false;
        
        // Hide progress
        this.dom.clipProgress.style.display = 'none';
        this.dom.startClipBtn.disabled = false;
        this.dom.startClipBtn.style.display = 'block'; // Ensure visible
        this.dom.cancelClipBtn.disabled = false;
        this.dom.cancelClipBtn.textContent = i18n[this.currentLanguage].cancel; // Reset text
        this.dom.cancelClipBtn.style.display = 'block'; // Ensure visible
        
        // Reset clip info and options state (remove disabled class)
        this.dom.clipInfo.classList.remove('disabled');
        this.dom.clipOptions.classList.remove('disabled');
        
        // Hide download buttons if any
        const downloadButtons = document.getElementById('downloadButtons');
        if (downloadButtons) {
            downloadButtons.style.display = 'none';
            downloadButtons.innerHTML = '';
        }
        
        // Show modal
        this.dom.clipModal.style.display = 'flex';
        setTimeout(() => this.dom.clipModal.classList.add('show'), 10);
    }
    
    hideClipModal() {
        // Cancel any pending export
        if (this.videoClipProcessor) {
            this.videoClipProcessor.cancelExport();
        }
        
        this.dom.clipModal.classList.remove('show');
        setTimeout(() => {
            this.dom.clipModal.style.display = 'none';
            // Reset download buttons
            const downloadButtons = document.getElementById('downloadButtons');
            if (downloadButtons) {
                downloadButtons.style.display = 'none';
                downloadButtons.innerHTML = '';
            }
            
            // Clean up pending export blobs to free memory
            if (this.pendingExportBlobs) {
                console.log('[Memory] Cleaning up pending export blobs...');
                for (const result of this.pendingExportBlobs) {
                    if (result.blob) {
                        // Clear the blob reference
                        result.blob = null;
                    }
                }
                this.pendingExportBlobs = null;
                
                // Suggest garbage collection (browser will do this automatically, but this helps)
                if (window.gc) {
                    window.gc();
                }
                console.log('[Memory] Export blobs cleaned up');
            }
        }, 300);
    }
    
    parseTimestamp(timestamp) {
        // Handles "2024-01-01_12-00-00" format
        const [datePart, timePart] = timestamp.split('_');
        return new Date(`${datePart}T${timePart.replace(/-/g, ':')}`);
    }
    
    async saveVideoFile(blob, filename) {
        try {
            // Check if File System Access API is available (Chrome 86+, Edge 86+)
            if ('showSaveFilePicker' in window) {
                try {
                    const fileHandle = await window.showSaveFilePicker({
                        suggestedName: filename,
                        types: [{
                            description: 'WebM Video',
                            accept: { 'video/webm': ['.webm'] }
                        }]
                    });

                    const writable = await fileHandle.createWritable();
                    await writable.write(blob);
                    await writable.close();

                    console.log('File saved via File System Access API');
                    this.showToast('Video saved', 'success');
                } catch (fsError) {
                    // User cancelled the save dialog or API failed
                    if (fsError.name === 'AbortError') {
                        console.log('User cancelled save dialog');
                        return;
                    }
                    throw fsError; // Re-throw other errors to fall back
                }
            } else {
                // Fallback to traditional download for older browsers
                const url = URL.createObjectURL(blob);
                console.log('Created blob URL:', url);

                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);

                await new Promise(resolve => {
                    setTimeout(() => {
                        a.click();
                        console.log('Download link clicked');
                        resolve();
                    }, 100);
                });

                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    console.log('Cleanup completed');
                }, 1000);
                
                this.showToast(`Video downloaded: ${filename}`, 'success');
            }
        } catch (downloadError) {
            console.error('Download error:', downloadError);
            alert('Download failed: ' + downloadError.message);
        }
    }

    async startClipExport() {
        const translations = i18n[this.currentLanguage];
        
        // Get selected cameras
        const cameras = [];
        if (this.dom.exportFront.checked) cameras.push('front');
        if (this.dom.exportBack.checked) cameras.push('back');
        if (this.dom.exportLeft.checked) cameras.push('left');
        if (this.dom.exportRight.checked) cameras.push('right');
        if (this.dom.exportLeftPillar && this.dom.exportLeftPillar.checked) cameras.push('left_pillar');
        if (this.dom.exportRightPillar && this.dom.exportRightPillar.checked) cameras.push('right_pillar');
        
        if (cameras.length === 0) {
            alert(translations.selectAtLeastOneCamera);
            return;
        }
        
        const addTimestamp = this.dom.addTimestamp.checked;
        const addMetadata = document.getElementById('addMetadata').checked;
        const mergeGrid = this.dom.mergeVideos.checked && cameras.length > 1;
        
        console.log('[startClipExport] Export options:', { addTimestamp, addMetadata, mergeGrid, cameras });
        
        // WEB ONLY: Ask for save location upfront to enable streaming
        let fileHandle = null;
        if ('showSaveFilePicker' in window) {
             // Only support streaming for Grid (1 file) or Single Camera (1 file)
             if (mergeGrid || cameras.length === 1) {
                  try {
                      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                      const camName = mergeGrid ? 'grid' : cameras[0];
                      // Canvas export produces WebM
                      const suggestedName = `TeslaCam_${camName}_${timestamp}.webm`;
                      
                      fileHandle = await window.showSaveFilePicker({
                          suggestedName: suggestedName,
                          types: [{
                              description: 'WebM Video',
                              accept: { 'video/webm': ['.webm'] }
                          }],
                      });
                  } catch (e) {
                      if (e.name === 'AbortError') return; // User cancelled
                      console.error('File picker failed, falling back to memory mode:', e);
                  }
             }
        }

        // Disable start button but KEEP cancel button enabled
        this.dom.startClipBtn.disabled = true;
        if (this.dom.cancelClipBtn) this.dom.cancelClipBtn.disabled = false;
        this.dom.clipInfo.classList.add('disabled');
        this.dom.clipOptions.classList.add('disabled');
        this.dom.clipProgress.style.display = 'block';
        this.dom.clipProgressBar.style.width = '0%';
        this.dom.clipProgressBar.classList.remove('indeterminate');
        this.dom.clipProgressText.textContent = translations.preparing;
        
        // Ensure buttons state
        const downloadButtons = document.getElementById('downloadButtons');
        if (downloadButtons) {
            downloadButtons.style.display = 'none';
            downloadButtons.innerHTML = '';
        }

        try {
            const event = this.continuousPlayer.currentEvent;
            
            // Add duration to segments
            const segmentsWithDuration = event.segments.map((seg, idx) => {
                return {
                    ...seg,
                    duration: event.segmentDurations[idx] || 60
                };
            });
            
            const results = await this.videoClipProcessor.processClip(
                segmentsWithDuration,
                cameras,
                this.videoControls.clipStartTime,
                this.videoControls.clipEndTime,
                addTimestamp,
                addMetadata,
                mergeGrid,
                event.startTime,
                (msg) => {
                    this.dom.clipProgressText.textContent = msg;
                    // Extract real percentage from message if available
                    const percentMatch = msg.match(/(\d+)%/);
                    if (percentMatch) {
                        // Real progress - remove indeterminate animation
                        this.dom.clipProgressBar.classList.remove('indeterminate');
                        const percent = parseInt(percentMatch[1], 10);
                        this.dom.clipProgressBar.style.width = Math.min(95, percent) + '%';
                    } else if (msg.includes('FFmpeg') || msg.toLowerCase().includes('exporting') || msg.toLowerCase().includes('writing to disk')) {
                        // FFmpeg export - use indeterminate animation
                        this.dom.clipProgressBar.classList.add('indeterminate');
                    } else {
                        // For other non-percentage messages
                        this.dom.clipProgressBar.classList.remove('indeterminate');
                        const currentWidth = parseFloat(this.dom.clipProgressBar.style.width) || 0;
                        if (currentWidth < 30) {
                            this.dom.clipProgressBar.style.width = Math.min(30, currentWidth + 5) + '%';
                        }
                    }
                },
                this.currentLanguage,
                fileHandle,
                this.metadataManager
            );
            
            this.dom.clipProgressBar.classList.remove('indeterminate');
            
            this.dom.clipProgressBar.style.width = '100%';
            
            // Browser download - Show buttons
            this.dom.clipProgressText.textContent = 'Video ready - use the button below to save it';
            
            // Disable clip info and options since video is already generated
            this.dom.clipInfo.classList.add('disabled');
            this.dom.clipOptions.classList.add('disabled');
            
            // Store results for cleanup when modal closes
            this.pendingExportBlobs = results;
            
            if (downloadButtons) {
                downloadButtons.style.display = 'flex';
                
                for (const result of results) {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                    const filename = `TeslaCam_${result.camera}_${timestamp}.webm`;
                    const isGrid = result.camera === 'grid';
                    const cameraName = isGrid ? 'Grid' : result.camera;
                    const sizeInMB = result.blob.size / (1024 * 1024);
                    const sizeText = sizeInMB >= 1 ? `${sizeInMB.toFixed(1)} MB` : `${(result.blob.size / 1024).toFixed(0)} KB`;
                    
                    const btn = document.createElement('button');
                    btn.className = `download-btn${isGrid ? ' grid-btn' : ''}`;
                    
                    if (result.saved) {
                         btn.disabled = true;
                         btn.innerHTML = `
                            <span class="btn-icon"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                            <span class="btn-text">${cameraName} saved</span>
                        `;
                         if (result.blob && result.blob.size > 0) {
                             btn.innerHTML += `<span class="btn-size">${sizeText}</span>`;
                         }
                         this.dom.clipProgressText.textContent = translations.complete;
                    } else {
                        btn.innerHTML = `
                            <span class="btn-icon"><svg class="icon" aria-hidden="true"><use href="#i-download-simple"/></svg></span>
                            <span class="btn-text">Save ${cameraName} video</span>
                            <span class="btn-size">${sizeText}</span>
                        `;
                        btn.onclick = async () => {
                            await this.saveVideoFile(result.blob, filename);
                            // Mark as downloaded
                            result.downloaded = true;
                            btn.disabled = true;
                            btn.innerHTML = `
                                <span class="btn-icon"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg></span>
                                <span class="btn-text">${cameraName} saved</span>
                                <span class="btn-size">${sizeText}</span>
                            `;
                        };
                    }
                    downloadButtons.appendChild(btn);
                }
            }
            
            // Hide both buttons since we have the X close button
            this.dom.cancelClipBtn.style.display = 'none';
            this.dom.startClipBtn.style.display = 'none';
            
        } catch (error) {
            console.error('Clip export error:', error);
            const errorMsg = error?.message || error?.toString?.() || JSON.stringify(error) || 'Unknown error';
            alert(translations.exportFailed + errorMsg);
            this.dom.clipProgress.style.display = 'none';
            this.dom.startClipBtn.disabled = false;
            this.dom.cancelClipBtn.disabled = false;
        }
    }

    showEncryptedNotice() {
        const t = i18n[this.currentLanguage];
        const area = document.getElementById('playerArea');
        if (!area) return;
        let panel = document.getElementById('encryptedNotice');
        if (!panel) {
            panel = document.createElement('div');
            panel.id = 'encryptedNotice';
            panel.className = 'encrypted-notice';
            area.appendChild(panel);
        }
        panel.innerHTML = `
            <svg class="icon icon-lg" aria-hidden="true"><use href="#i-shield-check"/></svg>
            <h3>${t.encryptedTitle}</h3>
            <p>${t.encryptedBody}</p>
            <ul>
                <li>${t.encryptedFixNew}</li>
                <li>${t.encryptedFixExisting}</li>
            </ul>
            <form class="token-form" id="tokenForm">
                <p>${t.tokenPrompt}</p>
                <input type="password" id="tokenInput" placeholder="${t.tokenPlaceholder}"
                       autocomplete="off" spellcheck="false">
                <button type="submit">${t.tokenSave}</button>
                <p class="note">${t.tokenHelp}</p>
                <p class="token-result" id="tokenResult"></p>
            </form>`;
        panel.querySelector('#tokenForm').onsubmit = (e) => {
            e.preventDefault();
            this.submitDecryptionToken(panel.querySelector('#tokenInput'), panel.querySelector('#tokenResult'));
        };
        panel.style.display = 'flex';
    }

    /**
     * Hand a fresh Tesla token to the sidecar.
     *
     * The token only ever goes to our own server, which keeps it: it is never
     * stored in the page and never displayed back.
     */
    async submitDecryptionToken(input, output) {
        const t = i18n[this.currentLanguage];
        const token = input.value.trim();
        if (!token) return;
        output.textContent = '...';
        try {
            const response = await fetch('/decrypt/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token })
            });
            const body = await response.json();
            input.value = '';
            if (!response.ok || !body.ok) {
                output.textContent = `${t.tokenBad} ${body.error || response.status}`;
                output.className = 'token-result is-error';
                return;
            }
            output.textContent = `${t.tokenOk} ${new Date(body.expiresAt).toLocaleString()}`;
            output.className = 'token-result is-ok';
            // Re-run discovery so the clips become playable without a reload.
            await this.bootstrapSource();
        } catch (e) {
            output.textContent = `${t.tokenBad} ${e.message}`;
            output.className = 'token-result is-error';
        }
    }

    hideEncryptedNotice() {
        const panel = document.getElementById('encryptedNotice');
        if (panel) panel.style.display = 'none';
    }

    showMapModal(lat, lon) {
        this.currentMapCoordinates = { lat, lon };
        this.dom.mapModal.style.display = 'flex';
        setTimeout(() => this.dom.mapModal.classList.add('show'), 10);
    }

    hideMapModal() {
        this.dom.mapModal.classList.remove('show');
        setTimeout(() => {
            this.dom.mapModal.style.display = 'none';
            this.currentMapCoordinates = null;
        }, 300);
    }

    async openMap() {
        if (!this.currentMapCoordinates) return;
        const { lat, lon } = this.currentMapCoordinates;
        const url = `https://www.google.com/maps?q=${lat},${lon}`;
        
        window.open(url, '_blank');
        this.hideMapModal();
    }

    getEventType(path) {
        if (path.includes('RecentClips/')) return 'RecentClips';
        if (path.includes('SavedClips/')) return 'SavedClips';
        if (path.includes('SentryClips/')) return 'SentryClips';
        return 'Unknown';
    }

    getCameraType(fileName) {
        if (fileName.includes('-front.mp4')) return 'front';
        if (fileName.includes('-back.mp4')) return 'back';
        if (fileName.includes('-left_repeater.mp4')) return 'left';
        if (fileName.includes('-right_repeater.mp4')) return 'right';
        if (fileName.includes('-left_pillar.mp4')) return 'left_pillar';
        if (fileName.includes('-right_pillar.mp4')) return 'right_pillar';
        return null;
    }

    destroy() { if (this.multiCameraPlayer) this.multiCameraPlayer.cleanup(); }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.viewer = new TeslaCamViewer();
        window.addEventListener('beforeunload', () => { if (window.viewer) window.viewer.destroy(); });
        console.log('TeslaCam Studio Initialized');
    } catch (error) {
        console.error("Initialization failed:", error);
        alert("Player initialization failed. Check console for details.");
    }
});