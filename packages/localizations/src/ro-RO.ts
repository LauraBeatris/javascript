import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Verificarea telefonului dvs',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare trimis la numărul dvs. de telefon',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
  },
} as const;

export const roRO: LocalizationResource = {
  locale: 'ro-RO',
  socialButtonsBlockButton: 'Continuați cu {{provider|titleize}}',
  dividerText: 'sau',
  formFieldLabel__emailAddress: 'Adresa de e-mail',
  formFieldLabel__emailAddresses: 'Adrese de e-mail',
  formFieldLabel__phoneNumber: 'Număr de telefon',
  formFieldLabel__username: 'Nume utilizator',
  formFieldLabel__emailAddress_username: 'Adresa de e-mail sau numele de utilizator',
  formFieldLabel__password: 'Parola',
  formFieldLabel__currentPassword: 'Parola curentă',
  formFieldLabel__newPassword: 'Parolă nouă',
  formFieldLabel__confirmPassword: 'Confirmați parola',
  formFieldLabel__signOutOfOtherSessions: 'Deconectați-vă de pe toate celelalte dispozitive',
  formFieldLabel__automaticInvitations: 'Activați invitațiile automate pentru acest domeniu',
  formFieldLabel__firstName: 'Prenume',
  formFieldLabel__lastName: 'Nume',
  formFieldLabel__backupCode: 'Cod de rezervă',
  formFieldLabel__organizationName: 'Numele organizației',
  formFieldLabel__organizationSlug: 'Slug URL',
  formFieldLabel__organizationDomain: 'Domeniu',
  formFieldLabel__organizationDomainEmailAddress: 'Adresa de e-mail de verificare',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Introduceți o adresă de e-mail sub acest domeniu pentru a primi un cod și pentru a verifica acest domeniu.',
  formFieldLabel__organizationDomainDeletePending: 'Ștergeți invitațiile și sugestiile în așteptare',
  formFieldLabel__confirmDeletion: 'Confirmare',
  formFieldLabel__role: 'Rol',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Introduceți sau lipiți una sau mai multe adrese de e-mail, separate prin spații sau virgule',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldError__notMatchingPasswords: 'Parolele nu se potrivesc.',
  formFieldError__matchingPasswords: 'Parolele se potrivesc.',
  formFieldError__verificationLinkExpired: 'Linkul de verificare a expirat. Vă rugăm să solicitați un nou link.',
  formFieldAction__forgotPassword: 'Ați uitat parola?',
  formFieldHintText__optional: 'Opțional',
  formFieldHintText__slug:
    'Un slug este un ID lizibil de către om, care trebuie să fie unic. Este adesea utilizat în URL-uri.',
  formButtonPrimary: 'Continuați',
  signInEnterPasswordTitle: 'Introduceți parola dvs',
  backButton: 'Înapoi',
  footerActionLink__useAnotherMethod: 'Utilizați o altă metodă',
  badge__primary: 'Principală',
  badge__thisDevice: 'Acest dispozitiv',
  badge__userDevice: 'Dispozitiv de utilizator',
  badge__otherImpersonatorDevice: 'Alt dispozitiv de imitație',
  badge__default: 'Implicit',
  badge__unverified: 'Nedeclarat',
  badge__requiresAction: 'Necesită acțiune',
  badge__you: 'Tu',
  footerPageLink__help: 'Ajutor',
  footerPageLink__privacy: 'Confidențialitate',
  footerPageLink__terms: 'Termeni',
  paginationButton__previous: 'Anterior',
  paginationButton__next: 'Următorul',
  paginationRowText__displaying: 'Afișarea',
  paginationRowText__of: 'de',
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Membru',
  membershipRole__guestMember: 'Invitat',
  signUp: {
    start: {
      title: 'Creați-vă un cont',
      subtitle: 'pentru a continua la {{applicationName}}',
      actionText: 'Aveți un cont?',
      actionLink: 'Conectați-vă',
    },
    emailLink: {
      title: 'Verificați-vă e-mailul',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Link de verificare',
      formSubtitle: 'Utilizați link-ul de verificare trimis la adresa dvs. de e-mail',
      resendButton: 'Nu ați primit un link? Trimiteți din nou',
      verified: {
        title: 'Înregistrat cu succes',
      },
      loading: {
        title: 'Se crează contul...',
      },
      verifiedSwitchTab: {
        title: 'E-mail verificat cu succes',
        subtitle: 'Reveniți la tab-ul nou deschis pentru a continua',
        subtitleNewTab: 'Reveniți la tab-ul anterior pentru a continua',
      },
    },
    emailCode: {
      title: 'Verificați-vă e-mailul',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare trimis la adresa dvs. de e-mail',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
    phoneCode: {
      title: 'Verificarea telefonului dvs',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare trimis la numărul dvs. de telefon',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
    continue: {
      title: 'Completați câmpurile lipsă',
      subtitle: 'pentru a continua la {{applicationName}}',
      actionText: 'Aveți un cont?',
      actionLink: 'Conectați-vă',
    },
  },
  signIn: {
    start: {
      title: 'Conectați-vă',
      subtitle: 'pentru a continua la {{applicationName}}',
      actionText: 'Nu aveți cont?',
      actionLink: 'Înscrieți-vă',
      actionLink__use_email: 'Utilizați e-mailul',
      actionLink__use_phone: 'Utilizați telefonul',
      actionLink__use_username: 'Utilizați numele de utilizator',
      actionLink__use_email_username: 'Utilizați e-mail sau nume de utilizator',
    },
    password: {
      title: 'Introduceți parola dvs',
      subtitle: 'pentru a continua la {{applicationName}}',
      actionLink: 'Utilizați o altă metodă',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Ați uitat parola?',
      label__alternativeMethods: 'Sau, conectați-vă cu o altă metodă.',
      blockButton__resetPassword: 'Resetați-vă parola',
    },
    forgotPassword: {
      title_email: 'Verifică-ți e-mailul',
      title_phone: 'Verifică-ți telefonul',
      subtitle: 'pentru a vă reseta parola',
      formTitle: 'Resetarea codului de parolă',
      formSubtitle_email: 'Introduceți codul trimis la adresa dvs. de e-mail',
      formSubtitle_phone: 'Introduceți codul trimis la numărul de telefon',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
    resetPassword: {
      title: 'Resetare parolă',
      formButtonPrimary: 'Resetare parolă',
      successMessage: 'Parola dvs. a fost schimbată cu succes. Vă rugăm să așteptați un moment.',
      requiredMessage:
        'Există deja un cont cu o adresă de e-mail neverificată. Vă rugăm să vă resetați parola pentru securitate.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Trebuie să vă verificăm identitatea înainte de a vă reseta parola.',
    },
    emailCode: {
      title: 'Verifică-ți e-mailul',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare trimis la adresa dvs. de e-mail',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
    emailLink: {
      title: 'Verifică-ți e-mailul',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: 'Link de verificare',
      formSubtitle: 'Folosiți link-ul de verificare trimis pe e-mailul dvs',
      resendButton: 'Nu ați primit un link? Trimiteți din nou',
      unusedTab: {
        title: 'Puteți închide această filă',
      },
      verified: {
        title: 'Conectat cu succes',
        subtitle: 'Veți fi redirecționat în curând',
      },
      verifiedSwitchTab: {
        subtitle: 'Reveniți la tab-ul inițial pentru a continua',
        titleNewTab: 'Conectat pe altă filă',
        subtitleNewTab: 'Reveniți la tab-ul nou deschis pentru a continua',
      },
      loading: {
        title: 'Conectarea...',
        subtitle: 'Veți fi redirecționat în curând',
      },
      failed: {
        title: 'Acest link de verificare nu este valid',
        subtitle: 'Reveniți la tab-ul inițial pentru a continua.',
      },
      expired: {
        title: 'Acest link de verificare a expirat',
        subtitle: 'Reveniți la tab-ul inițial pentru a continua.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Verificare în două etape',
      subtitle: '',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare generat de aplicația dvs. de autentificare',
    },
    backupCodeMfa: {
      title: 'Introduceți un cod de rezervă',
      subtitle: 'pentru a continua la {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Utilizați o altă metodă',
      actionLink: 'Obțineți ajutor',
      blockButton__emailLink: 'Trimiteți un link prin e-mail către {{identifier}}',
      blockButton__emailCode: 'Codul de e-mail către {{identifier}}',
      blockButton__phoneCode: 'Trimiteți codul SMS la {{identifier}}',
      blockButton__password: 'Conectați-vă cu parola dvs',
      blockButton__totp: 'Utilizați aplicația de autentificare',
      blockButton__backupCode: 'Utilizați un cod de rezervă',
      getHelp: {
        title: 'Obțineți ajutor',
        content:
          'Dacă întâmpinați dificultăți la conectarea în contul dvs., trimiteți-ne un e-mail și vom lucra cu dvs. pentru a restabili accesul cât mai curând posibil.',
        blockButton__emailSupport: 'Suport prin e-mail',
      },
    },
    noAvailableMethods: {
      title: 'Nu se poate autentifica',
      subtitle: 'S-a produs o eroare',
      message: 'Nu se poate continua autentificarea. Nu există niciun factor de autentificare disponibil.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Meniu',
    formButtonPrimary__continue: 'Continuați',
    formButtonPrimary__finish: 'Finalizare',
    formButtonReset: 'Anulează',
    start: {
      headerTitle__account: 'Cont',
      headerTitle__security: 'Securitate',
      profileSection: {
        title: 'Profil',
      },
      usernameSection: {
        title: 'Nume utilizator',
        primaryButton__changeUsername: 'Schimbă numele de utilizator',
        primaryButton__setUsername: 'Setați numele de utilizator',
      },
      emailAddressesSection: {
        title: 'Adrese de e-mail',
        primaryButton: 'Adăugați o adresă de e-mail',
        detailsTitle__primary: 'Adresa de e-mail principală',
        detailsSubtitle__primary: 'Această adresă de e-mail este adresa de e-mail principală',
        detailsAction__primary: 'Verificare completă',
        detailsTitle__nonPrimary: 'Setați ca adresă de e-mail principală',
        detailsSubtitle__nonPrimary:
          'Setați această adresă de e-mail ca principală pentru a primi comunicări referitoare la contul dvs.',
        detailsAction__nonPrimary: 'Setați ca principală',
        detailsTitle__unverified: 'Verifică adresa de e-mail',
        detailsSubtitle__unverified: 'Verificare completă pentru a accesa toate funcțiile cu această adresă de e-mail',
        detailsAction__unverified: 'Verifică adresa de e-mail',
        destructiveActionTitle: 'Eliminați',
        destructiveActionSubtitle: 'Ștergeți această adresă de e-mail și eliminați-o din contul dvs',
        destructiveAction: 'Eliminați adresa de e-mail',
      },
      phoneNumbersSection: {
        title: 'Numere de telefon',
        primaryButton: 'Adăugați un număr de telefon',
        detailsTitle__primary: 'Număr de telefon principal',
        detailsSubtitle__primary: 'Acest număr de telefon este numărul de telefon principal',
        detailsAction__primary: 'Verificare completă',
        detailsTitle__nonPrimary: 'Setați ca număr de telefon principal',
        detailsSubtitle__nonPrimary:
          'Setați acest număr de telefon ca principal pentru a primi comunicări referitoare la contul dvs.',
        detailsAction__nonPrimary: 'Setați ca principal',
        detailsTitle__unverified: 'Verificați numărul de telefon',
        detailsSubtitle__unverified: 'Verificare completă pentru a accesa toate funcțiile cu acest număr de telefon',
        detailsAction__unverified: 'Verificați numărul de telefon',
        destructiveActionTitle: 'Eliminați',
        destructiveActionSubtitle: 'Ștergeți acest număr de telefon și eliminați-l din contul dvs',
        destructiveAction: 'Eliminați numărul de telefon',
      },
      connectedAccountsSection: {
        title: 'Conturi conectate',
        primaryButton: 'Conectați-vă contul',
        title__connectionFailed: 'Reîncercarea conexiunii eșuate',
        title__reauthorize: 'Reautorizare necesară',
        subtitle__reauthorize:
          'Scopurile contului dvs. au fost actualizate și este posibil să vă confruntați cu o funcționalitate limitată. Vă rugăm să autorizați din nou această aplicație pentru a evita orice problemă',
        actionLabel__connectionFailed: 'Încearcă din nou',
        actionLabel__reauthorize: 'Autorizați acum',
        destructiveActionTitle: 'Eliminați',
        destructiveActionSubtitle: 'Eliminați acest cont conectat din contul dvs',
        destructiveActionAccordionSubtitle: 'Înlăturați contul conectat',
      },
      enterpriseAccountsSection: {
        title: 'Conturi de companie',
      },
      passwordSection: {
        title: 'Parola',
        primaryButton__changePassword: 'Modificați parola',
        primaryButton__setPassword: 'Setați parola',
      },
      mfaSection: {
        title: 'Verificare în două etape',
        primaryButton: 'Adăugați verificarea în doi pași',
        phoneCode: {
          destructiveActionTitle: 'Eliminați',
          destructiveActionSubtitle: 'Eliminați acest număr de telefon din metodele de verificare în doi pași',
          destructiveActionLabel: 'Eliminați numărul de telefon',
          title__default: 'Factor implicit',
          title__setDefault: 'Setați ca factor implicit',
          subtitle__default:
            'Acest factor va fi utilizat ca metodă implicită de verificare în doi pași atunci când vă conectați.',
          subtitle__setDefault:
            'Setați acest factor ca factor implicit pentru a-l utiliza ca metodă implicită de verificare în doi pași atunci când vă conectați.',
          actionLabel__setDefault: 'Setat ca implicit',
        },
        backupCodes: {
          headerTitle: 'Coduri de rezervă',
          title__regenerate: 'Regenerarea codurilor de rezervă',
          subtitle__regenerate:
            'Obțineți un set nou de coduri de rezervă securizate. Codurile de rezervă anterioare vor fi șterse și nu vor mai putea fi utilizate.',
          actionLabel__regenerate: 'Regenerarea codurilor',
        },
        totp: {
          headerTitle: 'Aplicația Authenticator',
          title: 'Factor implicit',
          subtitle:
            'Acest factor va fi utilizat ca metodă implicită de verificare în doi pași atunci când vă conectați.',
          destructiveActionTitle: 'Eliminați',
          destructiveActionSubtitle: 'Îndepărtați aplicația de autentificare din metodele de verificare în doi pași',
          destructiveActionLabel: 'Îndepărtați aplicația de autentificare',
        },
      },
      activeDevicesSection: {
        title: 'Dispozitive active',
        primaryButton: 'Dispozitive active',
        detailsTitle: 'Dispozitiv curent',
        detailsSubtitle: 'Acesta este dispozitivul pe care îl utilizați în prezent',
        destructiveActionTitle: 'Deconectați-vă',
        destructiveActionSubtitle: 'Deconectați-vă din contul dvs. de pe acest dispozitiv',
        destructiveAction: 'Deconectați-vă de la dispozitiv',
      },
      web3WalletsSection: {
        title: 'Portofele Web3',
        primaryButton: 'Portofele Web3',
        destructiveActionTitle: 'Eliminați',
        destructiveActionSubtitle: 'Eliminați acest portofel web3 din contul dvs',
        destructiveAction: 'Scoateți portofelul',
      },
      dangerSection: {
        title: 'Pericol',
        deleteAccountButton: 'Ștergeți contul',
        deleteAccountTitle: 'Ștergeți contul',
        deleteAccountDescription: 'Ștergeți contul dvs. și toate datele asociate acestuia',
      },
    },
    profilePage: {
      title: 'Actualizarea profilului',
      imageFormTitle: 'Imagine de profil',
      imageFormSubtitle: 'Încărcați imaginea',
      imageFormDestructiveActionSubtitle: 'Eliminați imaginea',
      fileDropAreaTitle: 'Trageți fișierul aici, sau...',
      fileDropAreaAction: 'Selectați fișierul',
      fileDropAreaHint: 'Încărcați o imagine JPG, PNG, GIF sau WEBP mai mică de 10 MB',
      readonly:
        'Informațiile din profilul dvs. au fost furnizate de către conexiunea cu compania și nu pot fi modificate.',
      successMessage: 'Profilul dvs. a fost actualizat.',
    },
    usernamePage: {
      title: 'Actualizați numele de utilizator',
      successMessage: 'Numele dvs. de utilizator a fost actualizat.',
    },
    emailAddressPage: {
      title: 'Adăugați adresa de e-mail',
      emailCode: {
        formHint: 'Un e-mail conținând un cod de verificare va fi trimis la această adresă de e-mail.',
        formTitle: 'Cod de verificare',
        formSubtitle: 'Introduceți codul de verificare trimis la {{identifier}}',
        resendButton: 'Nu ați primit un cod? Trimiteți din nou',
        successMessage: 'E-mailul {{identifier}} a fost adăugat în contul dvs.',
      },
      emailLink: {
        formHint: 'La această adresă de e-mail va fi trimis un e-mail conținând un link de verificare.',
        formTitle: 'Link de verificare',
        formSubtitle: 'Faceți clic pe link-ul de verificare din e-mailul trimis către {{identifier}}',
        resendButton: 'Nu ați primit un link? Trimiteți din nou',
        successMessage: 'E-mailul {{identifier}} a fost adăugat în contul dvs.',
      },
      removeResource: {
        title: 'Eliminați adresa de e-mail',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2: 'Nu veți mai putea să vă conectați folosind această adresă de e-mail.',
        successMessage: '{{emailAddress}} a fost eliminat din contul dvs.',
      },
    },
    phoneNumberPage: {
      title: 'Adăugați numărul de telefon',
      successMessage: '{{identifier}} a fost adăugat în contul dumneavoastră.',
      infoText: 'La acest număr de telefon va fi trimis un mesaj text conținând un link de verificare.',
      infoText__secondary: 'Se pot aplica tarife pentru mesaje și date.',
      removeResource: {
        title: 'Eliminați numărul de telefon',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2: 'Nu veți mai putea să vă conectați folosind acest număr de telefon.',
        successMessage: '{{phoneNumber}} a fost eliminat din contul dvs.',
      },
    },
    connectedAccountPage: {
      title: 'Adăugați un cont conectat',
      formHint: 'Selectați un furnizor pentru a vă conecta contul.',
      formHint__noAccounts: 'Nu există furnizori de conturi externe disponibili.',
      socialButtonsBlockButton: 'Conectează contul {{provider|titleize}}',
      successMessage: 'Furnizorul a fost adăugat în contul dvs',
      removeResource: {
        title: 'Înlăturați contul conectat',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2:
          'Nu veți mai putea utiliza acest cont conectat, iar toate funcțiile dependente nu vor mai funcționa.',
        successMessage: '{{connectedAccount}} a fost eliminat din contul dumneavoastră.',
      },
    },
    web3WalletPage: {
      title: 'Adăugați portofelul web3',
      subtitle__availableWallets: 'Selectați un portofel web3 pentru a vă conecta la cont.',
      subtitle__unavailableWallets: 'Nu există portofele web3 disponibile.',
      successMessage: 'Portofelul a fost adăugat în contul dumneavoastră.',
      removeResource: {
        title: 'Îndepărtați portofelul web3',
        messageLine1: '{{identifier}} va fi eliminat din acest cont.',
        messageLine2: 'Nu veți mai putea să vă conectați folosind acest portofel web3.',
        successMessage: '{{web3Wallet}} a fost eliminat din contul dumneavoastră.',
      },
    },
    passwordPage: {
      title: 'Setați parola',
      changePasswordTitle: 'Modificați parola',
      readonly:
        'În prezent, parola dvs. nu poate fi modificată, deoarece vă puteți conecta numai prin intermediul conexiunii întreprinderii.',
      successMessage: 'Parola dvs. a fost setată.',
      changePasswordSuccessMessage: 'Parola dvs. a fost actualizată.',
      sessionsSignedOutSuccessMessage: 'Toate celelalte dispozitive au fost deconectate.',
    },
    mfaPage: {
      title: 'Adăugați verificarea în doi pași',
      formHint: 'Selectați o metodă de adăugat.',
    },
    mfaTOTPPage: {
      title: 'Adăugați aplicația de autentificare',
      verifyTitle: 'Cod de verificare',
      verifySubtitle: 'Introduceți codul de verificare generat de autentificatorul dvs',
      successMessage:
        'Verificarea în doi pași este acum activată. Când vă conectați, va trebui să introduceți un cod de verificare de la acest autentificator ca pas suplimentar.',
      authenticatorApp: {
        infoText__ableToScan:
          'Configurați o nouă metodă de conectare în aplicația de autentificare și scanați următorul cod QR pentru a o lega de contul dvs.',
        infoText__unableToScan:
          'Configurați o nouă metodă de conectare în autentificatorul dvs. și introduceți cheia furnizată mai jos.',
        inputLabel__unableToScan1:
          'Asigurați-vă că este activată opțiunea Parole pe bază de timp sau Parole unice, apoi finalizați conectarea contului dvs.',
        inputLabel__unableToScan2:
          'Alternativ, dacă autentificatorul dvs. acceptă URI-urile TOTP, puteți copia și URI-ul complet.',
        buttonAbleToScan__nonPrimary: 'Scanați în schimb codul QR',
        buttonUnableToScan__nonPrimary: 'Nu puteți scana codul QR?',
      },
      removeResource: {
        title: 'Eliminarea verificării în două etape',
        messageLine1: 'Codurile de verificare de la acest autentificator nu vor mai fi necesare la autentificare.',
        messageLine2:
          'Este posibil ca contul dumneavoastră să nu fie la fel de sigur. Sunteți sigur că doriți să continuați?',
        successMessage: 'Verificarea în doi pași prin intermediul aplicației Authenticator a fost eliminată.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Adăugați verificarea codului SMS',
      primaryButton__addPhoneNumber: 'Adăugați un număr de telefon',
      subtitle__availablePhoneNumbers:
        'Selectați un număr de telefon pentru a vă înregistra pentru verificarea în doi pași a codului SMS.',
      subtitle__unavailablePhoneNumbers:
        'Nu există numere de telefon disponibile pentru a vă înregistra pentru verificarea în doi pași prin cod SMS.',
      successMessage:
        'Verificarea în doi pași a codului SMS este acum activată pentru acest număr de telefon. Când vă conectați, va trebui să introduceți un cod de verificare trimis la acest număr de telefon ca pas suplimentar.',
      removeResource: {
        title: 'Eliminarea verificării în două etape',
        messageLine1: '{{identifier}} nu va mai primi coduri de verificare atunci când se conectează.',
        messageLine2:
          'Este posibil ca contul dumneavoastră să nu fie la fel de sigur. Sunteți sigur că doriți să continuați?',
        successMessage: 'Verificarea în doi pași a codului SMS a fost eliminată pentru {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Adăugați verificarea codului de rezervă',
      title__codelist: 'Coduri de rezervă',
      subtitle__codelist: 'Păstrați-le în siguranță și păstrați-le în secret.',
      infoText1: 'Codurile de rezervă vor fi activate pentru acest cont.',
      infoText2:
        'Păstrați codurile de rezervă în secret și păstrați-le în siguranță. Puteți regenera codurile de rezervă dacă bănuiți că acestea au fost compromise.',
      successSubtitle:
        'Puteți utiliza unul dintre acestea pentru a vă conecta la contul dvs., dacă pierdeți accesul la dispozitivul de autentificare.',
      successMessage:
        'Codurile de rezervă sunt acum activate. Puteți utiliza unul dintre acestea pentru a vă conecta la contul dvs., dacă pierdeți accesul la dispozitivul de autentificare. Fiecare cod poate fi utilizat o singură dată.',
      actionLabel__copy: 'Copiați toate',
      actionLabel__copied: 'Copiat!',
      actionLabel__download: 'Descarcă .txt',
      actionLabel__print: 'Imprimare',
    },
    deletePage: {
      title: 'Ștergeți contul',
      messageLine1: 'Sunteți sigur că doriți să vă ștergeți contul?',
      messageLine2: 'Această acțiune este permanentă și ireversibilă.',
      actionDescription: 'Introduceți Delete account (Ștergeți contul) mai jos pentru a continua.',
      confirm: 'Ștergeți contul',
    },
  },
  userButton: {
    action__manageAccount: 'Gestionați contul',
    action__signOut: 'Deconectați-vă',
    action__signOutAll: 'Deconectați-vă din toate conturile',
    action__addAccount: 'Adăugați un cont',
  },
  organizationSwitcher: {
    personalWorkspace: 'Cont personal',
    notSelected: 'Nici o organizație selectată',
    action__createOrganization: 'Creați o organizație',
    action__manageOrganization: 'Gestionați organizația',
    action__invitationAccept: 'Alăturați-vă',
    action__suggestionsAccept: 'Cerere de aderare',
    suggestionsAcceptedLabel: 'În curs de aprobare',
  },
  impersonationFab: {
    title: 'Conectat ca {{identifier}}',
    action__signOut: 'Deconectați-vă',
  },
  organizationProfile: {
    badge__unverified: 'Nedeclarat',
    badge__automaticInvitation: 'Invitații automate',
    badge__automaticSuggestion: 'Sugestii automate',
    badge__manualInvitation: 'Fără înscriere automată',
    start: {
      headerTitle__members: 'Membri',
      headerTitle__settings: 'Setări',
    },
    profilePage: {
      title: 'Profilul organizației',
      subtitle: 'Gestionați profilul organizației',
      successMessage: 'Organizația a fost actualizată.',
      dangerSection: {
        title: 'Pericol',
        leaveOrganization: {
          title: 'Organizarea concediului',
          messageLine1:
            'Ești sigur că vrei să părăsești această organizație? Veți pierde accesul la această organizație și la aplicațiile sale.',
          messageLine2: 'Această acțiune este permanentă și ireversibilă.',
          successMessage: 'Ați părăsit organizația.',
          actionDescription: 'Introduceți {{organizationName}} mai jos pentru a continua.',
        },
        deleteOrganization: {
          title: 'Ștergeți organizația',
          messageLine1: 'Sunteți sigur că doriți să ștergeți această organizație?',
          messageLine2: 'Această acțiune este permanentă și ireversibilă.',
          actionDescription: 'Introduceți {{organizationName}} mai jos pentru a continua.',
          successMessage: 'Ați șters organizația.',
        },
      },
      domainSection: {
        title: 'Domenii verificate',
        subtitle:
          'Permiteți utilizatorilor să se alăture automat organizației sau să solicite aderarea pe baza unui domeniu de e-mail verificat.',
        primaryButton: 'Adăugați domeniul',
        unverifiedDomain_menuAction__verify: 'Verifică domeniul',
        unverifiedDomain_menuAction__remove: 'Ștergeți domeniul',
      },
    },
    createDomainPage: {
      title: 'Adăugați domeniul',
      subtitle:
        'Adăugați domeniul de verificat. Utilizatorii cu adrese de e-mail la acest domeniu se pot alătura organizației în mod automat sau pot solicita să se alăture.',
    },
    verifyDomainPage: {
      title: 'Verifică domeniul',
      subtitle: 'Domeniul {{domainName}} trebuie să fie verificat prin e-mail.',
      subtitleVerificationCodeScreen:
        'Un cod de verificare a fost trimis la {{emailAddress}}. Introduceți codul pentru a continua.',
      formTitle: 'Cod de verificare',
      formSubtitle: 'Introduceți codul de verificare trimis la adresa dvs. de e-mail',
      resendButton: 'Nu ați primit un cod? Trimiteți din nou',
    },
    verifiedDomainPage: {
      subtitle: 'Domeniul {{domain}} este acum verificat. Continuați prin selectarea modului de înscriere.',
      start: {
        headerTitle__enrollment: 'Opțiuni de înscriere',
        headerTitle__danger: 'Pericol',
      },
      enrollmentTab: {
        subtitle: 'Alegeți modul în care utilizatorii din acest domeniu se pot alătura organizației.',
        manualInvitationOption__label: 'Fără înscriere automată',
        manualInvitationOption__description: 'Utilizatorii pot fi invitați doar manual în organizație.',
        automaticInvitationOption__label: 'Invitații automate',
        automaticInvitationOption__description:
          'Utilizatorii sunt invitați automat să se alăture organizației atunci când se înscriu și se pot alătura oricând.',
        automaticSuggestionOption__label: 'Sugestii automate',
        automaticSuggestionOption__description:
          'Utilizatorii primesc o sugestie de a solicita aderarea, dar trebuie să fie aprobați de un administrator înainte de a se putea alătura organizației.',
        formButton__save: 'Salvați',
        calloutInfoLabel: 'Schimbarea modului de înscriere va afecta doar utilizatorii noi.',
        calloutInvitationCountLabel: 'Invitații în așteptare trimise utilizatorilor: {{count}}',
        calloutSuggestionCountLabel: 'Sugestii în așteptare trimise utilizatorilor: {{count}}',
      },
      dangerTab: {
        removeDomainTitle: 'Înlăturați domeniul',
        removeDomainSubtitle: 'Eliminați acest domeniu din domeniile verificate',
        removeDomainActionLabel__remove: 'Înlăturați domeniul',
        calloutInfoLabel: 'Eliminarea acestui domeniu va afecta utilizatorii invitați.',
      },
    },
    invitePage: {
      title: 'Invitați membri',
      subtitle: 'Invitați noi membri în această organizație',
      successMessage: 'Invitații trimise cu succes',
      detailsTitle__inviteFailed:
        'Invitațiile nu au putut fi trimise. Există deja invitații în așteptare pentru următoarele adrese de e-mail: {{email_addresses}}.',
      formButtonPrimary__continue: 'Trimiteți invitații',
    },
    removeDomainPage: {
      title: 'Înlăturați domeniul',
      messageLine1: 'Domeniul de e-mail {{domain}} va fi eliminat.',
      messageLine2: 'După aceasta, utilizatorii nu vor mai putea să se alăture automat organizației.',
      successMessage: '{{domain}} a fost eliminat.',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Nu există membri de afișat',
      action__invite: 'Invitați',
      start: {
        headerTitle__members: 'Membri',
        headerTitle__invitations: 'Invitații',
        headerTitle__requests: 'Cereri',
      },
      activeMembersTab: {
        tableHeader__user: 'Utilizator',
        tableHeader__joined: 'S-a alăturat',
        tableHeader__role: 'Rol',
        tableHeader__actions: '',
        menuAction__remove: 'Îndepărtați membrul',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Invitat',
        menuAction__revoke: 'Revocarea invitației',
      },
      invitationsTab: {
        table__emptyRow: 'Nu există invitații de afișare',
        manualInvitations: {
          headerTitle: 'Invitații individuale',
          headerSubtitle: 'Invitați manual membrii și gestionați invitațiile existente.',
        },
        autoInvitations: {
          headerTitle: 'Invitații automate',
          headerSubtitle:
            'Invitați utilizatorii prin conectarea unui domeniu de e-mail cu organizația dvs. Oricine se înscrie cu un domeniu de e-mail corespunzător va putea să se alăture organizației oricând.',
          primaryButton: 'Gestionați domeniile verificate',
        },
      },
      requestsTab: {
        tableHeader__requested: 'Accesul solicitat',
        menuAction__approve: 'Aprobarea',
        menuAction__reject: 'Respingeți',
        table__emptyRow: 'Nu există cereri de afișare',
        requests: {
          headerTitle: 'Cereri',
          headerSubtitle: 'Răsfoiți și gestionați utilizatorii care au solicitat să se alăture organizației.',
        },
        autoSuggestions: {
          headerTitle: 'Sugestii automate',
          headerSubtitle:
            'Utilizatorii care se înscriu cu un domeniu de e-mail corespunzător vor putea vedea o sugestie de a solicita să se alăture organizației dvs.',
          primaryButton: 'Gestionați domeniile verificate',
        },
      },
    },
  },
  createOrganization: {
    title: 'Creați o organizație',
    formButtonSubmit: 'Creați o organizație',
    invitePage: {
      formButtonReset: 'Skip',
    },
  },
  organizationList: {
    createOrganization: 'Creați o organizație',
    title: 'Selectați un cont',
    titleWithoutPersonal: 'Selectați o organizație',
    subtitle: 'pentru a continua la {{applicationName}}',
    action__invitationAccept: 'Alăturați-vă',
    invitationAcceptedLabel: 'S-a alăturat',
    action__suggestionsAccept: 'Cerere de aderare',
    suggestionsAcceptedLabel: 'În curs de aprobare',
    action__createOrganization: 'Creați o organizație',
  },
  unstable__errors: {
    identification_deletion_failed: 'Nu vă puteți șterge ultima identificare.',
    phone_number_exists: 'Acest număr de telefon este ocupat. Vă rugăm să încercați altul.',
    form_identifier_not_found: '',
    captcha_unavailable:
      'Înscrierea a eșuat din cauza unei validări nereușite a robotului. Vă rugăm să reîmprospătați pagina pentru a încerca din nou sau contactați serviciul de asistență pentru mai multă asistență.',
    captcha_invalid:
      'Înscrierea a eșuat din cauza unor validări de securitate nereușite. Vă rugăm să reîmprospătați pagina pentru a încerca din nou sau contactați serviciul de asistență pentru mai multă asistență.',
    form_password_pwned:
      'Această parolă a fost descoperită ca parte a unei încălcări și nu poate fi utilizată, vă rugăm să încercați o altă parolă.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Adresa de e-mail trebuie să fie o adresă de e-mail validă.',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Parolă incorectă',
    form_password_not_strong_enough: 'Parola dvs. nu este suficient de puternică.',
    form_password_size_in_bytes_exceeded:
      'Parola dvs. a depășit numărul maxim de octeți permis, vă rugăm să o scurtați sau să eliminați unele caractere speciale.',
    passwordComplexity: {
      sentencePrefix: 'Parola dvs. trebuie să conțină',
      minimumLength: '{{length}} sau mai multe caractere',
      maximumLength: 'mai puțin de {{length}} caractere',
      requireNumbers: 'un număr',
      requireLowercase: 'o literă minusculă',
      requireUppercase: 'o literă majusculă',
      requireSpecialCharacter: 'un caracter special',
    },
    zxcvbn: {
      notEnough: 'Parola dvs. nu este suficient de puternică.',
      couldBeStronger:
        'Parola dvs. funcționează, dar ar putea fi mai puternică. Încercați să adăugați mai multe caractere.',
      goodPassword: 'Parola dvs. îndeplinește toate cerințele necesare.',
      warnings: {
        straightRow: 'Rândurile drepte de taste de pe tastatură sunt ușor de ghicit.',
        keyPattern: 'Modelele scurte de tastatură sunt ușor de ghicit.',
        simpleRepeat: 'Caracterele repetate, cum ar fi "aaa", sunt ușor de ghicit.',
        extendedRepeat: 'Modelele de caractere repetate, cum ar fi "abcabcabc", sunt ușor de ghicit.',
        sequences: 'Secvențele de caractere comune, cum ar fi "abc", sunt ușor de ghicit.',
        recentYears: 'Ultimii ani sunt ușor de ghicit.',
        dates: 'Datele sunt ușor de ghicit.',
        topTen: 'Aceasta este o parolă foarte utilizată.',
        topHundred: 'Aceasta este o parolă utilizată frecvent.',
        common: 'Aceasta este o parolă folosită în mod obișnuit.',
        similarToCommon: 'Acest lucru este similar cu o parolă folosită în mod obișnuit.',
        wordByItself: 'Cuvintele simple sunt ușor de ghicit.',
        namesByThemselves: 'Numele sau prenumele simple sunt ușor de ghicit.',
        commonNames: 'Numele comune și numele de familie sunt ușor de ghicit.',
        userInputs: 'Nu trebuie să existe date personale sau legate de pagini.',
        pwned: 'Parola dvs. a fost expusă în urma unei încălcări a securității datelor pe internet.',
      },
      suggestions: {
        l33t: 'Evitați înlocuirile previzibile de litere, cum ar fi "@" pentru "a".',
        reverseWords: 'Evitați ortografia inversă a cuvintelor uzuale.',
        allUppercase: 'Scrieți cu majuscule unele litere, dar nu toate literele.',
        capitalization: 'Scrieți cu majusculă mai mult decât prima literă.',
        dates: 'Evitați datele și anii care vă sunt asociate.',
        recentYears: 'Evitați ultimii ani.',
        associatedYears: 'Evitați anii care vă sunt asociați.',
        sequences: 'Evitați secvențele de caractere comune.',
        repeated: 'Evitați cuvintele și caracterele repetate.',
        longerKeyboardPattern:
          'Utilizați modele de tastatură mai lungi și schimbați direcția de tastare de mai multe ori.',
        anotherWord: 'Adăugați mai multe cuvinte care sunt mai puțin frecvente.',
        useWords: 'Folosiți mai multe cuvinte, dar evitați frazele comune.',
        noNeed: 'Puteți crea parole puternice fără a folosi simboluri, numere sau litere majuscule.',
        pwned: 'Dacă folosiți această parolă în altă parte, ar trebui să o schimbați.',
      },
    },
    form_param_max_length_exceeded__name: 'Numele nu trebuie să depășească 256 de caractere.',
    form_param_max_length_exceeded__first_name: 'Prenumele nu trebuie să depășească 256 de caractere.',
    form_param_max_length_exceeded__last_name: 'Numele de familie nu trebuie să depășească 256 de caractere.',
  },
  dates: {
    previous6Days: "Ultimul {{ date | weekday('en-US','long') }} la {{ date | timeString('en-US') }}",
    lastDay: "Ieri la {{ date | timeString('en-US') }}",
    sameDay: "Astăzi la {{ date | timeString('en-US') }}",
    nextDay: "Mâine la {{ date | timeString('en-US') }}",
    next6Days: "{{ date | weekday('en-US','long') }} la {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}}",
  },
} as const;
