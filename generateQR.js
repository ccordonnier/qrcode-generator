import QRCode from 'qrcode';
import { writeFile } from 'fs/promises';

// Définir le schéma d'URL personnalisé
const schema = 'gemei://';

// Données à inclure dans le QR code
const data = 'biographie'; // Par exemple, une biographie

// Concaténer le schéma et les données pour former l'URL
//const url = schema + data;
const url = "gemei://init?id=049f3b0d-7693-4e01-b846-e1b8d84e92cb";
//url henri = 6f6c7f9e-e290-4231-a5f0-58cc8c5346ff
//const url = "exp://192.168.1.70:8081?id=049f3b0d-7693-4e01-b846-e1b8d84e92cb";
// Générer le QR code
(async () => {
    try {
        const qrCode = await QRCode.toDataURL(url, {
            errorCorrectionLevel: 'H', // Niveau de correction d'erreur élevé
            margin: 1 // Marge autour du QR code
        });

        // Enregistrer le QR code dans un fichier (optionnel)
        await writeFile('qrCode-nouveau-apk.png', qrCode.split(';base64,').pop(), { encoding: 'base64' });

        console.log('QR code généré avec succès !');
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
})();
