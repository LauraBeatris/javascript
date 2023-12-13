import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Ελέγξτε το τηλέφωνό σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Κωδικός επαλήθευσης',
      formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που απεστάλη στο τηλέφωνό σας',
      resendButton: 'Δεν λάβατε κωδικό; Αποστολή ξανά',
    },
  },
} as const;

export const elGR: LocalizationResource = {
  locale: 'el-GR',
  socialButtonsBlockButton: 'Συνέχεια με {{provider|titleize}}',
  dividerText: 'ή',
  formFieldLabel__emailAddress: 'Διεύθυνση email',
  formFieldLabel__emailAddresses: 'Διευθύνσεις email',
  formFieldLabel__phoneNumber: 'Αριθμός τηλεφώνου',
  formFieldLabel__username: 'Όνομα χρήστη',
  formFieldLabel__emailAddress_username: 'Διεύθυνση email ή όνομα χρήστη',
  formFieldLabel__password: 'Κωδικός πρόσβασης',
  formFieldLabel__currentPassword: 'Τρέχων κωδικός πρόσβασης',
  formFieldLabel__newPassword: 'Νέος κωδικός πρόσβασης',
  formFieldLabel__confirmPassword: 'Επιβεβαίωση κωδικού πρόσβασης',
  formFieldLabel__signOutOfOtherSessions: 'Αποσύνδεση από όλες τις άλλες συσκευές',
  formFieldLabel__firstName: 'Όνομα',
  formFieldLabel__lastName: 'Επώνυμο',
  formFieldLabel__backupCode: 'Αντίγραφο ασφαλείας κωδικού',
  formFieldLabel__organizationName: 'Όνομα οργανισμού',
  formFieldLabel__organizationSlug: 'Συντόμευση URL',
  formFieldLabel__confirmDeletion: 'Επιβεβαίωση',
  formFieldLabel__role: 'Ρόλος',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Εισαγάγετε ή επικολλήστε μία ή περισσότερες διευθύνσεις email, χωρισμένες με κενά ή κόμματα',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: 'Οι κωδικοί δεν ταιριάζουν.',
  formFieldError__matchingPasswords: 'Οι κωδικοί ταιριάζουν.',
  formFieldAction__forgotPassword: 'Ξεχάσατε τον κωδικό;',
  formFieldHintText__optional: 'Προαιρετικό',
  formButtonPrimary: 'Συνέχεια',
  signInEnterPasswordTitle: 'Εισαγωγή κωδικού πρόσβασης',
  backButton: 'Πίσω',
  footerActionLink__useAnotherMethod: 'Χρησιμοποιήστε άλλη μέθοδο',
  badge__primary: 'Κύριο',
  badge__thisDevice: 'Αυτή η συσκευή',
  badge__userDevice: 'Συσκευή χρήστη',
  badge__otherImpersonatorDevice: 'Άλλη συσκευή υποδυόμενου',
  badge__default: 'Προεπιλογή',
  badge__unverified: 'Μη επαληθευμένο',
  badge__requiresAction: 'Απαιτεί ενέργεια',
  badge__you: 'Εσείς',
  footerPageLink__help: 'Βοήθεια',
  footerPageLink__privacy: 'Προστασία προσωπικών δεδομένων',
  footerPageLink__terms: 'Όροι',
  paginationButton__previous: 'Προηγούμενο',
  paginationButton__next: 'Επόμενο',
  paginationRowText__displaying: 'Εμφάνιση',
  paginationRowText__of: 'από',
  membershipRole__admin: 'Διαχειριστής',
  membershipRole__basicMember: 'Μέλος',
  membershipRole__guestMember: 'Επισκέπτης',
  signUp: {
    start: {
      title: 'Δημιουργήστε τον λογαριασμό σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      actionText: 'Έχετε ήδη λογαριασμό;',
      actionLink: 'Σύνδεση',
    },
    emailLink: {
      title: 'Επαληθεύστε το email σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Σύνδεσμος επαλήθευσης',
      formSubtitle: 'Χρησιμοποιήστε τον σύνδεσμο επαλήθευσης που απεστάλη στη διεύθυνση email σας',
      resendButton: 'Δεν λάβατε σύνδεσμο; Αποστολή ξανά',
      verified: {
        title: 'Επιτυχής εγγραφή',
      },
      loading: {
        title: 'Εγγραφή σε εξέλιξη...',
      },
      verifiedSwitchTab: {
        title: 'Επιτυχής επαλήθευση email',
        subtitle: 'Επιστροφή στη νέα καρτέλα για να συνεχίσετε',
        subtitleNewTab: 'Επιστροφή στην προηγούμενη καρτέλα για να συνεχίσετε',
      },
    },
    emailCode: {
      title: 'Επαληθεύστε το email σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Κωδικός επαλήθευσης',
      formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που απεστάλη στο email σας',
      resendButton: 'Δεν λάβατε κωδικό; Αποστολή ξανά',
    },
    phoneCode: {
      title: 'Επαληθεύστε το τηλέφωνό σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Κωδικός επαλήθευσης',
      formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που απεστάλη στον αριθμό τηλεφώνου σας',
      resendButton: 'Δεν λάβατε κωδικό; Αποστολή ξανά',
    },
    continue: {
      title: 'Συμπληρώστε τα απαραίτητα πεδία',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      actionText: 'Έχετε ήδη λογαριασμό;',
      actionLink: 'Σύνδεση',
    },
  },
  signIn: {
    start: {
      title: 'Σύνδεση',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      actionText: 'Δεν έχετε λογαριασμό;',
      actionLink: 'Εγγραφή',
      actionLink__use_email: 'Χρήση email',
      actionLink__use_phone: 'Χρήση τηλεφώνου',
      actionLink__use_username: 'Χρήση ονόματος χρήστη',
      actionLink__use_email_username: 'Χρήση email ή ονόματος χρήστη',
    },
    password: {
      title: 'Εισαγωγή κωδικού πρόσβασης',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      actionLink: 'Χρήση άλλης μεθόδου',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Ξεχάσατε τον κωδικό πρόσβασης;',
      label__alternativeMethods: 'Ή, συνδεθείτε με μια άλλη μέθοδο.',
      blockButton__resetPassword: 'Επαναφορά κωδικού πρόσβασης',
    },
    forgotPassword: {
      title_email: 'Ελέγξτε το email σας',
      title_phone: 'Ελέγξτε το τηλέφωνό σας',
      subtitle: 'για επαναφορά του κωδικού πρόσβασης σας',
      formTitle: 'Επαναφορά κωδικού πρόσβασης',
      formSubtitle_email: 'Εισαγάγετε τον κωδικό που απεστάλη στη διεύθυνση email σας',
      formSubtitle_phone: 'Εισαγάγετε τον κωδικό που απεστάλη στον αριθμό τηλεφώνου σας',
      resendButton: 'Δεν λάβατε κωδικό; Αποστολή ξανά',
    },
    resetPassword: {
      title: 'Επαναφορά κωδικού πρόσβασης',
      formButtonPrimary: 'Επαναφορά κωδικού πρόσβασης',
      successMessage: 'Ο κωδικός πρόσβασής σας έχει αλλάξει με επιτυχία. Σας συνδέουμε, παρακαλώ περιμένετε.',
      requiredMessage:
        'Υπάρχει ήδη λογαριασμός με μη επαληθευμένη διεύθυνση email. Παρακαλούμε επαναφέρετε τον κωδικό σας για λόγους ασφαλείας.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Πρέπει να επαληθεύσουμε την ταυτότητά σας πριν επαναφέρουμε τον κωδικό πρόσβασής σας.',
    },
    emailCode: {
      title: 'Ελέγξτε το email σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Κωδικός επαλήθευσης',
      formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που απεστάλη στη διεύθυνση email σας',
      resendButton: 'Δεν λάβατε κωδικό; Αποστολή ξανά',
    },
    emailLink: {
      title: 'Ελέγξτε το email σας',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: 'Σύνδεσμος επαλήθευσης',
      formSubtitle: 'Χρησιμοποιήστε τον σύνδεσμο επαλήθευσης που απεστάλη στο email σας',
      resendButton: 'Δεν λάβατε σύνδεσμο; Αποστολή ξανά',
      unusedTab: {
        title: 'Μπορείτε να κλείσετε αυτήν την καρτέλα',
      },
      verified: {
        title: 'Επιτυχής σύνδεση',
        subtitle: 'Θα ανακατευθυνθείτε σύντομα',
      },
      verifiedSwitchTab: {
        subtitle: 'Επιστροφή στην αρχική καρτέλα για να συνεχίσετε',
        titleNewTab: 'Έχετε συνδεθεί σε άλλη καρτέλα',
        subtitleNewTab: 'Επιστροφή στη νέα καρτέλα που άνοιξε για να συνεχίσετε',
      },
      loading: {
        title: 'Σύνδεση σε εξέλιξη...',
        subtitle: 'Θα ανακατευθυνθείτε σύντομα',
      },
      failed: {
        title: 'Αυτός ο σύνδεσμος επαλήθευσης δεν είναι έγκυρος',
        subtitle: 'Επιστροφή στην αρχική καρτέλα για να συνεχίσετε.',
      },
      expired: {
        title: 'Αυτός ο σύνδεσμος επαλήθευσης έχει λήξει',
        subtitle: 'Επιστροφή στην αρχική καρτέλα για να συνεχίσετε.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Aυθεντικοποίηση δύο βημάτων',
      subtitle: '',
      formTitle: 'Κωδικός επαλήθευσης',
      formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που δημιουργήθηκε από την εφαρμογή αυθεντικοποίησης',
    },
    backupCodeMfa: {
      title: 'Εισαγωγή ενός εφεδρικού κωδικού',
      subtitle: 'για να συνεχίσετε στο {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Χρήση μιας άλλης μεθόδου',
      actionLink: 'Λήψη βοήθειας',
      blockButton__emailLink: 'Αποστολή συνδέσμου στο {{identifier}}',
      blockButton__emailCode: 'Αποστολή κωδικού με email στο {{identifier}}',
      blockButton__phoneCode: 'Αποστολή κωδικού SMS στο {{identifier}}',
      blockButton__password: 'Σύνδεση με τον κωδικό πρόσβασής σας',
      blockButton__totp: 'Χρήση της εφαρμογής αυθεντικοποίησης',
      blockButton__backupCode: 'Χρήση ενός εφεδρικού κωδικού',
      getHelp: {
        title: 'Λήψη βοήθειας',
        content:
          'Εάν αντιμετωπίζετε δυσκολία στη σύνδεση στον λογαριασμό σας, στείλτε μας email και θα επικοινωνήσουμε μαζί σας για να αποκαταστήσουμε την πρόσβαση το συντομότερο δυνατόν.',
        blockButton__emailSupport: 'Υποστήριξη μέσω email',
      },
    },
    noAvailableMethods: {
      title: 'Δεν είναι δυνατή η σύνδεση',
      subtitle: 'Προέκυψε σφάλμα',
      message: 'Δεν είναι δυνατή η σύνδεση. Δεν υπάρχει διαθέσιμος παράγοντας αυθεντικοποίησης.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Μενού',
    formButtonPrimary__continue: 'Συνέχεια',
    formButtonPrimary__finish: 'Ολοκλήρωση',
    formButtonReset: 'Ακύρωση',
    start: {
      headerTitle__account: 'Λογαριασμός',
      headerTitle__security: 'Ασφάλεια',
      profileSection: {
        title: 'Προφίλ',
      },
      usernameSection: {
        title: 'Όνομα χρήστη',
        primaryButton__changeUsername: 'Αλλαγή ονόματος χρήστη',
        primaryButton__setUsername: 'Ορισμός ονόματος χρήστη',
      },
      emailAddressesSection: {
        title: 'Διευθύνσεις email',
        primaryButton: 'Προσθήκη διεύθυνσης email',
        detailsTitle__primary: 'Κύρια διεύθυνση email',
        detailsSubtitle__primary: 'Αυτή η διεύθυνση email είναι η κύρια διεύθυνση email',
        detailsAction__primary: 'Ολοκλήρωση επαλήθευσης',
        detailsTitle__nonPrimary: 'Ορισμός ως κύρια διεύθυνση email',
        detailsSubtitle__nonPrimary:
          'Ορίστε αυτήν τη διεύθυνση email ως κύρια για να λαμβάνετε επικοινωνία σχετικά με τον λογαριασμό σας.',
        detailsAction__nonPrimary: 'Ορισμός ως κύρια',
        detailsTitle__unverified: 'Μη επαληθευμένη διεύθυνση email',
        detailsSubtitle__unverified:
          'Αυτή η διεύθυνση email δεν έχει επαληθευτεί και μπορεί να έχει περιορισμένη λειτουργικότητα',
        detailsAction__unverified: 'Ολοκλήρωση επαλήθευσης',
        destructiveActionTitle: 'Αφαίρεση',
        destructiveActionSubtitle: 'Διαγράψτε αυτήν τη διεύθυνση email και αφαιρέστε την από τον λογαριασμό σας',
        destructiveAction: 'Αφαίρεση διεύθυνσης email',
      },
      phoneNumbersSection: {
        title: 'Αριθμοί τηλεφώνου',
        primaryButton: 'Προσθήκη αριθμού τηλεφώνου',
        detailsTitle__primary: 'Κύριος αριθμός τηλεφώνου',
        detailsSubtitle__primary: 'Αυτός ο αριθμός τηλεφώνου είναι ο κύριος αριθμός τηλεφώνου',
        detailsAction__primary: 'Ολοκλήρωση επαλήθευσης',
        detailsTitle__nonPrimary: 'Ορισμός ως κύριος αριθμός τηλεφώνου',
        detailsSubtitle__nonPrimary:
          'Ορίστε αυτόν τον αριθμό τηλεφώνου ως κύριο για να λαμβάνετε επικοινωνία σχετικά με τον λογαριασμό σας.',
        detailsAction__nonPrimary: 'Ορισμός ως κύριος',
        detailsTitle__unverified: 'Μη επαληθευμένος αριθμός τηλεφώνου',
        detailsSubtitle__unverified:
          'Αυτός ο αριθμός τηλεφώνου δεν έχει επαληθευτεί και μπορεί να έχει περιορισμένη λειτουργικότητα',
        detailsAction__unverified: 'Ολοκλήρωση επαλήθευσης',
        destructiveActionTitle: 'Αφαίρεση',
        destructiveActionSubtitle: 'Διαγράψτε αυτόν τον αριθμό τηλεφώνου και αφαιρέστε τον από τον λογαριασμό σας',
        destructiveAction: 'Αφαίρεση αριθμού τηλεφώνου',
      },
      connectedAccountsSection: {
        title: 'Συνδεδεμένοι λογαριασμοί',
        primaryButton: 'Σύνδεση λογαριασμού',
        title__connectionFailed: 'Επανάληψη αποτυχημένης σύνδεσης',
        title__reauthorize: 'Απαιτείται νέα εξουσιοδότηση',
        subtitle__reauthorize:
          'Οι απαιτούμενες εμβέλειες έχουν ενημερωθεί και μπορεί να αντιμετωπίζετε περιορισμένη λειτουργικότητα. Παρακαλούμε εξουσιοδοτήστε ξανά αυτήν την εφαρμογή για να αποφύγετε προβλήματα.',
        actionLabel__connectionFailed: 'Προσπάθεια ξανά',
        actionLabel__reauthorize: 'Εξουσιοδοτήστε τώρα',
        destructiveActionTitle: 'Αφαίρεση',
        destructiveActionSubtitle: 'Αφαιρέστε αυτόν τον συνδεδεμένο λογαριασμό από τον λογαριασμό σας',
        destructiveActionAccordionSubtitle: 'Αφαίρεση συνδεδεμένου λογαριασμού',
      },
      enterpriseAccountsSection: {
        title: 'Επιχειρησιακοί λογαριασμοί',
      },
      passwordSection: {
        title: 'Κωδικός πρόσβασης',
        primaryButton__changePassword: 'Αλλαγή κωδικού πρόσβασης',
        primaryButton__setPassword: 'Ορισμός κωδικού πρόσβασης',
      },
      mfaSection: {
        title: 'Αυθεντικοποίηση δύο βημάτων',
        primaryButton: 'Προσθήκη αυθεντικοποίησης δύο βημάτων',
        phoneCode: {
          destructiveActionTitle: 'Αφαίρεση',
          destructiveActionSubtitle:
            'Αφαιρέστε αυτόν τον αριθμό τηλεφώνου από τις μεθόδους αυθεντικοποίησης δύο βημάτων',
          destructiveActionLabel: 'Αφαίρεση αριθμού τηλεφώνου',
          title__default: 'Προεπιλεγμένος παράγοντας',
          title__setDefault: 'Ορισμός ως προεπιλεγμένος παράγοντας',
          subtitle__default:
            'Αυτός ο παράγοντας θα χρησιμοποιηθεί ως ο προεπιλεγμένος τρόπος αυθεντικοποίησης δύο βημάτων κατά την είσοδο.',
          subtitle__setDefault:
            'Ορίστε αυτόν τον παράγοντα ως προεπιλεγμένο παράγοντα για να τον χρησιμοποιήσετε ως τρόπο αυθεντικοποίησης δύο βημάτων κατά την είσοδο.',
          actionLabel__setDefault: 'Ορισμός ως προεπιλεγμένος',
        },
        backupCodes: {
          headerTitle: 'Εφεδρικοί κωδικοί',
          title__regenerate: 'Επαναδημιουργία εφεδρικών κωδικών',
          subtitle__regenerate:
            'Λάβετε ένα νέο σετ ασφαλών εφεδρικών κωδικών. Οι προηγούμενοι εφεδρικοί κωδικοί θα διαγραφούν και δεν μπορούν να χρησιμοποιηθούν.',
          actionLabel__regenerate: 'Επαναδημιουργία κωδικών',
        },
        totp: {
          headerTitle: 'Εφαρμογή αυθεντικοποίησης',
          title: 'Προεπιλεγμένος παράγοντας',
          subtitle:
            'Αυτός ο παράγοντας θα χρησιμοποιηθεί ως ο προεπιλεγμένος τρόπος αυθεντικοποίησης δύο βημάτων κατά την είσοδο.',
          destructiveActionTitle: 'Αφαίρεση',
          destructiveActionSubtitle:
            'Αφαιρέστε την εφαρμογή αυθεντικοποίησης από τις μεθόδους αυθεντικοποίησης δύο βημάτων',
          destructiveActionLabel: 'Αφαίρεση εφαρμογής αυθεντικοποίησης',
        },
      },
      activeDevicesSection: {
        title: 'Ενεργές συσκευές',
        primaryButton: 'Ενεργές συσκευές',
        detailsTitle: 'Τρέχουσα συσκευή',
        detailsSubtitle: 'Αυτή είναι η συσκευή που χρησιμοποιείτε αυτήν τη στιγμή',
        destructiveActionTitle: 'Αποσύνδεση',
        destructiveActionSubtitle: 'Αποσυνδεθείτε από τον λογαριασμό σας σε αυτήν τη συσκευή',
        destructiveAction: 'Αποσύνδεση από τη συσκευή',
      },
      web3WalletsSection: {
        title: 'Πορτοφόλια Web3',
        primaryButton: 'Πορτοφόλια Web3',
        destructiveActionTitle: 'Αφαίρεση',
        destructiveActionSubtitle: 'Αφαιρέστε αυτό το πορτοφόλι Web3 από τον λογαριασμό σας',
        destructiveAction: 'Αφαίρεση πορτοφολιού',
      },
      dangerSection: {
        title: 'Κίνδυνος',
        deleteAccountButton: 'Διαγραφή λογαριασμού',
        deleteAccountTitle: 'Διαγραφή λογαριασμού',
        deleteAccountDescription: 'Διαγράψτε τον λογαριασμό σας και όλα τα συναφή δεδομένα',
      },
    },
    profilePage: {
      title: 'Ενημέρωση προφίλ',
      imageFormTitle: 'Εικόνα προφίλ',
      imageFormSubtitle: 'Ανέβασμα εικόνας',
      imageFormDestructiveActionSubtitle: 'Αφαίρεση εικόνας',
      fileDropAreaTitle: 'Σύρετε το αρχείο εδώ ή...',
      fileDropAreaAction: 'Επιλέξτε αρχείο',
      fileDropAreaHint: 'Ανεβάστε μια εικόνα σε μορφή JPG, PNG, GIF ή WEBP μικρότερη των 10 MB',
      readonly:
        'Οι πληροφορίες του προφίλ σας έχουν παρασχεθεί από τη σύνδεση με την επιχείρηση και δεν μπορούν να επεξεργαστούν.',
      successMessage: 'Το προφίλ σας έχει ενημερωθεί.',
    },
    usernamePage: {
      title: 'Ενημέρωση ονόματος χρήστη',
      successMessage: 'Το όνομα χρήστη σας έχει ενημερωθεί.',
    },
    emailAddressPage: {
      title: 'Προσθήκη διεύθυνσης email',
      emailCode: {
        formHint: 'Θα σταλεί ένα email που περιέχει έναν κωδικό επαλήθευσης σε αυτήν τη διεύθυνση email.',
        formTitle: 'Κωδικός επαλήθευσης',
        formSubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που εστάλη στην {{identifier}}',
        resendButton: 'Δεν λάβατε κωδικό; Επανάληψη αποστολής',
        successMessage: 'Το email {{identifier}} έχει προστεθεί στον λογαριασμό σας.',
      },
      emailLink: {
        formHint: 'Θα σταλεί ένα email που περιέχει έναν σύνδεσμο επαλήθευσης σε αυτήν τη διεύθυνση email.',
        formTitle: 'Σύνδεσμος επαλήθευσης',
        formSubtitle: 'Κάντε κλικ στον σύνδεσμο επαλήθευσης στο email που εστάλη στην {{identifier}}',
        resendButton: 'Δεν λάβατε κάποιον σύνδεσμο; Επανάληψη αποστολής',
        successMessage: 'Το email {{identifier}} έχει προστεθεί στον λογαριασμό σας.',
      },
      removeResource: {
        title: 'Αφαίρεση διεύθυνσης email',
        messageLine1: 'Η διεύθυνση {{identifier}} θα αφαιρεθεί από αυτόν τον λογαριασμό.',
        messageLine2: 'Δεν θα μπορείτε πλέον να συνδεθείτε χρησιμοποιώντας αυτήν τη διεύθυνση email.',
        successMessage: 'Η διεύθυνση {{emailAddress}} έχει αφαιρεθεί από τον λογαριασμό σας.',
      },
    },
    phoneNumberPage: {
      title: 'Προσθήκη αριθμού τηλεφώνου',
      successMessage: 'Ο αριθμός τηλεφώνου {{identifier}} έχει προστεθεί στον λογαριασμό σας.',
      infoText: 'Θα σταλεί ένα μήνυμα κειμένου που περιέχει ένα σύνδεσμο επαλήθευσης σε αυτόν τον αριθμό τηλεφώνου.',
      infoText__secondary: 'Μπορεί να ισχύουν χρεώσεις για μηνύματα και δεδομένα.',
      removeResource: {
        title: 'Αφαίρεση αριθμού τηλεφώνου',
        messageLine1: 'Ο αριθμός {{identifier}} θα αφαιρεθεί από αυτόν τον λογαριασμό.',
        messageLine2: 'Δεν θα μπορείτε πλέον να συνδεθείτε χρησιμοποιώντας αυτόν τον αριθμό τηλεφώνου.',
        successMessage: 'Ο αριθμός τηλεφώνου {{phoneNumber}} έχει αφαιρεθεί από τον λογαριασμό σας.',
      },
    },
    connectedAccountPage: {
      title: 'Προσθήκη συνδεδεμένου λογαριασμού',
      formHint: 'Επιλέξτε έναν πάροχο για να συνδέσετε τον λογαριασμό σας.',
      formHint__noAccounts: 'Δεν υπάρχουν διαθέσιμοι πάροχοι εξωτερικών λογαριασμών.',
      socialButtonsBlockButton: 'Σύνδεση με τον λογαριασμό {{provider|titleize}}',
      successMessage: 'Ο πάροχος έχει προστεθεί στον λογαριασμό σας',
      removeResource: {
        title: 'Αφαίρεση συνδεδεμένου λογαριασμού',
        messageLine1: 'Ο {{identifier}} θα αφαιρεθεί από αυτόν τον λογαριασμό.',
        messageLine2:
          'Δεν θα μπορείτε πλέον να χρησιμοποιήσετε αυτόν τον συνδεδεμένο λογαριασμό και οποιεσδήποτε εξαρτημένες λειτουργίες δεν θα λειτουργούν πλέον.',
        successMessage: 'Ο {{connectedAccount}} έχει αφαιρεθεί από τον λογαριασμό σας.',
      },
    },
    web3WalletPage: {
      title: 'Προσθήκη web3 πορτοφολιού',
      subtitle__availableWallets: 'Επιλέξτε ένα web3 πορτοφόλι για να το συνδέσετε στον λογαριασμό σας.',
      subtitle__unavailableWallets: 'Δεν υπάρχουν διαθέσιμα web3 πορτοφόλια.',
      successMessage: 'Το πορτοφόλι έχει προστεθεί στον λογαριασμό σας.',
      removeResource: {
        title: 'Αφαίρεση web3 πορτοφολιού',
        messageLine1: 'Το {{identifier}} θα αφαιρεθεί από αυτόν τον λογαριασμό.',
        messageLine2: 'Δεν θα μπορείτε πλέον να συνδεθείτε χρησιμοποιώντας αυτό το web3 πορτοφόλι.',
        successMessage: 'Το {{web3Wallet}} έχει αφαιρεθεί από τον λογαριασμό σας.',
      },
    },
    passwordPage: {
      title: 'Ορισμός κωδικού πρόσβασης',
      changePasswordTitle: 'Αλλαγή κωδικού πρόσβασης',
      readonly:
        'Ο κωδικός πρόσβασής σας δεν μπορεί να επεξεργαστεί αυτήν τη στιγμή επειδή μπορείτε να συνδεθείτε μόνο μέσω της σύνδεσης με την επιχείρηση.',
      successMessage: 'Ο κωδικός πρόσβασής σας έχει οριστεί.',
      changePasswordSuccessMessage: 'Ο κωδικός πρόσβασής σας έχει ενημερωθεί.',
      sessionsSignedOutSuccessMessage: 'Όλες οι άλλες συνεδρίες έχουν αποσυνδεθεί.',
    },
    mfaPage: {
      title: 'Προσθήκη διπλής επαλήθευσης',
      formHint: 'Επιλέξτε μια μέθοδο για προσθήκη.',
    },
    mfaTOTPPage: {
      title: 'Προσθήκη εφαρμογής αυθεντικοποίησης',
      verifyTitle: 'Κωδικός επαλήθευσης',
      verifySubtitle: 'Εισαγάγετε τον κωδικό επαλήθευσης που δημιουργήθηκε από την εφαρμογή αυθεντικοποίησης',
      successMessage:
        'Η διπλή επαλήθευση είναι πλέον ενεργοποιημένη. Κατά τη σύνδεση, θα πρέπει να εισαγάγετε έναν κωδικό επαλήθευσης από αυτήν την εφαρμογή αυθεντικοποίησης ως επιπλέον βήμα.',
      authenticatorApp: {
        infoText__ableToScan:
          'Ρυθμίστε μια νέα μέθοδο σύνδεσης στην εφαρμογή αυθεντικοποίησης σας και σαρώστε τον παρακάτω QR κωδικό για να τον συνδέσετε με τον λογαριασμό σας.',
        infoText__unableToScan:
          'Ρυθμίστε μια νέα μέθοδο σύνδεσης στην αυθεντικοποίηση και εισαγάγετε τον κλειδί που παρέχεται παρακάτω.',
        inputLabel__unableToScan1:
          'Βεβαιωθείτε ότι οι κωδικοί που βασίζονται στον χρόνο ή μίας χρήσης είναι ενεργοποιημένοι και ολοκληρώστε τη σύνδεση του λογαριασμού σας.',
        inputLabel__unableToScan2:
          'Εναλλακτικά, εάν η εφαρμογή αυθεντικοποίησής σας υποστηρίζει TOTP URIs, μπορείτε επίσης να αντιγράψετε τον πλήρη URI.',
        buttonAbleToScan__nonPrimary: 'Σάρωση QR κωδικού αντί αυτού',
        buttonUnableToScan__nonPrimary: 'Δεν μπορείτε να σαρώσετε τον QR κωδικό;',
      },
      removeResource: {
        title: 'Αφαίρεση διπλής επαλήθευσης',
        messageLine1:
          'Δεν θα απαιτούνται πλέον κωδικοί επαλήθευσης από αυτήν την εφαρμογή αυθεντικοποίησης κατά τη σύνδεση.',
        messageLine2: 'Ο λογαριασμός σας ενδέχεται να μην είναι τόσο ασφαλής. Είστε σίγουροι ότι θέλετε να συνεχίσετε;',
        successMessage: 'Η διπλή επαλήθευση μέσω εφαρμογής αυθεντικοποίησης έχει αφαιρεθεί.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Προσθήκη επαλήθευσης κωδικού SMS',
      primaryButton__addPhoneNumber: 'Προσθήκη αριθμού τηλεφώνου',
      subtitle__availablePhoneNumbers:
        'Επιλέξτε έναν αριθμό τηλεφώνου για να εγγραφείτε για τη διπλή επαλήθευση με κωδικούς SMS.',
      subtitle__unavailablePhoneNumbers:
        'Δεν υπάρχουν διαθέσιμοι αριθμοί τηλεφώνου για εγγραφή στην διπλή επαλήθευση με κωδικούς SMS.',
      successMessage:
        'Η διπλή επαλήθευση με κωδικούς SMS είναι τώρα ενεργοποιημένη για αυτόν τον αριθμό τηλεφώνου. Κατά τη σύνδεση, θα πρέπει να εισαγάγετε έναν κωδικό επαλήθευσης που θα σταλεί σε αυτόν τον αριθμό τηλεφώνου ως επιπλέον βήμα.',
      removeResource: {
        title: 'Αφαίρεση διπλής επαλήθευσης',
        messageLine1: 'Ο {{identifier}} δεν θα λαμβάνει πλέον κωδικούς επαλήθευσης κατά τη σύνδεση.',
        messageLine2: 'Ο λογαριασμός σας ενδέχεται να μην είναι τόσο ασφαλής. Είστε σίγουροι ότι θέλετε να συνεχίσετε;',
        successMessage: 'Η διπλή επαλήθευση με κωδικούς SMS έχει αφαιρεθεί για τον αριθμό τηλεφώνου {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Προσθήκη επαλήθευσης με εφεδρικούς κωδικούς',
      title__codelist: 'Εφεδρικοί κωδικοί',
      subtitle__codelist: 'Φυλάξτε τους με ασφάλεια και κρατήστε τους μυστικούς.',
      infoText1: 'Οι εφεδρικοί κωδικοί θα είναι ενεργοποιημένοι για αυτόν τον λογαριασμό.',
      infoText2:
        'Φυλάξτε τους εφεδρικούς κωδικούς μυστικούς και αποθηκεύστε τους με ασφάλεια. Μπορείτε να δημιουργήσετε νέους εφεδρικούς κωδικούς εάν υποψιάζεστε ότι έχουν διαρρεύσει.',
      successSubtitle:
        'Μπορείτε να χρησιμοποιήσετε έναν από αυτούς για να συνδεθείτε στον λογαριασμό σας, εάν χάσετε την πρόσβαση στη συσκευή επαλήθευσής σας.',
      successMessage:
        'Οι εφεδρικοί κωδικοί είναι πλέον ενεργοποιημένοι. Μπορείτε να χρησιμοποιήσετε έναν από αυτούς για να συνδεθείτε στον λογαριασμό σας, εάν χάσετε την πρόσβαση στη συσκευή επαλήθευσής σας. Κάθε κωδικός μπορεί να χρησιμοποιηθεί μόνο μία φορά.',
      actionLabel__copy: 'Αντιγραφή όλων',
      actionLabel__copied: 'Αντιγράφηκαν!',
      actionLabel__download: 'Λήψη .txt',
      actionLabel__print: 'Εκτύπωση',
    },
    deletePage: {
      title: 'Διαγραφή λογαριασμού',
      messageLine1: 'Είστε βέβαιος ότι θέλετε να διαγράψετε τον λογαριασμό σας;',
      messageLine2: 'Αυτή η ενέργεια είναι μόνιμη και μη αναστρέψιμη.',
      actionDescription: 'Πληκτρολογήστε "Διαγραφή λογαριασμού" παρακάτω για να συνεχίσετε.',
      confirm: 'Διαγραφή λογαριασμού',
    },
  },
  userButton: {
    action__manageAccount: 'Διαχείριση λογαριασμού',
    action__signOut: 'Αποσύνδεση',
    action__signOutAll: 'Αποσύνδεση από όλους τους λογαριασμούς',
    action__addAccount: 'Προσθήκη λογαριασμού',
  },
  organizationSwitcher: {
    personalWorkspace: 'Προσωπικός Χώρος Εργασίας',
    notSelected: 'Δεν έχει επιλεγεί οργανισμός',
    action__createOrganization: 'Δημιουργία Οργανισμού',
    action__manageOrganization: 'Διαχείριση Οργανισμού',
  },
  impersonationFab: {
    title: 'Είστε συνδεδεμένος ως {{identifier}}',
    action__signOut: 'Αποσύνδεση',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Μέλη',
      headerTitle__settings: 'Ρυθμίσεις',
    },
    profilePage: {
      title: 'Προφίλ Οργανισμού',
      subtitle: 'Διαχείριση προφίλ οργανισμού',
      successMessage: 'Ο οργανισμός έχει ενημερωθεί.',
      dangerSection: {
        title: 'Κίνδυνος',
        leaveOrganization: {
          title: 'Αποχώρηση από τον οργανισμό',
          messageLine1:
            'Είστε σίγουρος ότι θέλετε να αποχωρήσετε από αυτόν τον οργανισμό; Θα χάσετε την πρόσβαση σε αυτόν τον οργανισμό και τις εφαρμογές του.',
          messageLine2: 'Αυτή η ενέργεια είναι μόνιμη και και μη αναστρέψιμη.',
          successMessage: 'Έχετε αποχωρήσει από τον οργανισμό.',
          actionDescription: 'Πληκτρολογήστε το {{organizationName}} παρακάτω για να συνεχίσετε.',
        },
        deleteOrganization: {
          title: 'Διαγραφή οργανισμού',
          messageLine1: 'Είστε σίγουρος ότι θέλετε να διαγράψετε αυτόν τον οργανισμό;',
          messageLine2: 'Αυτή η ενέργεια είναι μόνιμη και και μη αναστρέψιμη.',
          actionDescription: 'Πληκτρολογήστε το {{organizationName}} παρακάτω για να συνεχίσετε.',
          successMessage: 'Έχετε διαγράψει τον οργανισμό.',
        },
      },
    },
    invitePage: {
      title: 'Πρόσκληση μελών',
      subtitle: 'Προσκαλέστε νέα μέλη σε αυτόν τον οργανισμό',
      successMessage: 'Οι προσκλήσεις εστάλησαν με επιτυχία',
      detailsTitle__inviteFailed:
        'Οι προσκλήσεις δεν μπορούσαν να σταλούν. Διορθώστε τα παρακάτω στοιχεία και δοκιμάστε ξανά:',
      formButtonPrimary__continue: 'Αποστολή προσκλήσεων',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Δεν υπάρχουν μέλη για εμφάνιση',
      action__invite: 'Πρόσκληση',
      start: {},
      activeMembersTab: {
        tableHeader__user: 'Χρήστης',
        tableHeader__joined: 'Εγγραφήκατε',
        tableHeader__role: 'Ρόλος',
        tableHeader__actions: '',
        menuAction__remove: 'Αφαίρεση μέλους',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Προσκεκλημένο',
        menuAction__revoke: 'Ανάκληση πρόσκλησης',
      },
    },
  },
  createOrganization: {
    title: 'Δημιουργία Οργανισμού',
    formButtonSubmit: 'Δημιουργία οργανισμού',
    invitePage: {
      formButtonReset: 'Παράλειψη',
    },
  },
  unstable__errors: {
    identification_deletion_failed: 'Δεν μπορείτε να διαγράψετε το τελευταίο στοιχείο ταυτοποιησής σας.',
    phone_number_exists: 'Αυτός ο αριθμός τηλεφώνου χρησιμοποιείται ήδη. Δοκιμάστε έναν άλλο.',
    form_identifier_not_found: '',
    captcha_invalid:
      'Η εγγραφή απέτυχε λόγω αποτυχημένων ελέγχων ασφαλείας. Ανανεώστε τη σελίδα για να δοκιμάσετε ξανά ή επικοινωνήστε με το κέντρο υποστήριξης για περισσότερη βοήθεια.',
    form_password_pwned:
      'Αυτός ο κωδικός πρόσβασης έχει διαρρεύσει online στο παρελθόν και δεν μπορεί να χρησιμοποιηθεί. Δοκιμάστε έναν άλλο κωδικό πρόσβασης αντί για αυτόν.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Η διεύθυνση email πρέπει να είναι μια έγκυρη διεύθυνση email.',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Λανθασμένος κωδικός',
    form_password_not_strong_enough: 'Ο κωδικός πρόσβασής σας δεν είναι αρκετά ισχυρός.',
    form_password_size_in_bytes_exceeded:
      'Ο κωδικός πρόσβασής σας έχει υπερβεί το μέγιστο αριθμό bytes που επιτρέπεται. Παρακαλούμε, συντομεύστε τον ή αφαιρέστε μερικούς ειδικούς χαρακτήρες.',
    passwordComplexity: {
      sentencePrefix: 'Ο κωδικός πρόσβασής σας πρέπει να περιέχει',
      minimumLength: '{{length}} ή περισσότερους χαρακτήρες',
      maximumLength: 'λιγότερους από {{length}} χαρακτήρες',
      requireNumbers: 'έναν αριθμό',
      requireLowercase: 'ένα πεζό γράμμα',
      requireUppercase: 'ένα κεφαλαίο γράμμα',
      requireSpecialCharacter: 'ένα ειδικό χαρακτήρα',
    },
    zxcvbn: {
      notEnough: 'Ο κωδικός πρόσβασής σας δεν είναι αρκετά ισχυρός.',
      couldBeStronger:
        'Ο κωδικός πρόσβασής σας είναι αρκετός, αλλά θα μπορούσε να είναι πιο ισχυρός. Δοκιμάστε να προσθέσετε περισσότερους χαρακτήρες.',
      goodPassword: 'Ο κωδικός πρόσβασής σας πληροί όλες τις απαιτούμενες προδιαγραφές.',
      warnings: {
        straightRow: 'Σειρές γραμμάτων στο πληκτρολόγιο είναι εύκολα να μαντευτούν.',
        keyPattern: 'Σύντομα μοτίβα πληκτρολογίου είναι εύκολα να μαντευτούν.',
        simpleRepeat: 'Επαναλαμβανόμενοι χαρακτήρες όπως "aaa" είναι εύκολο να μαντευτούν.',
        extendedRepeat: 'Επαναλαμβανόμενα μοτίβα χαρακτήρων όπως "abcabcabc" είναι εύκολα να μαντευτούν.',
        sequences: 'Συνηθισμένες ακολουθίες χαρακτήρων όπως "abc" είναι εύκολα να μαντευτούν.',
        recentYears: 'Πρόσφατα έτη είναι εύκολα να μαντευτούν.',
        dates: 'Ημερομηνίες είναι εύκολες να μαντευτούν.',
        topTen: 'Αυτός είναι ένας πολύ διαδεδομένος κωδικός πρόσβασης.',
        topHundred: 'Αυτός είναι ένας συχνά χρησιμοποιούμενος κωδικός πρόσβασης.',
        common: 'Αυτός είναι ένας κοινός κωδικός πρόσβασης.',
        similarToCommon: 'Αυτός είναι παρόμοιος με έναν κοινό κωδικό πρόσβασης.',
        wordByItself: 'Οι μεμονωμένες λέξεις είναι εύκολες να μαντευτούν.',
        namesByThemselves: 'Μεμονωμένα ονόματα ή επώνυμα είναι εύκολα να μαντευτούν.',
        commonNames: 'Συνηθισμένα ονόματα και επώνυμα είναι εύκολα να μαντευτούν.',
        userInputs: 'Δεν πρέπει να υπάρχουν προσωπικά ή σχετικά με τη σελίδα δεδομένα.',
        pwned: 'Ο κωδικός πρόσβασής σας αποκαλύφθηκε από παραβίαση δεδομένων στο διαδίκτυο.',
      },
      suggestions: {
        l33t: "Αποφύγετε προβλέψιμες αντικαταστάσεις γραμμάτων όπως '@' για 'a'.",
        reverseWords: 'Αποφύγετε αντιστροφές συνηθισμένων λέξεων.',
        allUppercase: 'Έχετε μόνο μερικά κεφαλαία γράμματα.',
        capitalization: 'Μην έχετε κεφαλαίο μόνο το πρώτο γράμμα.',
        dates: 'Αποφύγετε ημερομηνίες και έτη που σας αφορούν.',
        recentYears: 'Αποφύγετε πρόσφατα έτη.',
        associatedYears: 'Αποφύγετε έτη που σας αφορούν.',
        sequences: 'Αποφύγετε κοινές ακολουθίες χαρακτήρων.',
        repeated: 'Αποφύγετε επαναλαμβανόμενες λέξεις και χαρακτήρες.',
        longerKeyboardPattern:
          'Χρησιμοποιήστε μεγαλύτερα μοτίβα πληκτρολογίου και αλλάξτε πολλές φορές την κατεύθυνση πληκτρολόγησης.',
        anotherWord: 'Προσθέστε περισσότερες λέξεις που είναι λιγότερο συνηθισμένες.',
        useWords: 'Χρησιμοποιήστε πολλές λέξεις, αλλά αποφύγετε κοινές φράσεις.',
        noNeed:
          'Μπορείτε να δημιουργήσετε ισχυρούς κωδικούς πρόσβασης χωρίς τη χρήση συμβόλων, αριθμών ή κεφαλαίων γραμμάτων.',
        pwned: 'Αν χρησιμοποιείτε αυτόν τον κωδικό πρόσβασης και αλλού, θα πρέπει να τον αλλάξετε.',
      },
    },
  },
  dates: {
    previous6Days: "Τελευταία {{ date | weekday('el','long') }} στις {{ date | timeString('el') }}",
    lastDay: "Χθες στις {{ date | timeString('el') }}",
    sameDay: "Σήμερα στις {{ date | timeString('el') }}",
    nextDay: "Αύριο στις {{ date | timeString('el') }}",
    next6Days: "{{ date | weekday('el','long') }} στις {{ date | timeString('el') }}",
    numeric: "{{ date | numeric('el') }}",
  },
} as const;
