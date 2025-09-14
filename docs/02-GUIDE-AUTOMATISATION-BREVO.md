# 📧 Guide Complet : Automatisation Brevo pour l'envoi du Guide IA

## 🎯 Objectif
Configurer Brevo pour envoyer automatiquement le guide PDF à chaque nouvel inscrit.

---

## 📋 Prérequis

- ✅ Compte Brevo actif
- ✅ Liste de contacts créée
- ✅ PDF du guide prêt
- ✅ Formulaire d'inscription fonctionnel sur le site

---

## 🚀 PARTIE 1 : Configuration de base Brevo

### 1. Créer une liste de contacts dédiée

```
1. Connexion à Brevo : app.brevo.com
2. Menu : Contacts → Listes
3. Bouton : "Créer une liste"
4. Nom : "Prospects Guide IA 2026"
5. Description : "Inscrits via formulaire site pour guide IA"
6. Sauvegarder
```

### 2. Récupérer l'ID de la liste

```
1. Cliquer sur la liste créée
2. Noter l'ID (ex: 1, 2, 3...)
3. Mettre à jour dans .env.local :
   VITE_BREVO_LIST_ID=1
```

### 3. Configurer les attributs de contact

```
Menu : Contacts → Paramètres → Attributs de contact

Créer les attributs suivants :
- FIRSTNAME (Texte) - Prénom
- LASTNAME (Texte) - Nom
- COMPANY (Texte) - Entreprise
- DOWNLOAD_DATE (Date) - Date téléchargement
- GUIDE_SENT (Booléen) - Guide envoyé
```

---

## 📨 PARTIE 2 : Créer le template d'email

### 1. Accéder aux templates

```
Menu : Campaigns → Templates
Bouton : "Créer un template"
Type : "Drag & Drop Editor"
```

### 2. Structure du template

```html
OBJET : 🎁 Votre guide "Comment augmenter votre CA grâce à l'IA" est arrivé !

PREVIEW : Découvrez les 5 leviers IA pour transformer votre business en 2026...

STRUCTURE :
1. Header avec logo
2. Titre principal
3. Message de bienvenue personnalisé
4. Bouton CTA pour télécharger
5. 3 points clés du guide
6. Proposition de RDV
7. Footer avec liens sociaux
```

### 3. Contenu détaillé du template

```
========== HEADER ==========
[Logo Anandari]

========== CORPS ==========

Bonjour {{ params.FIRSTNAME }},

Merci pour votre intérêt pour l'IA stratégique !

Comme promis, voici votre guide exclusif "Comment augmenter votre CA grâce à l'IA : 
Guide stratégique 2026" que seulement 5% des dirigeants maîtrisent vraiment.

[BOUTON : Télécharger mon guide PDF →]

Dans ce guide, vous découvrirez :

✅ Les 5 leviers IA qui transforment immédiatement votre CA
✅ Les erreurs coûteuses que 90% des entreprises commettent  
✅ Notre méthode pour implémenter l'IA en 90 jours
✅ 2 cas réels d'entreprises qui ont doublé leur CA

💡 Conseil de lecture :
Commencez par la page 3 (Les 5 leviers) si vous êtes pressé.
C'est là que se trouve l'essentiel pour un ROI rapide.

📅 Envie d'aller plus loin ?
J'offre 3 audits stratégiques gratuits ce mois.
2h pour identifier VOS leviers IA prioritaires.

[BOUTON : Réserver mon audit gratuit]

À très vite,

Dan Hang
Architecte IA Stratégique
Anandari

P.S. : L'IA évolue vite. Vos concurrents aussi. 
Ne restez pas spectateur de cette révolution.

========== FOOTER ==========
LinkedIn | Email | Site web
© 2025 Anandari SASU
Se désinscrire | Préférences
```

### 4. Paramètres du template

```
Nom : "Email Guide IA 2026"
Catégorie : Lead Magnet
Tags : guide, automation, welcome
From Name : Dan Hang - Anandari
From Email : contact@anandari.com
Reply-to : contact@anandari.com
```

---

## 🤖 PARTIE 3 : Créer l'automation

### 1. Accéder aux automations

```
Menu : Automations → Créer une automation
Nom : "Envoi Guide IA 2026"
```

### 2. Configurer le déclencheur (Trigger)

```
Type : "Un contact rejoint une liste"
Liste : "Prospects Guide IA 2026"
Conditions : Aucune (tous les nouveaux)
```

### 3. Workflow détaillé

```
ÉTAPE 1 : DÉCLENCHEUR
└── Contact ajouté à la liste

ÉTAPE 2 : DÉLAI (optionnel)
└── Attendre 1 minute
    (Pour éviter l'impression de spam)

ÉTAPE 3 : ENVOYER EMAIL
└── Template : "Email Guide IA 2026"
└── Pièce jointe : guide-ia-2026.pdf

ÉTAPE 4 : METTRE À JOUR CONTACT
└── GUIDE_SENT = true
└── DOWNLOAD_DATE = aujourd'hui

ÉTAPE 5 : ATTENDRE
└── 3 jours

ÉTAPE 6 : EMAIL DE SUIVI
└── "Avez-vous eu le temps de lire le guide ?"
└── Proposition de RDV

ÉTAPE 7 : CONDITION
└── SI email ouvert → Ajouter tag "Engagé"
└── SINON → Attendre 4 jours

ÉTAPE 8 : RELANCE FINALE
└── Uniquement si pas d'ouverture
└── "Votre guide vous attend + Offre limitée"
```

### 4. Upload du PDF dans Brevo

```
1. Dans l'éditeur d'email
2. Bouton : "Ajouter une pièce jointe"
3. Upload : guide-ia-2026.pdf
4. Vérifier : Taille < 10MB
5. Alternative : Lien de téléchargement
```

---

## 🔗 PARTIE 4 : Alternative avec lien de téléchargement

### Si le PDF est trop lourd ou pour tracker les téléchargements :

### 1. Héberger le PDF

```
Option A : Sur votre site
- Upload dans : public/downloads/
- URL : https://anandari.com/downloads/guide-ia-2026.pdf

Option B : Cloud
- OneDrive/Google Drive/Dropbox
- Générer lien public
- Raccourcir avec Bitly pour tracking
```

### 2. Créer un bouton dans l'email

```html
<!-- Bouton HTML -->
<table cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td bgcolor="#f59e0b" style="padding: 12px 30px; border-radius: 5px;">
      <a href="URL_DU_PDF" style="color: white; text-decoration: none; font-weight: bold;">
        📥 Télécharger le guide (PDF - 2MB)
      </a>
    </td>
  </tr>
</table>
```

### 3. Tracker les clics

```
Dans Brevo :
1. Le lien est automatiquement tracké
2. Voir : Statistiques → Clics par lien
3. Exporter la liste des cliqueurs
```

---

## 📊 PARTIE 5 : Séquence email complète

### Email 1 : Immédiat
```
Objet : 🎁 Votre guide IA est arrivé !
Contenu : Guide + 3 points clés
CTA : Télécharger
```

### Email 2 : J+3
```
Objet : Avez-vous identifié vos 5 leviers IA ?
Contenu : Focus sur 1 levier + cas client
CTA : Réserver audit gratuit
```

### Email 3 : J+7
```
Objet : 87% des dirigeants font cette erreur avec l'IA
Contenu : Erreur #1 du guide + solution
CTA : Discuter 15 min
```

### Email 4 : J+14
```
Objet : [Dernière chance] Votre audit IA gratuit
Contenu : Urgence + Témoignage + Garantie
CTA : Réserver maintenant
```

### Email 5 : J+30
```
Objet : Nouveautés IA de ce mois
Contenu : Newsletter valeur + tips
CTA : Soft (LinkedIn, blog)
```

---

## ⚙️ PARTIE 6 : Configuration API (pour développeurs)

### 1. Webhook pour notification temps réel

```javascript
// Dans Brevo : Paramètres → Webhook
URL : https://anandari.com/api/new-lead
Events : contact_created, email_opened, link_clicked

// Endpoint sur votre serveur
app.post('/api/new-lead', (req, res) => {
  const { email, firstName, lastName } = req.body;
  // Notification Slack/Discord
  // CRM update
  // Analytics
});
```

### 2. Double opt-in (RGPD)

```javascript
// Modifier GuideModal.jsx
const handleSubmit = async (e) => {
  // ... code existant ...
  
  // Ajouter double opt-in
  await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email: formData.email,
      templateId: 1, // Template confirmation
      redirectionUrl: 'https://anandari.com/merci'
    })
  });
};
```

---

## 📈 PARTIE 7 : Analytics et optimisation

### 1. KPIs à suivre dans Brevo

```
Dashboard → Créer un rapport

Métriques clés :
- Taux d'ouverture (objectif : >40%)
- Taux de clic (objectif : >15%)
- Téléchargements du guide
- Conversions en RDV
- Désabonnements (<2%)
```

### 2. A/B Testing

```
Variables à tester :
- Objet : "Votre guide" vs "📥 Guide offert"
- Délai : Immédiat vs 5 minutes
- CTA : Bouton vs Lien texte
- Longueur : Court vs Détaillé
```

### 3. Segmentation avancée

```
Créer segments :
- "Engagés" : Ont ouvert + cliqué
- "Tièdes" : Ont ouvert sans cliquer
- "Froids" : Jamais ouvert
- "VIP" : Entreprise connue

Actions :
- Engagés → Proposition commerciale
- Tièdes → Contenu éducatif
- Froids → Réactivation
- VIP → Approche personnalisée
```

---

## 🚨 PARTIE 8 : Checklist de lancement

### Avant d'activer l'automation :

- [ ] **Template email**
  - [ ] Testé sur mobile
  - [ ] Liens fonctionnels
  - [ ] Personnalisation {{ params.FIRSTNAME }}
  - [ ] PDF attaché ou lien actif

- [ ] **Automation**
  - [ ] Workflow complet configuré
  - [ ] Délais appropriés
  - [ ] Conditions logiques
  - [ ] Tags et attributs

- [ ] **Tests**
  - [ ] Inscription test avec votre email
  - [ ] Réception de l'email
  - [ ] Téléchargement du PDF
  - [ ] Tracking des ouvertures

- [ ] **Légal**
  - [ ] Lien de désinscription
  - [ ] Mentions RGPD
  - [ ] Adresse postale (obligatoire)

- [ ] **Monitoring**
  - [ ] Notifications erreurs
  - [ ] Backup des contacts
  - [ ] Rapport hebdomadaire

---

## 💡 Tips avancés

### 1. Personnalisation poussée

```
Bonjour {{ params.FIRSTNAME | capitalize | default: "Champion" }},

{% if params.COMPANY %}
  J'espère que tout va bien chez {{ params.COMPANY }}.
{% endif %}
```

### 2. Urgence et rareté

```
⏰ Attention : Plus que 2 audits gratuits disponibles
📅 Prochains créneaux : Mardi 14h, Jeudi 10h
🔥 37 dirigeants ont téléchargé ce guide cette semaine
```

### 3. Social proof

```
"Ce guide m'a fait gagner 6 mois"
- Thomas D., CEO SaaS RH

"ROI visible en 30 jours"
- Marie L., Dir. Innovation
```

### 4. Multi-canal

```
Email → LinkedIn → SMS → Retargeting

1. Email avec guide
2. Connection LinkedIn automatique
3. SMS de rappel RDV (si consent)
4. Pub LinkedIn/Google si pas d'action
```

---

## 🎯 Action immédiate

1. **5 minutes :** Créer le template email
2. **10 minutes :** Configurer l'automation simple
3. **2 minutes :** Faire un test complet
4. **Activer !**

Votre machine à leads est prête ! 🚀

---

## 📞 Support

- Documentation Brevo : developers.brevo.com
- Support : support@brevo.com
- Communauté : community.brevo.com

Besoin d'aide ? contact@anandari.com